import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  ExternalLink,
  ArrowUpRight,
  Search,
  Play,
  Pause,
  ChevronLeft,
  ChevronRight
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
    image: "/websites-fast/henrietta-said.webp",
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
    id: "crav-burgers",
    title: "CRAV Burgers",
    client: "CRAV | Artisan Smashed Burgers",
    category: "E-Commerce",
    tagline: "Artisan Smashed Burgers & Street Food Online Experience",
    description: "High-impact, appetizing digital storefront and online ordering platform for artisan smashed burgers, featuring sizzle-effect menu showcases, crispy smash patties, signature house sauces, and seamless mobile order-ahead integration.",
    speedScore: 99,
    loadTime: "0.32s",
    conversionBoost: "+190% Online Orders",
    techStack: ["React / Next.js", "Shopify Storefront API", "Interactive Motion Loop", "Tailwind CSS", "Apple Pay / Google Pay"],
    role: "Lead E-Commerce Developer",
    year: "2025",
    liveUrl: "https://www.cravburgers.shop/",
    image: "/websites-fast/crav-burgers.webp",
    fallbackImage: "/websites-portfolio/crav-enjoy-2026.webp",
    videoPreview: "/websites-portfolio/crav-enjoy-2026.mp4",
    isAnimatedSite: true,
    bgGradient: "from-orange-950 via-zinc-900 to-zinc-950",
    primaryColor: "#ea580c",
    features: [
      "Dynamic interactive burger menu with custom smash patty stackers and toppings",
      "Frictionless 2-tap mobile checkout supporting Apple Pay and Google Pay",
      "Sub-0.35s instant page transitions with zero-latency cart updates",
      "High-converting promotional promo banners and secret sauce combo builders"
    ],
    caseStudy: {
      challenge: "Artisan smash burger restaurant required a punchy, youth-centric online store to capture direct delivery orders and avoid hefty 3rd-party marketplace commissions.",
      solution: "Engineered an ultra-fast headless e-commerce store with appetizing video loops, instant order customizer, and integrated digital wallet payment processing.",
      impact: "Generated +190% direct order volume in first 60 days, achieved 99/100 performance index, and cut cart abandonment by 42%."
    },
    mockup: {
      heroTitle: "Artisan Smashed Burgers — Crispy Edges, Juicy Centers",
      heroSubtitle: "Double Smashed Beef • Truffle Mayo • House Potato Buns • Loaded Shakes",
      stat1: "99/100 Speed Score",
      stat2: "0.32s Fast Checkout",
      badgeText: "Artisan Smash Burger Brand"
    }
  },
  {
    id: "pretty-patty-geneva",
    title: "Pretty Patty",
    client: "Pretty Patty (Genève, Switzerland)",
    category: "E-Commerce",
    tagline: "Burgers Frais et Locaux à Genève • Swiss Gourmet Smash",
    description: "Sleek bilingual (FR/EN) digital restaurant platform and click-and-collect ordering experience for Geneva's iconic gourmet smash burger concept, highlighting 100% Swiss terroir beef, artisanal bakery brioche buns, and house sauces.",
    speedScore: 98,
    loadTime: "0.35s",
    conversionBoost: "+160% Pickup & Table Orders",
    techStack: ["Next.js / React", "Bilingual i18n (FR/EN)", "Interactive Menu Slider", "Tailwind CSS", "Stripe Checkout"],
    role: "Creative Front-End Architect",
    year: "2025",
    liveUrl: "https://prettypatty.ch/",
    image: "/websites-fast/pretty-patty-geneva.webp",
    fallbackImage: "/websites-portfolio/pretty-patty-2026.webp",
    videoPreview: "/websites-portfolio/pretty-patty-2026.mp4",
    isAnimatedSite: true,
    bgGradient: "from-rose-950 via-zinc-900 to-zinc-950",
    primaryColor: "#f43f5e",
    features: [
      "Bilingual Swiss French & English menu experience with real-time allergen tags",
      "Click-and-collect ordering workflow with precision pickup scheduling in Geneva",
      "Interactive 60 FPS motion presentation of Swiss local farmers & ingredients",
      "Fluid mobile-first responsive design engineered for fast on-the-go lunch orders"
    ],
    caseStudy: {
      challenge: "Geneva's premium burger hotspot needed a sophisticated online presence reflecting their commitment to local Swiss agriculture and enabling rapid click-and-collect orders.",
      solution: "Built a bespoke multilingual web experience with interactive menu showcases, local ingredient traceability, and frictionless takeout checkout.",
      impact: "Grew direct pickup orders by 160%, scored 98/100 Core Web Vitals, and received praise from Swiss food critics for design elegance."
    },
    mockup: {
      heroTitle: "Burgers Frais & Locaux à Genève",
      heroSubtitle: "100% Viande Suisse • Pains Briochés Artisanaux • Sauces Maison",
      stat1: "98/100 Speed Index",
      stat2: "0.35s Instant Render",
      badgeText: "Geneva Gourmet Burger Concept"
    }
  },
  {
    id: "primland-residences",
    title: "Primland Residences",
    client: "Auberge Resorts Collection (Meadows of Dan, VA)",
    category: "Corporate & B2B",
    tagline: "Luxury Mountain Living & Exclusive Estate Residences",
    description: "Immersive architectural showcase and private sales portal for luxury mountain residences within the 12,000-acre Primland Auberge resort estate in Virginia's Blue Ridge Mountains, featuring Hart Howerton luxury estates, golf amenities, and private advisor consultations.",
    speedScore: 97,
    loadTime: "0.40s",
    conversionBoost: "+145% Private Tour Inquiries",
    techStack: ["Next.js / TypeScript", "Interactive 3D Video Tour", "High-Res Estate Viewer", "Tailwind CSS", "Private CRM Integration"],
    role: "Lead UI Architect & Web Developer",
    year: "2025",
    liveUrl: "https://ownprimland.com/",
    image: "/websites-fast/primland-residences.webp",
    fallbackImage: "/websites-portfolio/primland-residence.webp",
    videoPreview: "/websites-portfolio/primland-residence.mp4",
    isAnimatedSite: true,
    bgGradient: "from-emerald-950 via-zinc-900 to-zinc-950",
    primaryColor: "#10b981",
    features: [
      "Cinematic 60 FPS video walkthrough exploring 12,000-acre Blue Ridge mountain estates",
      "Interactive estate site plans with Hart Howerton custom residence architectural specs",
      "High-touch private showing booking portal with concierge schedule syncing",
      "Sub-0.45s page loads delivering ultra-high-resolution architectural photography"
    ],
    caseStudy: {
      challenge: "Ultra-luxury Auberge resort estate required a prestigious digital platform to showcase multi-million-dollar custom homes and estates to high-net-worth buyers globally.",
      solution: "Developed an elegant, editorial-grade web application combining cinematic motion, bespoke topography maps, and seamless private tour scheduling.",
      impact: "Generated +145% high-net-worth viewing appointments, received 97/100 speed grade, and established Primland as the pinnacle of Virginia mountain living."
    },
    mockup: {
      heroTitle: "The Residences at Primland — Auberge Resorts Collection",
      heroSubtitle: "12,000-Acre Mountain Sanctuary • Custom Estates • Championship Golf & Spa",
      stat1: "97/100 Performance",
      stat2: "0.40s Response Time",
      badgeText: "Ultra-Luxury Mountain Estates"
    }
  },
  {
    id: "topas-tapas-bar",
    title: "Tòpas Tapas & Bar",
    client: "Tòpas by Topaze (Biel/Bienne, Switzerland)",
    category: "Corporate & B2B",
    tagline: "Cuisine Hispano-Suisse, Artisan Cocktails & Urban Lounge",
    description: "Sophisticated bilingual digital experience for Biel's celebrated Spanish-Swiss fusion tapas bar and urban lounge, featuring interactive culinary menus, seasonal sharing plates, signature mixology cocktail showcases, and instant table reservations.",
    speedScore: 98,
    loadTime: "0.34s",
    conversionBoost: "+180% Table Reservations",
    techStack: ["React / Next.js", "Interactive Menu Engine", "Bilingual DE/FR", "Tailwind CSS", "Table Booking API"],
    role: "Lead Front-End Developer",
    year: "2025",
    liveUrl: "https://bar-topas.ch/",
    image: "/websites-fast/topas-tapas-bar.webp",
    fallbackImage: "/websites-portfolio/topas.webp",
    videoPreview: "/websites-portfolio/topas.mp4",
    isAnimatedSite: true,
    bgGradient: "from-purple-950 via-zinc-900 to-zinc-950",
    primaryColor: "#a855f7",
    features: [
      "Interactive tapas & pinchos sharing menu with Iberian wine pairing recommendations",
      "Live table booking integration with instant SMS and email confirmation",
      "Fluid 60 FPS video bar atmosphere preview capturing Biel's vibrant nightlife",
      "Bilingual German & French UI with seamless localized dietary filter tags"
    ],
    caseStudy: {
      challenge: "Renowned Biel tapas bar needed a chic, modern web presence to match its gourmet culinary repositioning and streamline evening table reservations.",
      solution: "Created an immersive, high-contrast bar website with interactive cocktail cards, bilingual menu explorer, and one-tap reservation booking.",
      impact: "Increased weekend table bookings by 180%, achieved 98/100 Core Web Vitals, and boosted private event inquiries."
    },
    mockup: {
      heroTitle: "Tòpas by Topaze — Cuisine Hispano-Suisse",
      heroSubtitle: "Tapas Créatifs • Vins Ibériques • Cocktails Signatures • Ambiance Urbaine",
      stat1: "98/100 Core Web Vitals",
      stat2: "0.34s Page Load",
      badgeText: "Swiss-Spanish Tapas & Bar"
    }
  },
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
    image: "/websites-fast/mrday-bakery.webp",
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
    id: "brars-ethnic-foods",
    title: "Brar's",
    client: "Brar's Pure Dairy & Traditional Foods (Canada)",
    category: "E-Commerce",
    tagline: "Canada's Leading Ethnic Dairy, Pure Ghee & Traditional Mithai Sweets",
    description: "Premium digital brand portal and interactive e-commerce showcase for Canada's most trusted South Asian food manufacturer, featuring pure Desi Ghee, artisanal paneer, handcrafted Diwali mithai sweets, and nationwide grocery store locator.",
    speedScore: 98,
    loadTime: "0.38s",
    conversionBoost: "+175% Store Inquiries",
    techStack: ["Next.js / React", "Interactive Product Slider", "Store Locator GIS", "Tailwind CSS", "High-Speed CDN"],
    role: "Lead Creative Developer & UI Architect",
    year: "2025",
    liveUrl: "https://www.brars.com/",
    image: "/websites-fast/brars-ethnic-foods.webp",
    fallbackImage: "/websites-portfolio/brars.webp",
    videoPreview: "/websites-portfolio/brars.mp4",
    isAnimatedSite: true,
    bgGradient: "from-amber-950 via-zinc-900 to-zinc-950",
    primaryColor: "#f59e0b",
    features: [
      "Interactive pure desi ghee & artisanal dairy product showcase with smooth video previews",
      "Nationwide interactive store locator mapping thousands of Canadian supermarkets",
      "Festive gift box & traditional Indian mithai sweet customization workflow",
      "Ultra-fast 60 FPS mobile touch navigation backed by responsive image pipelines"
    ],
    caseStudy: {
      challenge: "Canada's largest ethnic dairy and traditional food brand needed a modern digital experience to connect with second-generation South Asian consumers while driving retail foot traffic.",
      solution: "Built a high-performance Next.js web application with rich sensory visual motion, bilingual product catalog, and comprehensive supermarket locator.",
      impact: "Achieved 98/100 Core Web Vitals, increased store locator conversions by 175%, and boosted festive gift inquiries."
    },
    mockup: {
      heroTitle: "Pure Dairy, Authentic Tradition — Handcrafted in Canada",
      heroSubtitle: "Desi Ghee • Artisanal Paneer • Fresh Mithai • Authentic Indian Flavours",
      stat1: "98/100 Performance Score",
      stat2: "0.38s Page Render",
      badgeText: "Premier Canadian Ethnic Dairy Brand"
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
    image: "/websites-fast/brets-crisps.webp",
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
    image: "/websites-fast/aardvark-bookclub.webp",
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
    image: "/websites-fast/dropship-io.webp",
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
    image: "/websites-fast/voldog-gear.webp",
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
    image: "/websites-fast/adora-skincare.webp",
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
    image: "/websites-fast/builder-market.webp",
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
    image: "/websites-fast/blockd-security.webp",
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
    image: "/websites-fast/toynk-collectibles.webp",
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
    image: "/websites-fast/detach-apparel.webp",
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
    image: "/websites-fast/watchguys.webp",
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
    image: "/websites-fast/purepush-nutrition.webp",
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
    image: "/websites-fast/slamables-collectibles.webp",
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
    image: "/websites-fast/desicart-uk.webp",
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
    image: "/websites-fast/lux-compounds.webp",
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
    image: "/websites-fast/matalan-me.webp",
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
    image: "/websites-fast/babyshop-stores.webp",
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
    image: "/websites-fast/theobroma-chocolates.webp",
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
    description: "High-impact enterprise digital agency platform engineered for AI search discovery (AEO/GEO), rapid client pipeline generation, interactive project showcases, and sub-0.35s page transitions.",
    speedScore: 99,
    loadTime: "0.33s",
    conversionBoost: "+256% Pipeline Growth",
    techStack: ["Webflow Enterprise", "GSAP Motion", "AEO / GEO Architecture", "Tailwind CSS", "TypeScript"],
    role: "Lead Creative Developer & UI Architect",
    year: "2025",
    liveUrl: "https://broworks.net/",
    image: "/websites-fast/broworks-agency.webp",
    fallbackImage: "/websites-portfolio/broworks.png",
    bgGradient: "from-yellow-950 via-zinc-900 to-zinc-950",
    primaryColor: "#eab308",
    features: [
      "Engineered for answer engines (ChatGPT, Perplexity, Claude citation indexing)",
      "Adaptive modular CMS architecture with zero-code marketing workflows",
      "Fluid 60 FPS interactive project previews and client impact metrics",
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
    description: "Avant-garde design engineering studio portfolio featuring fluid scroll dynamics, interactive project showcases, refined typography, and sub-0.35s page transitions.",
    speedScore: 99,
    loadTime: "0.31s",
    conversionBoost: "+180% Inbound Leads",
    techStack: ["Next.js / React", "Lenis Smooth Scroll", "Tailwind CSS", "TypeScript", "Headless CMS"],
    role: "Lead Creative Developer",
    year: "2025",
    liveUrl: "http://atomato.co/",
    image: "/websites-fast/atomato-studio.webp",
    fallbackImage: "/websites-portfolio/atomato.png",
    bgGradient: "from-zinc-900 via-zinc-900 to-zinc-950",
    primaryColor: "#a1a1aa",
    features: [
      "Bespoke inertia-based smooth scrolling powered by Lenis and Framer Motion",
      "Dynamic responsive project reveals with high-DPI visual galleries",
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
    image: "/websites-fast/slight-twist.webp",
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
    image: "/websites-fast/joyrush-energy.webp",
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
    image: "/websites-fast/partake-foods.webp",
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
  playOnlyOnHover?: boolean;
}

function VideoCardPreview({ videoSrc, posterSrc, alt, playOnlyOnHover = false }: VideoCardPreviewProps) {
  const containerRef = React.useRef<HTMLDivElement>(null);
  const videoRef = React.useRef<HTMLVideoElement | null>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isInView, setIsInView] = useState(!playOnlyOnHover);
  const [isTouchOnly, setIsTouchOnly] = useState(false);
  const [isVideoReady, setIsVideoReady] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const mq = window.matchMedia("(hover: none), (pointer: coarse)");
    const update = () => setIsTouchOnly(mq.matches);
    update();
    mq.addEventListener?.("change", update);
    return () => mq.removeEventListener?.("change", update);
  }, []);

  const attemptPlay = React.useCallback((video: HTMLVideoElement | null) => {
    if (!video) return;
    video.defaultMuted = true;
    video.muted = true;
    video.playsInline = true;
    video.loop = true;
    video.setAttribute("muted", "");
    video.setAttribute("playsinline", "");
    video.setAttribute("webkit-playsinline", "");
    const promise = video.play();
    if (promise !== undefined) {
      promise
        .then(() => {
          setIsVideoReady(true);
        })
        .catch(() => {});
    }
  }, []);

  useEffect(() => {
    setIsVideoReady(false);
  }, [videoSrc]);

  // Observe visibility so offscreen mobile videos pause/unmount to preserve hardware decoders
  useEffect(() => {
    const container = containerRef.current;
    if (!container || typeof window === "undefined" || !("IntersectionObserver" in window)) {
      setIsInView(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsInView(entry.isIntersecting);
        });
      },
      { rootMargin: "80px 0px", threshold: 0.05 }
    );
    observer.observe(container);

    return () => observer.disconnect();
  }, [videoSrc]);

  // Mobile/touch auto-plays visible cards; desktop plays spotlight when visible & grid cards on hover
  const shouldPlay = playOnlyOnHover
    ? (isTouchOnly ? isInView : isHovered)
    : isInView;
  const shouldMountVideo = playOnlyOnHover
    ? (isTouchOnly ? isInView : isHovered)
    : true;

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    if (shouldPlay) {
      attemptPlay(video);
    } else {
      video.pause();
    }
  }, [videoSrc, shouldPlay, shouldMountVideo, attemptPlay]);

  const attachVideoRef = React.useCallback(
    (node: HTMLVideoElement | null) => {
      videoRef.current = node;
      if (node) {
        node.defaultMuted = true;
        node.muted = true;
        node.playsInline = true;
        node.setAttribute("muted", "");
        node.setAttribute("playsinline", "");
        node.setAttribute("webkit-playsinline", "");
        if (shouldPlay) {
          attemptPlay(node);
        }
      }
    },
    [shouldPlay, attemptPlay]
  );

  return (
    <div
      ref={containerRef}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="w-full h-full relative overflow-hidden bg-zinc-950 flex items-start justify-center"
    >
      <img
        src={posterSrc}
        alt={alt}
        loading="eager"
        decoding="async"
        className="w-full h-full object-cover object-top"
      />
      {shouldMountVideo && (
        <video
          key={videoSrc}
          ref={attachVideoRef}
          src={videoSrc}
          poster={posterSrc}
          autoPlay={shouldPlay}
          muted
          loop
          playsInline
          preload={shouldPlay ? "auto" : "metadata"}
          onLoadedMetadata={() => {
            if (shouldPlay) attemptPlay(videoRef.current);
          }}
          onLoadedData={() => {
            if (shouldPlay) attemptPlay(videoRef.current);
          }}
          onCanPlay={() => {
            if (shouldPlay) attemptPlay(videoRef.current);
          }}
          onPlaying={() => setIsVideoReady(true)}
          onTimeUpdate={(e) => {
            if (!isVideoReady && e.currentTarget.currentTime > 0) {
              setIsVideoReady(true);
            }
          }}
          aria-label={alt}
          className={`absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-300 ${
            isVideoReady ? "opacity-100" : "opacity-0"
          }`}
        />
      )}
    </div>
  );
}

const SHOWCASE_FRAME_COLORS = [
  "#e9d5ff",
  "#d9f99d",
  "#bae6fd",
  "#fde68a",
  "#fecdd3",
  "#a5f3fc",
  "#c4b5fd",
  "#fed7aa",
  "#bbf7d0",
  "#f9a8d4"
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
  const [searchQuery, setSearchQuery] = useState<string>("");

  // Spotlight carousel state for Homepage Video-Reference Laptop Showcase
  const featuredSites = PORTFOLIO_SITES.slice(0, 10);
  const [spotlightIndex, setSpotlightIndex] = useState<number>(0);
  const [isAutoCycling, setIsAutoCycling] = useState<boolean>(true);
  const currentSpotlight = featuredSites[spotlightIndex] || PORTFOLIO_SITES[0];

  useEffect(() => {
    if (!isAutoCycling) return;
    const timer = window.setInterval(() => {
      setSpotlightIndex((prev) => (prev + 1) % featuredSites.length);
    }, 5200);
    return () => window.clearInterval(timer);
  }, [isAutoCycling, featuredSites.length, spotlightIndex]);

  const selectSpotlightProject = (idx: number) => {
    setSpotlightIndex(idx);
  };

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

  const displayedProjects = filteredProjects;

  const renderVideoShowcaseStage = (showSeeMoreButton: boolean) => (
    <div
      className={`w-full space-y-10 sm:space-y-12 bg-[#0D071E] text-white relative overflow-x-clip ${
        showSeeMoreButton ? "py-12 sm:py-20 lg:py-24" : "pt-6 sm:pt-10 pb-12 sm:pb-16"
      }`}
    >
      {/* 1. Centered Top Title Stack */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: "some" }}
        transition={{ duration: 0.38, ease: [0.22, 1, 0.36, 1] }}
        className="max-w-4xl mx-auto px-4 sm:px-6 text-center space-y-4"
      >
        <span className="font-hand text-xl sm:text-2xl font-bold px-4 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block -rotate-2 hover:rotate-1 transition-transform duration-200 shadow-sm cursor-default">
          websites built to convert
        </span>

        <h2 className="font-display text-5xl sm:text-7xl lg:text-[84px] font-black uppercase tracking-tight leading-[0.9] text-white text-balance">
          {showSeeMoreButton ? "Recent Work, Real Results" : "Websites Portfolio Showcase"}
        </h2>

        <p className="text-sm sm:text-base text-purple-100/85 max-w-2xl mx-auto leading-relaxed">
          Every build pairs custom visual identity with sub-second engineering. Hover any preview to open that live website, or pick any site gliding behind to inspect it.
        </p>
      </motion.div>

      {/* 2. Layered Sliding Card Marquee + Centered MacBook Laptop Stage */}
      <div className="relative w-full py-4 sm:py-4">
        {/* Background Sliding Cards Track (Visible on Mobile & Desktop) */}
        <div
          aria-label="Scrolling website portfolio gallery"
          className="flex items-center overflow-x-clip w-full absolute inset-y-0 left-0 right-0 z-10 pointer-events-auto [touch-action:pan-x_pan-y]"
        >
          <div
            className="animate-portfolio-marquee flex items-center gap-3.5 sm:gap-6 py-4"
            style={{ animationPlayState: isAutoCycling ? "running" : "paused" }}
          >
            {[...featuredSites, ...featuredSites].map((site, stripIdx) => {
              const realIdx = stripIdx % featuredSites.length;
              const isActive = realIdx === spotlightIndex;
              const frameColor = SHOWCASE_FRAME_COLORS[realIdx % SHOWCASE_FRAME_COLORS.length];
              return (
                <button
                  key={`${site.id}-${stripIdx}`}
                  type="button"
                  onClick={() => selectSpotlightProject(realIdx)}
                  style={{ backgroundColor: frameColor }}
                  className={`w-[155px] sm:w-[230px] md:w-[270px] lg:w-[295px] aspect-[4/3] rounded-xl sm:rounded-2xl p-2 sm:p-3.5 shrink-0 flex flex-col justify-between transition-all duration-300 cursor-pointer group/strip shadow-[0_20px_50px_rgba(7,3,14,0.55)] border ${
                    isActive
                      ? "border-white scale-[1.03] ring-2 ring-white/70"
                      : "border-white/20 opacity-90 hover:opacity-100 hover:-translate-y-1"
                  }`}
                  title={`Preview ${site.title} inside laptop`}
                >
                  <div className="w-full flex-1 min-h-0 rounded-lg sm:rounded-xl overflow-hidden bg-[#07030e] border border-black/15 relative">
                    <img
                      src={site.image}
                      alt={site.title}
                      loading="eager"
                      decoding="async"
                      className="w-full h-full object-cover object-top group-hover/strip:scale-105 transition-transform duration-500"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallbackTried && site.fallbackImage && site.fallbackImage !== site.image) {
                          target.dataset.fallbackTried = "true";
                          target.src = site.fallbackImage;
                        }
                      }}
                    />
                  </div>
                  <div className="pt-1.5 sm:pt-2 px-0.5 sm:px-1 flex items-center justify-between text-[#120a22] text-[10px] sm:text-xs font-bold gap-1">
                    <span className="truncate">{site.title}</span>
                    <span className="font-mono text-[9px] sm:text-[10px] opacity-80 shrink-0 tabular-nums">
                      {site.speedScore}/100
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Foreground Centerpiece: MacBook Pro Mockup */}
        <div className="relative z-20 max-w-[265px] sm:max-w-[600px] lg:max-w-[760px] mx-auto px-2 sm:px-0">
          <div className="bg-[#0d071d] border-[5px] sm:border-[10px] border-[#1a0f33] ring-1 ring-white/20 rounded-t-[1rem] sm:rounded-t-[1.7rem] shadow-[0_36px_95px_rgba(7,3,14,0.85)] overflow-hidden">
            <div className="flex justify-center py-1 sm:py-2 bg-[#0d071d]">
              <span className="w-1.5 h-1.5 rounded-full bg-purple-300/35 block" />
            </div>

            <div className="px-2.5 sm:px-4 py-1 sm:py-2 bg-[#140a29] border-y border-purple-400/20 flex items-center justify-between text-[9px] sm:text-[11px] font-mono gap-2">
              <div className="flex items-center gap-1 sm:gap-1.5 shrink-0">
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ff6b6b]" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#ffd93d]" />
                <span className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#6bcb77]" />
              </div>
              <div className="text-purple-100 font-semibold truncate flex items-center gap-1.5 min-w-0">
                <span className="uppercase tracking-wider truncate">{currentSpotlight.title}</span>
                <span aria-hidden="true" className="text-purple-400/60 hidden sm:inline">·</span>
                <span className="text-purple-300/85 hidden sm:inline truncate">
                  {currentSpotlight.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                </span>
              </div>
              <span className="text-emerald-400 font-bold tabular-nums shrink-0">
                {currentSpotlight.speedScore}/100
              </span>
            </div>

            <a
              href={currentSpotlight.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              title={`Open ${currentSpotlight.title} live website`}
              className="group/screen block aspect-[16/10] w-full bg-[#07030e] relative overflow-hidden cursor-pointer"
            >
              <AnimatePresence initial={false}>
                <motion.div
                  key={currentSpotlight.id}
                  initial={{ opacity: 0, scale: 1.02 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                  className="absolute inset-0 w-full h-full will-change-[opacity,transform]"
                >
                  {currentSpotlight.videoPreview ? (
                    <VideoCardPreview
                      videoSrc={currentSpotlight.videoPreview}
                      posterSrc={currentSpotlight.image}
                      alt={`${currentSpotlight.title} live website showcase`}
                    />
                  ) : (
                    <img
                      src={currentSpotlight.image}
                      alt={currentSpotlight.title}
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        if (!target.dataset.fallbackTried && currentSpotlight.fallbackImage) {
                          target.dataset.fallbackTried = "true";
                          target.src = currentSpotlight.fallbackImage;
                        }
                      }}
                    />
                  )}
                </motion.div>
              </AnimatePresence>

              {/* Hover to Open Website Overlay */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#07030e]/85 via-[#07030e]/20 to-transparent opacity-0 group-hover/screen:opacity-100 transition-opacity duration-200 flex items-end justify-center p-3 sm:p-5">
                <span className="inline-flex items-center gap-2 px-4 sm:px-5 py-2 sm:py-2.5 rounded-full bg-white text-[#120a22] font-bold text-[11px] sm:text-xs shadow-[0_12px_30px_rgba(0,0,0,0.5)]">
                  <span>Open {currentSpotlight.title}</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </span>
              </div>
            </a>
          </div>

          <div className="w-[106%] -ml-[3%] h-2.5 sm:h-4 rounded-b-xl bg-gradient-to-b from-[#e4e4ee] via-[#c7c6d8] to-[#9492ad] shadow-[0_16px_34px_rgba(7,3,14,0.75)] relative">
            <div className="w-12 sm:w-28 h-1 sm:h-1.5 bg-[#706e8d]/75 rounded-b-md mx-auto" />
          </div>
        </div>
      </div>

      {/* 3. Mobile Quick Strip + Prev/Next Bar */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 space-y-6 text-center">
        <div className="sm:hidden flex gap-3 overflow-x-auto no-scrollbar pb-1 -mx-2 px-2 [touch-action:pan-x_pan-y]">
          {featuredSites.map((site, idx) => (
            <button
              key={site.id}
              type="button"
              onClick={() => selectSpotlightProject(idx)}
              className={`px-3.5 py-2 rounded-full text-xs font-bold whitespace-nowrap shrink-0 border transition-colors cursor-pointer ${
                idx === spotlightIndex
                  ? "bg-white text-[#120a22] border-white"
                  : "bg-[#120a22]/80 text-purple-100 border-purple-400/30"
              }`}
            >
              {site.title}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={() =>
              selectSpotlightProject(
                spotlightIndex > 0 ? spotlightIndex - 1 : featuredSites.length - 1
              )
            }
            aria-label="Previous featured website"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#120a22] border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronLeft className="w-4 h-4" />
          </button>

          <div className="flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 text-xs sm:text-sm font-medium px-2">
            <span className="font-display font-black uppercase text-lg sm:text-xl tracking-wide text-white">
              {currentSpotlight.title}
            </span>
            <span aria-hidden="true" className="text-purple-300/60">·</span>
            <span className="text-purple-200">{currentSpotlight.category}</span>
            <span aria-hidden="true" className="text-purple-300/60">·</span>
            <span className="font-mono text-xs text-emerald-400 font-bold tabular-nums">
              {currentSpotlight.conversionBoost}
            </span>
          </div>

          <button
            type="button"
            onClick={() =>
              selectSpotlightProject((spotlightIndex + 1) % featuredSites.length)
            }
            aria-label="Next featured website"
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white text-white hover:text-[#120a22] border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
          >
            <ChevronRight className="w-4 h-4" />
          </button>

          <button
            type="button"
            onClick={() => setIsAutoCycling((prev) => !prev)}
            aria-label={isAutoCycling ? "Pause showcase cycle" : "Resume showcase cycle"}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/25 flex items-center justify-center transition-colors cursor-pointer"
            title={isAutoCycling ? "Pause auto-cycle" : "Play auto-cycle"}
          >
            {isAutoCycling ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
          </button>
        </div>

        <div className="flex items-center justify-center gap-2">
          {featuredSites.map((site, idx) => (
            <button
              key={site.id}
              type="button"
              onClick={() => selectSpotlightProject(idx)}
              aria-label={`Preview ${site.title}`}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                idx === spotlightIndex
                  ? "w-7 bg-white"
                  : "w-2 bg-white/30 hover:bg-white/60"
              }`}
            />
          ))}
        </div>

        {/* 4. Bottom Action Row */}
        <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5">
          {showSeeMoreButton && onShowMore ? (
            <>
              <button
                type="button"
                onClick={onShowMore}
                className="px-8 py-3.5 bg-white hover:bg-[#e9d5ff] text-[#120a22] text-sm font-bold rounded-full transition-colors cursor-pointer shadow-[0_16px_40px_rgba(7,3,14,0.45)] inline-flex items-center gap-2 whitespace-nowrap"
              >
                <span>See my work ({PORTFOLIO_SITES.length} sites)</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href={currentSpotlight.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 text-[#e9d5ff] hover:text-white transition-colors cursor-pointer group"
              >
                <span className="font-hand text-xl sm:text-2xl font-semibold underline decoration-purple-300/50 underline-offset-4">
                  or visit {currentSpotlight.title} live
                </span>
                <ExternalLink className="w-4 h-4 text-[#e9d5ff] group-hover:translate-x-0.5 transition-transform" />
              </a>
            </>
          ) : (
            <a
              href={currentSpotlight.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-3.5 bg-white hover:bg-[#e9d5ff] text-[#120a22] text-sm font-bold rounded-full transition-colors cursor-pointer shadow-[0_16px_40px_rgba(7,3,14,0.45)] inline-flex items-center gap-2 whitespace-nowrap"
            >
              <span>Visit {currentSpotlight.title} Live</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="portfolio"
      className="scroll-mt-20 text-left"
    >
      {isHomePage ? (
        renderVideoShowcaseStage(true)
      ) : (
        <>
          {renderVideoShowcaseStage(false)}
          <div className="pt-10 sm:pt-14 border-t border-purple-900/40">
            {/* Searchable & Filterable Archive Grid */}
            <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 space-y-8 sm:space-y-12">
            {/* SECTION HEADER */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
              <div className="space-y-3 max-w-2xl">
                <motion.span
                  initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                  whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                  className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                >
                  live sites, shipped &amp; fast
                </motion.span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white text-balance">
                  All {PORTFOLIO_SITES.length} Website Builds
                </h2>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed">
                  Custom WordPress architectures, high-converting Shopify stores, and full-stack web apps engineered for sub-second speed and measurable conversion lifts.
                </p>
              </div>

              <div className="flex flex-wrap items-center gap-4 sm:gap-6 py-3 px-4 sm:px-5 bg-[#120A21] border border-purple-800/40 rounded-2xl shrink-0">
                <div>
                  <span className="text-[11px] text-purple-300 font-semibold uppercase tracking-wider block">Core Web Vitals</span>
                  <span className="text-white font-mono font-bold text-sm sm:text-base tabular-nums">95–99 / 100</span>
                </div>
                <div className="hidden xs:block sm:block w-px h-8 bg-purple-800/40" />
                <div>
                  <span className="text-[11px] text-purple-300 font-semibold uppercase tracking-wider block">Deployments</span>
                  <span className="text-[#c084fc] font-mono font-bold text-sm sm:text-base tabular-nums">150+ Live Sites</span>
                </div>
              </div>
            </div>

          {/* SEARCH & CATEGORY FILTERS */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pt-2 border-b border-purple-900/40 pb-5">
            <div className="flex flex-nowrap sm:flex-wrap gap-2 overflow-x-auto no-scrollbar pb-1 sm:pb-0 -mx-1 px-1 [touch-action:pan-x_pan-y]">
              {categories.map((cat, idx) => (
                <motion.button
                  key={cat}
                  initial={{ opacity: 0, y: 12, rotate: idx % 2 === 0 ? -5 : 4, scale: 0.9 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                  whileHover={{ scale: 1.04, rotate: idx % 2 === 0 ? -1.2 : 1.2 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ type: "spring", stiffness: 290, damping: 17, delay: idx * 0.04 }}
                  onClick={() => handleCategoryChange(cat)}
                  className={`px-4 py-2 text-xs font-semibold tracking-wide transition-colors cursor-pointer rounded-full shrink-0 whitespace-nowrap border ${
                    currentCategory === cat
                      ? "bg-gradient-to-r from-[#8750f7] to-purple-600 text-white border-purple-400/50"
                      : "bg-[#120a22] text-zinc-300 hover:text-white border-purple-900/40 hover:border-purple-500/70"
                  }`}
                >
                  {cat}
                </motion.button>
              ))}
            </div>

            <div className="relative w-full sm:min-w-[260px] sm:w-auto">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-purple-300" />
              <input
                type="text"
                placeholder="Filter by tech or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-8 py-2.5 text-xs bg-[#120a22] border border-purple-900/50 rounded-full focus:border-[#8750f7] focus:outline-none text-white placeholder:text-zinc-400"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  aria-label="Clear search filter"
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-purple-300 hover:text-white text-sm font-bold cursor-pointer"
                >
                  ×
                </button>
              )}
            </div>
          </div>

          {/* PROJECTS GRID */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {displayedProjects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 16 }}
                {...(idx < 6
                  ? { animate: { opacity: 1, y: 0 } }
                  : { whileInView: { opacity: 1, y: 0 }, viewport: { once: true, amount: "some" } })}
                transition={{ duration: 0.38, delay: (idx % 3) * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="bg-[#120a22] border border-purple-900/40 hover:border-purple-500/70 rounded-2xl transition-all duration-200 flex flex-col justify-between group overflow-hidden shadow-[0_8px_24px_rgba(0,0,0,0.35)] hover:shadow-[0_14px_34px_rgba(135,80,247,0.18)]"
              >
                <div>
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex flex-col relative w-full aspect-[16/9.5] overflow-hidden bg-[#07030e] border-b border-purple-900/40 group/img cursor-pointer"
                    title={`Open ${project.title} live website (${project.liveUrl})`}
                  >
                    <div className="w-full shrink-0 z-10 px-3 py-2 bg-[#07030e] border-b border-purple-900/40 flex items-center justify-between text-[10px] font-mono gap-2">
                      <div className="flex items-center gap-1.5 min-w-0 shrink">
                        <span className="w-2 h-2 rounded-full bg-[#ff6b6b] shrink-0" />
                        <span className="w-2 h-2 rounded-full bg-[#ffd93d] shrink-0" />
                        <span className="w-2 h-2 rounded-full bg-[#6bcb77] shrink-0" />
                        <span className="text-zinc-200 font-semibold ml-1 truncate max-w-[110px] sm:max-w-[150px]">
                          {project.liveUrl.replace(/^https?:\/\/(www\.)?/, "").replace(/\/$/, "")}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 shrink-0 text-[9px] text-purple-300 font-medium">
                        <span className="hidden sm:inline whitespace-nowrap">
                          {project.videoPreview ? "Hover to preview" : "Hover to scroll"}
                        </span>
                        <span className="sm:hidden whitespace-nowrap">
                          {project.videoPreview ? "Live motion" : "Tap to visit"}
                        </span>
                        <span aria-hidden="true">·</span>
                        <span className="text-emerald-400 font-bold tabular-nums whitespace-nowrap">
                          {project.speedScore}/100
                        </span>
                      </div>
                    </div>

                    <div className="w-full flex-1 min-h-0 overflow-hidden relative bg-zinc-950 portfolio-scroll-viewport">
                      {project.videoPreview ? (
                        <VideoCardPreview
                          videoSrc={project.videoPreview}
                          posterSrc={project.image}
                          alt={`${project.title} animated preview`}
                          playOnlyOnHover
                        />
                      ) : (
                        <img
                          src={project.image}
                          alt={`${project.title} website screenshot`}
                          loading={idx < 9 ? "eager" : "lazy"}
                          decoding="async"
                          className="portfolio-scroll-img"
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
                      <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-[#07030e]/85 via-[#07030e]/30 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-200 flex justify-end">
                        <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white text-[#120a22] font-bold text-[11px] shadow-lg">
                          <span>Open {project.title}</span>
                          <ExternalLink className="w-3 h-3" />
                        </span>
                      </div>
                    </div>
                  </a>

                  <div className="p-5 sm:p-6 space-y-3 text-left">
                    <div className="flex items-center flex-wrap gap-x-2 gap-y-1 text-[11px] font-semibold">
                      <span className="text-[#c084fc] uppercase tracking-wider">{project.category}</span>
                      <span aria-hidden="true" className="text-purple-400/60">·</span>
                      <span className="text-[#34d399] font-mono tabular-nums">{project.conversionBoost}</span>
                    </div>

                    <div>
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/title block"
                        title={`Open ${project.title} live website (${project.liveUrl})`}
                      >
                        <h3 className="text-xl sm:text-2xl font-display font-black uppercase tracking-tight text-white group-hover/title:text-purple-300 transition-colors flex items-center justify-between gap-2">
                          <span>{project.title}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#a855f7] opacity-80 group-hover/title:opacity-100 group-hover/title:translate-x-0.5 group-hover/title:-translate-y-0.5 transition-all shrink-0" />
                        </h3>
                      </a>
                      <p className="text-xs text-purple-200/80 font-medium line-clamp-1 mt-0.5">
                        {project.tagline}
                      </p>
                    </div>

                    <p className="text-xs sm:text-[13px] text-zinc-300 leading-relaxed line-clamp-3 min-h-[54px]">
                      {project.description}
                    </p>

                    <p className="text-[11px] font-mono text-zinc-400 pt-2 border-t border-purple-900/40 line-clamp-1">
                      {project.techStack.slice(0, 4).join(" · ")}
                    </p>
                  </div>
                </div>

                <div className="px-5 sm:px-6 pb-5 sm:pb-6 pt-0">
                  <a
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-2.5 px-4 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold tracking-wide transition-colors rounded-full flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="p-12 text-center bg-[#120a22] border border-purple-900/40 rounded-2xl space-y-4">
              <p className="text-zinc-300 text-sm font-medium">
                No website projects matched your filter query &ldquo;{searchQuery}&rdquo;.
              </p>
              <button
                onClick={() => {
                  handleCategoryChange("All");
                  setSearchQuery("");
                }}
                className="px-5 py-2.5 bg-[#8750f7] hover:bg-purple-600 text-white text-xs font-bold tracking-wide rounded-full cursor-pointer"
              >
                Reset Filters
              </button>
            </div>
          )}
          </div>
        </div>
        </>
      )}
    </section>
  );
}
