import React, { useState } from "react";
import { motion } from "motion/react";
import {
  Activity,
  ArrowRight,
  CheckCircle2,
  AlertTriangle,
  XCircle,
  Globe,
  Gauge,
  Search,
  Smartphone,
  ShieldCheck,
  Loader2,
  Sparkles,
  ExternalLink
} from "lucide-react";

interface AuditCheck {
  id: string;
  category: "Performance" | "SEO" | "Mobile & UX" | "Security";
  label: string;
  status: "pass" | "warn" | "fail";
  detail: string;
  recommendation?: string;
}

interface HealthCheckResult {
  url: string;
  domain: string;
  status: number;
  ttfbMs: number;
  totalMs: number;
  htmlSizeKb: number;
  overallScore: number;
  categories: {
    performance: number;
    seo: number;
    mobile: number;
    security: number;
  };
  metrics: {
    title: string | null;
    metaDescriptionLength: number;
    h1Count: number;
    totalImages: number;
    missingAltCount: number;
    blockingScripts: number;
    stylesheetCount: number;
    isHttps: boolean;
    hasOgImage: boolean;
  };
  checks: AuditCheck[];
  checkedAt: string;
}

interface WebsiteHealthCheckerProps {
  onRequestFix?: (serviceTitle: string, prefillBrief: string) => void;
  standalonePage?: boolean;
}

const SAMPLE_SITES = [
  "henriettasaid.com",
  "broworks.net",
  "partakefoods.com",
  "watchguys.com",
];

function getScoreTone(score: number) {
  if (score >= 85) {
    return {
      text: "text-emerald-400",
      stroke: "#34d399",
      badgeBg: "bg-emerald-500/15 border-emerald-400/35 text-emerald-300",
      label: "Healthy & Fast",
    };
  }
  if (score >= 65) {
    return {
      text: "text-amber-300",
      stroke: "#fbbf24",
      badgeBg: "bg-amber-500/15 border-amber-400/35 text-amber-200",
      label: "Needs Optimization",
    };
  }
  return {
    text: "text-rose-400",
    stroke: "#fb7185",
    badgeBg: "bg-rose-500/15 border-rose-400/35 text-rose-200",
    label: "Critical Bottlenecks",
  };
}

export function WebsiteHealthChecker({
  onRequestFix,
  standalonePage = false,
}: WebsiteHealthCheckerProps) {
  const [urlInput, setUrlInput] = useState("henriettasaid.com");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [result, setResult] = useState<HealthCheckResult | null>(null);
  const [checkFilter, setCheckFilter] = useState<"all" | "issues" | "passed">("all");

  const runHealthCheck = async (targetUrl?: string) => {
    const queryUrl = (targetUrl ?? urlInput).trim();
    if (!queryUrl) {
      setErrorMsg("Enter any website URL (for example: yoursite.com)");
      return;
    }

    if (targetUrl) {
      setUrlInput(targetUrl);
    }

    setLoading(true);
    setErrorMsg(null);

    try {
      const response = await fetch("/api/health-check", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url: queryUrl }),
      });

      const data = await response.json();
      if (!response.ok) {
        setErrorMsg(data?.error || "Unable to inspect that website right now.");
        return;
      }

      setResult(data as HealthCheckResult);
      setCheckFilter("all");
    } catch {
      setErrorMsg("Network error while running the audit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    runHealthCheck();
  };

  const issuesList = result
    ? result.checks.filter((c) => c.status === "warn" || c.status === "fail")
    : [];
  const passedList = result ? result.checks.filter((c) => c.status === "pass") : [];

  const visibleChecks = !result
    ? []
    : checkFilter === "issues"
    ? issuesList
    : checkFilter === "passed"
    ? passedList
    : result.checks;

  const tone = getScoreTone(result?.overallScore ?? 0);
  const radius = 52;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = result
    ? circumference - (result.overallScore / 100) * circumference
    : circumference;

  const handleFixCta = () => {
    if (!onRequestFix || !result) return;
    const summaryIssues = issuesList
      .slice(0, 4)
      .map((i) => `• ${i.label}: ${i.detail}`)
      .join("\n");
    const brief = `Website Health Check for ${result.url}\nScore: ${result.overallScore}/100 (TTFB: ${result.ttfbMs}ms, HTML: ${result.htmlSizeKb} KB)\n${
      summaryIssues ? `\nFindings to fix:\n${summaryIssues}` : "\nLooking to push Core Web Vitals & SEO even higher."
    }`;
    onRequestFix("Website Speed & Health Audit", brief);
  };

  return (
    <section
      id="health-checker"
      className={`${
        standalonePage ? "py-10 sm:py-16" : "py-12 sm:py-24"
      } bg-[#0D071E] scroll-mt-20 overflow-x-clip`}
    >
      <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 text-left space-y-8 sm:space-y-10">
        {!standalonePage && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: "some" }}
            transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6"
          >
            <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
              <span className="font-hand text-lg sm:text-2xl font-bold px-3 sm:px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block -rotate-2 hover:rotate-1 transition-transform duration-200 shadow-sm cursor-default">
                free instant site audit
              </span>
              <h2 className="font-display text-[38px] sm:text-6xl lg:text-7xl font-black uppercase tracking-tight leading-[0.93] text-white text-balance">
                Website Health Checker
              </h2>
            </div>
            <p className="text-xs sm:text-base text-zinc-300 max-w-xl leading-relaxed">
              Paste any live website URL to run a real-time inspection of server response speed, render-blocking scripts, on-page SEO tags, mobile readiness, and HTTPS security headers.
            </p>
          </motion.div>
        )}

        {/* Interactive Checker Shell */}
        <div className="bg-[#120A21] border border-purple-700/45 rounded-3xl p-4 sm:p-8 lg:p-10 shadow-[0_24px_65px_rgba(7,3,14,0.55)] space-y-6 sm:space-y-8">
          {/* URL Form */}
          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <div className="relative flex-1">
                <Globe className="w-4 h-4 sm:w-5 sm:h-5 text-[#c084fc] absolute left-4 top-1/2 -translate-y-1/2 pointer-events-none" />
                <input
                  type="text"
                  value={urlInput}
                  onChange={(e) => setUrlInput(e.target.value)}
                  placeholder="Enter your website URL (e.g. yourcompany.com)"
                  aria-label="Website URL to check"
                  className="w-full pl-11 sm:pl-12 pr-4 py-3.5 sm:py-4 rounded-2xl sm:rounded-full bg-[#07030e] border border-purple-700/50 focus:border-[#a855f7] focus:outline-none text-sm sm:text-base text-white placeholder:text-zinc-500 font-medium"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="px-7 py-3.5 sm:py-4 rounded-2xl sm:rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] disabled:opacity-65 text-white text-xs sm:text-sm font-bold tracking-wide inline-flex items-center justify-center gap-2 transition-all cursor-pointer whitespace-nowrap shadow-[0_12px_30px_rgba(135,80,247,0.35)]"
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    <span>Scanning Live Site...</span>
                  </>
                ) : (
                  <>
                    <Activity className="w-4 h-4" />
                    <span>Run Health Check</span>
                  </>
                )}
              </button>
            </div>

            {/* Quick-Try Examples */}
            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="text-zinc-400 font-medium">Try live builds:</span>
              {SAMPLE_SITES.map((domain) => (
                <button
                  key={domain}
                  type="button"
                  disabled={loading}
                  onClick={() => runHealthCheck(domain)}
                  className="px-3 py-1 rounded-full bg-[#0D071E] hover:bg-purple-900/50 border border-purple-800/45 hover:border-purple-400/60 text-purple-200 hover:text-white font-mono text-[11px] transition-colors cursor-pointer"
                >
                  {domain}
                </button>
              ))}
            </div>
          </form>

          {/* Error State */}
          {errorMsg && (
            <div className="p-4 rounded-2xl bg-rose-500/10 border border-rose-500/35 text-rose-200 text-xs sm:text-sm flex items-start gap-2.5">
              <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Initial Empty Callout before First Scan */}
          {!result && !loading && !errorMsg && (
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 pt-1">
              {[
                {
                  icon: Gauge,
                  title: "Speed & TTFB",
                  desc: "Live first-byte latency, HTML bloat & blocking <head> scripts",
                },
                {
                  icon: Search,
                  title: "Technical SEO",
                  desc: "Title tags, meta descriptions, H1 structure & canonical checks",
                },
                {
                  icon: Smartphone,
                  title: "Mobile Readiness",
                  desc: "Viewport configuration & native lazy-loading media audit",
                },
                {
                  icon: ShieldCheck,
                  title: "SSL & Security",
                  desc: "HTTPS enforcement, HSTS & hardening response headers",
                },
              ].map((pillar) => {
                const IconComp = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="p-4 sm:p-5 rounded-2xl bg-[#0D071E] border border-purple-900/45 space-y-2"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#6d28d9]/25 border border-purple-500/30 text-[#c084fc] flex items-center justify-center">
                      <IconComp className="w-4 h-4" />
                    </div>
                    <h3 className="text-sm sm:text-base font-bold text-white">{pillar.title}</h3>
                    <p className="text-[11px] sm:text-xs text-zinc-400 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>
                );
              })}
            </div>
          )}

          {/* Real Scan Report */}
          {result && (
            <div className="space-y-6 sm:space-y-8 pt-2 border-t border-purple-800/40">
              {/* Top Report Summary Strip */}
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                {/* Gauge Score Ring */}
                <div className="lg:col-span-4 bg-[#0D071E] border border-purple-800/45 rounded-2xl p-5 sm:p-6 flex items-center gap-5">
                  <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                    <svg className="w-full h-full -rotate-90" viewBox="0 0 120 120">
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke="rgba(139, 92, 246, 0.18)"
                        strokeWidth="10"
                        fill="transparent"
                      />
                      <circle
                        cx="60"
                        cy="60"
                        r={radius}
                        stroke={tone.stroke}
                        strokeWidth="10"
                        strokeLinecap="round"
                        fill="transparent"
                        strokeDasharray={circumference}
                        strokeDashoffset={dashOffset}
                        className="transition-all duration-700 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className={`font-display text-4xl font-black tabular-nums leading-none ${tone.text}`}>
                        {result.overallScore}
                      </span>
                      <span className="text-[10px] font-mono text-zinc-400 uppercase">/ 100</span>
                    </div>
                  </div>

                  <div className="space-y-2 min-w-0">
                    <span className={`inline-block px-2.5 py-0.5 rounded-full border text-[10px] font-bold uppercase tracking-wider ${tone.badgeBg}`}>
                      {tone.label}
                    </span>
                    <a
                      href={result.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-mono text-xs sm:text-sm font-bold text-white hover:text-[#c084fc] flex items-center gap-1.5 truncate"
                    >
                      <span className="truncate">{result.domain}</span>
                      <ExternalLink className="w-3.5 h-3.5 shrink-0" />
                    </a>
                    <div className="flex flex-wrap gap-x-3 gap-y-1 text-[11px] font-mono text-zinc-400">
                      <span>TTFB: <strong className="text-white">{result.ttfbMs}ms</strong></span>
                      <span>HTML: <strong className="text-white">{result.htmlSizeKb}KB</strong></span>
                      <span>HTTP <strong className="text-white">{result.status}</strong></span>
                    </div>
                  </div>
                </div>

                {/* 4 Pillar Mini Scores */}
                <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
                  {[
                    { key: "performance", label: "Performance", score: result.categories.performance, icon: Gauge },
                    { key: "seo", label: "Technical SEO", score: result.categories.seo, icon: Search },
                    { key: "mobile", label: "Mobile & UX", score: result.categories.mobile, icon: Smartphone },
                    { key: "security", label: "Security", score: result.categories.security, icon: ShieldCheck },
                  ].map((item) => {
                    const IconComp = item.icon;
                    const itemTone = getScoreTone(item.score);
                    return (
                      <div
                        key={item.key}
                        className="bg-[#0D071E] border border-purple-800/40 rounded-2xl p-4 space-y-2.5"
                      >
                        <div className="flex items-center justify-between text-zinc-400">
                          <IconComp className="w-4 h-4 text-[#c084fc]" />
                          <span className={`font-display text-3xl font-black tabular-nums leading-none ${itemTone.text}`}>
                            {item.score}
                          </span>
                        </div>
                        <div className="space-y-1.5">
                          <span className="text-xs font-bold text-white block">{item.label}</span>
                          <div className="w-full h-1.5 rounded-full bg-purple-950/90 overflow-hidden">
                            <div
                              className="h-full rounded-full transition-all duration-700"
                              style={{ width: `${item.score}%`, backgroundColor: itemTone.stroke }}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Filter Tabs + Audit Checklist */}
              <div className="space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <div className="flex items-center gap-2">
                    {[
                      { id: "all" as const, label: `All Checks (${result.checks.length})` },
                      { id: "issues" as const, label: `Issues (${issuesList.length})` },
                      { id: "passed" as const, label: `Passed (${passedList.length})` },
                    ].map((tab) => (
                      <button
                        key={tab.id}
                        type="button"
                        onClick={() => setCheckFilter(tab.id)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer border ${
                          checkFilter === tab.id
                            ? "bg-[#8750f7] text-white border-purple-400/50"
                            : "bg-[#0D071E] text-zinc-300 border-purple-900/50 hover:text-white"
                        }`}
                      >
                        {tab.label}
                      </button>
                    ))}
                  </div>

                  {onRequestFix && (
                    <button
                      type="button"
                      onClick={handleFixCta}
                      className="px-5 py-2.5 rounded-full bg-white hover:bg-[#e9d5ff] text-[#120a22] text-xs font-bold inline-flex items-center gap-2 transition-colors cursor-pointer shadow-lg"
                    >
                      <Sparkles className="w-3.5 h-3.5 text-[#6d28d9]" />
                      <span>
                        {issuesList.length > 0
                          ? `Have Shakeeb Fix ${issuesList.length} Issue${issuesList.length > 1 ? "s" : ""}`
                          : "Optimize Site Further with Shakeeb"}
                      </span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {visibleChecks.map((check) => (
                    <div
                      key={check.id}
                      className="p-4 rounded-2xl bg-[#0D071E] border border-purple-900/45 flex items-start gap-3"
                    >
                      {check.status === "pass" ? (
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      ) : check.status === "warn" ? (
                        <AlertTriangle className="w-4 h-4 text-amber-300 shrink-0 mt-0.5" />
                      ) : (
                        <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                      )}

                      <div className="space-y-1 min-w-0">
                        <div className="flex flex-wrap items-center gap-2">
                          <span className="text-xs sm:text-sm font-bold text-white">
                            {check.label}
                          </span>
                          <span className="text-[10px] font-mono uppercase tracking-wider px-2 py-0.5 rounded bg-purple-950/80 text-purple-300">
                            {check.category}
                          </span>
                        </div>
                        <p className="text-xs text-zinc-300">{check.detail}</p>
                        {check.recommendation && (
                          <p className="text-[11px] text-purple-200/85 pt-0.5 leading-relaxed">
                            Fix: {check.recommendation}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
