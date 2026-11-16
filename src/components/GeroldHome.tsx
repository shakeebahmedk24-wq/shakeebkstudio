import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WebsitePortfolio } from "./WebsitePortfolio";
import { GraphicsPortfolio } from "./GraphicsPortfolio";
import {
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Plus,
  Minus,
  Mail,
  Phone,
  MapPin,
  Check,
  X,
  GraduationCap,
  Briefcase,
  ChevronRight,
  ChevronLeft,
  ChevronDown,
  Download,
  RotateCcw,
  Star,
  Gauge,
  Layers,
  ShoppingBag,
  Code2,
  Palette,
  Sparkles
} from "lucide-react";

interface GeroldHomeProps {
  initialPortfolioTab?: "all" | "case_studies" | "websites" | "graphics";
  onNavigateToPortfolio?: (type?: "all" | "web" | "graphics") => void;
}

interface CapabilityChip {
  id: string;
  label: string;
  tilt: number;
  summary: string;
  stack: string;
}

const CAPABILITY_CHIPS: CapabilityChip[] = [
  {
    id: "wp",
    label: "WordPress & WooCommerce",
    tilt: -2,
    summary: "Bespoke theme architecture, custom PHP hooks, ACF blocks, and high-concurrency WooCommerce stores.",
    stack: "PHP 8.3 · Gutenberg · ACF Pro · Redis"
  },
  {
    id: "shopify",
    label: "Shopify Plus & Liquid",
    tilt: 2,
    summary: "Conversion-tuned e-commerce storefronts with bundle builders, AJAX cart drawers, and sub-second PDP loads.",
    stack: "Liquid · Storefront API · Recharge · Stripe"
  },
  {
    id: "react",
    label: "React, Next.js & AI Apps",
    tilt: -1.5,
    summary: "Modern web applications, interactive dashboards, bilingual i18n experiences, and Gemini AI integrations.",
    stack: "React 19 · TypeScript · Next.js · Tailwind"
  },
  {
    id: "cwv",
    label: "95+ Core Web Vitals",
    tilt: 1.5,
    summary: "Aggressive asset optimization, WebP media pipelines, script pruning, and edge caching so pages load under 0.4s.",
    stack: "Lighthouse 95–99 · Zero CLS · CDN"
  },
  {
    id: "brand",
    label: "Brand Identity & Logos",
    tilt: -2.5,
    summary: "Geometric monograms, complete brand books, typography systems, and print-ready 300 DPI collateral.",
    stack: "Illustrator · Figma · Brand Guidelines"
  },
  {
    id: "uiux",
    label: "Figma UI/UX Systems",
    tilt: 2,
    summary: "Clean wireframes, high-contrast responsive interfaces, interactive prototypes, and tokenized design libraries.",
    stack: "Figma · Design Tokens · Prototyping"
  },
  {
    id: "packaging",
    label: "Packaging & Social Kits",
    tilt: -1,
    summary: "Retail can, bottle, box, and pouch dielines alongside campaign-ready social templates and display ads.",
    stack: "Photoshop · Print Dielines · Social Kits"
  },
  {
    id: "whitelabel",
    label: "White-Label Agency Partner",
    tilt: 2.5,
    summary: "Dependable senior dev & design capacity under strict NDA with crisp documentation and clean commits.",
    stack: "NDA Friendly · Async Looms · Handoff Docs"
  },
  {
    id: "mobile",
    label: "Mobile-First Checkout UX",
    tilt: -1.5,
    summary: "Thumb-friendly navigation, 44px+ tap targets, and friction-free digital wallet checkout optimization.",
    stack: "Apple Pay · Google Pay · Responsive QA"
  },
  {
    id: "care",
    label: "Maintenance & Backups",
    tilt: 1,
    summary: "Ongoing security patching, staging deployments, plugin audits, and fast fixes when you need a hand.",
    stack: "Staging QA · Backups · Priority Support"
  }
];

export function GeroldHome({
  initialPortfolioTab = "all",
  onNavigateToPortfolio
}: GeroldHomeProps) {
  const [currentPage, setCurrentPage] = useState<"home" | "websites" | "graphics">(
    initialPortfolioTab === "websites"
      ? "websites"
      : initialPortfolioTab === "graphics"
      ? "graphics"
      : "home"
  );
  const [fullMenuOpen, setFullMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<"services" | "portfolio" | null>(null);
  const [openOverlaySubmenu, setOpenOverlaySubmenu] = useState<"services" | "portfolio" | null>(null);
  const [hoveredOverlayLink, setHoveredOverlayLink] = useState<string | null>(null);
  const [heroTilt, setHeroTilt] = useState({ rotateX: 0, rotateY: 0 });
  const [activeFaq, setActiveFaq] = useState<number | null>(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showHireModal, setShowHireModal] = useState(false);
  const [hireFormSubmitted, setHireFormSubmitted] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<"all" | "design" | "dev">("all");
  const [engagementPlan, setEngagementPlan] = useState<"project" | "partner">("project");
  const [selectedChip, setSelectedChip] = useState<CapabilityChip>(CAPABILITY_CHIPS[0]);
  const [chipResetKey, setChipResetKey] = useState(0);

  const chipBoardRef = useRef<HTMLDivElement | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  // Hire modal form fields
  const [hireName, setHireName] = useState("");
  const [hireEmail, setHireEmail] = useState("");
  const [hireService, setHireService] = useState("WordPress & WooCommerce Build");
  const [hireMessage, setHireMessage] = useState("");

  // Track scroll position for floating header <-> pill morph
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 90);
      if (window.scrollY > 90) setOpenDesktopDropdown(null);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close desktop dropdown when clicking outside or pressing Esc
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setOpenDesktopDropdown(null);
      }
    };
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenDesktopDropdown(null);
        setFullMenuOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("keydown", handleEsc);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  // Lock background scroll when hire modal or full-screen overlay menu is open
  useEffect(() => {
    if (showHireModal || fullMenuOpen) {
      document.body.style.overflow = "hidden";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.stop === "function") lenis.stop();
    } else {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.start === "function") lenis.start();
    }
    return () => {
      document.body.style.overflow = "";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.start === "function") lenis.start();
    };
  }, [showHireModal, fullMenuOpen]);

  // Page Routing & Hash Sync
  useEffect(() => {
    const handleUrlHash = () => {
      try {
        const hash = (window.location.hash || "").toLowerCase();
        if (hash === "#websites-page" || hash === "#websites" || hash === "#web-portfolio") {
          setCurrentPage("websites");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else if (hash === "#graphics-page" || hash === "#graphics" || hash === "#graphics-portfolio") {
          setCurrentPage("graphics");
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          setCurrentPage("home");
        }
      } catch (err) {
        console.warn("Hash sync error:", err);
      }
    };

    handleUrlHash();
    window.addEventListener("hashchange", handleUrlHash);
    window.addEventListener("popstate", handleUrlHash);
    return () => {
      window.removeEventListener("hashchange", handleUrlHash);
      window.removeEventListener("popstate", handleUrlHash);
    };
  }, []);

  const navigateToPage = (page: "home" | "websites" | "graphics", targetSectionId?: string) => {
    setCurrentPage(page);
    setFullMenuOpen(false);
    setOpenDesktopDropdown(null);
    if (onNavigateToPortfolio && page !== "home") {
      onNavigateToPortfolio(page === "websites" ? "web" : "graphics");
    }

    if (page === "home") {
      if (targetSectionId) {
        window.location.hash = targetSectionId;
        setTimeout(() => {
          const element = document.getElementById(targetSectionId);
          if (element) {
            const lenis = (window as any).__lenis;
            if (lenis && typeof lenis.scrollTo === "function") {
              lenis.scrollTo(element, { offset: -76, duration: 1.0 });
            } else {
              const y = element.getBoundingClientRect().top + window.pageYOffset - 76;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }
        }, 100);
      } else {
        window.location.hash = "";
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(0, { duration: 0.9 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else if (page === "websites") {
      window.location.hash = "websites-page";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    } else if (page === "graphics") {
      window.location.hash = "graphics-page";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") lenis.scrollTo(0, { immediate: true });
      else window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const scrollToSection = (id: string) => {
    setFullMenuOpen(false);
    setOpenDesktopDropdown(null);
    if (currentPage !== "home") {
      navigateToPage("home", id);
      return;
    }
    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(element, { offset: -76, duration: 1.0 });
        } else {
          const y = element.getBoundingClientRect().top + window.pageYOffset - 76;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 50);
  };

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { duration: 1.0 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const openHireWithService = (serviceLabel: string) => {
    setHireService(serviceLabel);
    setHireFormSubmitted(false);
    setShowHireModal(true);
  };

  const getInitials = (name: string) =>
    name
      .split(" ")
      .filter(Boolean)
      .slice(0, 2)
      .map((n) => n[0].toUpperCase())
      .join("");

  const painPoints = [
    {
      num: "01",
      title: "Great product, sluggish first impression",
      body: "Customers land from an ad, hit a 4-second blank screen or shifting layout, and bounce before scrolling past the hero."
    },
    {
      num: "02",
      title: "Your developer and designer don't talk",
      body: "Brand files sit in one folder while bloated templates break your typography, spacing, and mobile hierarchy in production."
    },
    {
      num: "03",
      title: "Mobile checkout feels clunky",
      body: "Over 70% of food, retail, and service traffic arrives on phones — cramped buttons and slow carts quietly kill conversions."
    },
    {
      num: "04",
      title: "Locked behind fragile page builders",
      body: "Every tiny menu tweak or promo banner requires fighting twenty nested plugins instead of clean, maintainable components."
    },
    {
      num: "05",
      title: "Agency handoffs to junior contractors",
      body: "You pitched senior partners on the sales call, then watched communication slow down once actual build tickets began."
    },
    {
      num: "06",
      title: "Traffic grows, rankings lag behind",
      body: "Weak semantic structure, unoptimized images, and missing schema keep Google PageSpeed in the 40s instead of 95+."
    }
  ];

  const servicesList = [
    {
      num: "01.",
      icon: Gauge,
      note: "score stuck below 95?",
      ctaLabel: "Request speed audit",
      isNew: true,
      title: "Website Speed & Health Audit",
      desc: "Already have a live site that feels sluggish? I audit your scripts, CSS, database queries, and Core Web Vitals, strip bloat cleanly, and push mobile load times under 0.5 seconds without breaking your layout."
    },
    {
      num: "02.",
      icon: Layers,
      note: "sick of plugin updates?",
      ctaLabel: "See WordPress builds",
      isNew: false,
      title: "Custom WordPress & WooCommerce",
      desc: "Outgrown a fragile page builder, or tired of plugins conflicting every update? I engineer bespoke WordPress themes, clean ACF/Gutenberg blocks, and high-concurrency WooCommerce checkouts built to last."
    },
    {
      num: "03.",
      icon: ShoppingBag,
      note: "want higher checkout AOV?",
      ctaLabel: "Explore Shopify stores",
      isNew: false,
      title: "Shopify & High-Converting Stores",
      desc: "Need a store that converts cold ad clicks on mobile? I build custom Liquid storefronts, interactive bundle selectors, instant AJAX cart drawers, and clean bilingual flows built specifically around checkout velocity."
    },
    {
      num: "04.",
      icon: Code2,
      note: "need more than templates?",
      ctaLabel: "See custom code & AI",
      isNew: false,
      title: "React, Next.js & AI Web Apps",
      desc: "Need something faster, interactive, or powered by custom APIs and Gemini AI? I architect modern TypeScript applications, booking portals, B2B quote engines, and animated digital experiences end to end."
    },
    {
      num: "05.",
      icon: Palette,
      note: "brand look inconsistent?",
      ctaLabel: "View brand & graphics",
      isNew: false,
      title: "Brand Identity & Packaging Systems",
      desc: "Launching a new brand or refreshing retail packaging? I design crisp vector logomarks, typography rules, 300 DPI box/can dielines, and social kits so your website and physical product feel unmistakable."
    },
    {
      num: "06.",
      icon: Sparkles,
      note: "need reliable dev hands?",
      ctaLabel: "Partner with Shakeeb",
      isNew: false,
      title: "White-Label Agency Partner",
      desc: "Running an agency and need dependable senior WordPress, Shopify, and design bandwidth under strict NDA? You get direct communication, staging QA, Loom walkthroughs, and pixel-accurate builds on schedule."
    }
  ];

  const testimonials = [
    {
      name: "Denise Woodard",
      role: "Founder & CEO, Partake Foods",
      project: "WooCommerce Replatform & Speed Overhaul",
      metric: "+145% Sales Growth · 0.39s Load",
      quote:
        "Shakeeb completely rebuilt our WooCommerce architecture from scratch. Our mobile page load speed dropped from 4.2 seconds down to 0.39s, and our monthly conversion rate climbed by +145% within the first 60 days."
    },
    {
      name: "Marcus Sterling",
      role: "VP of Digital Growth, The Builder Market",
      project: "B2B Quotation Portal & Catalog Engine",
      metric: "+110% Contractor RFQs",
      quote:
        "Finding an engineer who understands both high-throughput B2B databases and sleek, modern UI is rare. Shakeeb built our dynamic RFQ quotation engine and wholesale pricing tiers with flawless execution."
    },
    {
      name: "Elena Rostova",
      role: "Brand Director, Adora Organic Skincare",
      project: "D2C Luxury Skincare & Shade Finder",
      metric: "+160% Conversion Rate · 99/100 CWV",
      quote:
        "Shakeeb transformed Adora's digital presence into a luxury editorial experience. The interactive skincare quiz and sub-second checkout drawer contributed to an immediate 160% lift in direct sales."
    },
    {
      name: "Khurram Siddiqui",
      role: "Operations Director, DesiCart UK",
      project: "Multi-Vendor Postal Code Grocery System",
      metric: "-38% Cart Abandonment",
      quote:
        "Managing thousands of perishable SKUs and dynamic UK postal code delivery slots requires bulletproof engineering. Shakeeb optimized our queries, cutting checkout drop-offs by 38% during peak holidays."
    },
    {
      name: "David M. Klein",
      role: "Head of E-Commerce, Toynk Pop Culture",
      project: "High-Traffic Collectibles & Drop Architecture",
      metric: "Zero Downtime · 25k+ SKUs",
      quote:
        "We carry over 25,000 licensed pop culture collectibles. Shakeeb restructured our faceted search and caching layers. During Black Friday drops, the site handled massive concurrency without a hiccup."
    },
    {
      name: "Farhan Bashir",
      role: "Creative Director, Brandilyst Digital",
      project: "Enterprise Design System & Web Deployment",
      metric: "12+ Joint Client Launches",
      quote:
        "I have collaborated with Shakeeb across more than a dozen enterprise WordPress and branding projects. His ability to translate complex design systems into responsive, lag-free sites is unmatched."
    },
    {
      name: "Rachel Vance",
      role: "Managing Partner, Lumina MedSpa",
      project: "Medical Booking System & HIPAA-Ready Portal",
      metric: "+85% Mobile Inbound Bookings",
      quote:
        "Shakeeb designed and developed our private patient booking portal. His multi-step scheduling calendar and instant inquiry routing doubled our inbound consultations within thirty days."
    },
    {
      name: "Sarah Jenkins",
      role: "Chief Marketing Officer, Qantra Security",
      project: "Enterprise SaaS Web Platform & Brand Mark",
      metric: "99/100 PageSpeed · +92% Demo CVR",
      quote:
        "Shakeeb refined our brand identity, vector icon sets, and interactive product tour. Our demo booking conversion rate jumped by 92% immediately upon launch."
    },
    {
      name: "Jonathan Briggs",
      role: "Executive Publisher, Briggs Media",
      project: "High-Traffic Editorial Hub",
      metric: "400K+ Monthly Readers · 0 CLS",
      quote:
        "Shakeeb eliminated our cumulative layout shifts, brought our Core Web Vitals straight to 98, and restructured our article templates cleanly."
    }
  ];

  const experiences = [
    {
      company: "Brandilyst (Remote)",
      role: "Senior WordPress Developer",
      period: "2025 – 2026",
      desc: "Enterprise WordPress architecture, bespoke theme engineering, WooCommerce platforms, and performance optimization."
    },
    {
      company: "Contact VA (Remote)",
      role: "Senior WordPress Developer",
      period: "2023 – 2025",
      desc: "Custom web development, Elementor Pro design systems, speed tuning, automated workflows, and API integrations."
    },
    {
      company: "Nehal Solutions (Project Based)",
      role: "Senior WordPress Developer",
      period: "2022 – 2023",
      desc: "Client web applications, custom plugin integrations, responsive UI builds, and cross-browser QA."
    },
    {
      company: "FlyHiDigital (Project Based)",
      role: "Senior WordPress Developer",
      period: "2021 – 2022",
      desc: "High-conversion marketing websites, interactive sales funnels, and CMS customization for global brands."
    },
    {
      company: "Tech Remedys (Remote)",
      role: "WordPress Developer & Graphic Designer",
      period: "2020 – 2021",
      desc: "End-to-end WordPress builds, UI mockups, brand collateral, and marketing assets in Adobe Suite."
    },
    {
      company: "IT Concepts (Onsite)",
      role: "WordPress Developer & Graphic Designer",
      period: "2019 – 2020",
      desc: "Responsive web design, theme customization, logos, social kits, and front-end optimization."
    }
  ];

  const stackItems = [
    { id: "wp", name: "WordPress & PHP", category: "dev", percent: 99 },
    { id: "woo", name: "WooCommerce / Shopify", category: "dev", percent: 97 },
    { id: "tailwind", name: "Tailwind CSS", category: "dev", percent: 96 },
    { id: "react", name: "React & TypeScript", category: "dev", percent: 94 },
    { id: "nextjs", name: "Next.js & AI APIs", category: "dev", percent: 91 },
    { id: "figma", name: "Figma UI/UX", category: "design", percent: 94 },
    { id: "ps", name: "Adobe Photoshop", category: "design", percent: 92 },
    { id: "ai", name: "Illustrator & Brand Kits", category: "design", percent: 90 }
  ];

  const faqs = [
    {
      q: "How do I get a fixed quotation for my project?",
      a: "Click 'Book a Call' or email shakeebahmedk24@gmail.com (+92-332-0203701) with your goals, reference links, and target timeline. Within 24 hours I send back a clear milestone plan and fixed-price quote — no hourly padding or surprise add-ons."
    },
    {
      q: "Do you handle both the branding/UI design and the code build?",
      a: "Yes. Most clients hire me specifically so they don't have to coordinate separate brand designers and developers. I handle everything from vector marks and Figma UI right through production WordPress, Shopify, React, or Next.js deployment."
    },
    {
      q: "What happens if my existing site is slow and scoring poorly on Google PageSpeed?",
      a: "Every new build is engineered for 95–99/100 Core Web Vitals out of the box. For existing sites, my Speed & Health Audit strips render-blocking scripts, optimizes images to WebP, configures caching, and gets mobile load times under half a second."
    },
    {
      q: "Do I own 100% of the website code and brand source files?",
      a: "Yes — completely. Upon final milestone sign-off, you receive full commercial ownership of all vector source files (AI/SVG/PDF), Figma master files, and GitHub/WordPress codebase with zero vendor lock-in."
    },
    {
      q: "Do you work white-label for creative agencies and studios?",
      a: "Yes. I regularly partner with UK, US, Swiss, and UAE agencies under strict NDA to execute flagship web builds, e-commerce customizers, and graphic design systems behind the scenes."
    }
  ];

  const desktopTestimonialPages = Math.ceil(testimonials.length / 3);

  return (
    <div className="min-h-screen bg-[#07030e] text-[#f3f4f6] font-sans antialiased selection:bg-[#8750f7] selection:text-white relative overflow-x-clip">
      {/* ======================================================== */}
      {/* FLOATING VIDEO-MATCHED HEADER (Capsule Pill + Scrolled)  */}
      {/* ======================================================== */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          currentPage !== "home" && isScrolled
            ? "bg-[#07030e]/95 backdrop-blur-md border-b border-purple-900/50 shadow-[0_12px_34px_rgba(7,3,14,0.65)] pointer-events-auto"
            : "pointer-events-none"
        }`}
      >
        <div
          className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between gap-4 transition-all duration-300 ${
            currentPage !== "home" && isScrolled ? "py-3.5 sm:py-4" : "pt-4 sm:pt-5"
          }`}
        >
          {/* Zone 1: Slightly Smaller White Brand Logo */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage !== "home") navigateToPage("home");
              else scrollToTop();
            }}
            className={`pointer-events-auto flex items-center shrink-0 whitespace-nowrap focus:outline-none group transition-all duration-300 ${
              isScrolled && currentPage === "home"
                ? "opacity-0 pointer-events-none md:opacity-0"
                : "opacity-100"
            }`}
            title="Shakeeb Ahmed Khan"
          >
            <img
              src="/Shakeeb_logo_white-removebg-preview-1.png"
              alt="Shakeeb"
              className="h-6 sm:h-[26px] w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03]"
            />
          </a>

          {/* Zone 2: Centered Floating White Capsule Nav (Desktop Top State) */}
          <div
            ref={dropdownRef}
            className={`hidden lg:flex items-center justify-center transition-all duration-300 ${
              isScrolled
                ? "opacity-0 -translate-y-4 pointer-events-none"
                : "opacity-100 translate-y-0 pointer-events-auto"
            }`}
          >
            <nav className="relative bg-white text-[#120a22] rounded-full px-1.5 py-1.5 shadow-[0_12px_32px_rgba(7,3,14,0.32)] border border-purple-200/60 flex items-center gap-0.5 text-[13px] font-medium">
              <button
                onClick={() => navigateToPage("home")}
                className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap ${
                  currentPage === "home"
                    ? "bg-[#ede9fe] text-[#5b21b6] font-semibold"
                    : "text-[#120a22] hover:bg-purple-50"
                }`}
              >
                Home
              </button>

              <button
                onClick={() => scrollToSection("resume")}
                className="px-3.5 py-1.5 rounded-full text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] transition-colors cursor-pointer whitespace-nowrap"
              >
                About
              </button>

              {/* Services Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDesktopDropdown("services")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <button
                  onClick={() =>
                    setOpenDesktopDropdown((prev) => (prev === "services" ? null : "services"))
                  }
                  className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-1 ${
                    openDesktopDropdown === "services"
                      ? "bg-[#ede9fe] text-[#5b21b6] font-semibold"
                      : "text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6]"
                  }`}
                >
                  <span>Services</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDesktopDropdown === "services" ? "rotate-180 text-[#5b21b6]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDesktopDropdown === "services" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-2.5 w-[290px] z-50"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,3,14,0.35)] border border-purple-200/70 p-2 space-y-0.5 text-left">
                        {servicesList.map((srv) => (
                          <button
                            key={srv.num}
                            onClick={() => {
                              setOpenDesktopDropdown(null);
                              scrollToSection("services");
                            }}
                            className="w-full px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] flex items-center justify-between gap-2 transition-colors group/item cursor-pointer text-left"
                          >
                            <span className="flex items-center gap-2 min-w-0">
                              <ArrowRight className="w-3.5 h-3.5 text-[#6d28d9] opacity-0 -ml-1 group-hover/item:opacity-100 group-hover/item:ml-0 transition-all shrink-0" />
                              <span className="truncate">{srv.title}</span>
                            </span>
                            {srv.isNew && (
                              <span className="px-1.5 py-0.5 rounded bg-[#6d28d9] text-white font-mono text-[9px] font-bold uppercase tracking-wider shrink-0">
                                NEW
                              </span>
                            )}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection("pricing")}
                className="px-3.5 py-1.5 rounded-full text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] transition-colors cursor-pointer whitespace-nowrap"
              >
                Pricing
              </button>

              {/* Portfolio Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDesktopDropdown("portfolio")}
                onMouseLeave={() => setOpenDesktopDropdown(null)}
              >
                <button
                  onClick={() =>
                    setOpenDesktopDropdown((prev) => (prev === "portfolio" ? null : "portfolio"))
                  }
                  className={`px-3.5 py-1.5 rounded-full transition-colors cursor-pointer whitespace-nowrap inline-flex items-center gap-1 ${
                    openDesktopDropdown === "portfolio" ||
                    currentPage === "websites" ||
                    currentPage === "graphics"
                      ? "bg-[#ede9fe] text-[#5b21b6] font-semibold"
                      : "text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6]"
                  }`}
                >
                  <span>Portfolio</span>
                  <ChevronDown
                    className={`w-3.5 h-3.5 transition-transform duration-200 ${
                      openDesktopDropdown === "portfolio" ? "rotate-180 text-[#5b21b6]" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {openDesktopDropdown === "portfolio" && (
                    <motion.div
                      initial={{ opacity: 0, y: 8, scale: 0.97 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 6, scale: 0.97 }}
                      transition={{ duration: 0.18, ease: "easeOut" }}
                      className="absolute left-0 top-full pt-2.5 w-[245px] z-50"
                    >
                      <div className="bg-white rounded-2xl shadow-[0_20px_50px_rgba(7,3,14,0.35)] border border-purple-200/70 p-2 space-y-0.5 text-left">
                        <button
                          onClick={() => navigateToPage("websites")}
                          className="w-full px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] flex items-center justify-between gap-2 transition-colors group/item cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <ArrowRight className="w-3.5 h-3.5 text-[#6d28d9] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            <span>Websites Portfolio (15+)</span>
                          </span>
                        </button>
                        <button
                          onClick={() => navigateToPage("graphics")}
                          className="w-full px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] flex items-center justify-between gap-2 transition-colors group/item cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <ArrowRight className="w-3.5 h-3.5 text-[#6d28d9] opacity-0 group-hover/item:opacity-100 transition-opacity" />
                            <span>Graphic Design (40+)</span>
                          </span>
                        </button>
                        <a
                          href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                          download="Shakeeb_Khan_CV.pdf"
                          target="_blank"
                          rel="noreferrer"
                          onClick={() => setOpenDesktopDropdown(null)}
                          className="w-full px-3 py-2.5 rounded-xl text-[13px] font-medium text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] flex items-center justify-between gap-2 transition-colors group/item cursor-pointer"
                        >
                          <span className="flex items-center gap-2">
                            <Download className="w-3.5 h-3.5 text-[#6d28d9]" />
                            <span>Download Resume PDF</span>
                          </span>
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-3.5 py-1.5 rounded-full text-[#120a22] hover:bg-[#ede9fe] hover:text-[#5b21b6] transition-colors cursor-pointer whitespace-nowrap"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Zone 3: White Avatar "Book a call" Pill + Circular Menu Trigger (on scroll / mobile) */}
          <div className="pointer-events-auto flex items-center gap-2.5 shrink-0">
            <button
              onClick={() => openHireWithService("WordPress & WooCommerce Build")}
              className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-white hover:bg-purple-50 text-[#120a22] text-xs font-bold tracking-wide rounded-full transition-all cursor-pointer whitespace-nowrap shadow-[0_12px_32px_rgba(7,3,14,0.32)]"
            >
              <img
                src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                }}
                alt="Shakeeb"
                className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover object-top border border-purple-300"
              />
              <span>Book a call</span>
            </button>

            <button
              onClick={() => {
                setOpenOverlaySubmenu(null);
                setFullMenuOpen(true);
              }}
              aria-label="Open full navigation menu"
              className={`w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-purple-50 text-[#120a22] shadow-[0_12px_32px_rgba(7,3,14,0.32)] flex flex-col items-center justify-center gap-1.5 transition-all cursor-pointer shrink-0 ${
                isScrolled ? "flex" : "flex lg:hidden"
              }`}
            >
              <span className="w-4 h-[2px] bg-[#120a22] rounded-full block" />
              <span className="w-4 h-[2px] bg-[#120a22] rounded-full block" />
            </button>
          </div>
        </div>
      </header>

      {/* ======================================================== */}
      {/* FULL-SCREEN PLAIN PURPLE MENU OVERLAY (Video-Matched)     */}
      {/* ======================================================== */}
      <AnimatePresence>
        {fullMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-4%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-4%" }}
            transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[100] bg-[#240b4c] text-white flex flex-col justify-between p-5 sm:p-8 lg:p-10 overflow-y-auto"
          >
            {/* Top Bar inside Overlay */}
            <div className="max-w-7xl w-full mx-auto flex items-center justify-between gap-4">
              <button
                onClick={() => navigateToPage("home")}
                className="cursor-pointer focus:outline-none"
                title="Shakeeb Ahmed Khan"
              >
                <img
                  src="/Shakeeb_logo_white-removebg-preview-1.png"
                  alt="Shakeeb"
                  className="h-6 sm:h-[26px] w-auto object-contain"
                />
              </button>

              <div className="flex items-center gap-2.5">
                <button
                  onClick={() => {
                    setFullMenuOpen(false);
                    openHireWithService("WordPress & WooCommerce Build");
                  }}
                  className="inline-flex items-center gap-2.5 pl-1.5 pr-4 py-1.5 bg-white hover:bg-purple-50 text-[#120a22] text-xs font-bold rounded-full transition-colors cursor-pointer"
                >
                  <img
                    src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                    }}
                    alt="Shakeeb"
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full object-cover object-top"
                  />
                  <span>Book a call</span>
                </button>

                <button
                  onClick={() => setFullMenuOpen(false)}
                  aria-label="Close navigation menu"
                  className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-white hover:bg-purple-50 text-[#120a22] flex items-center justify-center transition-colors cursor-pointer shadow-lg"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Monumental Big Shoulders Display Navigation List */}
            <div className="max-w-7xl w-full mx-auto py-8 my-auto text-left space-y-2 sm:space-y-3">
              {/* HOME */}
              <button
                onMouseEnter={() => setHoveredOverlayLink("home")}
                onMouseLeave={() => setHoveredOverlayLink(null)}
                onClick={() => navigateToPage("home")}
                className="group flex items-center gap-3 font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer"
              >
                <ArrowUpRight
                  className={`w-8 h-8 sm:w-12 sm:h-12 text-[#e9d5ff] transition-all duration-200 ${
                    hoveredOverlayLink === "home" ? "opacity-100 scale-100" : "opacity-0 -ml-10 sm:-ml-14 scale-75"
                  }`}
                />
                <span>HOME</span>
              </button>

              {/* ABOUT */}
              <button
                onMouseEnter={() => setHoveredOverlayLink("about")}
                onMouseLeave={() => setHoveredOverlayLink(null)}
                onClick={() => scrollToSection("resume")}
                className="group flex items-center gap-3 font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer"
              >
                <ArrowUpRight
                  className={`w-8 h-8 sm:w-12 sm:h-12 text-[#e9d5ff] transition-all duration-200 ${
                    hoveredOverlayLink === "about" ? "opacity-100 scale-100" : "opacity-0 -ml-10 sm:-ml-14 scale-75"
                  }`}
                />
                <span>ABOUT</span>
              </button>

              {/* SERVICES (Accordion matching Video 00:12-00:13) */}
              <div>
                <button
                  onMouseEnter={() => setHoveredOverlayLink("services")}
                  onMouseLeave={() => setHoveredOverlayLink(null)}
                  onClick={() =>
                    setOpenOverlaySubmenu((prev) => (prev === "services" ? null : "services"))
                  }
                  className="group flex items-center gap-3 font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer"
                >
                  <ArrowUpRight
                    className={`w-8 h-8 sm:w-12 sm:h-12 text-[#e9d5ff] transition-all duration-200 ${
                      hoveredOverlayLink === "services" || openOverlaySubmenu === "services"
                        ? "opacity-100 scale-100"
                        : "opacity-0 -ml-10 sm:-ml-14 scale-75"
                    }`}
                  />
                  <span>SERVICES</span>
                  <span className="text-3xl sm:text-5xl font-normal text-[#e9d5ff]">
                    {openOverlaySubmenu === "services" ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openOverlaySubmenu === "services" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden pl-4 sm:pl-14 pt-3 pb-2 space-y-2"
                    >
                      {servicesList.map((srv) => (
                        <button
                          key={srv.num}
                          onClick={() => scrollToSection("services")}
                          className="flex items-center gap-2.5 text-base sm:text-xl font-medium text-purple-100 hover:text-white transition-colors cursor-pointer text-left"
                        >
                          <span>{srv.title}</span>
                          {srv.isNew && (
                            <span className="px-2 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] font-mono text-[10px] font-bold uppercase tracking-wider">
                              NEW
                            </span>
                          )}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* PRICING */}
              <button
                onMouseEnter={() => setHoveredOverlayLink("pricing")}
                onMouseLeave={() => setHoveredOverlayLink(null)}
                onClick={() => scrollToSection("pricing")}
                className="group flex items-center gap-3 font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer"
              >
                <ArrowUpRight
                  className={`w-8 h-8 sm:w-12 sm:h-12 text-[#e9d5ff] transition-all duration-200 ${
                    hoveredOverlayLink === "pricing" ? "opacity-100 scale-100" : "opacity-0 -ml-10 sm:-ml-14 scale-75"
                  }`}
                />
                <span>PRICING</span>
              </button>

              {/* PORTFOLIO (Expandable Websites / Graphics / CV) */}
              <div>
                <button
                  onMouseEnter={() => setHoveredOverlayLink("portfolio")}
                  onMouseLeave={() => setHoveredOverlayLink(null)}
                  onClick={() =>
                    setOpenOverlaySubmenu((prev) => (prev === "portfolio" ? null : "portfolio"))
                  }
                  className="group flex items-center gap-3 font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer"
                >
                  <ArrowUpRight
                    className={`w-8 h-8 sm:w-12 sm:h-12 text-[#e9d5ff] transition-all duration-200 ${
                      hoveredOverlayLink === "portfolio" || openOverlaySubmenu === "portfolio"
                        ? "opacity-100 scale-100"
                        : "opacity-0 -ml-10 sm:-ml-14 scale-75"
                    }`}
                  />
                  <span>PORTFOLIO</span>
                  <span className="text-3xl sm:text-5xl font-normal text-[#e9d5ff]">
                    {openOverlaySubmenu === "portfolio" ? "−" : "+"}
                  </span>
                </button>

                <AnimatePresence>
                  {openOverlaySubmenu === "portfolio" && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.24 }}
                      className="overflow-hidden pl-4 sm:pl-14 pt-3 pb-2 space-y-2"
                    >
                      <button
                        onClick={() => navigateToPage("websites")}
                        className="block text-base sm:text-xl font-medium text-purple-100 hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Websites Portfolio (15+)
                      </button>
                      <button
                        onClick={() => navigateToPage("graphics")}
                        className="block text-base sm:text-xl font-medium text-purple-100 hover:text-white transition-colors cursor-pointer text-left"
                      >
                        Graphic Design Portfolio (40+)
                      </button>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* CONTACT */}
              <button
                onMouseEnter={() => setHoveredOverlayLink("contact")}
                onMouseLeave={() => setHoveredOverlayLink(null)}
                onClick={() => scrollToSection("contact")}
                className="group flex items-center gap-3 font-display text-5xl sm:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer"
              >
                <ArrowUpRight
                  className={`w-8 h-8 sm:w-12 sm:h-12 text-[#e9d5ff] transition-all duration-200 ${
                    hoveredOverlayLink === "contact" ? "opacity-100 scale-100" : "opacity-0 -ml-10 sm:-ml-14 scale-75"
                  }`}
                />
                <span>CONTACT</span>
              </button>
            </div>

            {/* Bottom Row Actions */}
            <div className="max-w-7xl w-full mx-auto pt-4 border-t border-white/20 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  setFullMenuOpen(false);
                  openHireWithService("Full Website & Brand Build");
                }}
                className="px-6 py-3 bg-white hover:bg-[#e9d5ff] text-[#120a22] text-sm font-bold rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer"
              >
                <span>Book a free call</span>
                <ChevronRight className="w-4 h-4" />
              </button>
              <a
                href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                download="Shakeeb_Khan_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3 border border-white/35 hover:border-white text-white text-sm font-semibold rounded-full inline-flex items-center gap-2 transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Download CV</span>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {currentPage === "home" && (
        <main>
          {/* ======================================================== */}
          {/* 1. HERO SECTION (Solid Deep Royal Plum #2C1156)          */}
          {/* ======================================================== */}
          <section
            id="hero"
            className="bg-[#2C1156] text-white pt-24 pb-16 sm:pt-28 sm:pb-24 lg:pt-32 lg:pb-28 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
                {/* Left Column: Heavy Condensed Headline & Value Proposition */}
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 space-y-6 text-left"
                >
                  <motion.span
                    initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                    animate={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                    whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                    className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                  >
                    WordPress, AI &amp; Brand Developer · 7+ years
                  </motion.span>

                  <h1 className="font-display text-5xl sm:text-7xl lg:text-[92px] font-black uppercase tracking-tight leading-[0.92] text-white text-balance">
                    Websites &amp; brands that keep getting better
                  </h1>

                  <p className="text-base sm:text-lg text-purple-100 leading-relaxed max-w-2xl">
                    I&apos;m <strong className="text-white font-bold">Shakeeb Ahmed Khan</strong> — a full-stack WordPress, Shopify, React &amp; AI developer paired with a senior graphic design studio. I help ambitious brands replace sluggish, patched-together websites with sub-second stores and cohesive visual identities.
                  </p>

                  {/* Primary Action + Gradient Download CV Pill (Reference-matched) */}
                  <div className="flex flex-wrap items-center gap-3.5 pt-2">
                    <button
                      onClick={() => openHireWithService("Full Website & Brand Build")}
                      className="px-7 py-3.5 bg-white hover:bg-[#e9d5ff] text-[#120a22] text-sm font-bold tracking-wide rounded-full transition-colors inline-flex items-center gap-2 cursor-pointer whitespace-nowrap shadow-xl"
                    >
                      <span>Start a Project</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>

                    <button
                      onClick={() => scrollToSection("web-portfolio")}
                      className="px-6 py-3.5 bg-white/10 hover:bg-white/20 border border-white/25 text-white text-sm font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                    >
                      See Live Work
                    </button>

                    <a
                      href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                      download="Shakeeb_Khan_CV.pdf"
                      target="_blank"
                      rel="noreferrer"
                      className="px-6 py-3.5 rounded-full bg-gradient-to-r from-[#8750f7] via-[#6d28d9] to-[#a855f7] hover:brightness-110 text-white text-sm font-bold inline-flex items-center gap-2 whitespace-nowrap shadow-[0_10px_28px_rgba(7,3,14,0.35)] border border-white/20 transition-all"
                    >
                      <Download className="w-4 h-4 shrink-0" />
                      <span>Download CV</span>
                    </a>
                  </div>
                </motion.div>

                {/* Right Column: Framed Portrait with Subtle Interactive 3D Tilt */}
                <motion.div
                  initial={{ opacity: 0, y: 28, scale: 0.96 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.7, delay: 0.12, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-5 flex flex-col items-center lg:items-end"
                  style={{ perspective: 1000 }}
                >
                  <div
                    className="relative w-full max-w-[380px] sm:max-w-[420px]"
                    onMouseMove={(e) => {
                      const rect = e.currentTarget.getBoundingClientRect();
                      const x = (e.clientX - rect.left) / rect.width - 0.5;
                      const y = (e.clientY - rect.top) / rect.height - 0.5;
                      setHeroTilt({ rotateX: -y * 10, rotateY: x * 12 });
                    }}
                    onMouseLeave={() => setHeroTilt({ rotateX: 0, rotateY: 0 })}
                  >
                    {/* Interactive Subtle-Tilt Portrait Card */}
                    <motion.div
                      animate={{
                        rotateX: heroTilt.rotateX,
                        rotateY: heroTilt.rotateY
                      }}
                      transition={{ type: "spring", stiffness: 220, damping: 20 }}
                      className="bg-[#120a22] p-3 sm:p-4 rounded-3xl border-2 border-purple-500/45 shadow-[0_28px_65px_rgba(135,80,247,0.18)] rotate-[2deg] hover:rotate-[0.5deg] transition-transform duration-300 will-change-transform"
                    >
                      <div className="aspect-[4/4.3] w-full rounded-2xl overflow-hidden bg-[#07030e]">
                        <img
                          src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                          }}
                          alt="Shakeeb Ahmed Khan — WordPress, AI & Custom Web Developer"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div className="pt-3 pb-1 px-1 flex items-center justify-between text-white">
                        <div>
                          <span className="font-display font-black uppercase text-xl leading-none block">
                            Shakeeb Ahmed Khan
                          </span>
                          <span className="text-xs text-purple-200 font-medium">
                            Karachi, Pakistan · Remote Worldwide
                          </span>
                        </div>
                        <span className="font-mono text-xs font-bold text-[#c084fc] tabular-nums">
                          150+ Shipped
                        </span>
                      </div>
                    </motion.div>

                    {/* Handwritten Arrow & Note (Desktop) */}
                    <div className="hidden sm:flex items-center gap-2 mt-4 justify-center lg:justify-start pl-2">
                      <svg width="36" height="24" viewBox="0 0 36 24" fill="none" className="text-[#e9d5ff] shrink-0" aria-hidden="true">
                        <path
                          d="M2 20C10 20 18 14 22 4M22 4L14 7M22 4L26 11"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <span className="font-hand text-xl text-[#e9d5ff] -rotate-2">
                        that&apos;s me — designing &amp; coding the actual build
                      </span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </section>

          {/* ======================================================== */}
          {/* 2. EXPERIENCE & PROOF STRIP (Rich Gradient Backdrop)     */}
          {/* ======================================================== */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-experience-gradient border-y border-purple-500/35 rounded-b-[2rem] sm:rounded-b-[3rem] relative z-10 overflow-hidden shadow-[0_24px_60px_rgba(91,33,182,0.22)]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-9 sm:py-12 space-y-7 relative">
              {/* Quantitative Experience Metrics Strip */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 border-b border-purple-400/20 pb-7 text-left">
                {[
                  {
                    value: "150+",
                    label: "Websites & brands delivered",
                    highlight: false
                  },
                  {
                    value: "7+ Years",
                    label: "Full-stack web & UI experience",
                    highlight: true
                  },
                  {
                    value: "95–99",
                    label: "Average Google PageSpeed score",
                    highlight: false
                  },
                  {
                    value: "100+",
                    label: "Verified 5-star client reviews",
                    highlight: false
                  }
                ].map((stat, idx) => (
                  <motion.div
                    key={stat.value}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.1 }}
                    transition={{ duration: 0.4, delay: idx * 0.06 }}
                    className="p-4 sm:p-5 rounded-2xl bg-white/[0.04] border border-purple-400/20 hover:border-purple-400/50 transition-colors"
                  >
                    <div
                      className={`font-display text-4xl sm:text-5xl font-black tabular-nums leading-none ${
                        stat.highlight
                          ? "bg-gradient-to-r from-[#e9d5ff] via-[#c084fc] to-[#a855f7] bg-clip-text text-transparent"
                          : "text-white"
                      }`}
                    >
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm font-medium text-purple-100/85 mt-1.5">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Client Brand Roster Marquee */}
              <div className="flex items-center gap-4 overflow-hidden">
                <span className="font-hand text-xl sm:text-2xl text-[#e9d5ff] font-bold shrink-0 whitespace-nowrap">
                  Trusted by:
                </span>
                <div className="overflow-hidden flex-1">
                  <div className="animate-marquee flex items-center gap-8 font-display text-xl sm:text-2xl font-black uppercase tracking-wide text-white">
                    {[...Array(2)].map((_, loopIdx) => (
                      <React.Fragment key={loopIdx}>
                        <span>Henrietta Said</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>CRAV Burgers</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Pretty Patty Genève</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Primland Residences</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Tòpas Tapas &amp; Bar</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Brar&apos;s Foods</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Mr.Day Italy</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Partake Foods</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>Toynk</span>
                        <span className="text-[#c084fc]">·</span>
                        <span>DesiCart UK</span>
                        <span className="text-[#c084fc]">·</span>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 3. SERVICES (Pick What Fits Right Now)                   */}
          {/* ======================================================== */}
          <motion.section
            id="services"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 sm:py-24 bg-[#07030e] scroll-mt-20"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10 sm:space-y-12">
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
                    pick what fits right now
                  </motion.span>
                  <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white text-balance">
                    How I Can Help
                  </h2>
                </div>
                <p className="text-sm sm:text-base text-zinc-300 max-w-md">
                  Focused engineering and design sprints built to make your digital presence faster, sharper, and easier to convert on.
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {servicesList.map((srv, idx) => {
                  const IconComp = srv.icon;
                  return (
                    <motion.div
                      key={srv.num}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.06 }}
                      transition={{ duration: 0.45, delay: (idx % 3) * 0.07 }}
                      className="bg-[#120a22] border border-purple-800/45 hover:border-purple-400/70 rounded-3xl p-7 sm:p-8 text-left flex flex-col justify-between gap-7 transition-all duration-300 hover:-translate-y-1 shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:shadow-[0_18px_40px_rgba(135,80,247,0.18)] group"
                    >
                      <div className="space-y-5">
                        {/* Reference Top Row: Square Solid Purple Icon + Slanted Handwritten Tag */}
                        <div className="flex items-center justify-between gap-3">
                          <div className="w-12 h-12 rounded-2xl bg-[#6d28d9] flex items-center justify-center text-white shadow-[0_6px_18px_rgba(109,40,217,0.45)] shrink-0 group-hover:scale-105 transition-transform">
                            <IconComp className="w-6 h-6" />
                          </div>
                          <motion.span
                            initial={{ opacity: 0, y: 12, rotate: -9, scale: 0.86 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                            whileHover={{ rotate: 1.5, scale: 1.05 }}
                            viewport={{ once: true, amount: 0.2 }}
                            transition={{ type: "spring", stiffness: 320, damping: 16, delay: (idx % 3) * 0.08 }}
                            className="font-hand text-base sm:text-lg font-bold px-3 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] shadow-sm whitespace-nowrap inline-block"
                          >
                            {srv.note}
                          </motion.span>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-white leading-snug group-hover:text-purple-200 transition-colors">
                            {srv.title}
                          </h3>
                          <p className="text-sm text-zinc-300 leading-relaxed">
                            {srv.desc}
                          </p>
                        </div>
                      </div>

                      <div className="pt-1">
                        <button
                          onClick={() => openHireWithService(srv.title)}
                          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-purple-500/45 hover:border-white hover:bg-[#6d28d9] text-white text-xs sm:text-sm font-semibold transition-all cursor-pointer whitespace-nowrap"
                        >
                          <span>{srv.ctaLabel}</span>
                          <ArrowUpRight className="w-4 h-4 text-[#c084fc] group-hover:text-white transition-colors" />
                        </button>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 4. WEBSITES PORTFOLIO (Video-Matched Dark Purple Stage)  */}
          {/* ======================================================== */}
          <motion.div
            id="works"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.03 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="bg-[#240b4c] overflow-hidden scroll-mt-20"
          >
            <div id="web-portfolio">
              <WebsitePortfolio
                isHomePage={true}
                onShowMore={() => navigateToPage("websites")}
              />
            </div>
          </motion.div>

          {/* ======================================================== */}
          {/* 5. GRAPHIC DESIGN PORTFOLIO (Deep Plum Mist #0d071d)     */}
          {/* ======================================================== */}
          <motion.div
            id="graphics-portfolio"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.03 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-12 sm:mt-16 mx-2 sm:mx-4 lg:mx-6 bg-[#0d071d] border border-purple-900/35 rounded-[2rem] sm:rounded-[3rem] scroll-mt-20"
          >
            <GraphicsPortfolio
              isHomePage={true}
              onShowMore={() => navigateToPage("graphics")}
            />
          </motion.div>

          {/* ======================================================== */}
          {/* 6. PAIN POINTS ("IS THIS YOU?" — Obsidian #07030e)       */}
          {/* ======================================================== */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 sm:py-24 bg-[#07030e]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10 sm:space-y-12">
              <div className="max-w-3xl space-y-3">
                <motion.span
                  initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                  whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                  className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                >
                  sound familiar?
                </motion.span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white text-balance">
                  Most businesses don&apos;t have a traffic problem. They have a website problem.
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {painPoints.map((item, idx) => (
                  <motion.div
                    key={item.num}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={{ duration: 0.45, delay: (idx % 3) * 0.07 }}
                    className="bg-[#120a22] border border-purple-900/40 hover:border-purple-600/50 rounded-2xl p-6 space-y-3 flex flex-col justify-between transition-colors"
                  >
                    <div className="space-y-2.5">
                      <span className="font-mono text-xs font-bold text-[#c084fc] tabular-nums block">
                        {item.num}.
                      </span>
                      <h3 className="font-display text-2xl sm:text-[26px] font-black uppercase leading-tight text-white">
                        {item.title}
                      </h3>
                      <p className="text-sm text-zinc-300 leading-relaxed">
                        {item.body}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 7. SOLUTION TRANSITION (Royal Plum #180e2f)              */}
          {/* ======================================================== */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.08 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-2 sm:mx-4 lg:mx-6 bg-[#180e2f] border border-purple-800/40 text-white rounded-[2rem] sm:rounded-[3rem] py-16 sm:py-24"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-left">
              <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
                <div className="lg:col-span-7 space-y-4">
                  <motion.span
                    initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                    whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                    whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                    viewport={{ once: true, amount: 0.25 }}
                    transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                    className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                  >
                    the good news?
                  </motion.span>
                  <h2 className="font-display text-5xl sm:text-7xl lg:text-8xl font-black uppercase tracking-tight leading-[0.9] text-white text-balance">
                    That&apos;s the exact bit I fix.
                  </h2>
                </div>
                <div className="lg:col-span-5 space-y-5">
                  <p className="text-base text-zinc-200 leading-relaxed">
                    Instead of splitting your project between a slow design studio and an overwhelmed freelancer, I engineer both the visual system and the full production codebase. Every site leaves with clean code, custom branding, and measurable speed.
                  </p>
                  <div className="flex flex-wrap gap-3">
                    <button
                      onClick={() => scrollToSection("web-portfolio")}
                      className="px-6 py-3 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs sm:text-sm font-bold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                    >
                      Explore Website Work
                    </button>
                    <button
                      onClick={() => scrollToSection("graphics-portfolio")}
                      className="px-6 py-3 bg-[#120a22] hover:bg-purple-900/50 border border-purple-600/40 text-white text-xs sm:text-sm font-semibold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                    >
                      View Brand Identities
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 8. INTERACTIVE CAPABILITY CHIPS (Royal Purple Blueprint) */}
          {/* ======================================================== */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 mx-2 sm:mx-4 lg:mx-6 bg-blueprint-grid text-white rounded-[2rem] sm:rounded-[3rem] py-16 sm:py-24 overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-left space-y-10">
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
                    go on, click or drag them around
                  </motion.span>
                  <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white text-balance">
                    Everything Your Site Needs, Either Way
                  </h2>
                </div>

                <button
                  onClick={() => setChipResetKey((k) => k + 1)}
                  className="self-start md:self-auto px-4 py-2 rounded-full bg-[#120a22]/70 hover:bg-[#120a22] border border-white/25 text-white text-xs font-semibold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reset Board</span>
                </button>
              </div>

              {/* Interactive Draggable / Clickable Chip Cloud */}
              <div
                ref={chipBoardRef}
                key={chipResetKey}
                className="flex flex-wrap gap-3 sm:gap-4 p-5 sm:p-8 rounded-3xl bg-[#120a22]/60 border border-purple-300/25"
              >
                {CAPABILITY_CHIPS.map((chip, idx) => {
                  const isSelected = selectedChip.id === chip.id;
                  return (
                    <motion.button
                      key={chip.id}
                      type="button"
                      drag
                      dragConstraints={chipBoardRef}
                      dragElastic={0.15}
                      initial={{ opacity: 0, y: 16, rotate: chip.tilt * 3.5, scale: 0.88 }}
                      whileInView={{ opacity: 1, y: 0, rotate: chip.tilt, scale: 1 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ type: "spring", stiffness: 280, damping: 17, delay: idx * 0.035 }}
                      whileHover={{ scale: 1.05, rotate: chip.tilt * -0.5 }}
                      whileTap={{ scale: 0.97 }}
                      onClick={() => setSelectedChip(chip)}
                      className={`px-4 sm:px-5 py-2.5 sm:py-3 rounded-full text-xs sm:text-sm font-bold cursor-grab active:cursor-grabbing transition-colors whitespace-nowrap select-none border ${
                        isSelected
                          ? "bg-white text-[#120a22] border-white shadow-lg"
                          : "bg-[#180e2f] text-white border-purple-400/40 hover:border-white"
                      }`}
                    >
                      {chip.label}
                    </motion.button>
                  );
                })}
              </div>

              {/* Active Capability Detail Readout */}
              <div className="bg-[#120a22] text-white rounded-2xl p-6 sm:p-7 flex flex-col md:flex-row md:items-center justify-between gap-6 border border-purple-400/40 shadow-xl">
                <div className="space-y-1.5 max-w-2xl">
                  <span className="font-mono text-xs font-bold text-[#c084fc] uppercase tracking-wider block">
                    Selected Capability · {selectedChip.stack}
                  </span>
                  <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                    {selectedChip.label}
                  </h3>
                  <p className="text-sm text-zinc-300 leading-relaxed">
                    {selectedChip.summary}
                  </p>
                </div>
                <button
                  onClick={() => openHireWithService(selectedChip.label)}
                  className="px-6 py-3 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs sm:text-sm font-bold rounded-full transition-colors whitespace-nowrap shrink-0 cursor-pointer"
                >
                  Include in My Quote
                </button>
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 9. ENGAGEMENT / PRICING MODELS (Obsidian #07030e)        */}
          {/* ======================================================== */}
          <motion.section
            id="pricing"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 sm:py-24 bg-[#07030e] scroll-mt-20"
          >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10">
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
                    transparent from day one
                  </motion.span>
                  <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white text-balance">
                    Handled For You, Or Handed To You
                  </h2>
                </div>

                {/* 2-Option Segmented Toggle */}
                <motion.div
                  initial={{ opacity: 0, y: 14, rotate: -3, scale: 0.94 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 260, damping: 18 }}
                  className="inline-flex p-1.5 bg-[#120a22] border border-purple-900/40 rounded-full self-start md:self-auto"
                >
                  <button
                    onClick={() => setEngagementPlan("project")}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      engagementPlan === "project"
                        ? "bg-gradient-to-r from-[#8750f7] to-purple-600 text-white"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    Custom Project Build
                  </button>
                  <button
                    onClick={() => setEngagementPlan("partner")}
                    className={`px-5 py-2.5 rounded-full text-xs font-bold transition-colors cursor-pointer whitespace-nowrap ${
                      engagementPlan === "partner"
                        ? "bg-gradient-to-r from-[#8750f7] to-purple-600 text-white"
                        : "text-zinc-300 hover:text-white"
                    }`}
                  >
                    Ongoing Monthly Partner
                  </button>
                </motion.div>
              </div>

              {/* Ruled Notebook Breakdown Card */}
              <div className="bg-notebook-purple border border-purple-700/50 rounded-3xl p-6 sm:p-10 grid lg:grid-cols-12 gap-8 items-center shadow-lg">
                <div className="lg:col-span-7 space-y-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#c084fc] block">
                    {engagementPlan === "project"
                      ? "Fixed-Scope Delivery · 2–4 Week Sprint"
                      : "Dedicated Retainer · Cancel Any Month"}
                  </span>
                  <h3 className="font-display text-3xl sm:text-5xl font-black uppercase text-white leading-[0.95]">
                    {engagementPlan === "project"
                      ? "End-to-End Site & Brand Launch"
                      : "Your Embedded Web & Design Team"}
                  </h3>
                  <p className="text-sm sm:text-base text-zinc-300 leading-relaxed">
                    {engagementPlan === "project"
                      ? "Ideal when you want a fast, custom-engineered WordPress, Shopify, or React site plus cohesive brand graphics launched cleanly with full ownership."
                      : "Best for growing stores and agencies shipping weekly landing pages, speed updates, fresh campaigns, and continuous conversion improvements."}
                  </p>

                  <div className="grid sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-medium text-purple-100">
                    {(engagementPlan === "project"
                      ? [
                          "Custom UI design & brand kit included",
                          "95–99/100 Google PageSpeed tuned",
                          "Full responsive & mobile QA pass",
                          "100% source code & vector file IP transfer"
                        ]
                      : [
                          "Priority dev & graphic design queue",
                          "Core Web Vitals & uptime monitoring",
                          "New landing pages, sections & campaigns",
                          "Direct Slack, WhatsApp & email channel"
                        ]
                    ).map((bullet, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-[#a855f7] shrink-0 mt-0.5" />
                        <span>{bullet}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="lg:col-span-5 bg-[#120a22] border border-purple-700/50 rounded-2xl p-6 sm:p-7 space-y-5">
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-purple-300 uppercase tracking-wider block">
                      {engagementPlan === "project" ? "Milestone Proposal" : "Monthly Capacity"}
                    </span>
                    <div className="font-display text-4xl font-black uppercase text-white">
                      {engagementPlan === "project" ? "Fixed Quote in 24h" : "Flexible Monthly Sprint"}
                    </div>
                  </div>
                  <p className="text-xs text-zinc-300 leading-relaxed">
                    Share what you are building and receive a line-by-line deliverables breakdown before committing a dollar.
                  </p>
                  <button
                    onClick={() =>
                      openHireWithService(
                        engagementPlan === "project"
                          ? "Fixed-Scope Website & Brand Build"
                          : "Ongoing Monthly Dev & Design Retainer"
                      )
                    }
                    className="w-full py-3.5 px-6 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs sm:text-sm font-bold tracking-wide rounded-full transition-colors cursor-pointer"
                  >
                    {engagementPlan === "project" ? "Request Fixed Quote" : "Check Monthly Availability"}
                  </button>
                </div>
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 10. ABOUT, EXPERIENCE, EDUCATION & CORE STACK (Gradient) */}
          {/* ======================================================== */}
          <motion.section
            id="resume"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.04 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-2 sm:mx-4 lg:mx-6 bg-experience-gradient border border-purple-500/30 text-white rounded-[2rem] sm:rounded-[3rem] py-16 sm:py-24 scroll-mt-20 relative overflow-hidden"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-left relative z-10">
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start">
                {/* Left Scrolling Column: Experience, Education, Tech Stack */}
                <div className="lg:col-span-7 space-y-12">
                  <div className="space-y-3">
                    <motion.span
                      initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                      whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                      whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                      viewport={{ once: true, amount: 0.25 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                      className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                    >
                      the track record
                    </motion.span>
                    <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white">
                      Experience &amp; Education
                    </h2>
                  </div>

                  {/* Creative Gradient Timeline: Work History */}
                  <div className="space-y-5">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-purple-200 font-bold">
                      Work History (2019 – 2026)
                    </h3>
                    <div className="relative pl-6 sm:pl-8 space-y-4">
                      {/* Vertical Glowing Timeline Spine */}
                      <div
                        aria-hidden="true"
                        className="absolute left-2 sm:left-2.5 top-3 bottom-3 w-[2px] bg-gradient-to-b from-[#e9d5ff] via-[#a855f7] to-purple-900/20 rounded-full"
                      />

                      {experiences.map((exp, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, x: -12 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true, amount: 0.1 }}
                          transition={{ duration: 0.4, delay: idx * 0.06 }}
                          className="relative group"
                        >
                          {/* Glowing Timeline Node */}
                          <span
                            aria-hidden="true"
                            className="absolute -left-[22px] sm:-left-[27px] top-6 w-3.5 h-3.5 rounded-full bg-[#120a22] border-2 border-[#c084fc] group-hover:bg-[#c084fc] group-hover:scale-125 shadow-[0_0_12px_rgba(192,132,252,0.75)] transition-all"
                          />

                          <div className="bg-white/[0.045] backdrop-blur-sm border border-purple-400/20 hover:border-purple-300/60 hover:bg-white/[0.08] rounded-2xl p-5 sm:p-6 transition-all duration-300 flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                            <div className="space-y-1.5">
                              <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-white">
                                <Briefcase className="w-4 h-4 text-[#c084fc] shrink-0" />
                                <span>{exp.role}</span>
                              </div>
                              <div className="text-xs font-semibold text-[#e9d5ff] uppercase tracking-wider">
                                {exp.company}
                              </div>
                              <p className="text-xs sm:text-sm text-zinc-200/90 leading-relaxed max-w-xl pt-1">
                                {exp.desc}
                              </p>
                            </div>
                            <span className="font-mono text-xs text-white font-semibold whitespace-nowrap tabular-nums px-3 py-1 rounded-full bg-purple-950/70 border border-purple-400/30 self-start">
                              {exp.period}
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Education List */}
                  <div className="space-y-4">
                    <h3 className="text-xs font-mono uppercase tracking-widest text-purple-200 font-bold">
                      Academic Background
                    </h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.45 }}
                        className="bg-[#0e071c]/85 backdrop-blur-sm border border-purple-400/25 hover:border-purple-300/60 rounded-2xl overflow-hidden transition-colors"
                      >
                        <div className="h-1 w-full bg-gradient-to-r from-[#8750f7] via-[#c084fc] to-[#5b21b6]" />
                        <div className="p-5 space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-[#e9d5ff]">
                            <span>2019 – 2023</span>
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <h4 className="font-display text-2xl font-black uppercase text-white leading-tight">
                            University of Karachi
                          </h4>
                          <p className="text-xs font-semibold text-purple-200">
                            Bachelors of Computer Science (BSCS)
                          </p>
                          <p className="text-xs text-zinc-300 leading-relaxed">
                            Software engineering, algorithms, relational databases, and web architecture.
                          </p>
                        </div>
                      </motion.div>

                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.1 }}
                        transition={{ duration: 0.45, delay: 0.08 }}
                        className="bg-[#0e071c]/85 backdrop-blur-sm border border-purple-400/25 hover:border-purple-300/60 rounded-2xl overflow-hidden transition-colors"
                      >
                        <div className="h-1 w-full bg-gradient-to-r from-[#c084fc] via-[#8750f7] to-[#5b21b6]" />
                        <div className="p-5 space-y-2">
                          <div className="flex items-center justify-between text-xs font-mono text-[#e9d5ff]">
                            <span>2018 – 2022</span>
                            <GraduationCap className="w-4 h-4" />
                          </div>
                          <h4 className="font-display text-2xl font-black uppercase text-white leading-tight">
                            Aptech Computer Education
                          </h4>
                          <p className="text-xs font-semibold text-purple-200">
                            ADSE Software Engineering Diploma
                          </p>
                          <p className="text-xs text-zinc-300 leading-relaxed">
                            Full-stack application engineering, CMS architecture, and UI design tooling.
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </div>

                  {/* Filterable Core Stack */}
                  <div className="space-y-5">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <h3 className="text-xs font-mono uppercase tracking-widest text-purple-200 font-bold">
                        Core Tech Stack
                      </h3>
                      <motion.div
                        initial={{ opacity: 0, y: 12, rotate: -3, scale: 0.94 }}
                        whileInView={{ opacity: 1, y: 0, rotate: 0, scale: 1 }}
                        viewport={{ once: true, amount: 0.2 }}
                        transition={{ type: "spring", stiffness: 270, damping: 18 }}
                        className="flex items-center gap-1.5 bg-[#0e071c]/85 p-1 rounded-full border border-purple-400/25"
                      >
                        {[
                          { id: "all" as const, label: "All Stack" },
                          { id: "dev" as const, label: "Engineering" },
                          { id: "design" as const, label: "Design" }
                        ].map((tab) => (
                          <button
                            key={tab.id}
                            onClick={() => setActiveSkillCategory(tab.id)}
                            className={`px-3.5 py-1.5 rounded-full text-xs font-semibold transition-colors cursor-pointer ${
                              activeSkillCategory === tab.id
                                ? "bg-gradient-to-r from-[#8750f7] to-purple-600 text-white"
                                : "text-zinc-300 hover:text-white"
                            }`}
                          >
                            {tab.label}
                          </button>
                        ))}
                      </motion.div>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3.5">
                      {stackItems
                        .filter((s) => activeSkillCategory === "all" || s.category === activeSkillCategory)
                        .map((skill) => (
                          <div
                            key={skill.id}
                            className="bg-[#0e071c]/85 backdrop-blur-sm border border-purple-400/20 rounded-xl p-4 space-y-2.5"
                          >
                            <div className="flex items-center justify-between gap-2 text-sm font-bold text-white">
                              <span>{skill.name}</span>
                              <span className="font-mono text-xs text-[#e9d5ff] tabular-nums">{skill.percent}%</span>
                            </div>
                            <div className="w-full h-2 bg-purple-950/90 rounded-full overflow-hidden">
                              <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: `${skill.percent}%` }}
                                viewport={{ once: true, amount: 0.1 }}
                                transition={{ duration: 0.75, ease: "easeOut" }}
                                className="h-full bg-gradient-to-r from-[#8750f7] via-[#a855f7] to-[#e9d5ff] rounded-full"
                              />
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                </div>

                {/* Right Sticky Bio Card */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.1 }}
                  transition={{ duration: 0.5 }}
                  className="lg:col-span-5 lg:sticky lg:top-24"
                >
                  <div className="bg-[#0e071c]/90 backdrop-blur-md text-white rounded-3xl p-6 sm:p-8 space-y-6 border border-purple-400/35 shadow-[0_24px_60px_rgba(0,0,0,0.45)]">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 rounded-2xl overflow-hidden bg-[#07030e] border border-purple-400/40 shrink-0">
                        <img
                          src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                          }}
                          alt="Shakeeb Ahmed Khan"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                      <div>
                        <span className="font-hand text-2xl text-[#e9d5ff] font-bold block leading-none">
                          Founder &amp; Lead Dev
                        </span>
                        <h3 className="font-display text-3xl font-black uppercase text-white leading-tight mt-1">
                          Shakeeb Ahmed Khan
                        </h3>
                        <span className="text-xs font-medium text-purple-200/85">
                          BSCS · WordPress, Shopify, AI &amp; Brand Design
                        </span>
                      </div>
                    </div>

                    <p className="text-sm text-zinc-200 leading-relaxed">
                      Over the past 7+ years I&apos;ve partnered with founders, restaurants, B2B wholesalers, and creative agencies across the US, Switzerland, the UK, and Canada — shipping 150+ projects that pair memorable design with dependable speed.
                    </p>

                    <div className="space-y-2.5 pt-2 border-t border-purple-500/25 text-xs font-medium text-zinc-200">
                      <div className="flex items-center gap-2.5">
                        <MapPin className="w-4 h-4 text-[#c084fc] shrink-0" />
                        <span>Karachi, Pakistan (Serving Clients Globally)</span>
                      </div>
                      <a
                        href="mailto:shakeebkhanstudio@gmail.com"
                        className="md:hidden flex items-center gap-2.5 hover:text-[#e9d5ff]"
                      >
                        <Mail className="w-4 h-4 text-[#c084fc] shrink-0" />
                        <span>shakeebkhanstudio@gmail.com</span>
                      </a>
                      <a
                        href="mailto:shakeebahmedk24@gmail.com"
                        className="hidden md:flex items-center gap-2.5 hover:text-[#e9d5ff]"
                      >
                        <Mail className="w-4 h-4 text-[#c084fc] shrink-0" />
                        <span>shakeebahmedk24@gmail.com</span>
                      </a>
                      <a
                        href="tel:923363445281"
                        className="md:hidden flex items-center gap-2.5 hover:text-[#e9d5ff]"
                      >
                        <Phone className="w-4 h-4 text-[#c084fc] shrink-0" />
                        <span>+92-336-3445281</span>
                      </a>
                      <a
                        href="tel:+923320203701"
                        className="hidden md:flex items-center gap-2.5 hover:text-[#e9d5ff]"
                      >
                        <Phone className="w-4 h-4 text-[#c084fc] shrink-0" />
                        <span>+92-332-0203701</span>
                      </a>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 pt-1">
                      <button
                        onClick={() => openHireWithService("WordPress & WooCommerce Build")}
                        className="flex-1 py-3 px-5 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold rounded-full transition-colors cursor-pointer whitespace-nowrap"
                      >
                        Hire Shakeeb
                      </button>
                      <a
                        href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                        download="Shakeeb_Khan_CV.pdf"
                        target="_blank"
                        rel="noreferrer"
                        className="py-3 px-5 bg-white/5 hover:bg-purple-900/50 border border-purple-400/35 text-purple-100 text-xs font-bold rounded-full inline-flex items-center justify-center gap-1.5 transition-colors whitespace-nowrap"
                      >
                        <Download className="w-3.5 h-3.5" />
                        <span>Resume PDF</span>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 11. CLIENT TESTIMONIALS (Royal Purple Blueprint Grid)    */}
          {/* ======================================================== */}
          <motion.section
            id="testimonials"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mt-8 sm:mt-12 mx-2 sm:mx-4 lg:mx-6 bg-blueprint-grid text-white rounded-[2rem] sm:rounded-[3rem] py-16 sm:py-24 scroll-mt-20"
          >
            <div className="max-w-7xl mx-auto px-5 sm:px-8 lg:px-10 text-left space-y-10">
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
                    verified client feedback
                  </motion.span>
                  <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
                    What Clients Say
                  </h2>
                </div>

                {/* Desktop Pagination Controls */}
                <div className="hidden md:flex items-center gap-3">
                  <span className="font-mono text-xs text-purple-200 tabular-nums">
                    {testimonialIndex + 1} / {desktopTestimonialPages}
                  </span>
                  <button
                    onClick={() =>
                      setTestimonialIndex((prev) =>
                        prev > 0 ? prev - 1 : desktopTestimonialPages - 1
                      )
                    }
                    className="p-2.5 rounded-full bg-[#120a22]/75 hover:bg-white text-white hover:text-[#120a22] border border-white/25 transition-colors cursor-pointer"
                    aria-label="Previous testimonials"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() =>
                      setTestimonialIndex((prev) =>
                        prev < desktopTestimonialPages - 1 ? prev + 1 : 0
                      )
                    }
                    className="p-2.5 rounded-full bg-[#120a22]/75 hover:bg-white text-white hover:text-[#120a22] border border-white/25 transition-colors cursor-pointer"
                    aria-label="Next testimonials"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Desktop 3-Card Row */}
              <div className="hidden md:grid md:grid-cols-3 gap-6">
                {testimonials
                  .slice(testimonialIndex * 3, testimonialIndex * 3 + 3)
                  .map((t, idx) => (
                    <motion.div
                      key={`${testimonialIndex}-${idx}`}
                      initial={{ opacity: 0, y: 16 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.08 }}
                      transition={{ duration: 0.4, delay: idx * 0.06 }}
                      className="bg-[#120a22] text-white border border-purple-400/35 rounded-2xl p-7 flex flex-col justify-between gap-6 shadow-xl"
                    >
                      <div className="space-y-4">
                        <div className="flex items-center justify-between gap-2">
                          <div className="flex items-center gap-0.5 text-[#c084fc]">
                            {[...Array(5)].map((_, s) => (
                              <Star key={s} className="w-3.5 h-3.5 fill-current" />
                            ))}
                          </div>
                          <span className="font-mono text-[11px] font-bold text-[#34d399] tabular-nums">
                            {t.metric}
                          </span>
                        </div>
                        <p className="text-sm text-zinc-200 leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </p>
                      </div>

                      <div className="pt-4 border-t border-purple-900/50 flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#180e2f] border border-purple-500/40 flex items-center justify-center font-display font-black text-base text-purple-200 shrink-0">
                          {getInitials(t.name)}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-bold text-white truncate">{t.name}</div>
                          <div className="text-xs text-purple-200/75 truncate">{t.role}</div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
              </div>

              {/* Mobile Scroll Strip */}
              <div className="md:hidden flex gap-4 overflow-x-auto no-scrollbar pb-2 -mx-2 px-2">
                {testimonials.map((t, idx) => (
                  <div
                    key={idx}
                    className="w-[290px] shrink-0 bg-[#120a22] text-white border border-purple-400/35 rounded-2xl p-5 flex flex-col justify-between gap-4 shadow-lg"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between text-[11px] font-mono font-bold text-[#34d399]">
                        <div className="flex items-center gap-0.5 text-[#c084fc]">
                          {[...Array(5)].map((_, s) => (
                            <Star key={s} className="w-3 h-3 fill-current" />
                          ))}
                        </div>
                        <span>{t.metric}</span>
                      </div>
                      <p className="text-xs text-zinc-200 leading-relaxed">
                        &ldquo;{t.quote}&rdquo;
                      </p>
                    </div>
                    <div className="pt-3 border-t border-purple-900/50 flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-full bg-[#180e2f] border border-purple-500/40 flex items-center justify-center font-display font-black text-sm text-purple-200 shrink-0">
                        {getInitials(t.name)}
                      </div>
                      <div className="min-w-0">
                        <div className="text-xs font-bold text-white truncate">{t.name}</div>
                        <div className="text-[11px] text-purple-200/75 truncate">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 12. HOW IT WORKS (Obsidian #07030e)                      */}
          {/* ======================================================== */}
          <motion.section
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="py-16 sm:py-24 bg-[#07030e]"
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-10 sm:space-y-12">
              <div className="max-w-2xl space-y-3">
                <motion.span
                  initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                  whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                  className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                >
                  simple process, no bureaucracy
                </motion.span>
                <h2 className="font-display text-4xl sm:text-6xl md:text-7xl font-black uppercase tracking-tight leading-[0.95] text-white">
                  How It Works
                </h2>
              </div>

              <div className="grid md:grid-cols-3 gap-6">
                {[
                  {
                    step: "01",
                    title: "Discovery & Fixed Quote",
                    desc: "We hop on a focused 20-minute call or exchange project notes. Within 24 hours you receive an exact milestone schedule and transparent fixed quote."
                  },
                  {
                    step: "02",
                    title: "Design & Engineering Sprint",
                    desc: "You review clickable Figma designs or staging URLs directly via Loom and live preview links — fast async feedback with zero agency phone-tag."
                  },
                  {
                    step: "03",
                    title: "Launch, Speed Check & Handover",
                    desc: "I ship your site to production, verify 95+ Google PageSpeed scores across mobile & desktop, and hand over all source files with 100% ownership."
                  }
                ].map((s, idx) => (
                  <motion.div
                    key={s.step}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.08 }}
                    transition={{ duration: 0.45, delay: idx * 0.08 }}
                    className="bg-[#120a22] border border-purple-900/40 hover:border-purple-500/50 rounded-2xl p-6 sm:p-8 space-y-4 transition-colors"
                  >
                    <span className="font-display text-5xl font-black text-[#c084fc] leading-none block tabular-nums">
                      {s.step}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-black uppercase text-white">
                      {s.title}
                    </h3>
                    <p className="text-sm text-zinc-300 leading-relaxed">
                      {s.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.section>

          {/* ======================================================== */}
          {/* 13. FAQ ACCORDION (Deep Plum Mist #0d071d)               */}
          {/* ======================================================== */}
          <motion.section
            id="faq"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.06 }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="mx-2 sm:mx-4 lg:mx-6 bg-[#0d071d] border border-purple-900/35 rounded-[2rem] sm:rounded-[3rem] py-16 sm:py-24 scroll-mt-20"
          >
            <div className="max-w-4xl mx-auto px-5 sm:px-8 text-left space-y-10">
              <div className="space-y-3">
                <motion.span
                  initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                  whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                  className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                >
                  straight answers
                </motion.span>
                <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.95] text-white">
                  Good Questions, Straight Answers
                </h2>
              </div>

              <div className="space-y-3">
                {faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-[#120a22] border border-purple-900/40 rounded-2xl overflow-hidden"
                    >
                      <button
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-[#180e2f] transition-colors cursor-pointer"
                      >
                        <span className="text-sm sm:text-base font-bold text-white">
                          {faq.q}
                        </span>
                        <span className="w-8 h-8 rounded-full bg-[#180e2f] border border-purple-700/40 text-purple-200 flex items-center justify-center shrink-0">
                          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.25 }}
                          >
                            <div className="px-6 pb-6 pt-2 text-sm text-zinc-300 leading-relaxed border-t border-purple-900/40">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.section>
        </main>
      )}

      {/* ======================================================== */}
      {/* DEDICATED PAGE: WEBSITES PORTFOLIO                       */}
      {/* ======================================================== */}
      {currentPage === "websites" && (
        <main className="min-h-[85vh] overflow-x-clip">
          {/* ======================================================== */}
          {/* WEBSITES PORTFOLIO HERO (#2C1156 Architectural Grid)     */}
          {/* ======================================================== */}
          <section className="bg-work-hero-grid text-white pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden border-b border-purple-400/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
              {/* Subpage Quick Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => navigateToPage("home")}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#120a22]/75 hover:bg-[#180e2f] border border-purple-300/30 text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
                >
                  <span>← Back to Home</span>
                </button>

                <button
                  onClick={() => navigateToPage("graphics")}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer shadow-lg"
                >
                  <span>Switch to Graphic Design (40+)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Hero Grid Content */}
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 space-y-6"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e9d5ff] block">
                    PORTFOLIO · WEBSITES &amp; WEB APPS
                  </span>

                  <div className="inline-block relative">
                    <h1 className="font-display text-7xl sm:text-[108px] lg:text-[134px] font-black uppercase tracking-tight leading-[0.86] text-white">
                      THE WORK
                    </h1>
                    {/* Hand-drawn curved brushstroke underline */}
                    <svg
                      viewBox="0 0 360 22"
                      fill="none"
                      className="w-[58%] ml-auto mt-2 text-[#e9d5ff]"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 16C110 4 245 4 356 13"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <p className="text-base sm:text-lg text-purple-100/90 max-w-xl leading-relaxed">
                    150+ websites, stores, and custom web builds — restaurants, B2B wholesalers, healthcare clinics, hospitality groups, and fast-growing consumer brands. Every build engineered for 95–99/100 Core Web Vitals and real conversions.
                  </p>
                </motion.div>

                {/* Right Column: Subtle Big Vector Arrow + Tilted White Proof Card */}
                <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-4">
                  <svg
                    viewBox="0 0 240 240"
                    fill="none"
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-6 right-0 w-64 h-64 text-white/[0.08] pointer-events-none select-none"
                  >
                    <path
                      d="M44 196L196 44M196 44H74M196 44V166"
                      stroke="currentColor"
                      strokeWidth="28"
                      strokeLinecap="square"
                    />
                  </svg>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 6, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
                    whileHover={{ rotate: 0, y: -4 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="relative z-10 w-full max-w-[330px] bg-white text-[#120a22] rounded-3xl p-7 sm:p-8 shadow-[0_28px_70px_rgba(7,3,14,0.55)]"
                  >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-500 block">
                      WEBSITES BUILT
                    </span>
                    <div className="font-display text-6xl sm:text-7xl font-black text-[#6d28d9] leading-none mt-2 tabular-nums">
                      150+
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 mt-3">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-purple-100 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono font-bold text-[#120a22]">
                      <span>18 FEATURED BUILDS</span>
                      <span aria-hidden="true" className="text-purple-400">·</span>
                      <span>100+ 5-STAR REVIEWS</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <WebsitePortfolio isHomePage={false} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="mt-16 pt-10 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigateToPage("home")}
                className="px-6 py-3 rounded-full bg-[#120a22] border border-purple-800/50 text-white text-xs font-bold cursor-pointer"
              >
                ← Return to Home
              </button>
              <button
                onClick={() => navigateToPage("graphics")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold cursor-pointer"
              >
                <span>Explore Graphic Design Portfolio (40+ Designs)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ======================================================== */}
      {/* DEDICATED PAGE: GRAPHICS PORTFOLIO                       */}
      {/* ======================================================== */}
      {currentPage === "graphics" && (
        <main className="min-h-[85vh] overflow-x-clip">
          {/* ======================================================== */}
          {/* GRAPHICS PORTFOLIO HERO (#2C1156 Architectural Grid)     */}
          {/* ======================================================== */}
          <section className="bg-work-hero-grid text-white pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-hidden border-b border-purple-400/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-10 sm:space-y-12">
              {/* Subpage Quick Controls */}
              <div className="flex flex-wrap items-center justify-between gap-4">
                <button
                  onClick={() => navigateToPage("home")}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#120a22]/75 hover:bg-[#180e2f] border border-purple-300/30 text-white text-xs font-bold tracking-wide transition-colors cursor-pointer"
                >
                  <span>← Back to Home</span>
                </button>

                <button
                  onClick={() => navigateToPage("websites")}
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer shadow-lg"
                >
                  <span>Switch to Websites Portfolio (15+)</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>

              {/* Hero Grid Content */}
              <div className="grid lg:grid-cols-12 gap-10 lg:gap-8 items-center text-left">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                  className="lg:col-span-7 space-y-6"
                >
                  <span className="font-mono text-xs font-bold uppercase tracking-[0.2em] text-[#e9d5ff] block">
                    PORTFOLIO · BRANDING &amp; GRAPHIC DESIGN
                  </span>

                  <div className="inline-block relative">
                    <h1 className="font-display text-7xl sm:text-[108px] lg:text-[134px] font-black uppercase tracking-tight leading-[0.86] text-white">
                      THE WORK
                    </h1>
                    {/* Hand-drawn curved brushstroke underline */}
                    <svg
                      viewBox="0 0 360 22"
                      fill="none"
                      className="w-[58%] ml-auto mt-2 text-[#e9d5ff]"
                      aria-hidden="true"
                    >
                      <path
                        d="M4 16C110 4 245 4 356 13"
                        stroke="currentColor"
                        strokeWidth="6"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <p className="text-base sm:text-lg text-purple-100/90 max-w-xl leading-relaxed">
                    40+ curated brand identity systems, custom vector logomarks, 300 DPI retail packaging dielines, mobile UI kits, and campaign collateral — every piece designed to make brands unmistakable.
                  </p>
                </motion.div>

                {/* Right Column: Subtle Big Vector Arrow + Tilted White Proof Card */}
                <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-4">
                  <svg
                    viewBox="0 0 240 240"
                    fill="none"
                    aria-hidden="true"
                    className="hidden sm:block absolute -top-6 right-0 w-64 h-64 text-white/[0.08] pointer-events-none select-none"
                  >
                    <path
                      d="M44 196L196 44M196 44H74M196 44V166"
                      stroke="currentColor"
                      strokeWidth="28"
                      strokeLinecap="square"
                    />
                  </svg>

                  <motion.div
                    initial={{ opacity: 0, y: 20, rotate: 6, scale: 0.94 }}
                    animate={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
                    whileHover={{ rotate: 0, y: -4 }}
                    transition={{ type: "spring", stiffness: 240, damping: 18 }}
                    className="relative z-10 w-full max-w-[330px] bg-white text-[#120a22] rounded-3xl p-7 sm:p-8 shadow-[0_28px_70px_rgba(7,3,14,0.55)]"
                  >
                    <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-500 block">
                      DESIGNS &amp; BRANDS
                    </span>
                    <div className="font-display text-6xl sm:text-7xl font-black text-[#6d28d9] leading-none mt-2 tabular-nums">
                      100+
                    </div>
                    <div className="flex items-center gap-1 text-amber-400 mt-3">
                      {[...Array(5)].map((_, s) => (
                        <Star key={s} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <div className="mt-5 pt-4 border-t border-purple-100 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono font-bold text-[#120a22]">
                      <span>40+ SPECIMENS</span>
                      <span aria-hidden="true" className="text-purple-400">·</span>
                      <span>300 DPI PRINT &amp; VECTOR</span>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </section>

          <GraphicsPortfolio isHomePage={false} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
            <div className="mt-16 pt-10 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
              <button
                onClick={() => navigateToPage("home")}
                className="px-6 py-3 rounded-full bg-[#120a22] border border-purple-800/50 text-white text-xs font-bold cursor-pointer"
              >
                ← Return to Home
              </button>
              <button
                onClick={() => navigateToPage("websites")}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold cursor-pointer"
              >
                <span>Explore Websites Portfolio (15+ Sites)</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </main>
      )}

      {/* ======================================================== */}
      {/* 14. MONUMENTAL ROYAL PURPLE FOOTER ("LET'S TALK")        */}
      {/* ======================================================== */}
      <motion.footer
        id="contact"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.05 }}
        transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
        className="mt-12 sm:mt-16 bg-blueprint-grid text-white rounded-t-[2rem] sm:rounded-t-[3rem] pt-14 sm:pt-20 pb-8 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
      >
        <div className="max-w-7xl mx-auto space-y-12">
          {/* Top Pre-Footer Conversion Hook */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 text-left">
            <div className="space-y-4 max-w-2xl">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white shrink-0">
                  <img
                    src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                    }}
                    alt="Shakeeb Ahmed Khan"
                    className="w-full h-full object-cover object-top"
                  />
                </div>
                <motion.span
                  initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                  whileInView={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                  whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                  viewport={{ once: true, amount: 0.25 }}
                  transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                  className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                >
                  ready when you are
                </motion.span>
              </div>
              <h2 className="font-display text-3xl sm:text-5xl font-black uppercase tracking-tight leading-[0.95] text-white">
                Need a faster site, a new store, or a complete brand refresh?
              </h2>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={() => openHireWithService("WordPress & WooCommerce Build")}
                className="px-7 py-3.5 bg-white hover:bg-[#e9d5ff] text-[#120a22] text-sm font-bold rounded-full transition-colors cursor-pointer whitespace-nowrap shadow-xl"
              >
                Start Your Project
              </button>
              <a
                href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                download="Shakeeb_Khan_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-6 py-3.5 bg-[#120a22]/60 hover:bg-[#120a22]/85 border border-white/25 text-white text-sm font-semibold rounded-full inline-flex items-center gap-2 transition-colors whitespace-nowrap"
              >
                <Download className="w-4 h-4" />
                <span>Resume PDF</span>
              </a>
            </div>
          </div>

          {/* Monumental Full-Width Display Wordmark */}
          <div className="border-y border-white/20 py-4 sm:py-6 text-center select-none overflow-hidden">
            <button
              type="button"
              onClick={() => openHireWithService("General Inquiry")}
              className="font-display font-black uppercase tracking-tight leading-[0.82] text-white hover:text-[#e9d5ff] transition-colors cursor-pointer text-[20vw] sm:text-[18vw] lg:text-[175px] block w-full"
            >
              LET&apos;S TALK
            </button>
          </div>

          {/* Direct Contact Details Strip (Mobile & Desktop Responsive Preserved) */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 text-xs sm:text-sm font-medium">
            <div className="flex flex-wrap items-center justify-center md:justify-start gap-4 sm:gap-6">
              <a
                href="mailto:shakeebkhanstudio@gmail.com"
                className="md:hidden hover:text-[#e9d5ff] inline-flex items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>shakeebkhanstudio@gmail.com</span>
              </a>
              <a
                href="mailto:shakeebahmedk24@gmail.com"
                className="hidden md:inline-flex hover:text-[#e9d5ff] items-center gap-1.5"
              >
                <Mail className="w-4 h-4" />
                <span>shakeebahmedk24@gmail.com</span>
              </a>

              <span className="text-white/40">/</span>

              <a
                href="tel:923363445281"
                className="md:hidden hover:text-[#e9d5ff] inline-flex items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>+92-336-3445281</span>
              </a>
              <a
                href="tel:+923320203701"
                className="hidden md:inline-flex hover:text-[#e9d5ff] items-center gap-1.5"
              >
                <Phone className="w-4 h-4" />
                <span>+92-332-0203701</span>
              </a>

              <span className="text-white/40">/</span>
              <span className="inline-flex items-center gap-1.5 text-white/90">
                <MapPin className="w-4 h-4" />
                <span>Karachi, Pakistan</span>
              </span>
            </div>

            <div className="flex items-center gap-5 text-xs sm:text-sm font-semibold">
              <a
                href="https://behance.net/sksolutions"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e9d5ff] transition-colors inline-flex items-center gap-1"
              >
                <span>Behance</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e9d5ff] transition-colors"
              >
                LinkedIn
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-[#e9d5ff] transition-colors"
              >
                Facebook
              </a>
              <button
                onClick={scrollToTop}
                className="p-2.5 rounded-full bg-white text-[#120a22] hover:bg-[#e9d5ff] transition-colors cursor-pointer"
                title="Back to Top"
                aria-label="Back to Top"
              >
                <ArrowUp className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/15 text-xs text-purple-100/80">
            <img
              src="/Shakeeb_logo_white-removebg-preview-1.png"
              alt="Shakeeb"
              className="h-6 w-auto object-contain"
            />
            <span>© 2026 Shakeeb Ahmed Khan. All rights reserved.</span>
          </div>
        </div>
      </motion.footer>

      {/* ======================================================== */}
      {/* HIRE ME / PROJECT INQUIRY MODAL                          */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showHireModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-[#07030e]/85 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.96 }}
              className="bg-[#120a22] text-white border border-purple-700/50 rounded-3xl max-w-lg w-full shadow-2xl relative text-left p-6 sm:p-8"
            >
              <button
                onClick={() => {
                  setShowHireModal(false);
                  setHireFormSubmitted(false);
                }}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-[#180e2f] border border-purple-700/40 text-purple-200 hover:text-white hover:bg-purple-900/50 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>

              {hireFormSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-14 h-14 rounded-full bg-emerald-500/15 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-7 h-7" />
                  </div>
                  <h3 className="text-3xl font-display font-black uppercase text-white">
                    Proposal Request Received
                  </h3>
                  <p className="text-sm text-zinc-300 max-w-sm mx-auto leading-relaxed">
                    Thank you, {hireName || "there"}. Shakeeb Ahmed Khan will review your brief and reply to{" "}
                    <span className="font-bold text-[#c084fc]">{hireEmail}</span> within 24 hours.
                  </p>
                  <button
                    onClick={() => {
                      setShowHireModal(false);
                      setHireFormSubmitted(false);
                    }}
                    className="mt-2 px-7 py-3 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold rounded-full cursor-pointer"
                  >
                    Done
                  </button>
                </div>
              ) : (
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                    setHireFormSubmitted(true);
                  }}
                  className="space-y-4"
                >
                  <div>
                    <motion.span
                      initial={{ opacity: 0, y: 18, rotate: -10, scale: 0.85 }}
                      animate={{ opacity: 1, y: 0, rotate: -2.2, scale: 1 }}
                      whileHover={{ rotate: 1.5, scale: 1.05, y: -2 }}
                      transition={{ type: "spring", stiffness: 300, damping: 16, mass: 0.7 }}
                      className="font-hand text-xl sm:text-2xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block shadow-sm cursor-default"
                    >
                      let&apos;s build something sharp
                    </motion.span>
                    <h3 className="text-3xl sm:text-4xl font-display font-black uppercase text-white mt-1">
                      Start Your Project
                    </h3>
                    <p className="text-xs text-zinc-400 mt-1">
                      Direct reply within 24 hours with a clear milestone plan.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-purple-200">Your Name</label>
                    <input
                      type="text"
                      required
                      value={hireName}
                      onChange={(e) => setHireName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#07030e] border border-purple-900/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8750f7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-purple-200">Your Email</label>
                    <input
                      type="email"
                      required
                      value={hireEmail}
                      onChange={(e) => setHireEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#07030e] border border-purple-900/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8750f7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-purple-200">Primary Service / Scope</label>
                    <input
                      type="text"
                      required
                      value={hireService}
                      onChange={(e) => setHireService(e.target.value)}
                      placeholder="WordPress, Shopify, React or Brand Design"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#07030e] border border-purple-900/60 text-white text-sm focus:outline-none focus:border-[#8750f7]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-bold text-purple-200">Project Brief / Timeline</label>
                    <textarea
                      rows={3}
                      required
                      value={hireMessage}
                      onChange={(e) => setHireMessage(e.target.value)}
                      placeholder="Share your goals, site link (if any), and ideal launch window..."
                      className="w-full px-4 py-2.5 rounded-xl bg-[#07030e] border border-purple-900/60 text-white placeholder-zinc-500 text-sm focus:outline-none focus:border-[#8750f7]"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white font-bold text-xs sm:text-sm tracking-wide rounded-full transition-colors cursor-pointer"
                  >
                    Send Project Inquiry
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
