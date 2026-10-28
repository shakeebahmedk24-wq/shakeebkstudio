import React, { useState } from "react";
import {
  Palette,
  ExternalLink,
  Sparkles,
  Layers,
  Copy,
  Check,
  Eye,
  X,
  Maximize2,
  Grid,
  Type,
  Sliders,
  Download,
  Share2,
  Bookmark,
  Smartphone,
  ArrowRight
} from "lucide-react";

export interface GraphicItem {
  id: string;
  title: string;
  client: string;
  category: "Logos & Marks" | "Brand Identity" | "Social Media Kits" | "Mobile App" | "Packaging & Print" | "Marketing Banners" | string;
  description: string;
  aspectRatio: "1:1" | "16:9" | "4:5" | "9:16";
  dimensions: string;
  palette: string[];
  fonts: {
    heading: string;
    body: string;
  };
  tools: string[];
  behanceUrl: string;
  imageUrl?: string;
  fallbackUrl?: string;
  featuredImgBg: string;
  tagline: string;
  specifications: {
    colorSpace: string;
    resolution: string;
    vectorDpi: string;
    fileFormats: string[];
  };
  designNotes: string;
}

export const GRAPHIC_PROJECTS: GraphicItem[] = [
  {
    id: "behance-showcase-terracotta-01",
    title: "Terracotta & Warm Copper Brand Identity System",
    client: "Shakeeb Khan Studio — Behance Featured",
    category: "Brand Identity",
    tagline: "Executive Visual Identity, Typography Hierarchy & Collateral System",
    description: "Featured flagship portfolio project from Behance (Project 220534229). Comprehensive brand guidelines, custom warm earth-tone palette, stationery dielines, typography systems, and executive print collateral.",
    aspectRatio: "16:9",
    dimensions: "1400 x 720 px",
    palette: ["#F6ECDF", "#B6682B", "#D79359", "#483E37"],
    fonts: {
      heading: "Jost (Bold 800)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Photoshop", "Figma", "Behance Pro"],
    behanceUrl: "https://www.behance.net/gallery/220534229/Graphic-Design-Portfolio",
    imageUrl: "/graphics/495183220534229.67c9db72b608b.webp",
    featuredImgBg: "bg-gradient-to-br from-amber-950 via-zinc-900 to-orange-950",
    specifications: {
      colorSpace: "CMYK & sRGB Pantone Match",
      resolution: "Ultra-HD Vector Master",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Master", "PDF Brand Deck", "SVG", "PNG High-Res"]
    },
    designNotes: "Architected for high-end brands requiring tactile warmth, optical kerning balance, and multi-surface versatility across web and luxury print packaging."
  },
  {
    id: "behance-showcase-royal-indigo-02",
    title: "Royal Iris & Electric Indigo Corporate Identity",
    client: "Shakeeb Khan Studio — Behance Featured",
    category: "Brand Identity",
    tagline: "Modern Tech Monogram, Color Architecture & App UI Guide",
    description: "Featured flagship portfolio project from Behance (Project 220534229). High-impact geometric monogram logo, vibrant digital blue-violet color standards, icon system, and responsive brand collateral.",
    aspectRatio: "16:9",
    dimensions: "1400 x 720 px",
    palette: ["#F3E9DE", "#626BE4", "#A5A6D6", "#4F538D"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Figma", "Photoshop", "Behance Pro"],
    behanceUrl: "https://www.behance.net/gallery/220534229/Graphic-Design-Portfolio",
    imageUrl: "/graphics/9d55f6220534229.67c9db72b524d.webp",
    featuredImgBg: "bg-gradient-to-br from-indigo-950 via-zinc-900 to-violet-950",
    specifications: {
      colorSpace: "sRGB Digital & Pantone Spot Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Master", "SVG", "PDF Brand Kit", "Canva Master Kit"]
    },
    designNotes: "Engineered with golden ratio geometry, high-contrast dark UI pairing, and scalable vectors ready for global tech deployment."
  },
  {
    id: "behance-showcase-luxury-brass-03",
    title: "Olive Brass & Luxury Gold Editorial Brand Book",
    client: "Shakeeb Khan Studio — Behance Featured",
    category: "Brand Identity",
    tagline: "High-End Editorial Identity, Foil Stamping & Packaging Suite",
    description: "Featured flagship portfolio project from Behance (Project 220534229). Luxury brand book utilizing olive brass, warm champagne tones, custom serif lockups, foil-stamped stationery, and packaging mockups.",
    aspectRatio: "16:9",
    dimensions: "1400 x 720 px",
    palette: ["#F6ECDE", "#CFAE35", "#837C50", "#484436"],
    fonts: {
      heading: "Jost (Bold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "InDesign", "Photoshop", "Behance Pro"],
    behanceUrl: "https://www.behance.net/gallery/220534229/Graphic-Design-Portfolio",
    imageUrl: "/graphics/b9cc95220534229.67c9db72b65fd.webp",
    featuredImgBg: "bg-gradient-to-br from-stone-950 via-zinc-900 to-amber-950",
    specifications: {
      colorSpace: "CMYK Pantone Metallic & sRGB",
      resolution: "Ultra-HD Vector Master",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Vector", "PDF Editorial Deck", "EPS", "PNG Transparent"]
    },
    designNotes: "Designed for premium boutique brands seeking timeless luxury appeal with gold leaf and letterpress print considerations."
  },
  {
    id: "behance-showcase-cyan-navy-04",
    title: "Cyan Teal & Midnight Navy Tech Brand Architecture",
    client: "Shakeeb Khan Studio — Behance Featured",
    category: "Brand Identity",
    tagline: "Digital Systems, Brand Guidelines & Product Identity System",
    description: "Featured flagship portfolio project from Behance (Project 220534229). Precision tech identity guidelines featuring cyan teal accents, dark navy contrast, product UI styling guidelines, and comprehensive digital assets.",
    aspectRatio: "16:9",
    dimensions: "1400 x 720 px",
    palette: ["#F1E9DE", "#48B5B1", "#5D6593", "#363F49"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Figma", "Photoshop", "Behance Pro"],
    behanceUrl: "https://www.behance.net/gallery/220534229/Graphic-Design-Portfolio",
    imageUrl: "/graphics/fd21c0220534229.67c9db72b5b12.webp",
    featuredImgBg: "bg-gradient-to-br from-cyan-950 via-zinc-900 to-slate-950",
    specifications: {
      colorSpace: "sRGB Digital & CMYK Coated Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Master", "SVG", "PDF Brand Deck", "PNG 24-bit"]
    },
    designNotes: "Engineered for fintech and enterprise SaaS applications requiring high visual clarity, clean data typography, and cross-platform consistency."
  },
  {
    id: "brand-style-guide-master-01",
    title: "Modern Brand Identity & Style Guide",
    client: "Apex Enterprise",
    category: "Brand Identity",
    tagline: "Full Logo Design, Brand Book & Identity Guidelines Kit",
    description: "Comprehensive corporate brand book and identity guidelines kit. Includes primary logomark variations, brand voice standards, typography hierarchy, and business stationery dielines.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#38bdf8", "#64748b", "#f8fafc"],
    fonts: {
      heading: "Jost (Bold 800)",
      body: "Inter"
    },
    tools: ["Canva Pro Studio", "Adobe Illustrator", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/brand-style-guide-master-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/446160098/original/809d9ec1a07fdbc7284cc2cc8ec3677b614b5222/design-logo-brand-style-guide-or-brand-identity-guidelines-with-branding-kit.png",
    featuredImgBg: "bg-gradient-to-br from-slate-950 via-zinc-900 to-sky-950",
    specifications: {
      colorSpace: "CMYK & sRGB Dual Profile",
      resolution: "Ultra-HD Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["PDF Brand Book", "SVG", "AI Vector", "Canva Master Kit"]
    },
    designNotes: "Full visual identity specification deck designed to maintain complete visual consistency across print, web, and physical merchandise."
  },
  {
    id: "brand-style-guide-master-03",
    title: "Minimalist Brand Book & Social Media Kit",
    client: "Vanguard Creative",
    category: "Social Media Kits",
    tagline: "Executive Style Guide, Logomark & Social Media Suite",
    description: "End-to-end brand guidelines deck crafted for executive tech ventures. Includes full vector logo suites, color usage rules, typography scales, and social media brand templates.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#f59e0b", "#27272a", "#f4f4f5"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Canva Pro Studio", "Adobe Illustrator", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/brand-style-guide-master-03.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs3/446160098/original/c18805727018147c7bbc7921c5c9eba3ed680a0b/design-logo-brand-style-guide-or-brand-identity-guidelines-with-branding-kit.png",
    featuredImgBg: "bg-gradient-to-br from-stone-950 via-zinc-900 to-amber-950",
    specifications: {
      colorSpace: "sRGB & Pantone Dual Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "PDF Brand Book", "EPS", "Canva Brand Kit"]
    },
    designNotes: "Designed for seamless scalability across mobile apps, desktop dashboards, and high-impact print collateral."
  },
  {
    id: "pro-business-logo-01",
    title: "STRONG - Fitness & Apparel Brand System",
    client: "STRONG Athletics",
    category: "Logos & Marks",
    tagline: "High-Impact Athletic Monogram & Minimalist Brand System",
    description: "High-impact athletic logo and minimalist brand system designed for STRONG. Features gold-ratio geometric grid precision, apparel mockups, and bold fitness typography.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#84cc16", "#38bdf8", "#f8fafc"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/pro-business-logo-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/468288690/original/2440b4994b7891a5e195fe136acf3f1f413add13/do-professional-business-logo-design-modern-minimalist-or-custom-design.png",
    featuredImgBg: "bg-gradient-to-br from-slate-950 via-zinc-900 to-lime-950",
    specifications: {
      colorSpace: "sRGB & Pantone Dual Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "AI Master", "PDF Brand Kit", "PNG 24-bit"]
    },
    designNotes: "Architected with negative-space optical balance and bold athletic styling."
  },
  {
    id: "modern-minimalist-logo-kit-01",
    title: "QANTRA - Modern Tech Logo & Branding Kit",
    client: "QANTRA Tech Systems",
    category: "Logos & Marks",
    tagline: "Custom Q-Monogram, Geometry Grid & Minimalist Brand Mark",
    description: "High-impact tech logo design and branding kit for QANTRA built with geometric grid precision. Features purple gradient Q-monograms, vector files, and brand assets.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#a855f7", "#e2e8f0", "#ffffff"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/modern-minimalist-logo-kit-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/452286045/original/9a17ccb056f29c8603d6e10555987b0323372e03/do-modern-minimalist-logo-design-and-branding-kit.png",
    featuredImgBg: "bg-gradient-to-br from-slate-950 via-zinc-900 to-purple-950",
    specifications: {
      colorSpace: "sRGB & Pantone Dual Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "AI Master", "PDF Vector", "PNG 24-bit"]
    },
    designNotes: "Engineered with golden ratio circles, optical kerning adjustments, and versatile lockups."
  },
  {
    id: "modern-minimalist-logo-kit-02",
    title: "HELIXA - Executive Monogram & Brand Identity Kit",
    client: "HELIXA Corporate",
    category: "Logos & Marks",
    tagline: "Sleek Corporate X-Logomark, Sub-marks & Collateral Kit",
    description: "Sleek executive logo mark and minimal brand architecture kit for HELIXA. Includes primary X-logomarks, favicon variants, typography rules, and stationery dielines.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#f97316", "#334155", "#f8fafc"],
    fonts: {
      heading: "Syne / Jost",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/modern-minimalist-logo-kit-02.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs2/452286045/original/9904dbae6f367cd8c40cd49cd171414cb363b2aa/do-modern-minimalist-logo-design-and-branding-kit.jpg",
    featuredImgBg: "bg-gradient-to-br from-stone-950 via-zinc-900 to-orange-950",
    specifications: {
      colorSpace: "CMYK & RGB Dual Profile",
      resolution: "4K High Resolution",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI", "PDF", "SVG", "Canva Brand Kit"]
    },
    designNotes: "High-contrast visual hierarchy and precision logo grid for corporate ventures."
  },
  {
    id: "company-logo-design-01",
    title: "AQUATAP - Sustainable Water Brand & Logomark",
    client: "AQUATAP Water Co.",
    category: "Logos & Marks",
    tagline: "Eco-Friendly Emblem, Reusable Bottle Graphics & Brand Guide",
    description: "Custom sustainable water brand logo and identity suite created for AQUATAP. Features refillable tote bag dielines, clear space guidelines, and vibrant yellow-blue graphics.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#18181b", "#eab308", "#0284c7", "#fafafa"],
    fonts: {
      heading: "Jost / Syne",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/company-logo-design-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/29744020/original/30583781c2143f33092256d056e924c889d017d3/a-disenar-el-logo-de-tu-empresa.jpg",
    featuredImgBg: "bg-gradient-to-br from-zinc-950 via-sky-950 to-amber-950",
    specifications: {
      colorSpace: "sRGB & Pantone Soft Profile",
      resolution: "4K Retina Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "AI Master", "PDF Vector", "PNG 24-bit"]
    },
    designNotes: "Designed for multi-device legibility, stamp foil printing, and digital applications."
  },
  {
    id: "custom-brand-logo-93",
    title: "NINETY THREE - Modern 93 Monogram & Vector Logomark",
    client: "93 NINETY THREE Streetwear",
    category: "Logos & Marks",
    tagline: "Precision Geometry 93 Monogram & Streetwear Identity System",
    description: "Ultra-sleek modern '93' monogram and custom vector logomark for NINETY THREE. Features optical negative-space balance, custom icon marks, and streetwear apparel branding.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#ec4899", "#3b82f6", "#ffffff"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/custom-brand-logo-93.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/8705034c51b1f57b868a477066cde537-1733173101306/93.jpg",
    featuredImgBg: "bg-gradient-to-br from-pink-950 via-zinc-950 to-blue-950",
    specifications: {
      colorSpace: "sRGB & CMYK Dual Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "PDF Vector", "AI", "PNG"]
    },
    designNotes: "Engineered for high scalability across mobile app icons, desktop headers, and signage."
  },
  {
    id: "business-logo-branding-kit-01",
    title: "Storlex - Cloud Data Logo & Social Media Kit",
    client: "Storlex Systems",
    category: "Social Media Kits",
    tagline: "Modern SaaS Business Logomark & Social Media Guidelines Kit",
    description: "Comprehensive business logo design, social media assets, and brand identity package for Storlex cloud platform. Includes custom green S-logomarks, color palette matrix, typography hierarchy, and social post templates.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#10b981", "#64748b", "#f8fafc"],
    fonts: {
      heading: "Syne / Jost",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/business-logo-branding-kit-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/459458490/original/93671f01b7db9dc4b1ebbc1b505774c816bcbc15/do-business-logo-design-and-branding-kit-or-brand-identity-guidelines.jpg",
    featuredImgBg: "bg-gradient-to-br from-slate-950 via-emerald-950 to-zinc-900",
    specifications: {
      colorSpace: "CMYK & RGB Dual Profile",
      resolution: "Ultra-HD Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI", "PDF Brand Guide", "SVG", "Canva Kit"]
    },
    designNotes: "Features crisp geometric balance and modern corporate aesthetic."
  },
  {
    id: "business-logo-branding-kit-02",
    title: "MINTOPIA - Corporate Brand Book & Social Media Kit",
    client: "MINTOPIA Systems",
    category: "Social Media Kits",
    tagline: "Executive Social Brand Kit, Logo Lockups & Templates",
    description: "Sleek corporate brand book, social media promotional templates, and identity guidelines board created for MINTOPIA. Features primary logomark variations, social layouts, typography scales, and business card templates.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#18181b", "#0284c7", "#38bdf8", "#ffffff"],
    fonts: {
      heading: "Jost (Bold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/business-logo-branding-kit-02.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs2/459458490/original/57db30f9697d4ca85ec7c2936123eb6b9fdc0683/do-business-logo-design-and-branding-kit-or-brand-identity-guidelines.jpg",
    featuredImgBg: "bg-gradient-to-br from-sky-950 via-zinc-950 to-slate-900",
    specifications: {
      colorSpace: "sRGB & Pantone Profile",
      resolution: "4K High Resolution",
      vectorDpi: "300 DPI Vector",
      fileFormats: ["SVG", "PDF Master", "AI", "Canva Template"]
    },
    designNotes: "Tailored for executive leadership, corporate ventures, and high-impact print collateral."
  },
  {
    id: "ai-tech-app-icon-logo-01",
    title: "KRYPTON - AI Tech Startup Logo & App Icon Suite",
    client: "KRYPTON AI Systems",
    category: "Mobile App",
    tagline: "Modern Minimalist AI Tech Logo, App Icon & Mobile UI Kit",
    description: "Cutting-edge KRYPTON AI tech startup logo and app icon design kit. Features futuristic geometric shapes, dark mode gradient swatches, app store icon sets, and vector brand marks.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#f97316", "#06b6d4", "#ffffff"],
    fonts: {
      heading: "Syne / Jost",
      body: "JetBrains Mono"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Figma"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/ai-tech-app-icon-logo-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/467882940/original/e09839842f0eefbac8b7c5d94ed05756bf9a84a3/design-modern-minimal-ai-tech-startup-app-icon-logo-branding-kit-or-brand-book.jpg",
    featuredImgBg: "bg-gradient-to-br from-orange-950 via-cyan-950 to-zinc-950",
    specifications: {
      colorSpace: "sRGB & P3 Display Profile",
      resolution: "Retina 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "AI Master", "App Icon PNGs", "PDF Guide"]
    },
    designNotes: "Optimized for iOS/Android app store icons, dark mode SaaS UI, and AI startup pitch decks."
  },
  {
    id: "ai-tech-app-icon-logo-02",
    title: "Orvixal - Futuristic AI App Icon & Monogram System",
    client: "Orvixal Technologies",
    category: "Mobile App",
    tagline: "Minimal Tech Monogram, App Icon Matrix & Mobile UI Guidelines",
    description: "Futuristic Orvixal tech monogram and app icon matrix. Designed with neon purple accent highlights, sleek vector curves, and dark-theme brand collateral templates.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#ec4899", "#8b5cf6", "#f8fafc"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Figma"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/ai-tech-app-icon-logo-02.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs3/467882940/original/d102db3f5dd708aae3c6122a9356284da6de5704/design-modern-minimal-ai-tech-startup-app-icon-logo-branding-kit-or-brand-book.jpg",
    featuredImgBg: "bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950",
    specifications: {
      colorSpace: "sRGB Digital & Vector",
      resolution: "4K High Resolution",
      vectorDpi: "300 DPI Vector Scale",
      fileFormats: ["SVG", "PDF Guide", "EPS", "Canva Kit"]
    },
    designNotes: "High-tech branding engineered for SaaS products, AI platforms, and mobile apps."
  },
  {
    id: "pagrow-brand-identity",
    title: "Wealth & Growth - Green Tech & AgTech Brand Identity",
    client: "Wealth & Growth Tech",
    category: "Logos & Marks",
    tagline: "Modern Sustainable Branding, Growth Icon & Identity System",
    description: "Modern Green Tech brand identity and leaf-growth logomark created for Wealth & Growth. Includes sustainable color palette standards, corporate presentation deck, and vector lockups.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#052e16", "#22c55e", "#a3e635", "#ffffff"],
    fonts: {
      heading: "Syne / Jost",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/pagrow-brand-identity.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/3ea21f5df67f941ab564e94f03b14e01-1767345245711/pagrow.jpg",
    featuredImgBg: "bg-gradient-to-br from-emerald-950 via-green-950 to-stone-900",
    specifications: {
      colorSpace: "CMYK & sRGB Eco Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "AI Master", "PDF Vector", "Canva Kit"]
    },
    designNotes: "Synthesizes natural organic growth forms with modern corporate technology precision."
  },
  {
    id: "pro-business-logo-02",
    title: "Fynkit - Outdoor & Apparel Brand Identity Kit",
    client: "Fynkit Outdoor Gear",
    category: "Logos & Marks",
    tagline: "Custom Business Monogram & Brand Architecture",
    description: "Sleek Fynkit corporate logomark and outdoor apparel brand identity kit featuring dark-canvas aesthetics, high-contrast swatches, and clean typographical lockups.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#18181b", "#10b981", "#64748b", "#fafafa"],
    fonts: {
      heading: "Syne / Jost",
      body: "Inter (Medium 500)"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/pro-business-logo-02.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs2/468288690/original/261a94d00d71c29c46b6e63aa7df96ce3ffb288c/do-professional-business-logo-design-modern-minimalist-or-custom-design.png",
    featuredImgBg: "bg-gradient-to-br from-zinc-950 via-emerald-950 to-slate-900",
    specifications: {
      colorSpace: "CMYK & RGB Dual Profile",
      resolution: "4K High Resolution",
      vectorDpi: "300 DPI Vector Scale",
      fileFormats: ["SVG", "PDF Vector", "EPS", "Canva Brand Kit"]
    },
    designNotes: "Features extreme visual legibility even at tiny favicon scales."
  },
  {
    id: "pro-business-logo-03",
    title: "ZENIFLIX - Global Logistics & Shipping Brand Identity",
    client: "ZENIFLIX Global",
    category: "Logos & Marks",
    tagline: "Luxury Emblem Design & Executive Logomark Board",
    description: "Bespoke ZENIFLIX yellow logistics mark and custom vector emblem. Includes full clear space specifications, primary/secondary lockup rules, and dark-theme presentation.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#fbbf24", "#3f3f46", "#f4f4f5"],
    fonts: {
      heading: "Jost (Black 900)",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/pro-business-logo-03.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs3/468288690/original/5355ca8ccab7a9980358bd4b33e0b4397388ef7e/do-professional-business-logo-design-modern-minimalist-or-custom-design.png",
    featuredImgBg: "bg-gradient-to-br from-stone-950 via-amber-950 to-zinc-950",
    specifications: {
      colorSpace: "Pantone Metallic & sRGB",
      resolution: "Retina 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI", "PDF Master", "SVG", "PNG"]
    },
    designNotes: "Designed for luxury corporate identity, foil print stamping, and digital apps."
  },
  {
    id: "icecream-brand-packaging",
    title: "Chroma Cone - Artisan Gelato Brand Identity & Packaging",
    client: "Chroma Cone Gelato",
    category: "Logos & Marks",
    tagline: "Playful Food & Beverage Branding, Tub Packaging & Labels",
    description: "Vibrant visual identity and tub packaging dielines for Chroma Cone organic artisan gelato. Includes custom illustrations, retro-modern typography, and product label mockups.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#fef08a", "#f43f5e", "#0284c7", "#ffffff"],
    fonts: {
      heading: "Syne (ExtraBold)",
      body: "Jost"
    },
    tools: ["Adobe Illustrator Dielines", "Canva Pro Studio", "Photoshop 3D"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/icecream-brand-packaging.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/f7d826d77ef94f9bc81191050d82971f-1774348683558/icecream%20brand.png",
    featuredImgBg: "bg-gradient-to-br from-rose-950 via-zinc-900 to-amber-950",
    specifications: {
      colorSpace: "CMYK Packaging Profile",
      resolution: "Ultra-HD Packaging Dieline",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Dielines", "PDF Print Ready", "3D Mockup PSD", "SVG"]
    },
    designNotes: "Crafted with 1:1 scale container dieline vectors, bleed margins, and spot UV coating layers."
  },
  {
    id: "skincare-brand-identity",
    title: "GLOWVIA - Botanical Skincare Identity & Label Kit",
    client: "GLOWVIA Botanicals",
    category: "Logos & Marks",
    tagline: "Minimalist Cosmetic Branding, Dropper Bottle Labels & Boxes",
    description: "Organic cosmetic brand identity and packaging suite for GLOWVIA. Features minimalist typography, soothing muted earth swatches, dropper bottle label vectors, and unboxing carton design.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#1c1917", "#a7f3d0", "#78716c", "#fafaf9"],
    fonts: {
      heading: "Jost / Serif",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/skincare-brand-identity.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/511a095b5d16b50c107cbe4905221a3f-1774348848576/SkinCare%20(03).png",
    featuredImgBg: "bg-gradient-to-br from-emerald-950 via-stone-900 to-zinc-950",
    specifications: {
      colorSpace: "CMYK & sRGB Dual Profile",
      resolution: "Precision Vector Dieline",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["PDF Print", "AI Packaging", "Canva Brand Template", "PNG"]
    },
    designNotes: "Emphasizes eco-luxury aesthetics, clean ingredient typography, and subtle foil stamp accents."
  },
  {
    id: "softdrink-brand-packaging",
    title: "Chillza - Soda Beverage Packaging & Brand Identity",
    client: "Chillza Beverage Co.",
    category: "Logos & Marks",
    tagline: "High-Energy Beverage Branding & Aluminum Can Packaging",
    description: "Bold beverage branding and aluminum can wrapper packaging dielines for Chillza soda. Includes vibrant color combinations, fruit icons, flavor indicators, and retail pack display visuals.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#38bdf8", "#fb923c", "#ffffff"],
    fonts: {
      heading: "Jost (Black)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "3D Can Renderer"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/softdrink-brand-packaging.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/b4244f8412360f58cfe82b085ec9dfa4-1774348959826/Softdrink%20(2).png",
    featuredImgBg: "bg-gradient-to-br from-sky-950 via-slate-900 to-orange-950",
    specifications: {
      colorSpace: "CMYK Spot Color Profile",
      resolution: "High-Res 3D Packaging",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Can Wrapper", "PDF Print", "3D Can Mockup", "Canva Kit"]
    },
    designNotes: "Designed for high shelf visibility, metallic substrate inks, and dynamic brand presence."
  },
  {
    id: "modern-minimalist-identity-01",
    title: "Nexelink - Modern Tech Logo & Business System",
    client: "Nexelink Technologies",
    category: "Logos & Marks",
    tagline: "Corporate Minimalist Monogram & Style Guidelines Deck",
    description: "Clean contemporary logomark and master brand style guidelines kit for Nexelink. Built around clean sans-serif typography, geometric sub-marks, and multi-channel asset exports.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#a855f7", "#3f3f46", "#ffffff"],
    fonts: {
      heading: "Syne / Sans-Serif Bold",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/modern-minimalist-identity-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/470071074/original/f144660d94700ce4297400f792be8a4e4017292f/design-modern-minimalist-business-logo-with-brand-identity.jpg",
    featuredImgBg: "bg-gradient-to-br from-purple-950 via-zinc-900 to-slate-950",
    specifications: {
      colorSpace: "sRGB & Pantone Dual Profile",
      resolution: "Ultra-HD 4K Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "PDF Brand Guide", "AI Vector", "Canva Kit"]
    },
    designNotes: "Architected for creative agencies, media studios, and digital content creators."
  },
  {
    id: "3d-logo-card-suite-01",
    title: "FLUX - Athletic Training & Fitness Monogram System",
    client: "FLUX Athletics",
    category: "Logos & Marks",
    tagline: "3D Metallic Logomark & Premium Business Card Mockups",
    description: "Luxury FLUX monogram logo design and athletic studio collateral kit. Features embossed metallic accents, dark gym cardstock texture, and sleek typography.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#18181b", "#d97706", "#52525b", "#ffffff"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop 3D"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/3d-logo-card-suite-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/314390653/original/474fcfe779093c6d214d3ff482c3aae9ad33b967/minimalist-or-3d-logo-design-and-cards-for-your-business.jpeg",
    featuredImgBg: "bg-gradient-to-br from-amber-950 via-zinc-950 to-slate-900",
    specifications: {
      colorSpace: "CMYK Metallic Foil Profile",
      resolution: "3D High-Res Render",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Card Dielines", "PDF Print", "3D PSD", "Canva Template"]
    },
    designNotes: "Includes foil stamp masks, spot UV varnish vectors, and heavy cardstock specifications."
  },
  {
    id: "3d-logo-card-suite-02",
    title: "ntry - Modern Tech Monogram & Product Branding",
    client: "NTRY Tech Systems",
    category: "Logos & Marks",
    tagline: "3D Business Logomark, Corporate Letterhead & Cards",
    description: "Modern ntry corporate logo mark and full smartwatch/digital product branding kit. Includes purple logo lockups, corporate letterhead templates, and executive card dielines.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#0284c7", "#475569", "#f8fafc"],
    fonts: {
      heading: "Syne / Jost",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/3d-logo-card-suite-02.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs3/314390653/original/61d3dc6e4e9696816a6000ac6c3146b401e5e8d2/minimalist-or-3d-logo-design-and-cards-for-your-business.jpeg",
    featuredImgBg: "bg-gradient-to-br from-sky-950 via-slate-950 to-zinc-900",
    specifications: {
      colorSpace: "CMYK & sRGB Dual Profile",
      resolution: "Ultra-HD Vector 4K",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "PDF Stationery", "AI Vector", "Canva Kit"]
    },
    designNotes: "Engineered for corporate holdings, financial firms, and executive leadership teams."
  },
  {
    id: "houso-brand-identity",
    title: "Houso Real Estate & Living",
    client: "Houso Brand Studio",
    category: "Marketing Banners",
    tagline: "Modern Unique Real Estate Logomark & Digital Marketing Suite",
    description: "Precision-engineered modern corporate logomark, digital display banners, and promotional ad creative suite created for Houso Real Estate & Living. Features custom geometric typography lockup and advertising templates.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#f59e0b", "#334155", "#ffffff"],
    fonts: {
      heading: "Jost (Bold 800)",
      body: "Inter (Regular 400)"
    },
    tools: ["Canva Pro Studio", "Adobe Illustrator", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/houso-brand-identity.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/399841914/original/275004320664c5703588c0058bb2830b2d4d01f7/do-modern-unique-business-logo-design-for-your-brand.jpg",
    featuredImgBg: "bg-gradient-to-br from-slate-950 via-zinc-900 to-amber-950",
    specifications: {
      colorSpace: "CMYK & sRGB Dual Profile",
      resolution: "Ultra-HD Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "PDF Vector", "PNG 24-bit", "Canva Brand Kit"]
    },
    designNotes: "Engineered with precision grid alignment for real estate & architectural branding, ensuring high legibility across digital media, print, and physical collateral."
  },
  {
    id: "scholara-brand-identity",
    title: "Scholara EdTech Platform",
    client: "Scholara Global",
    category: "Marketing Banners",
    tagline: "Geometric Monogram & Educational Digital Marketing Ads",
    description: "High-impact minimalist brand identity, promotional web banners, and digital display ad creatives crafted for Scholara. Includes grid system analysis, vector display scales, and marketing layouts.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#18181b", "#38bdf8", "#e4e4e7", "#09090b"],
    fonts: {
      heading: "Syne / Sans (Bold 700)",
      body: "Jost"
    },
    tools: ["Canva Pro Studio", "Adobe Illustrator", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/scholara-brand-identity.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs2/399841914/original/3f07eb9f0b4952ae561bd962f0de877e00ac3461/do-modern-unique-business-logo-design-for-your-brand.jpg",
    featuredImgBg: "bg-gradient-to-br from-zinc-950 via-slate-900 to-sky-950",
    specifications: {
      colorSpace: "sRGB & Pantone Soft Tone",
      resolution: "High-Res 4K Digital",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI", "PDF Vector", "Canva Master Template", "PNG"]
    },
    designNotes: "Designed to reflect modern educational authority, clean lines, and high-end aesthetic appeal across digital learning channels."
  },
  {
    id: "notewell-presentation-kit",
    title: "Notewell Productivity App",
    client: "Notewell Systems",
    category: "Mobile App",
    tagline: "Productivity App UI & Executive Presentation Board",
    description: "Complete mobile app brand presentation board for Notewell featuring primary logo marks, sub-marks, mobile interface mockups, app icon assets, and digital brand application mockups.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#09090b", "#10b981", "#27272a", "#f4f4f5"],
    fonts: {
      heading: "Jost (Black 900)",
      body: "JetBrains Mono"
    },
    tools: ["Canva Pro Studio", "Adobe Illustrator", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/notewell-presentation-kit.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/9c98c064e449c79508c79306e09e7265-1776456635900/presenation%20image.jpg",
    featuredImgBg: "bg-gradient-to-br from-neutral-950 via-zinc-900 to-emerald-950",
    specifications: {
      colorSpace: "Grayscale & Dual Color",
      resolution: "Ultra-HD Crisp Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["SVG", "PDF Vector", "EPS", "Canva Brand Template"]
    },
    designNotes: "Stripped-back minimalist design focusing on productivity tools, dark mode interfaces, and stark contrast."
  },
  {
    id: "modern-branding-kit-01",
    title: "Modern Logo & Marketing Banner Kit",
    client: "Brand Identity Studio",
    category: "Marketing Banners",
    tagline: "Full-Suite Marketing Banners & Promo Identity Package",
    description: "End-to-end promotional banner and brand identity kit engineered for modern tech & business ventures. Includes marketing web banners, typography hierarchy guidelines, social display ads, and collateral.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0f172a", "#818cf8", "#cbd5e1", "#0284c7"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Canva Pro Studio", "Adobe Illustrator", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/modern-branding-kit-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/366978407/original/06bff92bfd5471590c6ce1f896dc6a6423217c96/design-modern-logo-branding-kit-with-complete-brand-identity.jpg",
    featuredImgBg: "bg-gradient-to-br from-slate-950 via-indigo-950 to-zinc-900",
    specifications: {
      colorSpace: "sRGB & CMYK Dual Profile",
      resolution: "4K Retina Vector",
      vectorDpi: "300 DPI Vector Scale",
      fileFormats: ["SVG", "PDF Print", "Canva Brand Kit", "PNG 24-bit"]
    },
    designNotes: "Tailored to communicate professional design craftsmanship, modern creative authority, and strong visual hierarchy."
  },
  {
    id: "packaging-bonjoy-burger-box-01",
    title: "Bonjoy Fast Food & Burger Packaging System",
    client: "Bonjoy Burger House",
    category: "Packaging & Print",
    tagline: "Custom Burger Box Dielines, Craft Bags & Takeout Packaging",
    description: "Vibrant fast-food packaging system featuring custom burger box folding dielines, illustrated kraft paper bags, and brand takeout collateral.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#ea580c", "#18181b", "#0284c7", "#ffffff"],
    fonts: {
      heading: "Jost (Bold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Photoshop 3D", "Canva Pro Studio"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-bonjoy-burger-box-01.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs/189379364/original/fe5800440b664d2abb77d82fba39133b89658514/design-professional-business-logo-with-free-3d-mock-ups-68d6.jpg",
    featuredImgBg: "bg-gradient-to-br from-amber-950 via-zinc-950 to-slate-900",
    specifications: {
      colorSpace: "CMYK Food-Grade",
      resolution: "4K Render",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["AI Food Box Dieline", "PDF Vector", "3D PSD Mockup"]
    },
    designNotes: "Custom eco-friendly fast food box folding dielines with vibrant orange branding."
  },
  {
    id: "packaging-paws-bites-pet-food-02",
    title: "Paws Bites Gourmet Pet Food Bag & Pouch Suite",
    client: "Paws Bites Pet Nutrition",
    category: "Packaging & Print",
    tagline: "Custom Stand-Up Pouch Dielines & Pet Food Bag Artwork",
    description: "Premium pet food bag and pouch dieline packaging system featuring bold typography, matte foil pouch finishes, and custom nutrition layout.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#9a3412", "#18181b", "#d4d4d8", "#ffffff"],
    fonts: {
      heading: "Syne / Bold",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Photoshop 3D", "Canva Pro"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-paws-bites-pet-food-02.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs2/189379364/original/e9c493f4e1452af740a7ec5936232b2a6cf408b1/design-professional-business-logo-with-free-3d-mock-ups-68d6.jpg",
    featuredImgBg: "bg-gradient-to-br from-amber-950 via-zinc-900 to-stone-900",
    specifications: {
      colorSpace: "CMYK Pouch Ink",
      resolution: "Ultra-HD Print Vector",
      vectorDpi: "300 DPI Print Ready",
      fileFormats: ["PDF Pouch Dieline", "AI Vector", "PSD Mockup"]
    },
    designNotes: "High-barrier pet treat pouch artwork engineered for retail stand-up display."
  },
  {
    id: "packaging-tasty-catch-takeout-box-03",
    title: "Tasty Catch Restaurant Takeout Box & Packaging",
    client: "Tasty Catch Fast Food",
    category: "Packaging & Print",
    tagline: "Die-Cut Carryout Box Packaging & Mascot Print Suite",
    description: "Fun and functional fast food carryout box design featuring vibrant dual-tone cyan & orange die-cut boxes with custom mascot illustrations.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#ea580c", "#0284c7", "#18181b", "#ffffff"],
    fonts: {
      heading: "Syne / ExtraBold",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Photoshop 3D", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-tasty-catch-takeout-box-03.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs3/189379364/original/b8256889ac14def9845fccc4a96f16d4df5d4fdd/design-professional-business-logo-with-free-3d-mock-ups-68d6.jpg",
    featuredImgBg: "bg-gradient-to-br from-sky-950 via-orange-950 to-zinc-900",
    specifications: {
      colorSpace: "CMYK Food-Safe Inks",
      resolution: "4K Render",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Box Dieline", "PDF Print", "3D PSD"]
    },
    designNotes: "Playful carryout meal box dielines with integrated handle cutouts."
  },
  {
    id: "packaging-lumina-floral-mailer-box-04",
    title: "Lumina Floral Product Mailer & Subscription Box",
    client: "Lumina Floral Studio",
    category: "Packaging & Print",
    tagline: "Illustrated Mailer Box Dielines & Unboxing Print Collateral",
    description: "End-to-end ecommerce mailer box packaging featuring custom botanical floral artwork, printed product sleeves, and cohesive unboxing materials.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#f59e0b", "#e11d48", "#16a34a", "#ffffff"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-lumina-floral-mailer-box-04.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/images/q_auto:best,f_auto/gigs2/241548872/original/c2f917cc926075c3f2592b68f5ba873f5c19f4d3/design-mailer-box-design-product-box-design-along-with-3d-mockup.png",
    featuredImgBg: "bg-gradient-to-br from-amber-950 via-stone-900 to-slate-950",
    specifications: {
      colorSpace: "sRGB & CMYK",
      resolution: "4K High-Res Vector",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Mailer Dieline", "PDF Vector", "Canva Kit"]
    },
    designNotes: "Vibrant botanical graphics crafted for luxury e-commerce unboxing experiences."
  },
  {
    id: "packaging-pawsome-cat-treat-pouch-05",
    title: "Pawsome Cat Food Stand-Up Pouch Packaging",
    client: "Pawsome Pet Care",
    category: "Packaging & Print",
    tagline: "Playful Pet Food Foil Pouch Dieline & Label Suite",
    description: "Charming stand-up pouch packaging design for cat treats featuring custom vector cat illustrations, pastel green colorways, and nutrition callouts.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#22c55e", "#f97316", "#38bdf8", "#ffffff"],
    fonts: {
      heading: "Jost",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Photoshop", "Packaging Dieline CAD"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-pawsome-cat-treat-pouch-05.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/92a742216ce861d490efed22fd2785f9-1770139371884/1.png",
    featuredImgBg: "bg-gradient-to-br from-emerald-950 via-purple-950 to-zinc-950",
    specifications: {
      colorSpace: "CMYK Foil Pouch",
      resolution: "4K Print Ready",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Pouch Dieline", "PDF Print", "PSD"]
    },
    designNotes: "Matte finish barrier pouch dieline tailored for pet food retail channels."
  },
  {
    id: "packaging-ben-sue-food-suite-06",
    title: "Ben & Sue Artisan Ice Cream & Food Packaging",
    client: "Ben & Sue Artisan Foods",
    category: "Packaging & Print",
    tagline: "Bold Dual-Tone Packaging Cups, Boxes & Branding",
    description: "Retro-modern red & blue packaging suite featuring branded ice cream tubs, paper carryout bags, and custom food box dielines.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#dc2626", "#2563eb", "#fef3c7", "#ffffff"],
    fonts: {
      heading: "Syne / ExtraBold",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Canva Pro Studio", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-ben-sue-food-suite-06.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/bdde2a5f392297100767406bed8bfbce-1760112632863/3-3.png",
    featuredImgBg: "bg-gradient-to-br from-red-950 via-blue-950 to-zinc-900",
    specifications: {
      colorSpace: "CMYK Food-Grade",
      resolution: "Ultra-HD Vector",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Cup Dieline", "PDF Vector", "PNG"]
    },
    designNotes: "High-contrast dual color branding rendered for gourmet frozen food & takeout."
  },
  {
    id: "packaging-miaow-pet-treats-07",
    title: "Miaow Premium Pet Snack & Pouch Packaging",
    client: "Miaow Pet Nutrition",
    category: "Packaging & Print",
    tagline: "Specialty Cat Snack Foil Pouch & Retail Box Artwork",
    description: "Vibrant yellow and purple stand-up pouch packaging for specialty salmon and chicken cat treats with playful vector mascot graphics.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#eab308", "#7e22ce", "#1c1917", "#ffffff"],
    fonts: {
      heading: "Syne / Bold",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Photoshop", "Vector AI"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-miaow-pet-treats-07.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/d17786a56c2e7504ad581438b0d87982-1760112905456/1.png",
    featuredImgBg: "bg-gradient-to-br from-yellow-950 via-purple-950 to-zinc-900",
    specifications: {
      colorSpace: "CMYK Pouch Ink",
      resolution: "4K Print Ready",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Pouch Dieline", "PDF Print", "EPS"]
    },
    designNotes: "Eye-catching dual flavor pouch designs engineered for supermarket pet aisles."
  },
  {
    id: "packaging-udcare-cosmetic-jar-08",
    title: "Udcare Cosmetic Container & Product Jar Suite",
    client: "Udcare Skincare",
    category: "Packaging & Print",
    tagline: "Minimalist Cosmetic Jar Packaging & Cylinder Tub Dielines",
    description: "Modern cylindrical skincare container packaging system with clean typography, matte pastel finishes, and custom product labels.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#f472b6", "#18181b", "#e4e4e7", "#ffffff"],
    fonts: {
      heading: "Jost (ExtraBold)",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Packaging Dielines", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-udcare-cosmetic-jar-08.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/ab772d0f00f55b5f8fd9f40a19562709-1763547770092/1.png",
    featuredImgBg: "bg-gradient-to-br from-pink-950 via-fuchsia-950 to-zinc-950",
    specifications: {
      colorSpace: "CMYK & Pantone",
      resolution: "4K Vector",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Label Dieline", "PDF Print"]
    },
    designNotes: "Contemporary cylindrical packaging layout designed for luxury beauty lines."
  },
  {
    id: "packaging-regalate-beauty-tub-09",
    title: "Regalate Vegan Cosmetic Tub & Bath Packaging",
    client: "Regalate Cosmetics & Bath",
    category: "Packaging & Print",
    tagline: "Pink & Black Skincare Tub Packaging with Die-Cut Stickers",
    description: "Bespoke tub packaging suite for vegan skincare and bath products featuring custom typography, die-cut seal stickers, and high-contrast black & pink branding.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#f472b6", "#18181b", "#fef3c7", "#ffffff"],
    fonts: {
      heading: "Syne / Bold",
      body: "Jost"
    },
    tools: ["Adobe Illustrator", "Photoshop 3D", "Canva Pro"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-regalate-beauty-tub-09.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/9c4441b1ba9c8fcb92a74d44a0086fa3-1770136878195/1.png",
    featuredImgBg: "bg-gradient-to-br from-pink-950 via-zinc-950 to-neutral-900",
    specifications: {
      colorSpace: "CMYK & Spot Ink",
      resolution: "4K Print Ready",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Tub Dieline", "PDF Vector", "PSD"]
    },
    designNotes: "Trendy Gen-Z aesthetic skincare packaging built for viral social e-commerce."
  },
  {
    id: "packaging-voltra-tech-box-10",
    title: "Voltra Audio & Tech Retail Packaging",
    client: "Voltra Acoustics",
    category: "Packaging & Print",
    tagline: "High-End Electronics Box Packaging & Unboxing Kit",
    description: "Modern retail box packaging for Voltra premium headphones and audio gear. Includes custom tray inserts, magnetic closure box dieline, and user manual booklet.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#0284c7", "#38bdf8", "#0f172a", "#f8fafc"],
    fonts: {
      heading: "Syne / ExtraBold",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Photoshop 3D", "Vector CAD"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-voltra-tech-box-10.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/a9ffb221c4eee2b6f9c0b581db5462c5-1783925710905/Voltra%20Image.jpg",
    featuredImgBg: "bg-gradient-to-br from-sky-950 via-slate-950 to-zinc-900",
    specifications: {
      colorSpace: "CMYK & sRGB Dual Profile",
      resolution: "4K High-Res Vector",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Box Dieline", "PDF Print", "3D PSD"]
    },
    designNotes: "Designed for premium consumer hardware retail shelf presence."
  },
  {
    id: "packaging-kraft-eco-box-11",
    title: "Eco-Friendly Kraft Retail Box Packaging",
    client: "EarthPack Eco Goods",
    category: "Packaging & Print",
    tagline: "Sustainable Brown Cardboard Shipping Box & Mailer Dielines",
    description: "Eco-friendly recycled kraft paper mailer and retail packaging design for Amazon/e-commerce brands. Features soy ink vector graphics, eco stamps, and tuck-top box dielines.",
    aspectRatio: "16:9",
    dimensions: "3840 x 2160 px",
    palette: ["#78350f", "#d97706", "#27272a", "#fef3c7"],
    fonts: {
      heading: "Jost",
      body: "Inter"
    },
    tools: ["Adobe Illustrator", "Packaging DielineCAD", "Photoshop"],
    behanceUrl: "https://behance.net/sksolutions",
    imageUrl: "/graphics/packaging-kraft-eco-box-11.jpg",
    fallbackUrl: "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/4d2cf32eb981f74f8d5e751565375525-1746427626810/eco%20friendly%20kraft%20amazon%20retail%20box%20packaging%20design%20brown%20cardboard.jpg",
    featuredImgBg: "bg-gradient-to-br from-amber-950 via-stone-900 to-zinc-950",
    specifications: {
      colorSpace: "CMYK Eco Ink Profile",
      resolution: "4K Print Ready",
      vectorDpi: "300 DPI",
      fileFormats: ["AI Tuck Top Dieline", "PDF Vector", "PNG"]
    },
    designNotes: "Sustainable cardboard box artwork for e-commerce, Amazon FBA, and retail shipping."
  }
,
{
    "id": "mobile-app-book-reading-01",
    "title": "Lumina Reader - Digital Book Reading & Library App",
    "client": "Lumina Media",
    "category": "Mobile App",
    "tagline": "eBook Reader, Audiobooks & Personal Library UI Kit",
    "description": "Sleek dark-mode digital book reading application featuring minimalist typography, custom reading stats, interactive bookmarking, and audiobook player controls.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#6366f1",
      "#a5b4fc",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Jost"
    },
    "tools": [
      "Figma",
      "Adobe XD",
      "iOS Design System"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/d2ed46cd48e33a2849ecea3104e50038-1731778177530/Book%20reading%20app.png",
    "featuredImgBg": "bg-gradient-to-br from-indigo-950 via-slate-900 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB & P3 Display",
      "resolution": "4K Mobile Design",
      "vectorDpi": "300 DPI Retina",
      "fileFormats": [
        "Figma Source",
        "PNG UI Kit",
        "PDF Guide"
      ]
    },
    "designNotes": "Designed for immersive mobile reading, night mode comfort, and effortless book tracking."
  },
  {
    "id": "mobile-app-activity-tracker-02",
    "title": "PacePulse - Activity & Fitness Tracking Mobile UI",
    "client": "PacePulse Athletics",
    "category": "Mobile App",
    "tagline": "Real-Time GPS Running, Heart Rate & Workout Analytics",
    "description": "High-performance fitness tracking mobile interface featuring live route maps, calorie burning metrics, heart rate zones, and dark-theme workout summaries.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#18181b",
      "#22c55e",
      "#0ea5e9",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Syne / Bold",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "iOS UI Kit",
      "Photoshop"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/0d51d5217bfefe5eb08718fcb634bd76-1731746766056/track%20thumb.png",
    "featuredImgBg": "bg-gradient-to-br from-emerald-950 via-zinc-900 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Display P3",
      "resolution": "Retina Mobile UI",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma UI Kit",
        "SVG Vector Icons",
        "PNG"
      ]
    },
    "designNotes": "Engineered for active athletes, dark mode workouts, and seamless smartwatch sync."
  },
  {
    "id": "mobile-app-food-recipes-03",
    "title": "SavorCraft - Gourmet Recipes & Cooking Guide App",
    "client": "Savor Kitchens",
    "category": "Mobile App",
    "tagline": "Interactive Cooking Steps, Meal Planning & Ingredient Lists",
    "description": "Vibrant recipe discovery mobile application with step-by-step cooking timers, dietary filter tags, video tutorials, and automated grocery list sync.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#ea580c",
      "#f59e0b",
      "#18181b",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Android Material You",
      "Prototyping"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/74eeee6f14f59598a7289cec7e173e36-1732268008483/Food%20recips%20thumb.png",
    "featuredImgBg": "bg-gradient-to-br from-orange-950 via-amber-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Digital",
      "resolution": "4K Retina Display",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Component Kit",
        "SVG Icons",
        "PNG"
      ]
    },
    "designNotes": "Tailored for food enthusiasts, home chefs, and meal preparation planners."
  },
  {
    "id": "mobile-app-saas-interface-04",
    "title": "Aetherial - Modern Mobile App Interface & Design System",
    "client": "Aetherial Tech",
    "category": "Mobile App",
    "tagline": "Neomorphic SaaS Controls, Mobile Analytics & Widget Matrix",
    "description": "Clean, modern mobile app design system featuring interactive dashboard widgets, smooth micro-interactions, and responsive layout guidelines for iOS & Android.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#38bdf8",
      "#818cf8",
      "#f8fafc"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Figma Tokens",
      "Principle"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/727c3586d24f08affc882498299f422c-1728225547103/shot%20130.png",
    "featuredImgBg": "bg-gradient-to-br from-sky-950 via-indigo-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Display",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI Vector Scale",
      "fileFormats": [
        "Figma System",
        "Figma Tokens",
        "PNG Showcase"
      ]
    },
    "designNotes": "Designed for SaaS applications, admin mobile controls, and complex cloud dashboards."
  },
  {
    "id": "mobile-app-hydration-step-counter-05",
    "title": "AquaStep - Hydration & Daily Step Tracking App",
    "client": "AquaStep Health",
    "category": "Mobile App",
    "tagline": "Smart Water Intake Reminders, Pedometer & Health Streaks",
    "description": "Engaging wellness mobile UI combining water hydration tracking with daily step counting, achievement badges, and weekly progress charts.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0284c7",
      "#10b981",
      "#0f172a",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "iOS Human Interface",
      "Adobe Illustrator"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/31c7bdf559ac3385d597bba3e7e07a60-1783237014962/Step%20water.jpg",
    "featuredImgBg": "bg-gradient-to-br from-cyan-950 via-teal-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "Retina 4K",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma UI Kit",
        "SVG Vector Set",
        "PNG"
      ]
    },
    "designNotes": "Motivating health tracking interface built for habit building and daily water goals."
  },
  {
    "id": "mobile-app-recipe-maker-06",
    "title": "FlavorFit - Smart Recipe Maker & Meal Prep App",
    "client": "FlavorFit Global",
    "category": "Mobile App",
    "tagline": "AI Pantry Scanner, Calorie Counting & Custom Recipe Builder",
    "description": "Intuitive culinary mobile UI enabling users to generate recipes based on available pantry ingredients, track macronutrients, and save meal prep schedules.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#16a34a",
      "#eab308",
      "#18181b",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Syne / Bold",
      "body": "Jost"
    },
    "tools": [
      "Figma",
      "Prototyping",
      "Photoshop"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/dc301fd2ebd20458d45bfdbb0fcb4a5a-1783237591837/Recipe%20maker.jpg",
    "featuredImgBg": "bg-gradient-to-br from-green-950 via-yellow-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Display",
      "resolution": "4K Mobile Graphics",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Source",
        "PNG UI Screens",
        "PDF Spec"
      ]
    },
    "designNotes": "Smart culinary experience tailored for dietary customization and grocery management."
  },
  {
    "id": "mobile-app-money-tracker-07",
    "title": "VaultFlow - Personal Finance & Money Tracker App",
    "client": "VaultFlow Financial",
    "category": "Mobile App",
    "tagline": "Automated Expense Categorization, Budgeting & Savings Goals",
    "description": "Sleek fintech mobile app featuring real-time cashflow analytics, monthly budget breakdown cards, recurring bill alerts, and financial goal tracking.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#09090b",
      "#10b981",
      "#6366f1",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Fintech Design System",
      "Figma Auto Layout"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/07e7434405241b7f755de910997c537d-1776323585967/Money%20Tracker%20New%20app.jpg",
    "featuredImgBg": "bg-gradient-to-br from-emerald-950 via-indigo-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI Vector Scale",
      "fileFormats": [
        "Figma Component Kit",
        "SVG Icons",
        "PNG"
      ]
    },
    "designNotes": "High-security financial interface with dark theme elegance and budget clarity."
  },
  {
    "id": "mobile-app-home-rental-08",
    "title": "HavenFinder - Real Estate & Home Rental Mobile App",
    "client": "Haven Real Estate",
    "category": "Mobile App",
    "tagline": "Map Search Filters, Virtual 3D Property Tours & Booking",
    "description": "Modern real estate discovery app with interactive map view, verified property listings, host messaging, and instant lease booking workflows.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#f59e0b",
      "#38bdf8",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "ProtoPie",
      "Adobe XD"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/c94350d0640a481ed7a98fe70b8c7741-1783237914504/Home%20rental%20app.jpg",
    "featuredImgBg": "bg-gradient-to-br from-sky-950 via-amber-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile Graphics",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma File",
        "ProtoPie Mockup",
        "PNG"
      ]
    },
    "designNotes": "Optimized for home buyers, apartment renters, and luxury property managers."
  },
  {
    "id": "mobile-app-crypto-wallet-09",
    "title": "Nexus Crypto - Web3 Wallet & Asset Management App",
    "client": "Nexus Labs",
    "category": "Mobile App",
    "tagline": "Multi-Chain Token Swaps, NFT Gallery & Portfolio Tracking",
    "description": "Dark-mode Web3 crypto wallet interface featuring live token candlestick charts, biometric security authorization, staking yields, and NFT collection previews.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#09090b",
      "#8b5cf6",
      "#06b6d4",
      "#ffffff"
    ],
    "fonts": {
      "heading": "JetBrains Mono / Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Web3 UI Kit",
      "After Effects"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/4f0ab1a763c4ea9af892fbe398a7c473-1776324612097/Crypto%20wallet%20app.jpg",
    "featuredImgBg": "bg-gradient-to-br from-purple-950 via-cyan-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB & P3 Profile",
      "resolution": "4K Mobile Display",
      "vectorDpi": "300 DPI Vector",
      "fileFormats": [
        "Figma Source",
        "SVG Icons",
        "PNG Kit"
      ]
    },
    "designNotes": "Built for DeFi traders, Web3 enthusiasts, and crypto asset portfolio managers."
  },
  {
    "id": "mobile-app-saas-design-system-10",
    "title": "Zenith Mobile UI - SaaS Design System & App Components",
    "client": "Zenith Digital",
    "category": "Mobile App",
    "tagline": "Comprehensive iOS & Android Component Matrix & Micro-Interactions",
    "description": "Master mobile UI component library featuring over 150+ re-usable screen layouts, custom tab bars, navigation drawers, and stateful buttons.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#18181b",
      "#6366f1",
      "#10b981",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Figma Tokens",
      "Design System Matrix"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/7b642e41eaba3aeff2ecdc25b1334708-1722510143483/Preview.jpg",
    "featuredImgBg": "bg-gradient-to-br from-indigo-950 via-emerald-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Display",
      "resolution": "4K High Resolution",
      "vectorDpi": "300 DPI Vector Scale",
      "fileFormats": [
        "Figma Master Library",
        "Tokens JSON",
        "PNG"
      ]
    },
    "designNotes": "Complete mobile component system for rapid prototyping and enterprise mobile design."
  },
  {
    "id": "mobile-app-yumhub-food-delivery-11",
    "title": "YumHub - On-Demand Food Delivery & Restaurant App",
    "client": "YumHub Express",
    "category": "Mobile App",
    "tagline": "Live Courier GPS Tracking, Menu Customizer & Instant Checkout",
    "description": "Vibrant food ordering mobile application with live driver map navigation, customized dish options, reward points tracking, and seamless 1-tap checkout.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#dc2626",
      "#f59e0b",
      "#18181b",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Syne / Bold",
      "body": "Jost"
    },
    "tools": [
      "Figma",
      "Food Tech UI",
      "Adobe Illustrator"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/77328a9f44ef880139f78b276fb43eec-1709358943897/YumHub.jpg",
    "featuredImgBg": "bg-gradient-to-br from-red-950 via-amber-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Digital",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma UI Kit",
        "SVG Icons",
        "PNG"
      ]
    },
    "designNotes": "High-converting mobile UI designed for restaurants, ghost kitchens, and food delivery platforms."
  },
  {
    "id": "mobile-app-transit-mobility-12",
    "title": "MetroGo - Smart Urban Mobility & Transit Navigation",
    "client": "MetroGo Mobility",
    "category": "Mobile App",
    "tagline": "Real-Time Bus & Subway Schedules, Digital Tickets & Route Maps",
    "description": "Clean city transit companion mobile app offering live public transport arrival times, contactless NFC ticket passes, and interactive route guidance.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0284c7",
      "#0f172a",
      "#38bdf8",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Mapbox UI",
      "Prototyping"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/8a208495f8a1a0ba924b204e008e6e51-1784466179772/1000003537.png",
    "featuredImgBg": "bg-gradient-to-br from-sky-950 via-slate-900 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Display",
      "resolution": "4K Mobile Graphics",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma File",
        "SVG Transit Map",
        "PNG"
      ]
    },
    "designNotes": "Accessible transit mobile application engineered for commuters and smart city travelers."
  },
  {
    "id": "mobile-app-task-lifestyle-dashboard-13",
    "title": "DailyFocus - Productivity, Tasks & Lifestyle Dashboard",
    "client": "DailyFocus Inc",
    "category": "Mobile App",
    "tagline": "Habit Building, Daily Planner & Pomodoro Focus Timer",
    "description": "Minimalist productivity mobile UI engineered for goal setting, habit streak tracking, interactive task boards, and focus timer sessions.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#f43f5e",
      "#8b5cf6",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "iOS Human Interface",
      "Adobe XD"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/d412eba436cd19770cc62a5ed1c4be30-1784466707236/1000003540.png",
    "featuredImgBg": "bg-gradient-to-br from-rose-950 via-purple-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Component Kit",
        "PNG UI",
        "PDF Specs"
      ]
    },
    "designNotes": "Refined daily organizer mobile experience promoting focus, habits, and clean task management."
  },
  {
    "id": "mobile-app-digital-wallet-banking-14",
    "title": "PayPulse - NeoBank Digital Wallet & Card Manager",
    "client": "PayPulse Technologies",
    "category": "Mobile App",
    "tagline": "Contactless P2P Money Transfer, Virtual Cards & Spend Analytics",
    "description": "Next-generation mobile banking experience featuring instant peer-to-peer transfers, virtual debit card controls, spending limits, and dark-mode security.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#09090b",
      "#3b82f6",
      "#10b981",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "JetBrains Mono"
    },
    "tools": [
      "Figma",
      "Fintech UI",
      "Figma Auto Layout"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/379e1d31dd808a46bba724c48cae2d93-1784466949291/1000003530.png",
    "featuredImgBg": "bg-gradient-to-br from-blue-950 via-emerald-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile Display",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Source",
        "SVG Icons",
        "PNG Kit"
      ]
    },
    "designNotes": "Secure digital banking UI built for modern neo-banks, virtual cards, and payment processors."
  },
  {
    "id": "mobile-app-ecommerce-shopping-15",
    "title": "Moda Luxe - High-Fashion E-Commerce Mobile App",
    "client": "Moda Luxe Apparel",
    "category": "Mobile App",
    "tagline": "Immersive Lookbooks, AR Try-On & Fast Cart Checkout",
    "description": "Luxury fashion mobile shopping application crafted with high-definition product cards, wishlists, size recommender, and frictionless checkout.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#18181b",
      "#d97706",
      "#71717a",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Jost"
    },
    "tools": [
      "Figma",
      "Shopify Mobile Engine",
      "Photoshop"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/83c238a17aacf00bcd7f3d5a356c4817-1785526195373/Untitled-4.jpg",
    "featuredImgBg": "bg-gradient-to-br from-amber-950 via-zinc-900 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K High Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma UI Kit",
        "PNG Product Screens",
        "PDF Spec"
      ]
    },
    "designNotes": "Premium mobile shopping layout designed for boutique fashion houses and apparel brands."
  },
  {
    "id": "mobile-app-fintech-roger-lai-16",
    "title": "FinNova - Smart Investment & Portfolio Mobile UI",
    "client": "Roger Lai Ventures",
    "category": "Mobile App",
    "tagline": "Automated Stock Investing, Dividends & Asset Allocation",
    "description": "Sophisticated wealth management mobile interface presenting real-time stock ticker graphs, dividend projections, and portfolio risk assessments.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#22c55e",
      "#6366f1",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Fintech Design System",
      "ProtoPie"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/464c8a0581f55c1ece8d1d933b4894f6-1785526436454/Order%20035%20-%20Roger%20Lai.jpg",
    "featuredImgBg": "bg-gradient-to-br from-green-950 via-indigo-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Display P3",
      "resolution": "4K Mobile UI",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Source",
        "SVG Charts",
        "PNG"
      ]
    },
    "designNotes": "Investment dashboard UI designed for stock portfolios, ETF trading, and personal wealth advisors."
  },
  {
    "id": "mobile-app-mockup-showcase-17",
    "title": "OmniApp - Universal Mobile App Framework & Mockups",
    "client": "Omni Digital Studio",
    "category": "Mobile App",
    "tagline": "3D Isometric Smartphone Mockups & App Design System",
    "description": "High-impact 3D device showcase displaying multi-screen app onboarding flows, contextual push notifications, and adaptive light/dark themes.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#09090b",
      "#a855f7",
      "#ec4899",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Syne / ExtraBold",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Photoshop 3D",
      "After Effects"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/d9363239e2e29a259b2ab4ea543c3a29-1751757360620/app%20mockupdfvg.jpg",
    "featuredImgBg": "bg-gradient-to-br from-purple-950 via-fuchsia-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K High Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "3D PSD Mockup",
        "Figma File",
        "PNG"
      ]
    },
    "designNotes": "Designed for App Store preview screenshots, pitch decks, and portfolio showcases."
  },
  {
    "id": "mobile-app-social-chat-18",
    "title": "Chirp & Circle - Real-Time Social Chat & Community App",
    "client": "Circle Networks",
    "category": "Mobile App",
    "tagline": "Voice Rooms, Group Messaging & Media Sharing UI",
    "description": "Modern community mobile messaging interface with voice channel rooms, media attachments, custom chat themes, and reaction badges.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#06b6d4",
      "#f43f5e",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "iOS UI Kit",
      "Prototyping"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/73cd65984690e7a43faad05a08fd6178-1703255149352/202.png",
    "featuredImgBg": "bg-gradient-to-br from-cyan-950 via-rose-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Display",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Source",
        "SVG Chat Icons",
        "PNG"
      ]
    },
    "designNotes": "Interactive social community UI crafted for instant messaging and voice hangouts."
  },
  {
    "id": "mobile-app-ui-mockup-19",
    "title": "Apex Mobile - Enterprise App Interface & Component Kit",
    "client": "Apex Mobile Systems",
    "category": "Mobile App",
    "tagline": "High-Density Enterprise Mobile Dashboards & Navigation",
    "description": "Enterprise-grade mobile application design kit with data tables, multi-step forms, real-time sync indicators, and dark mode interface elements.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#18181b",
      "#3b82f6",
      "#10b981",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Design System Kit",
      "Photoshop"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/6a0e7e9aa9a714373acd40e5d2edc44c-1764741395399/App%20Mockup%2013.png",
    "featuredImgBg": "bg-gradient-to-br from-blue-950 via-emerald-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile Graphics",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma System File",
        "PNG Screens",
        "PDF Spec"
      ]
    },
    "designNotes": "Built for enterprise B2B mobile tools, field operations, and corporate management."
  },
  {
    "id": "mobile-app-health-wellness-20",
    "title": "VitalSync - Health, Sleep & Wellness Tracking App",
    "client": "VitalSync Health",
    "category": "Mobile App",
    "tagline": "Sleep Cycle Analysis, Meditation Guidance & Biometric Logs",
    "description": "Calming wellness mobile UI integrating REM sleep analytics, guided mindfulness audio sessions, daily mood journals, and wearable device sync.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#a855f7",
      "#38bdf8",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "HealthKit Design",
      "Adobe Illustrator"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/88380dce6b32e4cac851fada57905de0-1735768506399/Frame%20427318992.png",
    "featuredImgBg": "bg-gradient-to-br from-purple-950 via-sky-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma File",
        "SVG Wellness Icons",
        "PNG"
      ]
    },
    "designNotes": "Holistic health tracking mobile experience focused on sleep quality, stress reduction, and biometrics."
  },
  {
    "id": "mobile-app-creative-ui-concept-21",
    "title": "Vivid UI - Creative Mobile App Experience & Motion",
    "client": "Vivid Mobile Lab",
    "category": "Mobile App",
    "tagline": "Bold Visual Aesthetics, Custom Gestures & Micro-Animations",
    "description": "Innovative mobile UX exploration featuring custom gesture interactions, vivid color accent transitions, and expressive typography layouts.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#09090b",
      "#f97316",
      "#eab308",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Syne / Bold",
      "body": "Jost"
    },
    "tools": [
      "Figma",
      "Principle",
      "After Effects"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/b80825a7acf416c4b78fb9854f739f18-1722247362611/5_UI.png",
    "featuredImgBg": "bg-gradient-to-br from-orange-950 via-amber-950 to-zinc-950",
    "specifications": {
      "colorSpace": "sRGB Display",
      "resolution": "4K Mobile Resolution",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma Prototype",
        "Motion Video",
        "PNG"
      ]
    },
    "designNotes": "Next-gen creative mobile application designed for Gen-Z engagement and expressive branding."
  },
  {
    "id": "mobile-app-clean-dashboard-22",
    "title": "NovaDash - Clean Mobile Analytics & Control App",
    "client": "NovaDash Tech",
    "category": "Mobile App",
    "tagline": "Real-Time Data Visualization, KPI Cards & User Control Center",
    "description": "High-clarity mobile control dashboard featuring dynamic metric cards, interactive line charts, user activity logs, and push notification alerts.",
    "aspectRatio": "16:9",
    "dimensions": "3840 x 2160 px",
    "palette": [
      "#0f172a",
      "#10b981",
      "#6366f1",
      "#ffffff"
    ],
    "fonts": {
      "heading": "Jost",
      "body": "Inter"
    },
    "tools": [
      "Figma",
      "Mobile Charts Engine",
      "Figma Tokens"
    ],
    "behanceUrl": "https://behance.net/sksolutions",
    "imageUrl": "https://fiverr-res.cloudinary.com/image/upload/f_auto,q_auto:best/v1/attachments/project_item/attachment/e5926ef8ba550c6a82d9007ca2d8d454-1729084983709/5.png",
    "featuredImgBg": "bg-gradient-to-br from-teal-950 via-indigo-950 to-slate-950",
    "specifications": {
      "colorSpace": "sRGB Profile",
      "resolution": "4K Mobile UI",
      "vectorDpi": "300 DPI",
      "fileFormats": [
        "Figma UI Kit",
        "SVG Chart Assets",
        "PNG"
      ]
    },
    "designNotes": "Sleek mobile control center providing real-time operational insights and analytics."
  }
];

export interface GraphicsPortfolioProps {
  selectedCategory?: string;
  onCategorySelect?: (cat: string) => void;
  isHomePage?: boolean;
  onShowMore?: () => void;
}

export function GraphicsPortfolio({
  selectedCategory: externalCategory,
  onCategorySelect,
  isHomePage = false,
  onShowMore
}: GraphicsPortfolioProps = {}) {
  const [internalCategory, setInternalCategory] = useState<string>("All");
  const [activeGraphic, setActiveGraphic] = useState<GraphicItem | null>(null);
  const [copiedHex, setCopiedHex] = useState<string | null>(null);

  const selectedCategory = externalCategory !== undefined ? externalCategory : internalCategory;

  const handleSelectCategory = (cat: string) => {
    if (onCategorySelect) {
      onCategorySelect(cat);
    }
    setInternalCategory(cat);
  };

  const categories = [
    "All",
    "Logos & Marks",
    "Brand Identity",
    "Social Media Kits",
    "Mobile App",
    "Packaging & Print",
    "Marketing Banners"
  ];

  const filteredProjects = GRAPHIC_PROJECTS.filter((project) => {
    if (selectedCategory === "All") return true;
    const cat = (selectedCategory || "").toLowerCase().trim();
    const projCat = (project.category || "").toLowerCase().trim();

    if (cat === "logos & marks" || cat === "logos" || cat === "marks" || cat === "logo") {
      return projCat === "logos & marks" || project.title.toLowerCase().includes("logo");
    }
    if (cat === "brand identity" || cat === "branding" || cat === "identity") {
      return projCat === "brand identity" || projCat.includes("brand");
    }
    if (cat === "social media kits" || cat === "social media" || cat === "social" || cat === "canva systems") {
      return projCat === "social media kits" || project.title.toLowerCase().includes("social") || project.description.toLowerCase().includes("social");
    }
    if (cat === "mobile app" || cat === "mobile app ui" || cat === "mobile" || cat === "app icon" || cat === "apps") {
      return projCat === "mobile app" || project.title.toLowerCase().includes("app");
    }
    if (cat === "packaging & print" || cat === "packaging" || cat === "print") {
      return projCat === "packaging & print" || projCat.includes("packaging");
    }
    if (cat === "marketing banners" || cat === "marketing" || cat === "banners" || cat === "banner") {
      return projCat === "marketing banners" || project.title.toLowerCase().includes("banner");
    }
    return projCat === cat;
  });

  const projectsToDisplay = isHomePage
    ? filteredProjects.slice(0, 5)
    : filteredProjects;

  const copyToClipboard = (hex: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(hex).catch(() => {});
      }
    } catch {}
    setCopiedHex(hex);
    setTimeout(() => setCopiedHex(null), 2000);
  };

  return (
    <section
      id="graphics-portfolio"
      className="py-28 border-t border-zinc-800/60 scroll-mt-24 text-left"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 space-y-16">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-4 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/60 border border-purple-800/60 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest rounded-md">
              <Smartphone className="w-3.5 h-3.5 text-purple-400" />
              Mobile App & Graphic Design Studio
            </div>
            <h2 className="font-serif text-3xl md:text-5xl font-black tracking-tight text-white">
              Graphics & Mobile App Portfolio
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore bespoke Mobile App UI designs, high-converting social campaign kits, vector monograms, and luxury print assets engineered to give digital products an unforgettable visual edge.
            </p>
          </div>

          {/* Creative Studio Badge */}
          <div className="flex items-center gap-4 p-4 bg-zinc-900/80 border border-zinc-800 rounded-xl font-mono text-xs shrink-0 backdrop-blur-sm">
            <div className="space-y-0.5">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Design Tooling</span>
              <span className="text-white font-bold text-sm">Figma + Mobile App UI</span>
            </div>
            <div className="w-px h-8 bg-zinc-800"></div>
            <div className="space-y-0.5">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Vector Precision</span>
              <span className="text-purple-300 font-bold text-sm">300 DPI Print / 4K</span>
            </div>
          </div>
        </div>

        {/* CATEGORY FILTER TABS */}
        <div className="flex flex-nowrap sm:flex-wrap gap-2 pt-2 border-b border-zinc-800/60 pb-4 sm:pb-6 overflow-x-auto no-scrollbar -mx-2 px-2 sm:mx-0 sm:px-0">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => handleSelectCategory(cat)}
              className={`px-4 py-2 text-[10px] font-mono tracking-widest uppercase font-bold rounded-lg transition-all cursor-pointer shrink-0 whitespace-nowrap ${
                selectedCategory === cat
                  ? "bg-purple-600 text-white font-bold shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-500"
                  : "bg-zinc-900/80 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-800/50"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* GRAPHICS GALLERY GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsToDisplay.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/80 border border-zinc-800/80 rounded-2xl hover:border-purple-500/50 transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-lg backdrop-blur-sm"
            >
              <div>
                {/* Visual Canvas Mockup Card Container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-zinc-800 flex flex-col justify-between">
                  {project.imageUrl && (
                    <img
                      src={project.imageUrl}
                      alt={project.title}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 [image-rendering:-webkit-optimize-contrast]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallbackTried && project.fallbackUrl) {
                          target.dataset.fallbackTried = "true";
                          target.src = project.fallbackUrl;
                        } else if (target.dataset.fallbackTried !== "final") {
                          target.dataset.fallbackTried = "final";
                          target.src = "/graphics/9d55f6220534229.67c9db72b524d.webp";
                        }
                      }}
                    />
                  )}

                  {/* Top Bar inside Canvas Card */}
                  <div className="absolute top-0 inset-x-0 p-3.5 bg-gradient-to-b from-zinc-950/80 via-zinc-950/30 to-transparent flex items-center justify-between z-10 text-[9px] font-mono">
                    <span className="px-2.5 py-0.5 bg-purple-950/80 border border-purple-700/50 uppercase font-bold text-purple-300 tracking-widest rounded shadow">
                      {project.category}
                    </span>
                    <span className="px-2 py-0.5 bg-zinc-900/90 text-zinc-300 font-bold uppercase rounded border border-zinc-700 shadow">
                      {project.aspectRatio} Vector
                    </span>
                  </div>

                  {/* Color Palette Swatches Bottom Overlay */}
                  <div className="absolute bottom-0 inset-x-0 p-3 bg-gradient-to-t from-zinc-950/90 via-zinc-950/40 to-transparent flex items-center justify-between z-10 text-[9px] font-mono">
                    <div className="flex gap-1.5">
                      {project.palette.map((color) => (
                        <span
                          key={color}
                          className="w-3.5 h-3.5 rounded-full border border-zinc-700/80 shadow-md"
                          style={{ backgroundColor: color }}
                          title={`Hex: ${color}`}
                        ></span>
                      ))}
                    </div>
                    <span className="font-mono text-[9px] text-zinc-300 font-bold bg-zinc-950/80 px-2 py-0.5 rounded border border-zinc-800">
                      {project.dimensions}
                    </span>
                  </div>
                </div>

                {/* Card Title & Content Section */}
                <div className="p-6 space-y-3 text-left">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                    {project.client}
                  </span>
                  <h3 className="text-lg font-serif font-bold text-white tracking-tight leading-snug group-hover:text-purple-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-xs text-zinc-400 leading-relaxed min-h-[50px]">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {project.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 text-[9px] font-mono text-zinc-300 font-bold uppercase rounded"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-6 pt-0 border-t border-zinc-800/50 flex items-center justify-between gap-3 mt-4">
                <button
                  onClick={() => setActiveGraphic(project)}
                  className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[10px] font-mono font-black uppercase tracking-widest transition-all flex items-center justify-center gap-2 cursor-pointer rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.35)] hover:shadow-purple-500/50 hover:scale-[1.02]"
                >
                  Inspect Design System <Maximize2 className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}

          {/* 6th Item: Show More Button Card (Only rendered on Home page) */}
          {isHomePage && (
            <div
              onClick={onShowMore}
              className="bg-gradient-to-br from-purple-600/10 via-zinc-900 to-zinc-950 border border-purple-500/40 hover:border-purple-400 rounded-2xl transition-all duration-300 flex flex-col items-center justify-center p-8 text-center group cursor-pointer shadow-xl relative overflow-hidden min-h-[380px]"
            >
              {/* Background ambient glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/10 via-transparent to-transparent opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              <div className="p-4 rounded-2xl bg-purple-600/10 border border-purple-500/30 text-purple-400 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 mb-6 shadow-lg group-hover:scale-110">
                <ArrowRight className="w-8 h-8 transition-transform group-hover:translate-x-1" />
              </div>

              <div className="space-y-2 max-w-xs relative z-10">
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-purple-400 font-bold block">
                  Complete Gallery
                </span>
                <h3 className="text-xl font-serif font-black text-white group-hover:text-purple-300 transition-colors">
                  Show More Projects
                </h3>
                <p className="text-xs text-zinc-400 leading-relaxed font-sans pt-1">
                  View full portfolio of logos, maps, brand identity guidelines, Mobile App UI systems & design work.
                </p>
              </div>

              <div className="mt-8 px-6 py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-black uppercase tracking-widest rounded-xl shadow-[0_0_20px_rgba(147,51,234,0.35)] group-hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all flex items-center gap-2 relative z-10 cursor-pointer">
                <span>View Full Portfolio ({GRAPHIC_PROJECTS.length}+ Items)</span>
                <ArrowRight className="w-4 h-4" />
              </div>
            </div>
          )}
        </div>

        {/* Empty State if filter returns no items */}
        {projectsToDisplay.length === 0 && (
          <div className="p-12 text-center bg-zinc-900/60 border border-zinc-800 rounded-2xl space-y-4 max-w-xl mx-auto">
            <Palette className="w-10 h-10 text-purple-400 mx-auto opacity-80" />
            <h3 className="text-xl font-serif font-bold text-white">No Assets Found in &ldquo;{selectedCategory}&rdquo;</h3>
            <p className="text-xs text-zinc-400 font-mono">
              Try selecting another category or view all design specimens.
            </p>
            <button
              onClick={() => handleSelectCategory("All")}
              className="px-5 py-2.5 bg-purple-600 text-white text-xs font-mono font-black uppercase tracking-widest rounded-xl hover:bg-purple-500 transition-all cursor-pointer shadow-md"
            >
              Show All Design Works ({GRAPHIC_PROJECTS.length} Items)
            </button>
          </div>
        )}

      </div>

      {/* DESIGN SYSTEM SPECIFICATION MODAL */}
      {activeGraphic && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
          <div
            className="bg-zinc-900 border border-zinc-800 max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left rounded-2xl my-auto transition-all animate-in fade-in zoom-in-95 duration-200"
          >
              {/* Modal Top Control Header */}
              <div className="sticky top-0 z-20 bg-zinc-950 text-white px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-2.5 min-w-0">
                  <Palette className="w-4 h-4 text-purple-400 shrink-0" />
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold text-zinc-300 truncate">
                    Graphic Asset Specimen // {activeGraphic.title}
                  </span>
                </div>

                <button
                  onClick={() => setActiveGraphic(null)}
                  className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer rounded-lg hover:bg-zinc-800 shrink-0"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Main Content */}
              <div className="p-4 sm:p-8 space-y-6">
                
                {/* Visual Canvas Display */}
                <div className="relative rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
                  {activeGraphic.imageUrl && (
                    <img
                      src={activeGraphic.imageUrl}
                      alt={activeGraphic.title}
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto max-h-[600px] object-contain mx-auto [image-rendering:-webkit-optimize-contrast]"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallbackTried && activeGraphic.fallbackUrl) {
                          target.dataset.fallbackTried = "true";
                          target.src = activeGraphic.fallbackUrl;
                        } else if (target.dataset.fallbackTried !== "final") {
                          target.dataset.fallbackTried = "final";
                          target.src = "/graphics/9d55f6220534229.67c9db72b524d.webp";
                        }
                      }}
                    />
                  )}
                  <div className="absolute top-3 left-3 right-3 flex justify-between items-center font-mono text-[9px] sm:text-xs z-10 gap-2">
                    <span className="px-2.5 sm:px-3 py-1 bg-purple-950/80 border border-purple-700/50 uppercase font-black text-purple-300 tracking-widest rounded shadow truncate">
                      {activeGraphic.category}
                    </span>
                    <span className="text-zinc-300 uppercase font-bold bg-zinc-900/90 px-2 sm:px-2.5 py-1 rounded border border-zinc-700 shadow shrink-0">
                      {activeGraphic.dimensions}
                    </span>
                  </div>
                </div>

                {/* Modal Title & Swatches */}
                <div className="p-4 sm:p-6 bg-zinc-950/60 border border-zinc-800/80 rounded-xl space-y-4">
                  <div className="space-y-1">
                    <span className="text-[10px] font-mono uppercase tracking-widest text-purple-400 font-bold block">
                      CLIENT: {activeGraphic.client}
                    </span>
                    <h3 className="text-2xl sm:text-3xl font-serif font-black text-white tracking-tight">
                      {activeGraphic.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 font-mono">
                      {activeGraphic.tagline}
                    </p>
                  </div>

                  {/* Interactive Swatches Bar */}
                  <div className="pt-4 border-t border-zinc-800/80 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
                    <span className="text-zinc-400 text-[10px] uppercase font-bold">Click swatch to copy hex code:</span>
                    <div className="flex items-center gap-2">
                      {activeGraphic.palette.map((hex) => (
                        <button
                          key={hex}
                          onClick={() => copyToClipboard(hex)}
                          className="flex items-center gap-1.5 px-2.5 py-1 bg-zinc-900/90 border border-zinc-700/80 hover:border-purple-400 transition-colors text-[10px] font-bold text-zinc-200 cursor-pointer rounded"
                        >
                          <span className="w-3 h-3 rounded-full" style={{ backgroundColor: hex }}></span>
                          <span>{hex}</span>
                          {copiedHex === hex && <Check className="w-3 h-3 text-emerald-400" />}
                        </button>
                      ))}
                    </div>
                  </div>

                </div>

                {/* Detailed Specifications Grid */}
                <div className="grid md:grid-cols-2 gap-8">
                  
                  {/* Left Column: Typographic & Technical Specs */}
                  <div className="space-y-6">
                    
                    <div className="p-5 bg-zinc-950/60 border border-zinc-800/80 rounded-xl space-y-3">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-black block">
                        Typographic Pairing
                      </span>
                      <div className="space-y-2 font-mono text-xs text-zinc-300">
                        <div className="space-y-0.5">
                          <span className="text-[10px] text-zinc-500 block uppercase">Heading Specimen:</span>
                          <span className="font-bold text-purple-300 font-serif text-sm">{activeGraphic.fonts.heading}</span>
                        </div>
                        <div className="space-y-0.5 pt-2 border-t border-zinc-800/60">
                          <span className="text-[10px] text-zinc-500 block uppercase">Body & Metadata Specimen:</span>
                          <span className="font-bold text-white">{activeGraphic.fonts.body}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-5 bg-zinc-950/60 border border-zinc-800/80 rounded-xl space-y-3">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-black block">
                        File & Color Export Metadata
                      </span>
                      <div className="space-y-1.5 font-mono text-xs text-zinc-300">
                        <div className="flex justify-between py-1 border-b border-zinc-800/60">
                          <span className="text-zinc-500">Color Profile:</span>
                          <span className="font-bold text-white">{activeGraphic.specifications.colorSpace}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800/60">
                          <span className="text-zinc-500">Resolution Standard:</span>
                          <span className="font-bold text-white">{activeGraphic.specifications.resolution}</span>
                        </div>
                        <div className="flex justify-between py-1">
                          <span className="text-zinc-500">Print Scale:</span>
                          <span className="font-bold text-white">{activeGraphic.specifications.vectorDpi}</span>
                        </div>
                      </div>
                    </div>

                  </div>

                  {/* Right Column: Designer Notes & Deliverables */}
                  <div className="space-y-6">
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-black uppercase text-white tracking-wider">
                        Design Rationale & Composition Notes
                      </h4>
                      <p className="text-xs text-zinc-400 leading-relaxed bg-zinc-950/60 p-4 border border-zinc-800/60 rounded-xl">
                        {activeGraphic.designNotes}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-black block">
                        Master Formats Enqueued
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeGraphic.specifications.fileFormats.map((fmt) => (
                          <span
                            key={fmt}
                            className="px-2.5 py-1 bg-zinc-800/80 border border-zinc-700/60 text-[10px] font-mono text-zinc-300 font-bold uppercase rounded"
                          >
                            {fmt}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-[9px] font-mono text-zinc-400 uppercase tracking-widest font-black block">
                        Primary Tools & Software
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeGraphic.tools.map((tool) => (
                          <span
                            key={tool}
                            className="px-2.5 py-1 bg-purple-950/80 text-purple-300 border border-purple-700/50 text-[10px] font-mono font-bold uppercase rounded"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                </div>

              </div>

              {/* Modal Bottom Action Bar */}
              <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-b-2xl">
                <a
                  href={activeGraphic.behanceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center sm:justify-start gap-2 text-xs font-mono font-bold text-zinc-400 hover:text-white uppercase tracking-wider"
                >
                  View Full Behance Case Study <ExternalLink className="w-3.5 h-3.5 text-purple-400" />
                </a>

                <a
                  href="#contact"
                  onClick={() => setActiveGraphic(null)}
                  className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-black uppercase tracking-widest transition-all rounded-xl text-center shadow-[0_0_20px_rgba(147,51,234,0.35)] cursor-pointer hover:shadow-purple-500/50 hover:scale-[1.02] whitespace-nowrap"
                >
                  Request Custom Graphics Kit
                </a>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}
