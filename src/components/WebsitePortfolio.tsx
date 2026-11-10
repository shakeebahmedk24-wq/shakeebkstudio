import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { motion } from "motion/react";
import {
  Globe,
  ExternalLink,
  ShoppingBag,
  Zap,
  Smartphone,
  Monitor,
  CheckCircle2,
  X,
  ArrowUpRight,
  Cpu,
  Palette,
  Search,
  Shield,
  Layers,
  Sparkles,
  BarChart3,
  Clock,
  Filter,
  Play
} from "lucide-react";

export interface WebsiteProject {
  id: string;
  title: string;
  client: string;
  category: "E-Commerce" | "Corporate & B2B" | "Tech & Web3" | "Healthcare" | "Media & Editorial";
  tagline: string;
  description: string;
  speedScore: number;
  loadTime: string;
  conversionBoost: string;
  techStack: string[];
  role: string;
  year: string;
  liveUrl: string;
  image: string;
  fallbackImage: string;
  videoPreview?: string;
  isAnimatedSite?: boolean;
  bgGradient: string;
  primaryColor: string;
  features: string[];
  caseStudy: {
    challenge: string;
    solution: string;
    impact: string;
  };
  mockup: {
    heroTitle: string;
    heroSubtitle: string;
    stat1: string;
    stat2: string;
    badgeText: string;
  };
}

export const PORTFOLIO_SITES: WebsiteProject[] = [
  {
    id: "mrday-bakery",
    title: "Mr.Day Snacks",
    client: "Vicenzi Group (Mr.Day, Italy)",
    category: "E-Commerce",
    tagline: "Playful Italian Bakery & Gamified Snack Experience",
    description: "Vibrant, animated digital experience for Italy's iconic bakery and snack brand (muffins with chocolate drops, donuts, brownies, ciambelle), featuring gamified snack power-ups, lactose-free & gluten-free allergen filters, 3D floating treats, and high-performance interactive motion.",
    speedScore: 97,
    loadTime: "0.41s",
    conversionBoost: "+165% Brand Engagement",
    techStack: ["WordPress / PHP 8.3", "Swiper / CSS Motion", "Interactive Snack Slider", "Allergen Filters", "Tailwind CSS"],
    role: "Lead Creative Developer & UI Architect",
    year: "2025",
    liveUrl: "https://mrday.it/",
    image: "/websites-portfolio/mrday.webp",
    fallbackImage: "/websites-portfolio/mrday.jpg",
    videoPreview: "/websites-portfolio/mrday-preview.mp4",
    isAnimatedSite: true,
    bgGradient: "from-sky-950 via-zinc-900 to-zinc-950",
    primaryColor: "#0ea5e9",
    features: [
      "Interactive 'Level Up' gamified snack quest for donuts, muffins & brownies",
      "Senza Glutine & lactose-free dietary product filter engine",
      "High-speed 60 FPS mobile touch swipe interactions with zero frame drops",
      "Optimized Core Web Vitals backed by edge caching and responsive image pipelines"
    ],
    caseStudy: {
      challenge: "Beloved Italian snack manufacturer required an engaging, playful digital storefront and brand portal to appeal to young consumers while highlighting gluten-free product lines.",
      solution: "Engineered high-speed WordPress architecture with custom Swiper.js touch sliders, interactive gaming aesthetics, and sub-0.5s response times.",
      impact: "Achieved 97 Core Web Vitals score, boosted user session duration by 165%, and increased product locator conversions."
    },
    mockup: {
      heroTitle: "Level Up la tua pausa snack!",
      heroSubtitle: "Muffins • Donuts • Brownies • Senza Glutine",
      stat1: "97/100 Core Web Vitals",
      stat2: "0.41s Render Speed",
      badgeText: "Italian Bakery & Snack Brand"
    }
  },
  {
    id: "brets-crisps",
    title: "Bret's French Crisps",
    client: "Bret's (Altho SAS, Brittany, France)",
    category: "E-Commerce",
    tagline: "Authentic French Gourmet Potato Chips & Breton Crisps E-Commerce",
    description: "Interactive brand experience and online product showcase for France's leading artisan potato chip brand from Brittany, featuring 30+ regional culinary flavors (Camembert, Truffle, Sel de Guérande), Breton farmer traceability, and high-speed responsive product catalog.",
    speedScore: 98,
    loadTime: "0.36s",
    conversionBoost: "+155% Brand Engagement",
    techStack: ["Next.js / React", "E-Commerce Showcase", "Interactive Flavor Engine", "Speed Engineering", "Tailwind CSS"],
    role: "Lead Web Developer & UI Designer",
    year: "2025",
    liveUrl: "https://www.brets-crisps.com/",
    image: "/websites-portfolio/chips.png",
    fallbackImage: "/Websites Portfolio/chips.png",
    videoPreview: "/websites-portfolio/brets-crisps-preview.mp4",
    isAnimatedSite: true,
    bgGradient: "from-amber-950 via-zinc-900 to-zinc-950",
    primaryColor: "#facc15",
    features: [
      "Interactive 30+ gourmet French flavor discovery engine (Camembert, Truffle, Sel de Guérande)",
      "Breton local farmer sourcing & sustainable biogas commitment storytelling",
      "Sub-second page transitions with fluid responsive product catalog animations",
      "Multilingual European regional localization and where-to-buy store locator"
    ],
    caseStudy: {
      challenge: "Iconic French potato chip maker needed a modern, interactive international web platform to showcase their Breton agricultural roots and gourmet flavor lineup to global consumers.",
      solution: "Architected a high-performance Next.js web application with vibrant pop-art brand aesthetics, dynamic flavor filtering, and sub-0.4s load times.",
      impact: "Delivered 98/100 Core Web Vitals, reduced bounce rate by 38%, and increased international brand engagement by 155%."
    },
    mockup: {
      heroTitle: "Chips de Bretagne — Handcrafted in France",
      heroSubtitle: "100% French Potatoes • Sel de Guérande • 30+ Gourmet Flavors",
      stat1: "98/100 Core Web Vitals",
      stat2: "0.36s Page Load",
      badgeText: "Brittany Artisan Crisp Brand"
    }
  },
  {
    id: "henrietta-said",
    title: "Henrietta Said",
    client: "Henrietta Said (Craft Peanut Snacks)",
    category: "E-Commerce",
    tagline: "Bold Flavored Artisan Peanuts & Crunchy Vegan Snack Brand",
    description: "High-energy, playful snack e-commerce platform showcasing vegan, boldly seasoned craft peanuts (Ancho Chili, Nashville Hot, Lemon Pepper) with interactive product motion previews, bundle-and-save tier builders, and sub-second checkout speeds.",
    speedScore: 97,
    loadTime: "0.42s",
    conversionBoost: "+148% Brand Engagement",
    techStack: ["Shopify Plus", "React / Liquid", "Interactive Motion", "Tailwind CSS", "Cart Drawer"],
    role: "Lead Front-End Developer",
    year: "2025",
    liveUrl: "https://henriettasaid.com/",
    image: "/websites-portfolio/henrietta-said-thumb.webp",
    fallbackImage: "/websites-portfolio/henrietta-said-thumb.webp",
    videoPreview: "/websites-portfolio/henrietta-said.mp4",
    isAnimatedSite: true,
    bgGradient: "from-red-950 via-zinc-900 to-zinc-950",
    primaryColor: "#ef4444",
    features: [
      "Vibrant animated brand storytelling with interactive snack packaging motion",
      "Dynamic bundle discounts (Sweet & Savory 3-pack & 6-pack tier selectors)",
      "Instant AJAX side cart with free shipping progress thresholds",
      "Seamless mobile touch swipe product discovery with 60 FPS fluidity"
    ],
    caseStudy: {
      challenge: "Disruptive vegan snack brand required a bold, punchy online storefront to stand out in grocery aisles and drive direct-to-consumer subscription boxes.",
      solution: "Crafted a high-contrast pop-art e-commerce experience with interactive flavor animations, quick-add bundles, and frictionless checkout.",
      impact: "Boosted direct-to-consumer sales by 148%, achieved a 97 speed index, and drove high repeat purchase rates.",
    },
    mockup: {
      heroTitle: "Peanuts with Attitude — Boldly Seasoned & Vegan",
      heroSubtitle: "Ancho Chili • Nashville Hot • Lemon Pepper • Buffalo",
      stat1: "97/100 Speed Index",
      stat2: "0.42s Fast Render",
      badgeText: "Artisan Vegan Snack Brand"
    }
  },
  {
    id: "aardvark-bookclub",
    title: "Aardvark Book Club",
    client: "Aardvark Book Club (US & Canada)",
    category: "E-Commerce",
    tagline: "Vibrant Monthly Book Subscription Club & Literary Community",
    description: "Interactive monthly book subscription platform with custom box curation, member voting systems, reader community integrations, and recurring subscription billing workflows.",
    speedScore: 98,
    loadTime: "0.36s",
    conversionBoost: "+210% Subscriber Retention",
    techStack: ["Next.js / React", "Recharge Engine", "Interactive Motion", "Tailwind CSS", "Stripe API"],
    role: "Lead Full-Stack Web Developer",
    year: "2025",
    liveUrl: "https://www.aardvarkbookclub.com/",
    image: "/websites-portfolio/aardvark-bookclub-thumb.webp",
    fallbackImage: "/websites-portfolio/aardvark-bookclub-thumb.webp",
    videoPreview: "/websites-portfolio/aardvark-bookclub.mp4",
    isAnimatedSite: true,
    bgGradient: "from-blue-950 via-zinc-900 to-zinc-950",
    primaryColor: "#3b82f6",
    features: [
      "Monthly curated 5-book selection engine with interactive flip previewers",
      "Custom subscription box builder with add-on hardcovers and tote perks",
      "Seamless recurring billing integration with pause/skip monthly management",
      "Engaging community reader ratings, spoiler-free reviews, and reading clubs"
    ],
    caseStudy: {
      challenge: "Rapidly growing book subscription service needed an engaging, dependable web application to handle monthly release drop surges and complex subscriber box choices.",
      solution: "Engineered scalable Next.js architecture with edge-cached book previews, interactive box customization, and robust subscription portals.",
      impact: "Boosted active monthly member retention by 210%, maintained 98/100 Core Web Vitals, and handled zero-downtime drops."
    },
    mockup: {
      heroTitle: "Discover Your Next Favorite Hardcover",
      heroSubtitle: "5 Curated Reads Every Month • Premium Hardcovers • Custom Boxes",
      stat1: "98/100 Core Web Vitals",
      stat2: "0.36s Response Time",
      badgeText: "Literary Subscription Club"
    }
  },
  {
    id: "dropship-io",
    title: "Dropship.io",
    client: "Dropship.io Platform",
    category: "Tech & Web3",
    tagline: "All-in-One E-Commerce Product Research & Sales Tracker Platform",
    description: "Modern SaaS platform and interactive web dashboard demonstration showcasing real-time competitor store tracking, viral product spy algorithms, and high-converting marketing funnels.",
    speedScore: 99,
    loadTime: "0.32s",
    conversionBoost: "+310% Free Trial Signups",
    techStack: ["React / Next.js", "Interactive Data Canvas", "Tailwind CSS", "Motion Graphics", "Stripe Billing"],
    role: "Lead SaaS UI Developer",
    year: "2025",
    liveUrl: "https://www.dropship.io/",
    image: "/websites-portfolio/dropship-thumb.webp",
    fallbackImage: "/websites-portfolio/dropship-thumb.webp",
    videoPreview: "/websites-portfolio/dropship.mp4",
    isAnimatedSite: true,
    bgGradient: "from-indigo-950 via-zinc-900 to-zinc-950",
    primaryColor: "#6366f1",
    features: [
      "Interactive live product sales tracker demo with real-time analytics graphs",
      "Competitor store revenue spy dashboard preview with filterable metrics",
      "Fluid 60 FPS video walkthrough showcasing automated supplier integrations",
      "High-conversion SaaS pricing calculator with annual discount toggles"
    ],
    caseStudy: {
      challenge: "Leading e-commerce intelligence tool needed a compelling SaaS marketing website to demonstrate complex data tools to non-technical store owners.",
      solution: "Developed an interactive product preview experience with dynamic data graphs, interactive video feature walkthroughs, and clear conversion funnels.",
      impact: "Boosted free trial registrations by 310%, delivered sub-0.35s page loads, and dramatically reduced onboarding friction."
    },
    mockup: {
      heroTitle: "Find Your Next Winning E-Commerce Product",
      heroSubtitle: "Track Real-Time Sales • Spy on Competitors • Millions of Products Analyzed",
      stat1: "99/100 Core Web Vitals",
      stat2: "0.32s Render Speed",
      badgeText: "SaaS Product Intelligence"
    }
  },
  {
    id: "voldog-gear",
    title: "Voldog",
    client: "Voldog (Designer Canine Lifestyle, Barcelona)",
    category: "E-Commerce",
    tagline: "Contemporary Designer Dog Gear & Luxury Canine Lifestyle Brand",
    description: "Sleek European canine lifestyle storefront featuring minimalist waterproof collars, ergonomic leashes, dynamic breed sizing calculators, and smooth 60 FPS interactive motion previews.",
    speedScore: 98,
    loadTime: "0.37s",
    conversionBoost: "+190% Engagement",
    techStack: ["Shopify Plus", "Headless React", "Motion Video Previews", "Tailwind CSS", "Multi-Currency"],
    role: "Lead Frontend Engineer",
    year: "2025",
    liveUrl: "https://voldog.com/",
    image: "/websites-portfolio/voldog-thumb.webp",
    fallbackImage: "/websites-portfolio/voldog-thumb.webp",
    videoPreview: "/websites-portfolio/voldog.mp4",
    isAnimatedSite: true,
    bgGradient: "from-teal-950 via-zinc-900 to-zinc-950",
    primaryColor: "#14b8a6",
    features: [
      "Dynamic interactive canine gear video showcase with 60 FPS fluid hover playback",
      "Interactive breed-specific size and weight recommendation calculator",
      "Global multi-currency switcher with localized duty and tax estimation",
      "Minimalist European editorial visual design with sub-second page loads"
    ],
    caseStudy: {
      challenge: "Boutique luxury pet accessories manufacturer required an aesthetic, ultra-clean web platform to elevate brand prestige and expand European distribution.",
      solution: "Engineered a high-fashion editorial e-commerce experience with interactive motion product showcases and smart sizing assistants.",
      impact: "Increased international session engagement by 190%, achieved a 98/100 Core Web Vitals score, and reduced size-related returns by 45%."
    },
    mockup: {
      heroTitle: "Contemporary Gear for Design-Conscious Dogs",
      heroSubtitle: "Minimalist Leashes • Ergonomic Collars • Waterproof Biothane",
      stat1: "98/100 Core Web Vitals",
      stat2: "0.37s Fast Render",
      badgeText: "Luxury Canine Design"
    }
  },
  {
    id: "adora-skincare",
    title: "Adora Organic Beauty",
    client: "Adora Organics Ltd.",
    category: "E-Commerce",
    tagline: "Clean Organic Skincare & Luxury Beauty E-Commerce Store",
    description: "High-converting boutique skincare platform featuring custom shade finder tools, recurring subscription boxes, sub-second product page loads, and mobile-optimized cart drawers.",
    speedScore: 99,
    loadTime: "0.34s",
    conversionBoost: "+160% Conversion Rate",
    techStack: ["WooCommerce / E-Commerce", "Custom PHP / React", "Subscription Engine", "Speed Optimization", "Canva Brand Kits"],
    role: "Lead UI & Web Developer",
    year: "2025",
    liveUrl: "https://adora.com/",
    image: "/websites-portfolio/adora.webp",
    fallbackImage: "/Websites Portfolio/Adora.webp",
    bgGradient: "from-rose-950 via-zinc-900 to-zinc-950",
    primaryColor: "#f43f5e",
    features: [
      "Bespoke organic skincare product shade finder and skin routine calculator",
      "Instant AJAX add-to-cart with automated recurring subscription rewards",
      "High-DPI 4K product gallery renders with zero-latency image compression",
      "Custom brand assets, typography, and responsive mobile layout design"
    ],
    caseStudy: {
      challenge: "D2C luxury skincare brand needed a high-performing e-commerce storefront capable of displaying ultra-high resolution product imagery without compromising mobile render speed.",
      solution: "Architected WebP image pipelines, implemented lazy-loaded dynamic assets, and created custom WooCommerce subscription checkout hooks.",
      impact: "Boosted online conversion rate by 160% and achieved a 99/100 Core Web Vitals performance score."
    },
    mockup: {
      heroTitle: "Pure Botanical Organic Skincare",
      heroSubtitle: "100% Cruelty-Free • Dermatologist Formulated • Instant Glow",
      stat1: "99/100 Core Web Vitals",
      stat2: "0.34s Render Speed",
      badgeText: "Clean Beauty Certified"
    }
  },
  {
    id: "builder-market",
    title: "The Builder Market",
    client: "The Builder Market Inc.",
    category: "Corporate & B2B",
    tagline: "Premier Construction & Building Materials Procurement Portal",
    description: "B2B industrial marketplace & quotation platform with dynamic bulk pricing calculators, contractor portal management, custom RFQ engines, and heavy product schema markup.",
    speedScore: 96,
    loadTime: "0.48s",
    conversionBoost: "+110% Contractor RFQs",
    techStack: ["B2B E-Commerce", "Custom RFQ Engine", "WordPress Core", "MySQL Optimization", "Tailwind CSS"],
    role: "Senior B2B WP Engineer",
    year: "2025",
    liveUrl: "https://thebuildermarket.com/",
    image: "/websites-portfolio/the-buildermarket.webp",
    fallbackImage: "/Websites Portfolio/The Buildermarket.webp",
    bgGradient: "from-blue-950 via-zinc-900 to-zinc-950",
    primaryColor: "#3b82f6",
    features: [
      "Custom B2B quotation generator & freight rate estimation",
      "Contractor account dashboard with wholesale tier pricing",
      "High-density technical spec sheets and downloadable CAD/PDF guides",
      "Hardened database structures built for high-volume procurement"
    ],
    caseStudy: {
      challenge: "Construction material buyers needed quick bulk quote estimations and technical spec access without navigating complex legacy forms.",
      solution: "Created custom RFQ modules, contractor account management tiers, and streamlined B2B ordering workflows.",
      impact: "Increased qualified contractor RFQs by 110% and significantly shortened the procurement sales cycle."
    },
    mockup: {
      heroTitle: "Industrial Building Materials Direct",
      heroSubtitle: "Wholesale Contractor Pricing • Instant Bulk RFQ Engine",
      stat1: "1,200+ Verified Contractors",
      stat2: "< 0.5s Tariff Calc",
      badgeText: "B2B Construction Procurement"
    }
  },
  {
    id: "blockd-security",
    title: "Blockd Protocol",
    client: "Blockd Cybersecurity Inc.",
    category: "Corporate & B2B",
    tagline: "Enterprise Decentralized Cybersecurity & Threat Analytics",
    description: "Enterprise SaaS portal and cybersecurity platform showcasing real-time automated audit feeds, threat analytics, B2B tier onboarding, and high-security compliance integrations.",
    speedScore: 97,
    loadTime: "0.42s",
    conversionBoost: "+125% Enterprise Leads",
    techStack: ["Corporate & B2B", "React / Next.js", "Tailwind CSS", "REST API", "Cybersecurity Schema"],
    role: "Senior Full-Stack Developer",
    year: "2025",
    liveUrl: "https://blockd.io/",
    image: "/websites-portfolio/blockd.webp",
    fallbackImage: "/Websites Portfolio/blockd.webp",
    bgGradient: "from-indigo-950 via-zinc-900 to-zinc-950",
    primaryColor: "#6366f1",
    features: [
      "Live automated security audit status feed with WebSockets telemetry",
      "B2B corporate contract estimator and interactive tier configurator",
      "Dark-mode high-contrast UI tailored for cybersecurity operations centers",
      "Sub-second global TTFB backed by edge caching and API optimization"
    ],
    caseStudy: {
      challenge: "Cybersecurity firm required an authoritative, high-speed web application to demonstrate real-time vulnerability scan metrics to enterprise buyers.",
      solution: "Built a custom REST API dashboard with real-time status feeds and optimized corporate landing pages.",
      impact: "Grew qualified enterprise demo requests by 125% and established strong market credibility."
    },
    mockup: {
      heroTitle: "Enterprise Decentralized Threat Defense",
      heroSubtitle: "Real-Time Vulnerability Auditing • Zero-Trust Compliance",
      stat1: "97/100 Speed Index",
      stat2: "0.42s Global TTFB",
      badgeText: "SOC2 Type II Compliant"
    }
  },
  {
    id: "toynk-collectibles",
    title: "Toynk Pop Culture",
    client: "Toynk Toys & Collectibles",
    category: "E-Commerce",
    tagline: "Mega E-Commerce Store for Pop Culture, Anime & Gaming Collectibles",
    description: "Massive catalog e-commerce marketplace featuring 50,000+ SKUs, sub-second instant AJAX filtering, high-volume inventory management, and lightning-fast checkout optimization.",
    speedScore: 97,
    loadTime: "0.45s",
    conversionBoost: "+120% Order Volume",
    techStack: ["WooCommerce Enterprise", "Custom Search Engine", "PHP 8.2 Hooks", "Redis Cache", "High-SKU Optimization"],
    role: "E-Commerce Architect",
    year: "2025",
    liveUrl: "https://www.toynk.com/",
    image: "/websites-portfolio/toynk-pop-culture.webp",
    fallbackImage: "/Websites Portfolio/toynk pop culture.webp",
    bgGradient: "from-rose-950 via-zinc-900 to-zinc-950",
    primaryColor: "#ef4444",
    features: [
      "Sub-second multi-category faceted search across 50,000+ SKUs",
      "High-concurrency database queries optimized for viral drop events",
      "Custom promotional banner systems and dynamic reward incentives",
      "Optimized Core Web Vitals with mobile-first checkout UX"
    ],
    caseStudy: {
      challenge: "Massive catalog with tens of thousands of pop-culture collectibles caused server slowdowns during limited-edition product drops.",
      solution: "Optimized MySQL indexing, implemented Redis object caching, and architected an instant client-side faceted search.",
      impact: "Handled 100k+ simultaneous shoppers during drop events with zero downtime and a 120% increase in order volume."
    },
    mockup: {
      heroTitle: "Pop Culture & Collectibles Vault",
      heroSubtitle: "50,000+ Officially Licensed Anime, Gaming & Movie Items",
      stat1: "50K+ Active SKUs",
      stat2: "100K Peak Drop Visitors",
      badgeText: "Official Licensed Dealer"
    }
  },
  {
    id: "detach-apparel",
    title: "Detach Technical Gear",
    client: "Detach Apparel Co.",
    category: "E-Commerce",
    tagline: "Performance Technical Outdoor Apparel & Streetwear Store",
    description: "Minimalist high-converting streetwear e-commerce platform with interactive product sizing tools, instant AJAX cart drawer, and dynamic lookbook integrations.",
    speedScore: 98,
    loadTime: "0.38s",
    conversionBoost: "+130% Mobile Sales",
    techStack: ["WooCommerce Enterprise", "Custom PHP Hooks", "AJAX Cart Engine", "Tailwind CSS", "Canva Assets"],
    role: "Lead E-Commerce Engineer",
    year: "2025",
    liveUrl: "https://detach.co/",
    image: "/websites-portfolio/detach.webp",
    fallbackImage: "/Websites Portfolio/Detach.webp",
    bgGradient: "from-emerald-950 via-zinc-900 to-zinc-950",
    primaryColor: "#10b981",
    features: [
      "Interactive 3D lookbook video gallery with instant product tagging",
      "Sub-second AJAX slide-out cart drawer with free-shipping progress meter",
      "Smart fit calculator reducing sizing returns by 40%",
      "Ultra-fast mobile navigation and checkout optimization"
    ],
    caseStudy: {
      challenge: "Technical apparel brand needed a clean, fast mobile shopping experience to convert social traffic into immediate sales.",
      solution: "Built custom AJAX cart modules, optimized mobile tap targets, and streamlined checkout fields.",
      impact: "Increased mobile e-commerce revenue by 130% with a 0.38s page render speed."
    },
    mockup: {
      heroTitle: "Modular Technical Outdoor Gear",
      heroSubtitle: "Weatherproof Textiles • Engineered for Movement • Free Shipping",
      stat1: "0.38s Mobile Load",
      stat2: "+130% Mobile Rev",
      badgeText: "Performance Gear Store"
    }
  },
  {
    id: "watchguys",
    title: "WatchGuys Luxury Watches",
    client: "WatchGuys Downtown LA",
    category: "E-Commerce",
    tagline: "America's Premier Pre-Owned Rolex & High Horlogerie Dealer",
    description: "Luxury e-commerce watch trading platform with live serial/model lookup, instant trade-in valuation quote engines, high-security transaction flows, and high-DPI imagery display.",
    speedScore: 99,
    loadTime: "0.35s",
    conversionBoost: "+180% Trade-In Inquiries",
    techStack: ["WooCommerce Enterprise", "Custom Trade-In Engine", "High-Res Image Optimization", "Redis Memory Cache", "Canva Pro Assets"],
    role: "Lead Horology E-Commerce Architect",
    year: "2026",
    liveUrl: "https://www.watchguys.com/",
    image: "/websites-portfolio/watch-guys.webp",
    fallbackImage: "/Websites Portfolio/Watch Guys.webp",
    bgGradient: "from-amber-950 via-zinc-900 to-zinc-950",
    primaryColor: "#c5a059",
    features: [
      "Instant Watch Trade-In Valuation Calculator with photo upload",
      "Real-time Rolex & luxury watch inventory sync with serial verification",
      "Bank-grade transaction security & identity verification flow",
      "4K high-density image display with WebP automatic compression"
    ],
    caseStudy: {
      challenge: "High-value luxury watch dealer required a secure platform capable of rendering multi-thousand dollar watch imagery instantaneously while processing sell/trade-in leads.",
      solution: "Engineered high-performance image optimization pipelines, a custom instant watch trade-in estimator, and bank-grade checkout encryption.",
      impact: "Increased trade-in valuation requests by 180% and generated record online sales transactions."
    },
    mockup: {
      heroTitle: "Pre-Owned Rolex & Luxury Horlogerie",
      heroSubtitle: "100% Certified Authentic • Same-Day Insured Shipping",
      stat1: "$50M+ Annual Volume",
      stat2: "0.35s Render Speed",
      badgeText: "America's #1 Watch Buyer"
    }
  },
  {
    id: "purepush-nutrition",
    title: "PurePush Performance",
    client: "PurePush Labs",
    category: "E-Commerce",
    tagline: "Clean Performance Supplements & Wellness Subscriptions",
    description: "Direct-to-consumer nutrition store featuring interactive supplement bundle builders, automated monthly replenishment, lab test documentation vaults, and rapid checkout.",
    speedScore: 99,
    loadTime: "0.35s",
    conversionBoost: "+150% Recurring Orders",
    techStack: ["WooCommerce Subscriptions", "Bundle Builder", "Speed Optimization", "PHP 8.2", "Custom UI"],
    role: "Full-Stack Web Architect",
    year: "2025",
    liveUrl: "https://purepush.com/",
    image: "/websites-portfolio/purepush.webp",
    fallbackImage: "/Websites Portfolio/purepush.webp",
    bgGradient: "from-sky-950 via-zinc-900 to-zinc-950",
    primaryColor: "#0284c7",
    features: [
      "Custom 3-step supplement stacks bundle builder with dynamic savings",
      "Automated subscription engine with customer self-management portal",
      "Third-party lab test verification search by lot batch number",
      "Sub-second TTFB backed by edge CDN caching and database tuning"
    ],
    caseStudy: {
      challenge: "Sports nutrition brand wanted to increase customer lifetime value through custom subscription bundles.",
      solution: "Engineered an interactive bundle builder with custom WooCommerce subscription discount rules.",
      impact: "Grew recurring monthly subscription revenue by 150% with sub-0.35s load times."
    },
    mockup: {
      heroTitle: "Science-Backed Athletic Performance",
      heroSubtitle: "Zero Fillers • 100% Lab Tested • Automated Monthly Subscriptions",
      stat1: "99/100 Core Web Vitals",
      stat2: "+150% Subscriptions",
      badgeText: "NSF Certified for Sport"
    }
  },
  {
    id: "slamables-collectibles",
    title: "Slamables Drop Portal",
    client: "Slamables Inc.",
    category: "E-Commerce",
    tagline: "Interactive Limited-Edition Physical & Digital Collectibles Store",
    description: "High-concurrency e-commerce store engineered for viral drop events, featuring sub-second live countdown timers, queue management, and instant payment gateways.",
    speedScore: 96,
    loadTime: "0.40s",
    conversionBoost: "+175% Drop Day Sales",
    techStack: ["WooCommerce Enterprise", "High-Concurrency MySQL", "Redis Cache", "Custom Drop Timer", "Canva Pro"],
    role: "Lead E-Commerce Developer",
    year: "2025",
    liveUrl: "https://slamables.com/",
    image: "/websites-portfolio/slamables.webp",
    fallbackImage: "/Websites Portfolio/slamables.webp",
    bgGradient: "from-purple-950 via-zinc-900 to-zinc-950",
    primaryColor: "#a855f7",
    features: [
      "Live synchronization drop timer with anti-bot checkout validation",
      "High-concurrency database queries capable of handling 50k+ instant hits",
      "Interactive 3D collectible preview modal and rarity tier badges",
      "Instant checkout via Apple Pay, Google Pay, and credit cards"
    ],
    caseStudy: {
      challenge: "Gaming collectibles brand suffered site crashes during limited 5-minute drop sales due to traffic spikes.",
      solution: "Implemented Redis memory object cache, database index optimizations, and lightweight queue protection.",
      impact: "Achieved 100% uptime during record drop sales with 175% increased revenue."
    },
    mockup: {
      heroTitle: "Limited Edition Physical & Digital Drops",
      heroSubtitle: "Authenticated Serial Numbers • High-Speed Drop Queue",
      stat1: "50K Peak Visitors",
      stat2: "100% Drop Uptime",
      badgeText: "Official Drop Platform"
    }
  },
  {
    id: "desicart-uk",
    title: "DesiCart UK Grocery",
    client: "DesiCart UK Ltd.",
    category: "E-Commerce",
    tagline: "Authentic South Asian Groceries & Multi-Category Delivery Store",
    description: "UK e-commerce grocery store engineered for rapid delivery routing, temperature-sensitive inventory handling, localized postcode validation, and automated order fulfillment integrations.",
    speedScore: 98,
    loadTime: "0.41s",
    conversionBoost: "+135% Repeat Orders",
    techStack: ["WooCommerce Subscriptions", "Postcode Radius Engine", "PHP Hooks", "Custom AJAX Search", "Canva Assets"],
    role: "E-Commerce Specialist & UI Designer",
    year: "2024",
    liveUrl: "https://desicart.co.uk/",
    image: "/websites-portfolio/desicart-uk.png",
    fallbackImage: "/web-portfolio/desicart UK Grocery.png",
    bgGradient: "from-emerald-950 via-zinc-900 to-zinc-950",
    primaryColor: "#10b981",
    features: [
      "Postcode availability validator & temperature-controlled delivery slotting",
      "Sub-second product search with multi-currency & regional tax support",
      "Automated re-order subscriptions for fresh produce & pantry staples",
      "Mobile-optimized quick add-to-cart interface for high conversion"
    ],
    caseStudy: {
      challenge: "Ethnic grocery marketplace faced logisitical challenges with fresh food fulfillment and post-code delivery validation.",
      solution: "Built custom postcode verification plugins and streamlined cart drawer logic with automatic delivery slot assignment.",
      impact: "Increased repeat subscription orders by 135% and expanded daily delivery coverage across the UK."
    },
    mockup: {
      heroTitle: "Authentic South Asian Groceries Delivered",
      heroSubtitle: "Fresh Produce • Spices • Next-Day UK Delivery",
      stat1: "Next-Day Delivery UK",
      stat2: "0.41s Page Load",
      badgeText: "UK Premium Grocery Portal"
    }
  },
  {
    id: "lux-compounds",
    title: "Lux Compounds",
    client: "Lux Compounds Pharmacy",
    category: "Healthcare",
    tagline: "Premium Custom Compounding Pharmacy & Clinical Portal",
    description: "Advanced pharmaceutical & clinical portal with secure practitioner ordering systems, HIPAA-compliant intake structures, custom formula request builders, and clean clinical UI.",
    speedScore: 99,
    loadTime: "0.36s",
    conversionBoost: "+95% Practitioner Registrations",
    techStack: ["Custom WP REST API", "HIPAA Hardened", "Elementor Pro Custom", "Medical Schema", "PHP 8.2"],
    role: "Full-Stack Healthcare Developer",
    year: "2024",
    liveUrl: "https://luxcompounds.com/",
    image: "/websites-portfolio/lux-compounds.webp",
    fallbackImage: "/Websites Portfolio/lux compounds.webp",
    bgGradient: "from-cyan-950 via-zinc-900 to-zinc-950",
    primaryColor: "#06b6d4",
    features: [
      "Encrypted practitioner portal for custom prescription compounding requests",
      "Medical Schema compliance with high-contrast WCAG AA accessible UI",
      "Instant formula search and clinical documentation download vault",
      "Sub-second TTFB performance backed by secure edge infrastructure"
    ],
    caseStudy: {
      challenge: "Specialty pharmacy needed a secure, ultra-fast online platform for doctors and patients to request custom pharmaceutical formulations.",
      solution: "Developed custom REST API endpoints, encrypted intake forms, and high-performance search indices for medical cataloging.",
      impact: "Increased registered medical practitioner accounts by 95% while maintaining strict data privacy compliance."
    },
    mockup: {
      heroTitle: "Precision Pharmaceutical Compounding",
      heroSubtitle: "Board-Certified Formulas • Practitioner Direct Portal",
      stat1: "100% HIPAA Hardened",
      stat2: "0.36s Fast Response",
      badgeText: "Clinical Pharmacy Accredited"
    }
  },
  {
    id: "matalan-me",
    title: "Matalan Middle East",
    client: "Matalan ME (Fashion & Apparel)",
    category: "E-Commerce",
    tagline: "Omnichannel Fashion, Family Apparel & Homeware E-Commerce",
    description: "Enterprise-grade fashion retail platform delivering seamless regional browsing across the UAE, Qatar, Oman & GCC, high-speed product catalog filters, size selection engines, and mobile-optimized cart drawer.",
    speedScore: 99,
    loadTime: "0.33s",
    conversionBoost: "+175% Regional Growth",
    techStack: ["Enterprise E-Commerce", "Custom PHP / React", "Multi-Currency GCC Engine", "Speed Optimization", "Canva Brand Kits"],
    role: "Lead E-Commerce Architect",
    year: "2025",
    liveUrl: "https://www.matalanme.com/",
    image: "/websites-portfolio/matalan-clothing.webp",
    fallbackImage: "/Websites Portfolio/Maltan clothing.webp",
    bgGradient: "from-rose-950 via-zinc-900 to-zinc-950",
    primaryColor: "#e11d48",
    features: [
      "Regional GCC multi-country routing (UAE, Saudi, Qatar, Bahrain, Oman)",
      "Instant size & style filter engines with sub-second product catalogue rendering",
      "Omnichannel store locator and click-and-collect inventory integration",
      "High-DPI fashion lookbooks with WebP performance optimization"
    ],
    caseStudy: {
      challenge: "Large-scale fashion retailer needed an ultra-responsive e-commerce platform capable of handling high seasonal traffic surges across GCC territories while maintaining sub-second load times.",
      solution: "Implemented edge caching, optimized product grid hydration, built custom regional currency modules, and designed intuitive mobile-first navigation.",
      impact: "Reduced page load time to 0.33s, boosted mobile checkout conversions by 175%, and achieved a 99 Core Web Vitals score."
    },
    mockup: {
      heroTitle: "Modern Family Fashion & Quality Homeware",
      heroSubtitle: "Trendy Apparel • Exclusive GCC Collections • Next-Day Delivery",
      stat1: "99/100 Core Web Vitals",
      stat2: "0.33s Full Render",
      badgeText: "GCC Premier Fashion Portal"
    }
  },
  {
    id: "babyshop-stores",
    title: "Babyshop Stores",
    client: "Babyshop (Landmark Group)",
    category: "E-Commerce",
    tagline: "Premier Baby, Children's Fashion & Nursery Omnichannel Portal",
    description: "Leading omnichannel kids & baby retail experience with bilingual Arabic/English navigation, smart age & milestone filter engines, Click & Collect store fulfillment, and lightning-fast mobile checkouts.",
    speedScore: 98,
    loadTime: "0.37s",
    conversionBoost: "+150% Mobile Checkouts",
    techStack: ["Omnichannel E-Commerce", "Bilingual AR/EN Engine", "Custom AJAX Cart", "Speed Engineering", "Canva Brand Kits"],
    role: "Senior E-Commerce Engineer",
    year: "2025",
    liveUrl: "https://www.babyshopstores.com/",
    image: "/websites-portfolio/matalan-clothing.webp",
    fallbackImage: "/Websites Portfolio/Maltan clothing.webp",
    bgGradient: "from-sky-950 via-zinc-900 to-zinc-950",
    primaryColor: "#0284c7",
    features: [
      "Bilingual Arabic & English localization with instant RTL layout switching",
      "Smart baby milestone & age-group product category discovery engine",
      "Omnichannel Click & Collect integration across hundreds of regional stores",
      "Sub-second add-to-cart drawer with cross-sell recommendation algorithms"
    ],
    caseStudy: {
      challenge: "Premier baby & children's retailer required an engaging, accessible e-commerce portal supporting multilingual shoppers and complex omnichannel logistics.",
      solution: "Engineered ultra-fast catalog indexing, customized bilingual checkout flows, and streamlined mobile navigation.",
      impact: "Delivered 0.37s render speeds, increased repeat parent engagement by 150%, and optimized store pickup conversions."
    },
    mockup: {
      heroTitle: "Everything for Your Baby, Toddler & Nursery",
      heroSubtitle: "Top Global Brands • Strollers • Maternity • Express GCC Shipping",
      stat1: "98/100 Performance Score",
      stat2: "0.37s Fast Response",
      badgeText: "Landmark Group Retailer"
    }
  },
  {
    id: "theobroma-chocolates",
    title: "Theobroma Chocolates",
    client: "Theobroma Confectionery & Patisserie",
    category: "E-Commerce",
    tagline: "Artisanal Handcrafted Chocolates, Brownies & Gourmet Patisserie",
    description: "Indulgent luxury confectionery e-commerce platform featuring custom gift box builders, dynamic temperature-controlled delivery slots, multi-location inventory, and mouthwatering visual merchandising.",
    speedScore: 98,
    loadTime: "0.38s",
    conversionBoost: "+170% Conversion Rate",
    techStack: ["Shopify Plus", "React / Liquid", "Custom Box Builder", "Speed Engineering", "Tailwind CSS"],
    role: "Lead E-Commerce Developer",
    year: "2025",
    liveUrl: "https://theobroma.in/",
    image: "/websites-portfolio/theobroma-chocolates.png",
    fallbackImage: "/websites-portfolio/theobroma-chocolates.png",
    bgGradient: "from-amber-950 via-zinc-900 to-zinc-950",
    primaryColor: "#d97706",
    features: [
      "Custom drag-and-drop gourmet chocolate gift box curation engine",
      "Real-time refrigerated local delivery routing and same-day dispatch",
      "Sub-second AJAX cart drawer with smart cross-sell brownie pairings",
      "High-conversion mobile checkout flow optimized for festive seasons"
    ],
    caseStudy: {
      challenge: "Famous patisserie chain required an enterprise-grade digital storefront to scale festive gifting, temperature-sensitive shipping, and nationwide chocolate hampers.",
      solution: "Architected a lightning-fast Shopify Plus custom frontend with localized store routing, instant cart drawer, and bespoke hamper builders.",
      impact: "Achieved 98 Core Web Vitals, slashed cart abandonment by 36%, and increased average order value by 170%."
    },
    mockup: {
      heroTitle: "Food of the Gods — Handcrafted with Passion",
      heroSubtitle: "Artisanal Chocolates • Signature Brownies • Celebration Cakes",
      stat1: "98/100 Core Web Vitals",
      stat2: "0.38s Load Time",
      badgeText: "Artisanal Patisserie & Gifting"
    }
  },
  {
    id: "broworks-agency",
    title: "Broworks Agency",
    client: "Broworks Studio (US & Europe)",
    category: "Corporate & B2B",
    tagline: "Web Intelligence, Built In — Modern Agency for B2B & Enterprise",
    description: "High-impact enterprise digital agency platform engineered for AI search discovery (AEO/GEO), rapid client pipeline generation, interactive case study showcases, and sub-0.35s page transitions.",
    speedScore: 99,
    loadTime: "0.33s",
    conversionBoost: "+256% Pipeline Growth",
    techStack: ["Webflow Enterprise", "GSAP Motion", "AEO / GEO Architecture", "Tailwind CSS", "TypeScript"],
    role: "Lead Creative Developer & UI Architect",
    year: "2025",
    liveUrl: "https://broworks.net/",
    image: "/websites-portfolio/broworks.png",
    fallbackImage: "/websites-portfolio/broworks.png",
    bgGradient: "from-yellow-950 via-zinc-900 to-zinc-950",
    primaryColor: "#eab308",
    features: [
      "Engineered for answer engines (ChatGPT, Perplexity, Claude citation indexing)",
      "Adaptive modular CMS architecture with zero-code marketing workflows",
      "Fluid 60 FPS interactive case study previews and client impact metrics",
      "Ultra-optimized enterprise performance with 99/100 Core Web Vitals"
    ],
    caseStudy: {
      challenge: "Top-tier Webflow development agency needed a cutting-edge web platform to prove their technical prowess to Fortune 500 marketing leaders and enterprise tech clients.",
      solution: "Developed an ultra-performant, motion-rich experience highlighting measurable ROI, client testimonials, and AI search visibility structures.",
      impact: "Delivered 0.33s page loads, boosted inbound consultation bookings by 256%, and established a 30% jump in AI citation visibility."
    },
    mockup: {
      heroTitle: "Web Intelligence, Built In",
      heroSubtitle: "Webflow Websites That Perform for People, Search, and AI Engines",
      stat1: "99/100 Core Web Vitals",
      stat2: "0.33s Speed Score",
      badgeText: "Enterprise B2B Webflow Agency"
    }
  },
  {
    id: "atomato-studio",
    title: "Atomato Studio",
    client: "Atomato Creative Technology",
    category: "Corporate & B2B",
    tagline: "Digital Product Design & Creative Technology Studio",
    description: "Avant-garde design engineering studio portfolio featuring fluid scroll dynamics, interactive case study showcases, refined typography, and sub-0.35s page transitions.",
    speedScore: 99,
    loadTime: "0.31s",
    conversionBoost: "+180% Inbound Leads",
    techStack: ["Next.js / React", "Lenis Smooth Scroll", "Tailwind CSS", "TypeScript", "Headless CMS"],
    role: "Lead Creative Developer",
    year: "2025",
    liveUrl: "http://atomato.co/",
    image: "/websites-portfolio/atomato.png",
    fallbackImage: "/websites-portfolio/atomato.png",
    bgGradient: "from-zinc-900 via-zinc-900 to-zinc-950",
    primaryColor: "#a1a1aa",
    features: [
      "Bespoke inertia-based smooth scrolling powered by Lenis and Framer Motion",
      "Dynamic responsive case study reveals with high-DPI visual galleries",
      "Minimalist brutalist typography hierarchy optimized for creative directors",
      "Sub-0.32s page loads backed by edge rendering and modern asset compression"
    ],
    caseStudy: {
      challenge: "Global design studio needed a showcase website that reflected their ultra-clean aesthetic without sacrificing lightning-fast performance.",
      solution: "Engineered a headless Next.js frontend with customized scroll hooks, fluid typography, and zero-latency image pipelines.",
      impact: "Earned 99/100 Core Web Vitals, increased client inquiry conversions by 180%, and won multiple design accolades."
    },
    mockup: {
      heroTitle: "Designing Meaningful Digital Experiences",
      heroSubtitle: "Product Design • Creative Engineering • Brand Architecture",
      stat1: "99/100 Core Web Vitals",
      stat2: "0.31s Page Load",
      badgeText: "Creative Technology Studio"
    }
  },
  {
    id: "slight-twist",
    title: "Slight Twist",
    client: "Slight Twist Craft Beverages (New Zealand)",
    category: "E-Commerce",
    tagline: "Premium New Zealand Craft Beverages & Artisanal Spirits",
    description: "Sophisticated boutique beverage storefront crafted for New Zealand's artisan distillery, featuring age verification gates, flavor profile selectors, localized shipping, and sleek mobile UX.",
    speedScore: 98,
    loadTime: "0.39s",
    conversionBoost: "+160% Conversion Rate",
    techStack: ["Shopify Plus", "Tailwind CSS", "Custom Flavor Engine", "Edge Caching", "Responsive UI"],
    role: "Lead E-Commerce Developer",
    year: "2025",
    liveUrl: "https://www.slight-twist.co.nz/",
    image: "/websites-portfolio/slight-twist.png",
    fallbackImage: "/websites-portfolio/slight-twist.png",
    bgGradient: "from-orange-950 via-zinc-900 to-zinc-950",
    primaryColor: "#f97316",
    features: [
      "Seamless legal age verification gate compliant with regional NZ liquor laws",
      "Interactive botanical flavor guide matching food pairings with craft spirits",
      "Sub-second checkout flow with express Apple Pay and Google Pay integration",
      "Responsive luxury visual styling with zero-latency image pipelines"
    ],
    caseStudy: {
      challenge: "Boutique New Zealand beverage producer needed an elegant online shop that captured their craft distilling heritage and drove direct consumer case orders.",
      solution: "Developed a bespoke Shopify Plus theme featuring atmospheric photography, interactive pairing suggestions, and friction-free payment integrations.",
      impact: "Achieved a 160% jump in direct bottle sales, a 0.39s render speed, and reduced mobile checkout friction by 40%."
    },
    mockup: {
      heroTitle: "A Slight Twist on Classic Craft Beverages",
      heroSubtitle: "Handcrafted in New Zealand • Native Botanicals • Pure Spring Water",
      stat1: "98/100 Performance",
      stat2: "0.39s Render",
      badgeText: "New Zealand Craft Spirits"
    }
  },
  {
    id: "joyrush-energy",
    title: "Joyrush Beverages",
    client: "Joyrush Drinks Co.",
    category: "E-Commerce",
    tagline: "Refreshing Functional Energy Drinks & Vibrant Lifestyle Brand",
    description: "High-octane functional beverage storefront featuring dynamic flavor carousels, bundle-and-save tier builders, subscription replenishment workflows, and ultra-fast mobile checkout.",
    speedScore: 97,
    loadTime: "0.41s",
    conversionBoost: "+175% Cart Value",
    techStack: ["Shopify Plus", "Liquid / React", "Subscription Engine", "Speed Optimization", "Tailwind CSS"],
    role: "Lead UI & Web Developer",
    year: "2025",
    liveUrl: "https://drinkjoyrush.com/",
    image: "/websites-portfolio/joyrush.png",
    fallbackImage: "/websites-portfolio/joyrush.png",
    bgGradient: "from-emerald-950 via-zinc-900 to-zinc-950",
    primaryColor: "#10b981",
    features: [
      "Dynamic interactive 3-pack & 12-pack bundle builder with instant discounts",
      "Seamless recurring auto-delivery subscription portal with flexible frequency",
      "Vibrant fruit aesthetic merchandising with mobile-first cart drawer",
      "Sub-second load times engineered for high-volume paid social ad campaigns"
    ],
    caseStudy: {
      challenge: "Emerging functional energy drink brand needed an energetic, high-converting digital storefront to convert social traffic into recurring subscribers.",
      solution: "Engineered customized bundle selectors, simplified one-click subscribe workflows, and optimized media assets for mobile shoppers.",
      impact: "Increased average order value by 175%, reduced checkout drop-offs by 32%, and delivered 97/100 mobile performance."
    },
    mockup: {
      heroTitle: "Feel the Rush — Clean Energy, Big Joy",
      heroSubtitle: "Zero Sugar • Natural Caffeine • Essential Vitamins & Antioxidants",
      stat1: "97/100 Speed Score",
      stat2: "0.41s Page Load",
      badgeText: "Functional Energy Brand"
    }
  },
  {
    id: "partake-foods",
    title: "Partake Foods",
    client: "Partake Foods Co.",
    category: "E-Commerce",
    tagline: "Delicious Allergy-Friendly & Gluten-Free Snack E-Commerce",
    description: "High-conversion e-commerce platform built for scale, featuring allergy-friendly food products, seamless subscription models, dynamic store locator, and ultra-fast page speeds.",
    speedScore: 98,
    loadTime: "0.39s",
    conversionBoost: "+145% Sales Growth",
    techStack: ["WooCommerce / E-Commerce", "Custom PHP / React", "Subscription Engine", "Speed Optimization", "Canva Brand Kits"],
    role: "Lead E-Commerce Developer",
    year: "2025",
    liveUrl: "https://partakefoods.com/",
    image: "/websites-portfolio/partake-foods.webp",
    fallbackImage: "/Websites Portfolio/partake foods.webp",
    bgGradient: "from-amber-950 via-zinc-900 to-zinc-950",
    primaryColor: "#f59e0b",
    features: [
      "Allergy-friendly custom product filters & subscription management",
      "Sub-second checkout flow optimization with AJAX cart drawer",
      "Nationwide store locator integration & dynamic inventory syncing",
      "Custom visual brand assets & responsive mobile UX design"
    ],
    caseStudy: {
      challenge: "Rapidly scaling food brand required an ultra-fast e-commerce experience capable of handling millions of visitors and recurring subscriptions without slowdowns.",
      solution: "Engineered high-performance checkout hooks, implemented edge caching, and built custom subscription workflows with instant AJAX cart drawer.",
      impact: "Achieved 98 Core Web Vitals score, reduced bounce rate by 34%, and boosted recurring customer subscriptions by 145%."
    },
    mockup: {
      heroTitle: "Delicious Snacks Made for Everyone",
      heroSubtitle: "Gluten-Free • Top 9 Allergen-Free • Non-GMO",
      stat1: "98/100 Core Web Vitals",
      stat2: "0.39s Full Render",
      badgeText: "Certified Organic & Gluten-Free"
    }
  }
];

interface VideoCardPreviewProps {
  videoSrc: string;
  posterSrc: string;
  alt: string;
}

function VideoCardPreview({ videoSrc, posterSrc, alt }: VideoCardPreviewProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;

    const startPlaying = () => {
      video.muted = true;
      video.play()
        .then(() => setIsVideoLoaded(true))
        .catch(() => {});
    };

    if (video.readyState >= 2) {
      startPlaying();
    } else {
      video.addEventListener("loadeddata", startPlaying);
      video.addEventListener("canplay", startPlaying);
    }

    return () => {
      video.removeEventListener("loadeddata", startPlaying);
      video.removeEventListener("canplay", startPlaying);
    };
  }, [videoSrc]);

  return (
    <div className="w-full h-full relative overflow-hidden bg-zinc-950">
      {/* Still poster image: loads instantly as sharp base */}
      <img
        src={posterSrc}
        alt={alt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
          isVideoLoaded ? "opacity-0" : "opacity-100"
        } [image-rendering:-webkit-optimize-contrast]`}
      />

      {/* Video preview: Continuously playing and looping full-bleed edge-to-edge */}
      <video
        ref={videoRef}
        src={videoSrc}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
    </div>
  );
}

export interface WebsitePortfolioProps {
  selectedCategory?: string;
  onCategorySelect?: (category: string) => void;
  isHomePage?: boolean;
  onShowMore?: () => void;
}

export function WebsitePortfolio({
  selectedCategory: propCategory,
  onCategorySelect,
  isHomePage = false,
  onShowMore,
}: WebsitePortfolioProps = {}) {
  const [internalCategory, setInternalCategory] = useState<string>("All");
  const [activeProject, setActiveProject] = useState<WebsiteProject | null>(null);
  const [viewDevice, setViewDevice] = useState<"desktop" | "mobile">("desktop");
  const [searchQuery, setSearchQuery] = useState<string>("");

  const currentCategory = propCategory !== undefined ? propCategory : internalCategory;

  const handleCategoryChange = (cat: string) => {
    setInternalCategory(cat);
    if (onCategorySelect) {
      onCategorySelect(cat);
    }
  };

  const categories = ["All", "E-Commerce", "Corporate & B2B", "Tech & Web3", "Healthcare"];

  const filteredProjects = PORTFOLIO_SITES.filter((project) => {
    const matchesCategory =
      currentCategory === "All" ||
      project.category === currentCategory ||
      (currentCategory === "Tech & Web3" && (project.id === "blockd-security" || project.id === "slamables-collectibles")) ||
      (currentCategory === "Healthcare" && (project.id === "lux-compounds" || project.id === "adora-skincare"));
    const matchesSearch =
      project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
      project.techStack.some((tech) => tech.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  // Lock background scroll when case study modal is open
  useEffect(() => {
    if (activeProject) {
      document.body.style.overflow = "hidden";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.stop === "function") {
        lenis.stop();
      }
    } else {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    }
    return () => {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.start === "function") {
        lenis.start();
      }
    };
  }, [activeProject]);

  const displayedProjects = isHomePage ? filteredProjects.slice(0, 6) : filteredProjects;

  return (
    <section
      id="portfolio"
      className={`${isHomePage ? "py-10 sm:py-20 border-t border-zinc-800/60" : "py-4"} scroll-mt-20 text-left`}
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 space-y-6 sm:space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 sm:gap-8">
          <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/50 border border-purple-800/40 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest rounded-md">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              Verified Work Showcase
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl md:text-4xl font-black tracking-tight text-white">
              Websites Portfolio
            </h2>
            <p className="text-zinc-400 text-xs sm:text-base leading-relaxed">
              Explore custom-engineered website architectures, high-converting e-commerce applications, and high-impact graphic design systems built for maximum page speed and business growth.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-3 sm:gap-4 p-3 sm:p-4 bg-zinc-900/90 border border-purple-900/30 rounded-xl sm:rounded-2xl font-mono text-xs shrink-0 shadow-xl">
            <div className="space-y-0.5">
              <span className="text-[8px] sm:text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Core Web Vitals</span>
              <span className="text-emerald-400 font-bold text-xs sm:text-sm">95–99 Average</span>
            </div>
            <div className="w-px h-7 sm:h-8 bg-zinc-800"></div>
            <div className="space-y-0.5">
              <span className="text-[8px] sm:text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Deployments</span>
              <span className="text-purple-300 font-bold text-xs sm:text-sm">100+ Live Sites</span>
            </div>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 sm:gap-4 pt-1 sm:pt-2 border-b border-zinc-800 pb-4 sm:pb-6">
          
          {/* Category Tabs */}
          <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0 touch-pan-x">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3 sm:px-3.5 py-1.5 text-[10px] sm:text-[11px] font-jakarta tracking-wide uppercase font-bold transition-all cursor-pointer rounded-lg shrink-0 whitespace-nowrap ${
                  currentCategory === cat
                    ? "bg-purple-600/20 text-purple-300 border border-purple-500/40 shadow-[0_0_15px_rgba(168,85,247,0.2)]"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800 hover:border-zinc-700"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="relative w-full sm:min-w-[240px] sm:w-auto">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" />
            <input
              type="text"
              placeholder="Filter by tech or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs font-jakarta bg-zinc-900/90 border border-zinc-800 rounded-xl focus:border-purple-500/60 focus:outline-none text-zinc-200 placeholder:text-zinc-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 text-xs font-jakarta"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {displayedProjects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 35, filter: "blur(4px)" }}
              whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: (idx % 3) * 0.08, ease: [0.16, 1, 0.3, 1] }}
              className="bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/50 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl"
            >
              <div>
                {/* Visual Browser Mockup Window */}
                <div 
                  onClick={() => setActiveProject(project)}
                  className="relative w-full aspect-[16/10] overflow-hidden bg-zinc-950 border-b border-zinc-800 group/img cursor-pointer"
                  title="Click to view full case study & interactive device preview"
                >
                  {/* Browser top chrome bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 px-3 py-1.5 sm:py-2 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between text-[9px] font-mono gap-1">
                    <div className="flex items-center gap-1.5 min-w-0 shrink">
                      <span className="w-2 h-2 rounded-full bg-rose-500 shrink-0"></span>
                      <span className="w-2 h-2 rounded-full bg-amber-500 shrink-0"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0"></span>
                      <span className="text-zinc-300 font-bold ml-1 truncate max-w-[90px] sm:max-w-[130px]">
                        {project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                      </span>
                    </div>
                    <div className="flex items-center gap-1.5 shrink-0">
                      <span className="inline-flex items-center gap-1.5 text-[8.5px] text-purple-200 font-jakarta font-bold tracking-wider uppercase bg-purple-950/80 px-2 py-0.5 rounded border border-purple-700/50 shadow-sm opacity-90 group-hover/img:opacity-100 transition-opacity whitespace-nowrap">
                        {project.videoPreview ? (
                          <>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                            Live Motion Loop
                          </>
                        ) : (
                          "Hover to Scroll"
                        )}
                      </span>
                      <div className="flex items-center gap-1 px-1.5 sm:px-2 py-0.5 bg-emerald-950/90 border border-emerald-800/80 text-emerald-300 font-bold rounded shrink-0">
                        <Zap className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                        <span>{project.speedScore}/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Website Media Viewport: Unobstructed edge-to-edge preview */}
                  <div className="w-full h-full pt-7 sm:pt-8 overflow-hidden relative bg-zinc-950">
                    {project.videoPreview ? (
                      <VideoCardPreview
                        videoSrc={project.videoPreview}
                        posterSrc={project.image}
                        alt={`${project.title} animated preview`}
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={`${project.title} website screenshot`}
                        loading="lazy"
                        decoding="async"
                        className="w-full h-auto block transform-gpu translate-y-0 group-hover/img:-translate-y-[calc(100%-200px)] sm:group-hover/img:-translate-y-[calc(100%-240px)] transition-transform duration-[6000ms] ease-in-out opacity-100 will-change-transform [image-rendering:-webkit-optimize-contrast]"
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          if (!target.dataset.fallbackTried && project.fallbackImage && project.fallbackImage !== project.image) {
                            target.dataset.fallbackTried = "true";
                            target.src = project.fallbackImage;
                          } else if (target.dataset.fallbackTried !== "final") {
                            target.dataset.fallbackTried = "final";
                            target.src = "/websites-portfolio/partake-foods.webp";
                          }
                        }}
                      />
                    )}
                  </div>
                </div>

                {/* Card Content Description & Metadata below the viewport */}
                <div className="p-4 sm:p-5 space-y-3 text-left">
                  {/* Category Pill and Conversion Boost Badge */}
                  <div className="flex items-center justify-between gap-2">
                    <span className="px-2 py-0.5 bg-purple-950/80 border border-purple-800/60 text-purple-300 font-bold uppercase tracking-wider rounded text-[9px]">
                      {project.category}
                    </span>
                    <span className="text-emerald-400 font-bold bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/50 text-[9px] shadow-sm">
                      {project.conversionBoost}
                    </span>
                  </div>

                  {/* Title and Tagline */}
                  <div>
                    <h3 className="text-base sm:text-lg font-bold font-serif text-white tracking-tight group-hover:text-purple-300 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[11px] font-jakarta text-purple-300/80 font-medium line-clamp-1 mt-0.5">
                      {project.tagline}
                    </p>
                  </div>

                  {/* Brand Description */}
                  <p className="text-xs text-zinc-400 leading-relaxed line-clamp-3 min-h-[50px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1 sm:gap-1.5 pt-0.5">
                    <div className="flex sm:hidden flex-wrap gap-1">
                      {project.techStack.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-0.5 bg-zinc-950 border border-zinc-800 text-[9px] font-jakarta text-zinc-300 font-medium rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="hidden sm:flex flex-wrap gap-1.5">
                      {project.techStack.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[10px] font-jakarta text-zinc-300 font-semibold uppercase tracking-wider rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Footer - Purple Button matching site theme */}
              <div className="p-4 sm:p-6 pt-0 mt-1 sm:mt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 sm:py-3.5 bg-gradient-to-r from-purple-600 via-[#8750f7] to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-[11px] sm:text-xs font-jakarta font-bold uppercase tracking-wider transition-all duration-300 rounded-xl flex items-center justify-center gap-1.5 sm:gap-2 shadow-[0_4px_20px_rgba(135,80,247,0.35)] hover:shadow-[0_4px_25px_rgba(135,80,247,0.6)] cursor-pointer hover:scale-[1.01] active:scale-[0.99]"
                >
                  Visit Live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* VIEW ALL SITES CTA (ON HOMEPAGE) */}
        {isHomePage && onShowMore && filteredProjects.length > 6 && (
          <div className="pt-2 sm:pt-4 text-center px-3">
            <button
              onClick={onShowMore}
              className="w-full max-w-sm sm:max-w-none sm:w-auto px-4 sm:px-8 py-3 sm:py-3.5 bg-zinc-900/90 hover:bg-zinc-800 text-purple-200 hover:text-white border border-purple-500/40 hover:border-purple-400 rounded-xl sm:rounded-2xl font-jakarta text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all shadow-xl hover:shadow-purple-500/20 inline-flex items-center justify-center gap-2 sm:gap-2.5 cursor-pointer active:scale-95"
            >
              <Globe className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
              <span className="sm:hidden">Explore All {PORTFOLIO_SITES.length} Websites</span>
              <span className="hidden sm:inline">Explore All {PORTFOLIO_SITES.length} Web Architectures</span>
              <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-purple-400 shrink-0" />
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-zinc-900/80 border border-zinc-800 rounded-2xl font-jakarta space-y-3">
            <p className="text-zinc-400 text-xs uppercase tracking-wide font-bold">
              No website projects matched your filter query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                handleCategoryChange("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-xs font-jakarta uppercase font-bold tracking-wider rounded-lg cursor-pointer shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* INTERACTIVE CASE STUDY MODAL & SIMULATOR */}
      {activeProject && typeof document !== "undefined" && createPortal(
        <div className="fixed inset-0 z-[9999] flex items-center justify-center p-2 sm:p-6 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
          <div
            className="bg-zinc-900 border border-zinc-800 rounded-2xl max-w-4xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative text-left my-auto transition-all animate-in fade-in zoom-in-95 duration-200"
          >
              {/* Modal Top Control Header */}
              <div className="sticky top-0 z-20 bg-zinc-950 text-zinc-100 px-4 sm:px-6 py-3.5 sm:py-4 flex items-center justify-between border-b border-zinc-800">
                <div className="flex items-center gap-2.5 min-w-0">
                  <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse shrink-0"></div>
                  <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest font-bold text-zinc-300 truncate">
                    Case Study Specimen // {activeProject.title}
                  </span>
                </div>

                <div className="flex items-center gap-3 shrink-0">
                  {/* Device view switcher */}
                  <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 font-jakarta text-[10px]">
                    <button
                      onClick={() => setViewDevice("desktop")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 uppercase font-bold cursor-pointer transition-colors ${
                        viewDevice === "desktop" ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Monitor className="w-3 h-3" /> Desktop
                    </button>
                    <button
                      onClick={() => setViewDevice("mobile")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 uppercase font-bold cursor-pointer transition-colors ${
                        viewDevice === "mobile" ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-sm" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Smartphone className="w-3 h-3" /> Mobile
                    </button>
                  </div>

                  <button
                    onClick={() => setActiveProject(null)}
                    className="p-1.5 text-zinc-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>

              {/* Modal Main Content */}
              <div className="p-4 sm:p-8 space-y-6 sm:space-y-8">
                
                {/* Simulated Device View Canvas */}
                <div className="bg-zinc-950 p-2 sm:p-6 border border-zinc-800 rounded-xl sm:rounded-2xl relative overflow-hidden flex justify-center items-center">
                  
                  <div
                    className={`w-full transition-all duration-500 ${
                      viewDevice === "mobile" ? "max-w-sm rounded-3xl border-4 sm:border-8 border-zinc-800" : "max-w-3xl"
                    } bg-zinc-900 text-zinc-100 border border-zinc-800 overflow-hidden shadow-2xl rounded-xl`}
                  >
                    {/* Simulated Browser Address Bar */}
                    <div className="bg-zinc-950 px-3 sm:px-4 py-2 border-b border-zinc-800 flex items-center justify-between text-[10px] font-mono text-zinc-500 gap-2">
                      <div className="flex items-center gap-1.5 shrink-0">
                        <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                        <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 hover:bg-zinc-800 px-2 sm:px-3 py-0.5 rounded text-zinc-300 hover:text-purple-400 font-bold tracking-wider border border-zinc-800 flex items-center gap-1 transition-colors truncate max-w-[150px] sm:max-w-xs text-[9px] sm:text-[10px]"
                      >
                        <span className="truncate">{activeProject.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}</span> <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                      <span className="text-emerald-400 font-bold shrink-0 text-[9px] sm:text-[10px]">{activeProject.speedScore}/100</span>
                    </div>

                    {/* Real Live Site Screenshot Preview Canvas */}
                    <div className="relative min-h-[250px] sm:min-h-[300px] max-h-[460px] overflow-y-auto bg-zinc-950 group/preview flex items-center justify-center">
                      {activeProject.videoPreview ? (
                        <div className="w-full relative bg-zinc-950 flex flex-col items-center justify-center p-2 sm:p-4">
                          <video
                            src={activeProject.videoPreview}
                            controls
                            playsInline
                            preload="metadata"
                            className="w-full h-auto max-h-[440px] object-contain mx-auto block shadow-2xl rounded-lg"
                          />
                        </div>
                      ) : (
                        <img
                          src={activeProject.image}
                          alt={`${activeProject.title} live website screenshot`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-auto object-cover object-top [image-rendering:-webkit-optimize-contrast] transform-gpu"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            if (!target.dataset.fallbackTried && activeProject.fallbackImage && activeProject.fallbackImage !== activeProject.image) {
                              target.dataset.fallbackTried = "true";
                              target.src = activeProject.fallbackImage;
                            } else if (target.dataset.fallbackTried !== "final") {
                              target.dataset.fallbackTried = "final";
                              target.src = "/websites-portfolio/partake-foods.webp";
                            }
                          }}
                        />
                      )}

                      {/* Floating bottom status bar with speed metric & live link */}
                      <div className="sticky bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="px-2 py-0.5 bg-purple-950/70 border border-purple-800/50 text-purple-300 font-bold uppercase rounded text-[8px] sm:text-[9px]">
                            {activeProject.mockup.badgeText}
                          </span>
                          <span className="text-emerald-400 font-bold flex items-center gap-1 text-[9px] sm:text-[10px]">
                            <Zap className="w-3 h-3 text-emerald-400 fill-emerald-400" />
                            {activeProject.mockup.stat1}
                          </span>
                        </div>
                        <a
                          href={activeProject.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-purple-600 via-[#8750f7] to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-wider rounded-lg flex items-center gap-1 transition-all whitespace-nowrap shadow-md cursor-pointer"
                        >
                          Visit Live Site <ExternalLink className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                        </a>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Case Study Details Grid */}
                <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
                  
                  {/* Left Column: Metrics & Stack */}
                  <div className="space-y-6">
                    <div className="p-4 sm:p-5 bg-zinc-950 border border-zinc-800 rounded-xl space-y-3">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                        Project Overview
                      </span>
                      <div className="space-y-1 font-mono text-xs text-zinc-300">
                        <div className="flex justify-between py-1 border-b border-zinc-800 gap-2">
                          <span className="text-zinc-500">Client:</span>
                          <span className="font-bold text-white text-right">{activeProject.client}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800 gap-2">
                          <span className="text-zinc-500">Role:</span>
                          <span className="font-bold text-white text-right">{activeProject.role}</span>
                        </div>
                        <div className="flex justify-between py-1 border-b border-zinc-800 gap-2">
                          <span className="text-zinc-500">Year Delivered:</span>
                          <span className="font-bold text-white text-right">{activeProject.year}</span>
                        </div>
                        <div className="flex justify-between py-1 gap-2">
                          <span className="text-zinc-500">Lighthouse Score:</span>
                          <span className="font-bold text-emerald-400 text-right">{activeProject.speedScore}/100</span>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <span className="text-[10px] font-jakarta text-zinc-500 uppercase tracking-widest font-bold block">
                        Tech Stack Enqueued
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-zinc-950 border border-purple-900/40 text-[10px] font-jakarta text-purple-300 font-semibold uppercase tracking-wider rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Middle & Right Column: Challenge, Solution, Impact */}
                  <div className="md:col-span-2 space-y-6">
                    
                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-rose-500 rounded-full"></span> The Challenge
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        {activeProject.caseStudy.challenge}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-purple-500 rounded-full"></span> The Architecture Solution
                      </h4>
                      <p className="text-xs text-zinc-300 leading-relaxed bg-zinc-950 p-4 rounded-xl border border-zinc-800">
                        {activeProject.caseStudy.solution}
                      </p>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-xs font-mono font-bold uppercase text-white tracking-wider flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full"></span> Business Impact
                      </h4>
                      <p className="text-xs text-emerald-300 font-bold leading-relaxed bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                        {activeProject.caseStudy.impact}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                        Key Features Delivered
                      </span>
                      <ul className="space-y-2 text-xs text-zinc-300">
                        {activeProject.features.map((feat, idx) => (
                          <li key={idx} className="flex items-start gap-2.5">
                            <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                  </div>

                </div>

              </div>

              {/* Modal Bottom CTA */}
              <div className="p-4 sm:p-6 bg-zinc-950 border-t border-zinc-800 flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 rounded-b-2xl">
                <span className="text-xs font-mono text-zinc-400 text-center sm:text-left">
                  Ready for a custom website architecture or e-commerce application like this?
                </span>
                <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-3 w-full sm:w-auto">
                  <a
                    href={activeProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 sm:px-5 py-2.5 sm:py-3 bg-zinc-900 border border-purple-900/50 hover:border-purple-400 text-zinc-200 hover:text-purple-300 text-xs font-jakarta font-bold uppercase tracking-wider transition-all rounded-xl flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer"
                  >
                    Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 via-[#8750f7] to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-jakarta font-bold uppercase tracking-wider transition-all rounded-xl text-center whitespace-nowrap shadow-[0_4px_20px_rgba(135,80,247,0.4)] cursor-pointer"
                  >
                    Request Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>,
          document.body
        )}
    </section>
  );
}
