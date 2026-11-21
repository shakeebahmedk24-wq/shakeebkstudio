import express from "express";
import fs from "fs";
import path from "path";
import { createServer as createViteServer } from "vite";

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // Enable CORS for assets so iframes and preview environments can load images cleanly
  app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
    next();
  });

  // Static Assets - Serve public assets (images, fonts, downloads)
  const publicPath = path.join(process.cwd(), "public");
  app.use(express.static(publicPath, { maxAge: 0 }));
  app.use("/public", express.static(publicPath, { maxAge: 0 }));

  // API Routes
  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", timestamp: new Date().toISOString() });
  });

  // Explicit CV PDF download endpoint with attachment disposition
  app.get("/api/cv", (_req, res) => {
    const candidates = [
      path.join(process.cwd(), "public", "Shakeeb-Ahmed-Khan-CV.pdf"),
      path.join(process.cwd(), "Shakeeb-Ahmed-Khan-CV.pdf"),
      path.join(process.cwd(), "dist", "Shakeeb-Ahmed-Khan-CV.pdf"),
    ];
    const cvPath = candidates.find((p) => {
      try {
        return fs.statSync(p).size > 1000;
      } catch {
        return false;
      }
    });
    if (!cvPath) {
      return res.status(404).json({ error: "CV PDF file not found" });
    }
    res.setHeader("Content-Type", "application/pdf");
    res.setHeader("Content-Disposition", 'attachment; filename="Shakeeb-Ahmed-Khan-CV.pdf"');
    res.setHeader("Cache-Control", "no-store");
    return res.sendFile(cvPath);
  });

  // Contact / Project Inquiry API
  app.post("/api/inquiry", (req, res) => {
    try {
      const { name, email, service, budget, message } = req.body;
      console.log("Received inquiry from:", name, email, service, budget);
      res.json({
        success: true,
        message: "Thank you! Your project brief has been received. Shakeeb will get in touch within 24 hours.",
      });
    } catch (error) {
      res.status(500).json({ success: false, error: "Failed to process inquiry" });
    }
  });

  // Live Website Health Checker API (Real HTTP + HTML + SEO + Security inspection)
  app.post("/api/health-check", async (req, res) => {
    try {
      const rawInput = typeof req.body?.url === "string" ? req.body.url.trim() : "";
      if (!rawInput) {
        return res.status(400).json({ error: "Please enter a website URL to audit." });
      }

      const normalized = /^https?:\/\//i.test(rawInput) ? rawInput : `https://${rawInput}`;
      let parsedUrl: URL;
      try {
        parsedUrl = new URL(normalized);
      } catch {
        return res.status(400).json({ error: "Invalid URL format. Example: https://yourbrand.com" });
      }

      if (parsedUrl.protocol !== "http:" && parsedUrl.protocol !== "https:") {
        return res.status(400).json({ error: "Only HTTP and HTTPS websites can be checked." });
      }

      const host = parsedUrl.hostname.toLowerCase();
      const isBlockedHost =
        host === "localhost" ||
        host === "0.0.0.0" ||
        host === "127.0.0.1" ||
        host === "::1" ||
        host.endsWith(".local") ||
        host.endsWith(".internal") ||
        /^10\./.test(host) ||
        /^192\.168\./.test(host) ||
        /^169\.254\./.test(host) ||
        /^172\.(1[6-9]|2\d|3[0-1])\./.test(host);

      if (isBlockedHost || !host.includes(".")) {
        return res.status(400).json({ error: "Please enter a valid public domain name (e.g., example.com)." });
      }

      const startTime = Date.now();
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 11000);

      let response: globalThis.Response;
      try {
        response = await fetch(parsedUrl.toString(), {
          method: "GET",
          redirect: "follow",
          signal: controller.signal,
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; ShakeebHealthAudit/1.0)",
            "Accept": "text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8",
            "Accept-Language": "en-US,en;q=0.9",
          },
        });
      } finally {
        clearTimeout(timeout);
      }

      const ttfbMs = Date.now() - startTime;
      const rawHtml = await response.text();
      const totalMs = Date.now() - startTime;
      const html = rawHtml.slice(0, 1_500_000);
      const htmlSizeKb = Number((Buffer.byteLength(rawHtml, "utf8") / 1024).toFixed(1));
      const finalUrl = response.url || parsedUrl.toString();
      const isHttps = finalUrl.startsWith("https://");

      // Header inspection
      const contentEncoding = response.headers.get("content-encoding") || "";
      const hasCompression = /gzip|br|deflate|zstd/i.test(contentEncoding) || response.headers.has("cf-ray") || response.headers.has("x-vercel-id");
      const cacheControl = response.headers.get("cache-control") || "";
      const hasCaching = cacheControl.length > 0 && !/no-store/i.test(cacheControl);
      const hasHsts = response.headers.has("strict-transport-security");
      const hasSecurityFrame = response.headers.has("x-frame-options") || response.headers.has("content-security-policy");
      const hasXContentType = response.headers.has("x-content-type-options");

      // HTML parsing
      const titleMatch = html.match(/<title[^>]*>([\s\S]*?)<\/title>/i);
      const titleText = titleMatch ? titleMatch[1].replace(/\s+/g, " ").trim() : "";

      const metaTags = html.match(/<meta\b[^>]*>/gi) || [];
      const getMetaContent = (attrName: string, attrVal: string) => {
        for (const tag of metaTags) {
          const hasAttr = new RegExp(`${attrName}=["']${attrVal}["']`, "i").test(tag);
          if (hasAttr) {
            const cMatch = tag.match(/content=["']([^"']*)["']/i);
            if (cMatch) return cMatch[1].trim();
          }
        }
        return "";
      };

      const metaDescription = getMetaContent("name", "description");
      const viewportMeta = getMetaContent("name", "viewport");
      const ogTitle = getMetaContent("property", "og:title");
      const ogImage = getMetaContent("property", "og:image");
      const hasCanonical = /<link\b[^>]*rel=["']canonical["'][^>]*>/i.test(html);

      const h1Matches = html.match(/<h1\b[^>]*>[\s\S]*?<\/h1>/gi) || [];
      const h1Count = h1Matches.length;

      const imgTags = html.match(/<img\b[^>]*>/gi) || [];
      const totalImages = imgTags.length;
      const missingAltCount = imgTags.filter((tag) => {
        const altMatch = tag.match(/\balt=["']([^"']*)["']/i);
        return !altMatch || altMatch[1].trim().length === 0;
      }).length;
      const lazyImagesCount = imgTags.filter((tag) => /loading=["']lazy["']/i.test(tag)).length;

      const headMatch = html.match(/<head\b[^>]*>([\s\S]*?)<\/head>/i);
      const headHtml = headMatch ? headMatch[1] : "";
      const headScripts = headHtml.match(/<script\b[^>]*src=["'][^"']+["'][^>]*>/gi) || [];
      const blockingScripts = headScripts.filter(
        (s) => !/\bdefer\b|\basync\b|type=["']module["']/i.test(s)
      ).length;
      const stylesheetCount = (headHtml.match(/<link\b[^>]*rel=["']stylesheet["'][^>]*>/gi) || []).length;

      type CheckStatus = "pass" | "warn" | "fail";
      interface AuditCheck {
        id: string;
        category: "Performance" | "SEO" | "Mobile & UX" | "Security";
        label: string;
        status: CheckStatus;
        detail: string;
        recommendation?: string;
      }

      const checks: AuditCheck[] = [];

      // 1. Performance checks
      let perfScore = 100;
      if (ttfbMs <= 450) {
        checks.push({
          id: "ttfb",
          category: "Performance",
          label: "Server Response (TTFB)",
          status: "pass",
          detail: `${ttfbMs}ms — fast first-byte delivery`,
        });
      } else if (ttfbMs <= 950) {
        perfScore -= 14;
        checks.push({
          id: "ttfb",
          category: "Performance",
          label: "Server Response (TTFB)",
          status: "warn",
          detail: `${ttfbMs}ms — noticeable initial wait`,
          recommendation: "Add full-page edge caching or optimize database queries to get TTFB under 350ms.",
        });
      } else {
        perfScore -= 28;
        checks.push({
          id: "ttfb",
          category: "Performance",
          label: "Server Response (TTFB)",
          status: "fail",
          detail: `${ttfbMs}ms — slow origin response hurting conversions`,
          recommendation: "Implement CDN edge caching, PHP/object caching, or migrate off congested shared hosting.",
        });
      }

      if (htmlSizeKb <= 140) {
        checks.push({
          id: "html-weight",
          category: "Performance",
          label: "HTML Document Weight",
          status: "pass",
          detail: `${htmlSizeKb} KB — lean markup footprint`,
        });
      } else if (htmlSizeKb <= 300) {
        perfScore -= 10;
        checks.push({
          id: "html-weight",
          category: "Performance",
          label: "HTML Document Weight",
          status: "warn",
          detail: `${htmlSizeKb} KB — moderately heavy DOM`,
          recommendation: "Trim nested page-builder wrappers and inline SVGs/CSS bloat from the HTML payload.",
        });
      } else {
        perfScore -= 22;
        checks.push({
          id: "html-weight",
          category: "Performance",
          label: "HTML Document Weight",
          status: "fail",
          detail: `${htmlSizeKb} KB — bloated HTML DOM delays First Paint`,
          recommendation: "Refactor bloated builder output or inline scripts to cut HTML size below 120 KB.",
        });
      }

      if (blockingScripts === 0) {
        checks.push({
          id: "blocking-scripts",
          category: "Performance",
          label: "Render-Blocking Scripts",
          status: "pass",
          detail: "0 blocking scripts found in <head>",
        });
      } else if (blockingScripts <= 3) {
        perfScore -= 12;
        checks.push({
          id: "blocking-scripts",
          category: "Performance",
          label: "Render-Blocking Scripts",
          status: "warn",
          detail: `${blockingScripts} synchronous script(s) in <head>`,
          recommendation: "Add defer or async attributes so scripts don't block first contentful paint.",
        });
      } else {
        perfScore -= 24;
        checks.push({
          id: "blocking-scripts",
          category: "Performance",
          label: "Render-Blocking Scripts",
          status: "fail",
          detail: `${blockingScripts} blocking scripts stalling initial paint`,
          recommendation: "Defer non-critical JS, strip unused plugin bundles, and delay third-party trackers.",
        });
      }

      if (hasCompression && hasCaching) {
        checks.push({
          id: "compression-cache",
          category: "Performance",
          label: "Compression & Cache Policy",
          status: "pass",
          detail: "Edge/gzip compression & cache headers active",
        });
      } else {
        perfScore -= 10;
        checks.push({
          id: "compression-cache",
          category: "Performance",
          label: "Compression & Cache Policy",
          status: "warn",
          detail: !hasCompression ? "Compression header not detected" : "Weak or missing Cache-Control header",
          recommendation: "Enable Brotli/Gzip compression and explicit Cache-Control directives at your edge CDN.",
        });
      }

      if (stylesheetCount > 8) {
        perfScore -= 8;
        checks.push({
          id: "stylesheets",
          category: "Performance",
          label: "External Stylesheets",
          status: "warn",
          detail: `${stylesheetCount} separate CSS files in <head>`,
          recommendation: "Inline critical CSS and combine/remove unused theme/plugin stylesheets.",
        });
      }

      // 2. SEO checks
      let seoScore = 100;
      if (titleText.length >= 15 && titleText.length <= 70) {
        checks.push({
          id: "title",
          category: "SEO",
          label: "Page Title Tag",
          status: "pass",
          detail: `${titleText.length} chars — "${titleText.slice(0, 52)}${titleText.length > 52 ? "…" : ""}"`,
        });
      } else if (titleText.length > 0) {
        seoScore -= 12;
        checks.push({
          id: "title",
          category: "SEO",
          label: "Page Title Tag",
          status: "warn",
          detail: `${titleText.length} chars (ideal: 25–65 chars)`,
          recommendation: "Tighten your page title around primary buyer keywords within 60 characters.",
        });
      } else {
        seoScore -= 28;
        checks.push({
          id: "title",
          category: "SEO",
          label: "Page Title Tag",
          status: "fail",
          detail: "Missing <title> tag",
          recommendation: "Add a unique, keyword-clear <title> tag immediately for search visibility.",
        });
      }

      if (metaDescription.length >= 60 && metaDescription.length <= 170) {
        checks.push({
          id: "meta-desc",
          category: "SEO",
          label: "Meta Description",
          status: "pass",
          detail: `${metaDescription.length} chars — well-sized search snippet`,
        });
      } else if (metaDescription.length > 0) {
        seoScore -= 10;
        checks.push({
          id: "meta-desc",
          category: "SEO",
          label: "Meta Description",
          status: "warn",
          detail: `${metaDescription.length} chars (recommended 110–160 chars)`,
          recommendation: "Refine meta description copy with a clear value proposition and call to action.",
        });
      } else {
        seoScore -= 22;
        checks.push({
          id: "meta-desc",
          category: "SEO",
          label: "Meta Description",
          status: "fail",
          detail: "Missing meta description",
          recommendation: "Write a compelling 135–155 character meta description to lift organic click-through rate.",
        });
      }

      if (h1Count === 1) {
        checks.push({
          id: "h1",
          category: "SEO",
          label: "Primary Heading (H1)",
          status: "pass",
          detail: "Single clear <h1> tag present",
        });
      } else {
        seoScore -= h1Count === 0 ? 18 : 8;
        checks.push({
          id: "h1",
          category: "SEO",
          label: "Primary Heading (H1)",
          status: h1Count === 0 ? "fail" : "warn",
          detail: h1Count === 0 ? "No <h1> heading detected" : `${h1Count} <h1> headings found (ideal is 1)`,
          recommendation: "Keep a single semantic <h1> headline at the top of the page describing what you offer.",
        });
      }

      if (hasCanonical && ogTitle) {
        checks.push({
          id: "canonical-og",
          category: "SEO",
          label: "Canonical & Social Share Tags",
          status: "pass",
          detail: "Canonical URL and OpenGraph tags configured",
        });
      } else {
        seoScore -= 14;
        checks.push({
          id: "canonical-og",
          category: "SEO",
          label: "Canonical & Social Share Tags",
          status: "warn",
          detail: !hasCanonical ? "Missing canonical link tag" : "Incomplete OpenGraph preview tags",
          recommendation: "Configure canonical URLs and og:title / og:image so shared links render crisp previews.",
        });
      }

      if (totalImages > 0 && missingAltCount === 0) {
        checks.push({
          id: "img-alt",
          category: "SEO",
          label: "Image Alt Accessibility",
          status: "pass",
          detail: `All ${totalImages} images include descriptive alt text`,
        });
      } else if (totalImages > 0) {
        const ratio = missingAltCount / totalImages;
        seoScore -= ratio > 0.4 ? 16 : 8;
        checks.push({
          id: "img-alt",
          category: "SEO",
          label: "Image Alt Accessibility",
          status: ratio > 0.4 ? "fail" : "warn",
          detail: `${missingAltCount} of ${totalImages} images missing alt attributes`,
          recommendation: "Add descriptive alt attributes for ADA/WCAG accessibility and image search ranking.",
        });
      }

      // 3. Mobile & UX checks
      let mobileScore = 100;
      if (/width=device-width/i.test(viewportMeta)) {
        checks.push({
          id: "viewport",
          category: "Mobile & UX",
          label: "Mobile Viewport Meta",
          status: "pass",
          detail: "Responsive device-width viewport configured",
        });
      } else {
        mobileScore -= 38;
        checks.push({
          id: "viewport",
          category: "Mobile & UX",
          label: "Mobile Viewport Meta",
          status: "fail",
          detail: "Missing width=device-width viewport tag",
          recommendation: "Add <meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" /> for proper mobile scaling.",
        });
      }

      if (totalImages > 4) {
        if (lazyImagesCount >= Math.floor(totalImages / 3)) {
          checks.push({
            id: "lazy-media",
            category: "Mobile & UX",
            label: "Offscreen Image Lazy-Loading",
            status: "pass",
            detail: `${lazyImagesCount} of ${totalImages} images use native lazy-loading`,
          });
        } else {
          mobileScore -= 18;
          checks.push({
            id: "lazy-media",
            category: "Mobile & UX",
            label: "Offscreen Image Lazy-Loading",
            status: "warn",
            detail: `Only ${lazyImagesCount} of ${totalImages} images set loading="lazy"`,
            recommendation: "Defer below-the-fold images and serve WebP/AVIF formats to cut mobile data bloat.",
          });
        }
      }

      if (totalMs > 1600) {
        mobileScore -= 16;
      } else if (totalMs > 900) {
        mobileScore -= 8;
      }

      // 4. Security checks
      let securityScore = 100;
      if (isHttps) {
        checks.push({
          id: "https",
          category: "Security",
          label: "SSL / HTTPS Encryption",
          status: "pass",
          detail: "Encrypted HTTPS connection verified",
        });
      } else {
        securityScore -= 45;
        checks.push({
          id: "https",
          category: "Security",
          label: "SSL / HTTPS Encryption",
          status: "fail",
          detail: "Site resolved over insecure HTTP",
          recommendation: "Enforce HTTPS redirects with a valid SSL certificate immediately.",
        });
      }

      if (hasHsts && hasXContentType) {
        checks.push({
          id: "sec-headers",
          category: "Security",
          label: "Security Hardening Headers",
          status: "pass",
          detail: hasSecurityFrame ? "HSTS, Content-Type & Frame headers active" : "HSTS & X-Content-Type-Options active",
        });
      } else {
        securityScore -= hasHsts || hasSecurityFrame ? 14 : 26;
        checks.push({
          id: "sec-headers",
          category: "Security",
          label: "Security Hardening Headers",
          status: "warn",
          detail: "Missing HSTS or X-Content-Type-Options headers",
          recommendation: "Add Strict-Transport-Security, X-Content-Type-Options, and CSP headers at server/CDN level.",
        });
      }

      const clamp = (n: number) => Math.max(25, Math.min(100, Math.round(n)));
      const categories = {
        performance: clamp(perfScore),
        seo: clamp(seoScore),
        mobile: clamp(mobileScore),
        security: clamp(securityScore),
      };
      const overallScore = clamp(
        categories.performance * 0.35 +
          categories.seo * 0.25 +
          categories.mobile * 0.25 +
          categories.security * 0.15
      );

      return res.json({
        url: finalUrl,
        domain: new URL(finalUrl).hostname.replace(/^www\./, ""),
        status: response.status,
        ttfbMs,
        totalMs,
        htmlSizeKb,
        overallScore,
        categories,
        metrics: {
          title: titleText || null,
          metaDescriptionLength: metaDescription.length,
          h1Count,
          totalImages,
          missingAltCount,
          blockingScripts,
          stylesheetCount,
          isHttps,
          hasOgImage: Boolean(ogImage),
        },
        checks,
        checkedAt: new Date().toISOString(),
      });
    } catch (error: any) {
      const isTimeout = error?.name === "TimeoutError" || error?.name === "AbortError";
      return res.status(502).json({
        error: isTimeout
          ? "That website took longer than 11 seconds to respond — likely heavy uncached scripts or origin bottleneck."
          : "Could not reach that URL. Verify the domain is live and publicly accessible.",
      });
    }
  });

  // Vite Middleware in Development vs Static Serving in Production
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Shakeeb Khan Portfolio Server running on http://0.0.0.0:${PORT}`);
  });
}

startServer();
