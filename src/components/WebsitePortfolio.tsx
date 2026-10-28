import React, { useState } from "react";
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
  Filter
} from "lucide-react";

export interface WebsiteProject {
  id: string;
  title: string;
  client: string;
  category: "E-Commerce" | "Corporate & B2B" | "Healthcare" | "Media & Editorial";
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
    fallbackImage: "/websites-portfolio/partake-foods.webp",
    bgGradient: "from-purple-950 via-zinc-900 to-zinc-950",
    primaryColor: "#a855f7",
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
    fallbackImage: "/websites-portfolio/adora.webp",
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
    fallbackImage: "/websites-portfolio/the-buildermarket.webp",
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
    fallbackImage: "/websites-portfolio/blockd.webp",
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
    fallbackImage: "/websites-portfolio/toynk-pop-culture.webp",
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
    fallbackImage: "/websites-portfolio/detach.webp",
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
    fallbackImage: "/web-portfolio/watch-guys.png",
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
    fallbackImage: "/websites-portfolio/purepush.webp",
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
    fallbackImage: "/websites-portfolio/slamables.webp",
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
    image: "/websites-portfolio/lux-compounds.webp",
    fallbackImage: "/websites-portfolio/partake-foods.webp",
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
    fallbackImage: "/web-portfolio/lux-compounds.png",
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
    fallbackImage: "/websites-portfolio/matalan-clothing.webp",
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
    fallbackImage: "/websites-portfolio/maltan-clothing.webp",
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
  }
];

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

  const displayedProjects = isHomePage ? filteredProjects.slice(0, 6) : filteredProjects;

  return (
    <section
      id="portfolio"
      className="py-24 border-t border-zinc-800/60 scroll-mt-20 text-left"
    >
      <div className="max-w-6xl mx-auto px-3 sm:px-6 space-y-12">
        
        {/* SECTION HEADER */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-purple-950/60 border border-purple-800/60 text-[10px] font-mono font-bold text-purple-400 uppercase tracking-widest rounded-md">
              <Globe className="w-3.5 h-3.5 text-purple-400" />
              Verified Work Showcase
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight text-white">
              Websites Portfolio
            </h2>
            <p className="text-zinc-400 text-sm sm:text-base leading-relaxed">
              Explore custom-engineered website architectures, high-converting e-commerce applications, and high-impact graphic design systems built for maximum page speed and business growth.
            </p>
          </div>

          {/* Quick Metrics Badge */}
          <div className="flex items-center gap-4 p-4 bg-zinc-900/90 border border-zinc-800 rounded-2xl font-mono text-xs shrink-0 shadow-xl">
            <div className="space-y-0.5">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Core Web Vitals</span>
              <span className="text-emerald-400 font-bold text-sm">95–99 Average</span>
            </div>
            <div className="w-px h-8 bg-zinc-800"></div>
            <div className="space-y-0.5">
              <span className="text-[9px] text-zinc-500 font-bold uppercase tracking-widest block">Deployments</span>
              <span className="text-purple-300 font-bold text-sm">100+ Live Sites</span>
            </div>
          </div>
        </div>

        {/* SEARCH & CATEGORY FILTERS */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-b border-zinc-800 pb-6">
          
          {/* Category Tabs */}
          <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-2 sm:pb-0 -mx-2 px-2 sm:mx-0 sm:px-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`px-3.5 py-1.5 text-[10px] font-mono tracking-widest uppercase font-bold transition-all cursor-pointer rounded-lg shrink-0 whitespace-nowrap ${
                  currentCategory === cat
                    ? "bg-purple-600 text-white shadow-[0_0_15px_rgba(168,85,247,0.4)] border border-purple-500 font-bold"
                    : "bg-zinc-900/60 text-zinc-400 hover:text-white border border-zinc-800 hover:border-purple-800/50"
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
              className="w-full pl-9 pr-4 py-2 text-xs font-mono bg-zinc-900/90 border border-zinc-800 rounded-xl focus:border-purple-500/60 focus:outline-none text-zinc-200 placeholder:text-zinc-500"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-zinc-200 text-xs"
              >
                ×
              </button>
            )}
          </div>
        </div>

        {/* PROJECTS GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedProjects.map((project) => (
            <div
              key={project.id}
              className="bg-zinc-900/80 border border-zinc-800 hover:border-purple-500/50 rounded-2xl transition-all duration-300 flex flex-col justify-between group overflow-hidden shadow-xl"
            >
              <div>
                {/* Visual Header / Mockup Card Window */}
                <div 
                  onClick={() => setActiveProject(project)}
                  className="relative h-64 sm:h-72 w-full overflow-hidden bg-zinc-950 border-b border-zinc-800 group/img cursor-pointer"
                  title="Click to view full case study & interactive device preview"
                >
                  {/* Browser top chrome bar */}
                  <div className="absolute top-0 left-0 right-0 z-20 px-3 py-2 bg-zinc-950/95 backdrop-blur-md border-b border-zinc-800/80 flex items-center justify-between text-[9px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                      <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                      <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      <span className="text-zinc-300 font-bold ml-1 truncate max-w-[130px]">{project.liveUrl.replace("https://", "")}</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="hidden sm:inline-block text-[8px] text-zinc-400 font-mono tracking-wider uppercase bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-800 opacity-80 group-hover/img:opacity-100 transition-opacity">
                        Hover to Scroll
                      </span>
                      <div className="flex items-center gap-1 px-2 py-0.5 bg-emerald-950/90 border border-emerald-800/80 text-emerald-300 font-bold rounded">
                        <Zap className="w-2.5 h-2.5 text-emerald-400 fill-emerald-400" />
                        <span>{project.speedScore}/100</span>
                      </div>
                    </div>
                  </div>

                  {/* Website Screenshot Image Container with Hover-to-Scroll */}
                  <div className="w-full h-full pt-8 overflow-hidden relative bg-zinc-950">
                    <img
                      src={project.image}
                      alt={`${project.title} website screenshot`}
                      loading="eager"
                      decoding="async"
                      className="w-full h-auto block transform translate-y-0 group-hover/img:-translate-y-[calc(100%-240px)] transition-transform duration-[6000ms] ease-in-out opacity-100 [image-rendering:-webkit-optimize-contrast]"
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
                  </div>

                  {/* Bottom subtle gradient overlay for text readability */}
                  <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-zinc-950 via-zinc-950/70 to-transparent pointer-events-none z-10"></div>

                  <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between font-mono text-[9px]">
                    <div>
                      <span className="px-2 py-0.5 bg-purple-950/80 border border-purple-700/50 text-purple-300 font-bold uppercase tracking-wider rounded text-[8px] inline-block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-base font-bold font-serif text-white tracking-tight drop-shadow-md group-hover:text-purple-300 transition-colors">
                        {project.title}
                      </h3>
                    </div>
                    <span className="text-emerald-400 font-bold bg-zinc-950/90 px-2 py-0.5 rounded border border-zinc-800 shadow-md">
                      {project.conversionBoost}
                    </span>
                  </div>
                </div>

                {/* Card Content Description */}
                <div className="p-6 space-y-4 text-left">
                  <p className="text-xs text-zinc-400 leading-relaxed min-h-[54px]">
                    {project.description}
                  </p>

                  {/* Tech Stack Pills */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.techStack.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 bg-zinc-950 border border-zinc-800 text-[9px] font-mono text-zinc-300 font-bold uppercase rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action Footer */}
              <div className="p-6 pt-0 mt-2">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3.5 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-black uppercase tracking-wider transition-all rounded-xl flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(147,51,234,0.35)] cursor-pointer hover:shadow-purple-500/50 hover:scale-[1.02]"
                >
                  Visit Live <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* VIEW ALL SITES CTA (ON HOMEPAGE) */}
        {isHomePage && onShowMore && filteredProjects.length > 6 && (
          <div className="pt-2 text-center">
            <button
              onClick={onShowMore}
              className="px-8 py-4 bg-zinc-900 hover:bg-zinc-800 text-purple-300 hover:text-white border border-purple-500/30 hover:border-purple-500/60 rounded-2xl font-mono text-xs font-bold uppercase tracking-widest transition-all shadow-xl hover:shadow-purple-500/20 inline-flex items-center gap-2.5 cursor-pointer"
            >
              <Globe className="w-4 h-4 text-purple-400" />
              <span>Explore All {PORTFOLIO_SITES.length} Web Architectures</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {filteredProjects.length === 0 && (
          <div className="p-12 text-center bg-zinc-900/80 border border-zinc-800 rounded-2xl font-mono space-y-3">
            <p className="text-zinc-400 text-xs uppercase tracking-widest font-bold">
              No website projects matched your filter query "{searchQuery}".
            </p>
            <button
              onClick={() => {
                handleCategoryChange("All");
                setSearchQuery("");
              }}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 text-white text-[10px] uppercase font-bold tracking-widest rounded-lg cursor-pointer shadow-md"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>

      {/* INTERACTIVE CASE STUDY MODAL & SIMULATOR */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-6 bg-zinc-950/85 backdrop-blur-md overflow-y-auto">
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
                  <div className="hidden sm:flex items-center bg-zinc-900 border border-zinc-800 rounded-lg p-0.5 font-mono text-[9px]">
                    <button
                      onClick={() => setViewDevice("desktop")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 uppercase font-bold cursor-pointer transition-all ${
                        viewDevice === "desktop" ? "bg-purple-600 text-white shadow-md font-bold" : "text-zinc-400 hover:text-zinc-200"
                      }`}
                    >
                      <Monitor className="w-3 h-3" /> Desktop
                    </button>
                    <button
                      onClick={() => setViewDevice("mobile")}
                      className={`px-2.5 py-1 rounded flex items-center gap-1.5 uppercase font-bold cursor-pointer transition-all ${
                        viewDevice === "mobile" ? "bg-purple-600 text-white shadow-md font-bold" : "text-zinc-400 hover:text-zinc-200"
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
                        <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                      </div>
                      <a
                        href={activeProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-zinc-900 hover:bg-zinc-800 px-2 sm:px-3 py-0.5 rounded text-zinc-300 hover:text-purple-300 font-bold tracking-wider border border-zinc-800 flex items-center gap-1 transition-colors truncate max-w-[150px] sm:max-w-xs text-[9px] sm:text-[10px]"
                      >
                        <span className="truncate">{activeProject.liveUrl.replace("https://", "")}</span> <ExternalLink className="w-2.5 h-2.5 shrink-0" />
                      </a>
                      <span className="text-emerald-400 font-bold shrink-0 text-[9px] sm:text-[10px]">{activeProject.speedScore}/100</span>
                    </div>

                    {/* Real Live Site Screenshot Preview Canvas */}
                    <div className="relative min-h-[250px] sm:min-h-[300px] max-h-[460px] overflow-y-auto bg-zinc-950 group/preview">
                      <img
                        src={activeProject.image}
                        alt={`${activeProject.title} live website screenshot`}
                        loading="eager"
                        decoding="async"
                        className="w-full h-auto object-cover object-top [image-rendering:-webkit-optimize-contrast]"
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

                      {/* Floating bottom status bar with speed metric & live link */}
                      <div className="sticky bottom-0 left-0 right-0 p-2.5 sm:p-3 bg-zinc-950/95 backdrop-blur-md border-t border-zinc-800 flex flex-wrap items-center justify-between gap-2 text-xs font-mono">
                        <div className="flex items-center gap-2 sm:gap-3">
                          <span className="px-2 py-0.5 bg-purple-950/80 border border-purple-700/50 text-purple-300 font-bold uppercase rounded text-[8px] sm:text-[9px]">
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
                          className="px-2.5 sm:px-3 py-1 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-[9px] sm:text-[10px] uppercase tracking-wider rounded flex items-center gap-1 transition-all whitespace-nowrap shadow-md"
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
                      <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                        Tech Stack Enqueued
                      </span>
                      <div className="flex flex-wrap gap-1.5">
                        {activeProject.techStack.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 bg-zinc-950 border border-purple-900/40 text-[10px] font-mono text-purple-300 font-bold uppercase rounded"
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
                    className="px-4 sm:px-5 py-2.5 sm:py-3 bg-zinc-900 border border-zinc-700 hover:border-purple-400 text-zinc-200 hover:text-purple-300 text-xs font-mono font-bold uppercase tracking-widest transition-all rounded-xl flex items-center justify-center gap-2 whitespace-nowrap"
                  >
                    Visit Live Site <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href="#contact"
                    onClick={() => setActiveProject(null)}
                    className="px-5 sm:px-6 py-2.5 sm:py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-mono font-bold uppercase tracking-widest shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all rounded-xl text-center whitespace-nowrap cursor-pointer"
                  >
                    Request Similar Project
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
    </section>
  );
}
