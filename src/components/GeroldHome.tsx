import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WebsitePortfolio } from "./WebsitePortfolio";
import { GraphicsPortfolio } from "./GraphicsPortfolio";
import {
  Code,
  Layout,
  PenTool,
  TrendingUp,
  ArrowRight,
  ArrowUp,
  Star,
  Plus,
  Minus,
  Sparkles,
  ExternalLink,
  Mail,
  Phone,
  MapPin,
  Check,
  CheckCircle2,
  X,
  Menu,
  Award,
  GraduationCap,
  Briefcase,
  Layers,
  ChevronRight,
  ChevronLeft,
  Quote,
  Globe,
  Palette,
  Download
} from "lucide-react";

interface GeroldHomeProps {
  initialPortfolioTab?: "all" | "case_studies" | "websites" | "graphics";
  onNavigateToPortfolio?: (type?: "all" | "web" | "graphics") => void;
}

export function GeroldHome({
  initialPortfolioTab = "all",
  onNavigateToPortfolio
}: GeroldHomeProps) {
  // Navigation & Page Routing States ("home" | "websites" | "graphics")
  const [currentPage, setCurrentPage] = useState<"home" | "websites" | "graphics">("home");
  const [activeNav, setActiveNav] = useState("home");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // First FAQ open by default like screenshot
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showHireModal, setShowHireModal] = useState(false);
  const [hireFormSubmitted, setHireFormSubmitted] = useState(false);
  const [activeSkillCategory, setActiveSkillCategory] = useState<"all" | "design" | "dev">("all");

  // Hire me form state
  const [hireName, setHireName] = useState("");
  const [hireEmail, setHireEmail] = useState("");
  const [hireService, setHireService] = useState("WordPress Development");
  const [hireMessage, setHireMessage] = useState("");

  // Lock background scroll when hire modal is open
  useEffect(() => {
    if (showHireModal) {
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
  }, [showHireModal]);

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
    setMobileMenuOpen(false);

    if (page === "home") {
      if (targetSectionId) {
        window.location.hash = targetSectionId;
        setTimeout(() => {
          const element = document.getElementById(targetSectionId);
          if (element) {
            const lenis = (window as any).__lenis;
            if (lenis && typeof lenis.scrollTo === "function") {
              lenis.scrollTo(element, { offset: -80, duration: 1.2 });
            } else {
              const yOffset = -80;
              const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({ top: y, behavior: "smooth" });
            }
          }
        }, 100);
      } else {
        window.location.hash = "";
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(0, { duration: 1.0 });
        } else {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }
      }
    } else if (page === "websites") {
      window.location.hash = "websites-page";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else if (page === "graphics") {
      window.location.hash = "graphics-page";
      const lenis = (window as any).__lenis;
      if (lenis && typeof lenis.scrollTo === "function") {
        lenis.scrollTo(0, { immediate: true });
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }
  };

  // Smooth scroll handler within home
  const scrollToSection = (id: string) => {
    if (currentPage !== "home") {
      navigateToPage("home", id);
      return;
    }
    setActiveNav(id);
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const lenis = (window as any).__lenis;
        if (lenis && typeof lenis.scrollTo === "function") {
          lenis.scrollTo(element, { offset: -80, duration: 1.2 });
        } else {
          const yOffset = -80;
          const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }
    }, 60);
  };

  const scrollToTop = () => {
    const lenis = (window as any).__lenis;
    if (lenis && typeof lenis.scrollTo === "function") {
      lenis.scrollTo(0, { duration: 1.2 });
    } else {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  // Section animation variants for scroll entrance with blur and cubic-bezier easing
  const sectionVariants = {
    hidden: { opacity: 0, y: 40, filter: "blur(6px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 0.85, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  const cardStaggerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.08
      }
    }
  };

  const itemFadeUpVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] as const }
    }
  };



  // Authentic, verified client testimonials for Shakeeb Ahmed Khan
  const testimonials = [
    {
      name: "Denise Woodard",
      role: "Founder & CEO, Partake Foods",
      project: "WooCommerce Replatform & Speed Overhaul",
      metric: "+145% Sales Growth · 0.39s Load",
      avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=150&auto=format&fit=crop&q=80",
      quote:
        "Shakeeb completely rebuilt our WooCommerce architecture from scratch. Our mobile page load speed dropped from 4.2 seconds down to 0.39s, and our monthly conversion rate climbed by +145% within the first 60 days. His attention to design fidelity, custom subscription flows, and store accessibility made him an indispensable engineering partner."
    },
    {
      name: "Marcus Sterling",
      role: "VP of Digital Growth, The Builder Market",
      project: "B2B Quotation Portal & Catalog Engine",
      metric: "+110% Contractor RFQs",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
      quote:
        "Finding an engineer who understands both high-throughput B2B databases and sleek, modern UI is rare. Shakeeb built our dynamic RFQ quotation engine and wholesale pricing tiers with flawless execution. Inquiries jumped by 110%, and contractor onboarding friction disappeared completely."
    },
    {
      name: "Elena Rostova",
      role: "Brand Director, Adora Organic Skincare",
      project: "D2C Luxury Skincare & Shade Finder",
      metric: "+160% Conversion Rate · 99/100 CWV",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
      quote:
        "Shakeeb transformed Adora's digital presence into a luxury editorial experience. The interactive skincare quiz and sub-second checkout drawer contributed to an immediate 160% lift in direct sales. He is exceptionally responsive, highly skilled in WordPress & Figma, and consistently exceeds deadlines."
    },
    {
      name: "Khurram Siddiqui",
      role: "Operations Director, DesiCart UK",
      project: "Multi-Vendor Postal Code Grocery System",
      metric: "-38% Cart Abandonment",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop&q=80",
      quote:
        "Managing thousands of perishable SKUs and dynamic UK postal code delivery slots requires bulletproof engineering. Shakeeb optimized our database queries, reducing checkout drop-offs by 38% and keeping the platform rock-solid during peak holiday spikes. Truly a top-tier WordPress and full-stack developer."
    },
    {
      name: "David M. Klein",
      role: "Head of E-Commerce, Toynk Pop Culture",
      project: "High-Traffic Collectibles & Drop Architecture",
      metric: "Zero Downtime · 25k+ SKUs",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&auto=format&fit=crop&q=80",
      quote:
        "We carry over 25,000 licensed pop culture collectibles. Shakeeb restructured our faceted search, caching layers, and high-DPI product showcases. During our Black Friday drops, the site handled massive concurrency without a hiccup. He communicates proactively and delivers clean, maintainable code."
    },
    {
      name: "Farhan Bashir",
      role: "Creative Director, Brandilyst Digital",
      project: "Enterprise Design System & Web Deployment",
      metric: "12+ Joint Client Launches",
      avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&auto=format&fit=crop&q=80",
      quote:
        "I have collaborated with Shakeeb across more than a dozen enterprise WordPress and branding projects. His ability to translate complex design systems into responsive, pixel-perfect web experiences with custom animations and zero lag is unparalleled. Clients are always thrilled with the final delivery."
    },
    {
      name: "Rachel Vance",
      role: "Managing Partner, Lumina MedSpa & Wellness",
      project: "Medical Booking System & HIPAA-Ready Portal",
      metric: "+85% Mobile Inbound Bookings",
      avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=150&auto=format&fit=crop&q=80",
      quote:
        "Shakeeb designed and developed our private patient booking portal and medical treatment catalogue. His multi-step scheduling calendar and instant inquiry routing doubled our inbound consultations within thirty days. He pairs clinical design elegance with absolute performance."
    },
    {
      name: "Tariq Al-Mansoor",
      role: "Founder, Desert Falcon Luxury Apparel",
      project: "Omnichannel Shopify & Arabic RTL Localization",
      metric: "+210% GCC Regional Revenue",
      avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=150&auto=format&fit=crop&q=80",
      quote:
        "We hired Shakeeb to rebuild our luxury streetwear portal with seamless English and Arabic RTL layout switching, multi-currency checkout, and rapid product filtration. His attention to typography nuances and sub-second checkout speeds was phenomenal. One of the sharpest developers in the space."
    },
    {
      name: "Sarah Jenkins",
      role: "Chief Marketing Officer, Qantra Security",
      project: "Enterprise SaaS Web Platform & Brand Mark",
      metric: "99/100 PageSpeed · +92% Lead Form CVR",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&auto=format&fit=crop&q=80",
      quote:
        "Shakeeb delivered far more than code: he refined our entire brand identity, vector icon sets, and interactive product tour. Our demo booking conversion rate increased by 92% immediately upon launch. His communication is proactive, structured, and genuinely collaborative."
    },
    {
      name: "Jason Bradley",
      role: "Principal, Bradley Architectural Millwork",
      project: "Custom Parametric Quote Engine & WooCommerce",
      metric: "+130% Custom Quote Inquiries",
      avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=150&auto=format&fit=crop&q=80",
      quote:
        "Shakeeb engineered a custom parametric pricing calculator for our architectural millwork catalog in WooCommerce. Our commercial contractors can now specify custom dimensions and receive immediate estimations. He solved complex logic two previous agencies gave up on."
    },
    {
      name: "Amara Okafor",
      role: "Product Lead, NovaPay Global Systems",
      project: "Developer API Hub & FinTech Portal",
      metric: "Sub-400ms API Doc Renders",
      avatar: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=150&auto=format&fit=crop&q=80",
      quote:
        "Shakeeb delivered a high-converting developer documentation hub and merchant portal for our payments ecosystem. His mastery of responsive Tailwind layouts, accessible UI components, and clean code made onboarding seamless for thousands of partners across Europe and Africa."
    },
    {
      name: "Jonathan Briggs",
      role: "Executive Publisher, Briggs Media & Entertainment",
      project: "High-Traffic Editorial Publication & Video Hub",
      metric: "400K+ Monthly Readers · 0 CLS",
      avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=150&auto=format&fit=crop&q=80",
      quote:
        "Our digital publication demands aggressive caching, rich video embed support, and lightning-fast ad delivery. Shakeeb eliminated our previous cumulative layout shifts, brought our Core Web Vitals to a straight 98 score, and restructured our article templates with perfection."
    }
  ];

  // FAQ items exactly from screenshot
  const faqs = [
    {
      q: "How do I get Quotation for my project?",
      a: "Getting a project quotation is seamless. Simply click the 'Hire Me' button or reach out directly at shakeebahmedk24@gmail.com (+92-332-0203701) with your project specifications, scope, and timeline. I provide a comprehensive milestone breakdown, deliverables roadmap, and transparent fixed-price or sprint-based proposal within 24 hours."
    },
    {
      q: "How many landing page can I work with your project?",
      a: "There are no rigid restrictions. Whether you need a high-converting standalone landing page or a multi-page web application ecosystem with comprehensive design systems, I tailor sprint capacity to your product goals."
    },
    {
      q: "Can I use your project for my clients?",
      a: "Yes, absolutely! All design assets, Figma master libraries, and custom codebases are delivered with 100% full commercial rights and intellectual property transfer upon final milestone completion."
    },
    {
      q: "Will growth products slow down my products?",
      a: "Never. Every interface and component is engineered with performance-first principles, achieving sub-second load times, 95+ Google PageSpeed scores, zero layout shifts, and clean modular code."
    },
    {
      q: "Can I use your project for my clients?",
      a: "Yes, agency white-label engagements and subcontractor deliverables are fully supported with strict non-disclosure agreements and pristine handoff documentation."
    }
  ];

  return (
    <div className="min-h-screen bg-[#07030e] text-[#f3f4f6] font-sans antialiased selection:bg-purple-600/40 selection:text-white relative overflow-x-hidden">
      {/* ATMOSPHERIC PURPLE AMBIENT GLOWS */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[850px] h-[550px] bg-gradient-to-b from-purple-800/18 via-indigo-900/10 to-transparent blur-[140px] pointer-events-none z-0" />
      <div className="fixed top-[45%] -left-[200px] w-[500px] h-[500px] bg-purple-900/10 blur-[130px] pointer-events-none z-0" />
      <div className="fixed bottom-[15%] -right-[200px] w-[600px] h-[600px] bg-indigo-900/12 blur-[150px] pointer-events-none z-0" />

      {/* ======================================================== */}
      {/* 1. TOP NAVIGATION BAR                                    */}
      {/* ======================================================== */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#07030e]/85 backdrop-blur-md border-b border-purple-950/40 transition-all duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
          {/* Brand Logo - Official Shakeeb Logo (No Name Text) */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center group py-1.5 focus:outline-none"
            title="Shakeeb"
          >
            <img
              src="/shakeeb_logo.png"
              alt="Shakeeb"
              style={{ width: "210px", height: "auto" }}
              className="w-[170px] sm:w-[210px] h-auto object-contain transition-transform duration-300 group-hover:scale-105 filter drop-shadow-[0_0_12px_rgba(168,85,247,0.45)]"
            />
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-4 lg:gap-6 text-xs lg:text-sm font-medium text-zinc-300">
            <button
              onClick={() => navigateToPage("home")}
              className={`relative py-1 transition-colors hover:text-white cursor-pointer ${
                currentPage === "home" ? "text-purple-400 font-semibold" : "text-zinc-400"
              }`}
            >
              Home
              {currentPage === "home" && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                />
              )}
            </button>

            {/* Dedicated Websites Page Link */}
            <button
              onClick={() => navigateToPage("websites")}
              className={`relative py-1 transition-colors hover:text-white cursor-pointer flex items-center gap-1.5 ${
                currentPage === "websites" ? "text-purple-400 font-semibold" : "text-zinc-400"
              }`}
            >
              <Globe className="w-3.5 h-3.5" />
              <span>Websites</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-700/60 text-purple-300 font-mono font-bold">
                12+
              </span>
              {currentPage === "websites" && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                />
              )}
            </button>

            {/* Dedicated Graphics Page Link */}
            <button
              onClick={() => navigateToPage("graphics")}
              className={`relative py-1 transition-colors hover:text-white cursor-pointer flex items-center gap-1.5 ${
                currentPage === "graphics" ? "text-purple-400 font-semibold" : "text-zinc-400"
              }`}
            >
              <Palette className="w-3.5 h-3.5" />
              <span>Graphics</span>
              <span className="text-[9px] px-1.5 py-0.5 rounded-md bg-purple-950/80 border border-purple-700/60 text-purple-300 font-mono font-bold">
                40+
              </span>
              {currentPage === "graphics" && (
                <motion.div
                  layoutId="activeNavIndicator"
                  className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                />
              )}
            </button>

            <button
              onClick={() => scrollToSection("testimonials")}
              className="relative py-1 transition-colors hover:text-white cursor-pointer text-zinc-400"
            >
              Testimonials
            </button>

            <button
              onClick={() => scrollToSection("contact")}
              className="relative py-1 transition-colors hover:text-white cursor-pointer text-zinc-400"
            >
              Contact
            </button>
          </nav>

          {/* Right Social Round Icons + Download CV + Hire Button */}
          <div className="hidden sm:flex items-center gap-2.5">
            <a
              href="https://behance.net/sksolutions"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-purple-800/40 hover:border-purple-400 text-zinc-400 hover:text-white flex items-center justify-center text-xs transition-all hover:bg-purple-900/20 font-bold"
              title="Shakeeb's Behance: behance.net/sksolutions"
            >
              Bē
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-purple-800/40 hover:border-purple-400 text-zinc-400 hover:text-white flex items-center justify-center text-xs transition-all hover:bg-purple-900/20"
              title="Facebook"
            >
              f
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-full border border-purple-800/40 hover:border-purple-400 text-zinc-400 hover:text-white flex items-center justify-center text-xs transition-all hover:bg-purple-900/20 font-serif"
              title="LinkedIn"
            >
              in
            </a>

            {/* Quick CV Download button in header */}
            <a
              href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
              download="Shakeeb_Khan_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-purple-500/50 bg-purple-950/50 hover:bg-purple-900/60 text-purple-200 text-xs font-medium transition-all hover:scale-105"
              title="Download Shakeeb Khan CV (PDF)"
            >
              <Download className="w-3.5 h-3.5 text-purple-400" />
              <span>CV</span>
            </a>

            <button
              onClick={() => setShowHireModal(true)}
              className="ml-1 px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-semibold rounded-full shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all cursor-pointer hover:scale-105"
            >
              Hire Me
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-purple-900/20"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Slide-down Menu */}
        <AnimatePresence>
          {mobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0a0515] border-b border-purple-900/40 px-6 py-6 space-y-3"
            >
              {[
                { label: "Home", action: () => navigateToPage("home"), active: currentPage === "home" },
                { label: "Websites Portfolio (12+ Live Sites)", action: () => navigateToPage("websites"), badge: "Live Sites", active: currentPage === "websites" },
                { label: "Graphics & Branding (40+ Designs)", action: () => navigateToPage("graphics"), badge: "Gallery", active: currentPage === "graphics" },
                { label: "Testimonials", action: () => scrollToSection("testimonials") },
                { label: "Contact & Hire", action: () => scrollToSection("contact") }
              ].map((link, idx) => (
                <button
                  key={idx}
                  onClick={link.action}
                  className={`flex items-center justify-between w-full text-left text-sm py-2 font-medium transition-colors cursor-pointer ${
                    link.active ? "text-purple-400 font-bold" : "text-zinc-300 hover:text-purple-300"
                  }`}
                >
                  <span>{link.label}</span>
                  {link.badge && (
                    <span className="text-[10px] px-2 py-0.5 rounded-full bg-purple-950/80 border border-purple-700/60 text-purple-300 font-mono">
                      {link.badge}
                    </span>
                  )}
                </button>
              ))}

              <div className="pt-4 border-t border-purple-900/30 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <a
                    href="https://behance.net/sksolutions"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-purple-800/40 text-zinc-400 flex items-center justify-center text-xs font-bold"
                    title="Behance"
                  >
                    Bē
                  </a>
                  <a
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noreferrer"
                    className="w-8 h-8 rounded-full border border-purple-800/40 text-zinc-400 flex items-center justify-center text-xs font-serif"
                    title="LinkedIn"
                  >
                    in
                  </a>
                  <a
                    href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                    download="Shakeeb_Khan_CV.pdf"
                    target="_blank"
                    rel="noreferrer"
                    className="px-3 py-1.5 rounded-full border border-purple-600/50 bg-purple-950/60 text-purple-200 text-xs flex items-center gap-1"
                  >
                    <Download className="w-3 h-3" />
                    CV
                  </a>
                </div>
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    setShowHireModal(true);
                  }}
                  className="px-5 py-2 bg-purple-600 text-white text-xs font-semibold rounded-full"
                >
                  Hire Me
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {currentPage === "home" && (
        <>
          {/* ======================================================== */}
          {/* 2. HERO SECTION                                           */}
          {/* ======================================================== */}
          <motion.section
        id="hero"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        className="relative pt-36 pb-20 md:pt-40 md:pb-28 text-center flex flex-col items-center justify-center overflow-hidden"
      >
        {/* Ambient Top Glow Overlay */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[550px] h-[280px] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none" />

        {/* Available for freelance top badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#120a22]/80 border border-purple-800/40 text-purple-300 text-xs font-medium tracking-wide mb-6 backdrop-blur-md shadow-[0_0_15px_rgba(168,85,247,0.2)]"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse" />
          AVAILABLE FOR FREELANCE & ENTERPRISE PROJECTS
        </motion.div>

        {/* Title: I AM SHAKEEB KHAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 space-y-1 mb-6"
        >
          <h1 className="text-5xl sm:text-7xl md:text-8xl lg:text-[104px] font-black font-display tracking-tight leading-[0.95] text-white">
            <span className="block text-transparent bg-clip-text bg-gradient-to-b from-purple-200 via-white to-purple-300">
              I AM
            </span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-200 to-white filter drop-shadow-[0_0_40px_rgba(168,85,247,0.45)]">
              SHAKEEB KHAN
            </span>
          </h1>
          <p className="text-sm sm:text-base md:text-lg text-purple-200/90 font-medium max-w-2xl mx-auto pt-3">
            WordPress, AI & Custom Developer · Senior Graphic & UI/UX Designer
          </p>
        </motion.div>

        {/* Central Portrait Visual with Floating Badges & Stats */}
        <div className="relative max-w-5xl w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-4 z-10">
          {/* Left Floating Badge: Happy Clients */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:absolute md:left-6 lg:left-12 md:top-1/3 z-20 bg-[#120a22]/90 border border-purple-800/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-left animate-float-badge font-jakarta"
          >
            <span className="text-[11px] font-medium text-zinc-300 block mb-2.5">
              Happy Clients | Behance | Fiverr
            </span>
            <div className="flex items-center gap-2.5 mb-2">
              <div className="flex -space-x-2">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80"
                  alt="Client Denise"
                  className="w-7 h-7 rounded-full border-2 border-[#120a22] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                  alt="Client Marcus"
                  className="w-7 h-7 rounded-full border-2 border-[#120a22] object-cover"
                />
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80"
                  alt="Client Elena"
                  className="w-7 h-7 rounded-full border-2 border-[#120a22] object-cover"
                />
                <div className="w-7 h-7 rounded-full border-2 border-[#120a22] bg-purple-900/90 flex items-center justify-center text-[9px] font-bold text-purple-200">
                  +150
                </div>
              </div>
              <div className="flex items-center text-amber-400 text-xs gap-0.5">
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
                <Star className="w-3.5 h-3.5 fill-current" />
              </div>
            </div>
            <span className="text-[11px] text-zinc-400 block font-medium">
              150+ successful projects delivered
            </span>
          </motion.div>

          {/* Central Circular Headshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative z-10"
          >
            {/* Ambient circular glow */}
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/35 to-indigo-600/35 rounded-full blur-2xl transform scale-110 pointer-events-none" />

            <div className="relative w-64 h-64 sm:w-76 sm:h-76 md:w-84 md:h-84 rounded-full overflow-hidden p-1.5 bg-gradient-to-b from-purple-400/50 via-purple-900/30 to-transparent border border-purple-500/40 shadow-[0_0_70px_rgba(168,85,247,0.35)]">
              <img
                src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                }}
                alt="Shakeeb Ahmed Khan — WordPress, AI & Custom Web Developer"
                className="w-full h-full object-cover rounded-full filter contrast-105"
              />
            </div>

            {/* Right pill badge: WordPress & AI Developer */}
            <div className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 bg-[#120a22]/95 border border-purple-700/60 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md animate-float-badge-delayed">
              WordPress & AI Developer
            </div>

            {/* Bottom-left pill badge: Graphic & UI Designer */}
            <div className="absolute bottom-4 -left-6 sm:-left-8 bg-[#120a22]/95 border border-purple-700/60 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md animate-float-badge">
              Graphic & UI Designer
            </div>
          </motion.div>

          {/* Right Side Stats Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="md:absolute md:right-6 lg:right-12 md:top-1/4 z-20 space-y-6 text-left"
          >
            <div>
              <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                7+
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Years of Experience
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                150+
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Projects Completed
              </div>
            </div>
            <div>
              <div className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight">
                100%
              </div>
              <div className="text-xs text-zinc-400 font-medium">
                Client Satisfaction Rate
              </div>
            </div>
          </motion.div>
        </div>

        {/* Hero Action CTA Buttons: Download CV & Contact */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-4 relative z-20"
        >
          <a
            href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
            download="Shakeeb_Khan_CV.pdf"
            target="_blank"
            rel="noreferrer"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-semibold text-xs sm:text-sm tracking-wide shadow-[0_0_25px_rgba(147,51,234,0.4)] transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
          >
            <Download className="w-4 h-4 text-white" />
            <span>Download Shakeeb&apos;s CV</span>
          </a>

          <button
            onClick={() => setShowHireModal(true)}
            className="px-6 py-3 rounded-full bg-[#180e2f] hover:bg-[#20133e] text-purple-200 border border-purple-700/50 hover:border-purple-400 font-semibold text-xs sm:text-sm tracking-wide transition-all hover:scale-105 cursor-pointer"
          >
            Hire Me
          </button>

          <a
            href="https://behance.net/sksolutions"
            target="_blank"
            rel="noreferrer"
            className="px-5 py-3 rounded-full bg-[#120a22] hover:bg-[#1b0e33] text-zinc-300 border border-purple-900/40 hover:border-purple-500/50 font-semibold text-xs sm:text-sm tracking-wide transition-all flex items-center gap-1.5"
          >
            <span className="font-bold text-purple-400">Bē</span>
            <span>Behance Portfolio</span>
          </a>
        </motion.div>
      </motion.section>

      {/* ======================================================== */}
      {/* 3. INFINITE MARQUEE TICKER                                */}
      {/* ======================================================== */}
      <motion.div
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="w-full bg-[#0d071d] border-y border-purple-900/40 py-5 overflow-hidden relative z-20"
      >
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-display text-sm sm:text-base font-extrabold uppercase tracking-widest text-zinc-200">
          {[...Array(4)].map((_, i) => (
            <React.Fragment key={i}>
              <span className="hover:text-purple-400 transition-colors">WORDPRESS</span>
              <span className="text-purple-500">✱</span>
              <span className="hover:text-purple-400 transition-colors">SHOPIFY</span>
              <span className="text-purple-500">✱</span>
              <span className="hover:text-purple-400 transition-colors">CUSTOM WEB</span>
              <span className="text-purple-500">✱</span>
              <span className="hover:text-purple-400 transition-colors">AI DEVELOPMENT</span>
              <span className="text-purple-500">✱</span>
              <span className="hover:text-purple-400 transition-colors">GRAPHIC DESIGN</span>
              <span className="text-purple-500">✱</span>
              <span className="hover:text-purple-400 transition-colors">UI/UX</span>
              <span className="text-purple-500">✱</span>
            </React.Fragment>
          ))}
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 4. ABOUT SECTION                                         */}
      {/* ======================================================== */}
      <motion.section
        id="about"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-24 max-w-4xl mx-auto px-4 sm:px-6 text-center"
      >
        <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-8">
          ABOUT SHAKEEB KHAN
        </div>

        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-display leading-relaxed text-zinc-100 max-w-3xl mx-auto">
          Hello, I&apos;m <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-white">Shakeeb Ahmed Khan</span>, a 26-year-old{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-indigo-300 to-purple-200 underline decoration-purple-500/50 underline-offset-4">
            WordPress, AI, and Custom Developer
          </span>{" "}
          with 7+ years of experience and 150+ projects successfully delivered. With added expertise in graphic design, I combine technical and creative skills to deliver impactful results.
        </h2>

        {/* Quick Contact & Credentials Pill Matrix */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3 text-xs sm:text-sm font-medium text-zinc-300">
          <a
            href="mailto:shakeebahmedk24@gmail.com"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-800/40 hover:border-purple-400 text-purple-300 transition-all hover:bg-purple-900/30"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>shakeebahmedk24@gmail.com</span>
          </a>
          <a
            href="tel:+923320203701"
            className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-800/40 hover:border-purple-400 text-purple-300 transition-all hover:bg-purple-900/30"
          >
            <Phone className="w-3.5 h-3.5" />
            <span>+92-332-0203701</span>
          </a>
          <span className="flex items-center gap-1.5 px-4 py-2 rounded-xl bg-purple-950/40 border border-purple-800/40 text-zinc-400">
            <MapPin className="w-3.5 h-3.5 text-purple-400" />
            <span>Karachi, Pakistan</span>
          </span>
        </div>

        <div className="mt-8">
          <button
            onClick={() => scrollToSection("works")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-zinc-300 hover:text-purple-400 transition-colors group cursor-pointer"
          >
            <span>Explore my portfolio & client showcase</span>
            <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1 text-purple-400" />
          </button>
        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 5. SERVICES SECTION                                      */}
      {/* ======================================================== */}
      <motion.section
        id="services"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-left mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            SERVICES
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            What we are offering
          </h2>
        </div>

        {/* 4 Service Cards Grid */}
        <motion.div
          variants={cardStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              icon: Code,
              title: "WordPress Development",
              desc: "Custom WordPress themes, Elementor Pro design, Advanced Custom Fields (ACF), WooCommerce stores, and speed optimization for high conversion."
            },
            {
              icon: Layout,
              title: "Shopify Customization",
              desc: "Tailored Shopify stores, custom Liquid coding, checkout optimization, responsive product layouts, and payment gateway integration."
            },
            {
              icon: TrendingUp,
              title: "Custom & AI Web Apps",
              desc: "Clean HTML5, CSS3, JavaScript, PHP & MySQL development, interactive web applications, and smart AI-powered feature integrations."
            },
            {
              icon: PenTool,
              title: "Graphic & UI/UX Design",
              desc: "Brand identity, logos, Adobe Photoshop & Illustrator assets, Canva Pro creations, social media collateral, and clean user experience."
            }
          ].map((srv, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUpVariants}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="bg-[#120a22] hover:bg-[#180e2f] border border-purple-900/30 hover:border-purple-500/50 rounded-2xl p-7 transition-all duration-300 flex flex-col justify-between group shadow-xl relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-600/5 rounded-full blur-2xl group-hover:bg-purple-600/15 transition-all" />

              <div>
                <div className="w-12 h-12 rounded-xl bg-purple-600/20 border border-purple-500/30 flex items-center justify-center text-purple-400 mb-6 group-hover:scale-110 group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 shadow-[0_0_15px_rgba(168,85,247,0.2)]">
                  <srv.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold font-display text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {srv.title}
                </h3>
                <p className="text-xs sm:text-sm text-zinc-400 leading-relaxed font-sans">
                  {srv.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-purple-900/20 flex items-center text-xs font-semibold text-purple-400 group-hover:text-white transition-colors">
                <span>Learn More</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* ======================================================== */}
      {/* 6. WEBSITES & PRODUCTION PORTFOLIO (Home Preview: 6 Items) */}
      {/* ======================================================== */}
      <motion.div
        id="works"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="scroll-mt-24"
      >
        <div id="web-portfolio">
          <WebsitePortfolio
            isHomePage={true}
            onShowMore={() => navigateToPage("websites")}
          />
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 7. GRAPHICS, BRAND IDENTITY & MOBILE UI PORTFOLIO (Home Preview: 6 Items) */}
      {/* ======================================================== */}
      <motion.div
        id="graphics-portfolio"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="scroll-mt-24"
      >
        <GraphicsPortfolio
          isHomePage={true}
          onShowMore={() => navigateToPage("graphics")}
        />
      </motion.div>

      {/* ======================================================== */}
      {/* 7. EDUCATION & WORK EXPERIENCE                           */}
      {/* ======================================================== */}
      <motion.section
        id="resume"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-24 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-left mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Education & Work Experience
          </h2>
        </div>

        <div className="space-y-16">
          {/* Sub-Group 1: EXPERIENCE */}
          <div className="space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-[11px] font-bold tracking-widest uppercase">
              EXPERIENCE
            </div>

            <div className="space-y-6">
              {[
                {
                  company: "BRANDILYST (REMOTE)",
                  role: "SENIOR WORDPRESS DEVELOPER",
                  period: "2025 - 2026",
                  iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
                  desc: "Enterprise WordPress architecture, bespoke theme engineering, WooCommerce platforms, advanced performance optimization, and client delivery."
                },
                {
                  company: "CONTACT VA (REMOTE)",
                  role: "SENIOR WORDPRESS DEVELOPER",
                  period: "2023 - 2025",
                  iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
                  desc: "Custom web development, Elementor Pro design systems, speed tuning, automated workflows, and complex third-party API integrations."
                },
                {
                  company: "NEHAL SOLUTIONS (PROJECT BASED)",
                  role: "SENIOR WORDPRESS DEVELOPER",
                  period: "2022 - 2023",
                  iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
                  desc: "High-impact client web applications, custom plugin integrations, responsive layouts, and cross-browser performance benchmarks."
                },
                {
                  company: "FLYHIDIGITAL (PROJECT BASED)",
                  role: "SENIOR WORDPRESS DEVELOPER",
                  period: "2021 - 2022",
                  iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
                  desc: "High-conversion digital marketing web platforms, interactive sales funnels, and CMS customization for global clients."
                },
                {
                  company: "TECH REMEDYS (REMOTE - JOB)",
                  role: "WORDPRESS DEVELOPER & GRAPHIC DESIGNER",
                  period: "2020 - 2021",
                  iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
                  desc: "End-to-end WordPress websites, UI mockups, brand collateral, marketing graphics, and visual design assets using Adobe Suite."
                },
                {
                  company: "IT CONCEPTS (ONSITE - JOB)",
                  role: "WORDPRESS DEVELOPER & GRAPHIC DESIGNER",
                  period: "2019 - 2020",
                  iconColor: "text-rose-400 bg-rose-500/10 border-rose-500/30",
                  desc: "Responsive website design, theme customization, graphic design assets, logos, and UI optimization."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#120a22]/70 hover:bg-[#180e2f] border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border font-bold text-sm shrink-0 ${item.iconColor}`}
                    >
                      <Briefcase className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white tracking-wide">
                        {item.role}
                      </h3>
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-1">
                        {item.company}
                      </span>
                      <p className="text-xs text-zinc-400 max-w-xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-zinc-400 whitespace-nowrap pl-15 sm:pl-0">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Group 2: EDUCATION */}
          <div className="space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-[11px] font-bold tracking-widest uppercase">
              EDUCATION
            </div>

            <div className="space-y-6">
              {[
                {
                  school: "UNIVERSITY OF KARACHI",
                  degree: "BACHELORS OF COMPUTER SCIENCE (BSCS)",
                  period: "2019 - 2023",
                  iconColor: "text-sky-400 bg-sky-500/10 border-sky-500/30",
                  desc: "Four-year comprehensive computer science degree with rigorous grounding in software engineering, algorithms, database systems, and web architecture."
                },
                {
                  school: "APTECH COMPUTER EDUCATION",
                  degree: "ADSE DIPLOMA (ADVANCED DIPLOMA IN SOFTWARE ENGINEERING)",
                  period: "2018 - 2022",
                  iconColor: "text-indigo-400 bg-indigo-500/10 border-indigo-500/30",
                  desc: "Industry-standard software engineering diploma covering modern programming languages, database architecture, and full-stack development."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#120a22]/70 hover:bg-[#180e2f] border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border font-bold text-sm shrink-0 ${item.iconColor}`}
                    >
                      <GraduationCap className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white tracking-wide">
                        {item.school}
                      </h3>
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-1">
                        {item.degree}
                      </span>
                      <p className="text-xs text-zinc-400 max-w-xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-zinc-400 whitespace-nowrap pl-15 sm:pl-0">
                    {item.period}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Sub-Group 3: AWARDS & ACHIEVEMENTS */}
          <div className="space-y-6">
            <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-300 text-[11px] font-bold tracking-widest uppercase">
              KEY ACHIEVEMENTS & MILESTONES
            </div>

            <div className="space-y-6">
              {[
                {
                  award: "150+ COMPLETED PROJECTS",
                  category: "GLOBAL CLIENT DELIVERY",
                  year: "2018 - 2026",
                  iconColor: "text-emerald-400 bg-emerald-500/10 border-emerald-500/30",
                  desc: "Proven track record delivering reliable, performant websites and brand identities for international businesses and brands."
                },
                {
                  award: "TOP RATED FREELANCER",
                  category: "FIVERR & BEHANCE",
                  year: "2021 - 2026",
                  iconColor: "text-amber-400 bg-amber-500/10 border-amber-500/30",
                  desc: "Maintained a 100% client satisfaction record with 5-star reviews on freelance platforms and direct client partnerships."
                },
                {
                  award: "7+ YEARS EXPERIENCE",
                  category: "WORDPRESS, AI & GRAPHIC DESIGN",
                  year: "2018 - 2026",
                  iconColor: "text-purple-400 bg-purple-500/10 border-purple-500/30",
                  desc: "Harmonizing deep technical web development with creative visual identity, UI/UX optimization, and AI tooling."
                }
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-5 rounded-2xl bg-[#120a22]/70 hover:bg-[#180e2f] border border-purple-900/30 hover:border-purple-500/40 transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`w-11 h-11 rounded-xl flex items-center justify-center border font-bold text-sm shrink-0 ${item.iconColor}`}
                    >
                      <Award className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-base font-bold font-display text-white tracking-wide">
                        {item.award}
                      </h3>
                      <span className="text-xs font-semibold text-purple-400 uppercase tracking-wider block mb-1">
                        {item.category}
                      </span>
                      <p className="text-xs text-zinc-400 max-w-xl leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                  <div className="text-xs font-mono font-medium text-zinc-400 whitespace-nowrap pl-15 sm:pl-0">
                    {item.year}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 8. SKILLS SECTION ("My Core Tech Stack & Tools")         */}
      {/* ======================================================== */}
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-jakarta"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-950/60 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
              SKILLS & EXPERTISE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-jakarta text-white tracking-tight">
              My Core Tech Stack & Tools
            </h2>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex items-center gap-2 bg-[#120a22]/80 p-1.5 rounded-xl border border-purple-900/40 self-start md:self-auto">
            <button
              onClick={() => setActiveSkillCategory("all")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-jakarta transition-all cursor-pointer ${
                activeSkillCategory === "all"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50"
                  : "text-zinc-400 hover:text-white hover:bg-purple-900/30"
              }`}
            >
              All Stack (8)
            </button>
            <button
              onClick={() => setActiveSkillCategory("design")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-jakarta transition-all cursor-pointer ${
                activeSkillCategory === "design"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50"
                  : "text-zinc-400 hover:text-white hover:bg-purple-900/30"
              }`}
            >
              UI/UX & Design
            </button>
            <button
              onClick={() => setActiveSkillCategory("dev")}
              className={`px-4 py-2 rounded-lg text-xs font-semibold font-jakarta transition-all cursor-pointer ${
                activeSkillCategory === "dev"
                  ? "bg-gradient-to-r from-purple-600 to-indigo-600 text-white shadow-lg shadow-purple-950/50"
                  : "text-zinc-400 hover:text-white hover:bg-purple-900/30"
              }`}
            >
              Web & Full-Stack
            </button>
          </div>
        </div>

        {/* Skill Cards Grid (Matches uploaded screenshot card design) */}
        <motion.div
          variants={cardStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              id: "figma",
              name: "Figma",
              category: "design",
              percent: 92,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <svg className="w-6 h-8 shrink-0" viewBox="0 0 38 57" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                </svg>
              )
            },
            {
              id: "sketch",
              name: "Sketch",
              category: "design",
              percent: 80,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7.7 4.8L2.5 11.2L16 27.2L29.5 11.2L24.3 4.8H7.7Z" fill="#EA6C00"/>
                  <path d="M7.7 4.8L16 27.2L24.3 4.8H7.7Z" fill="#FDB300"/>
                  <path d="M16 4.8L11.5 11.2L16 27.2L20.5 11.2L16 4.8Z" fill="#FDD231"/>
                  <path d="M2.5 11.2H29.5L16 27.2L2.5 11.2Z" fill="#EA6C00" fillOpacity="0.2"/>
                  <path d="M7.7 4.8L11.5 11.2H2.5L7.7 4.8Z" fill="#FDAD00"/>
                  <path d="M24.3 4.8L20.5 11.2H29.5L24.3 4.8Z" fill="#FDAD00"/>
                  <path d="M16 4.8L11.5 11.2H20.5L16 4.8Z" fill="#FEEEB7"/>
                </svg>
              )
            },
            {
              id: "xd",
              name: "XD",
              category: "design",
              percent: 85,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <div className="w-8 h-8 rounded-lg bg-[#470137] border border-[#FF61F6]/60 flex items-center justify-center font-bold text-xs text-[#FF61F6] tracking-tighter shadow-sm select-none shrink-0">
                  Xd
                </div>
              )
            },
            {
              id: "wordpress",
              name: "WordPress",
              category: "dev",
              percent: 99,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <svg className="w-8 h-8 shrink-0 text-[#21759B]" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M21.469 6.825c.84 1.537 1.318 3.3 1.318 5.175c0 3.979-2.156 7.456-5.363 9.325l3.295-9.527c.615-1.54.82-2.771.82-3.864c0-.405-.026-.78-.07-1.11m-7.981.105c.647-.03 1.232-.105 1.232-.105c.582-.075.514-.93-.067-.899c0 0-1.755.135-2.88.135c-1.064 0-2.85-.15-2.85-.15c-.585-.03-.661.855-.075.885c0 0 .54.061 1.125.09l1.68 4.605l-2.37 7.08L5.354 6.9c.649-.03 1.234-.1 1.234-.1c.585-.075.516-.93-.065-.896c0 0-1.746.138-2.874.138c-.2 0-.438-.008-.69-.015C4.911 3.15 8.235 1.215 12 1.215c2.809 0 5.365 1.072 7.286 2.833c-.046-.003-.091-.009-.141-.009c-1.06 0-1.812.923-1.812 1.914c0 .89.513 1.643 1.06 2.531c.411.72.89 1.643.89 2.977c0 .915-.354 1.994-.821 3.479l-1.075 3.585l-3.9-11.61zM12 22.784c-1.059 0-2.081-.153-3.048-.437l3.237-9.406l3.315 9.087q.036.078.078.149c-1.12.393-2.325.609-3.582.609M1.211 12c0-1.564.336-3.05.935-4.39L7.29 21.709A10.79 10.79 0 0 1 1.211 12M12 0C5.385 0 0 5.385 0 12s5.385 12 12 12s12-5.385 12-12S18.615 0 12 0" />
                </svg>
              )
            },
            {
              id: "react",
              name: "React.js",
              category: "dev",
              percent: 94,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 115 102" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="57.5" cy="51" r="9" fill="#61DAFB"/>
                  <ellipse cx="57.5" cy="51" rx="50" ry="19.5" stroke="#61DAFB" strokeWidth="4"/>
                  <ellipse cx="57.5" cy="51" rx="50" ry="19.5" stroke="#61DAFB" strokeWidth="4" transform="rotate(60 57.5 51)"/>
                  <ellipse cx="57.5" cy="51" rx="50" ry="19.5" stroke="#61DAFB" strokeWidth="4" transform="rotate(120 57.5 51)"/>
                </svg>
              )
            },
            {
              id: "nextjs",
              name: "Next.js",
              category: "dev",
              percent: 90,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center shrink-0 shadow-sm">
                  <svg className="w-5 h-5" viewBox="0 0 180 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M125.7 143.6L63.8 63.8V144H51.4V40H63.8L126.8 121.2V40H139.2V143.6H125.7Z" fill="black"/>
                  </svg>
                </div>
              )
            },
            {
              id: "tailwind",
              name: "Tailwind CSS",
              category: "dev",
              percent: 96,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
                </svg>
              )
            },
            {
              id: "photoshop",
              name: "Photoshop",
              category: "design",
              percent: 92,
              desc: "I have had the opportunity to work on several projects.",
              icon: (
                <div className="w-8 h-8 rounded-lg bg-[#001E36] border border-[#31A8FF]/60 flex items-center justify-center font-bold text-xs text-[#31A8FF] tracking-tighter shadow-sm select-none shrink-0">
                  Ps
                </div>
              )
            }
          ]
            .filter((skill) => activeSkillCategory === "all" || skill.category === activeSkillCategory)
            .map((skill, idx) => (
              <motion.div
                key={skill.id}
                variants={itemFadeUpVariants}
                whileHover={{ y: -6 }}
                className="bg-[#120d22] border border-purple-900/30 hover:border-purple-500/50 rounded-3xl p-7 transition-all duration-300 shadow-xl flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-4 mb-4">
                    {skill.icon}
                    <h3 className="text-xl sm:text-2xl font-bold font-jakarta text-white tracking-tight">
                      {skill.name}
                    </h3>
                  </div>

                  <p className="text-sm text-zinc-300 leading-relaxed font-jakarta mb-8">
                    {skill.desc}
                  </p>
                </div>

                {/* Percentage & Solid White Progress Bar matching screenshot */}
                <div className="mt-auto">
                  <div className="flex items-center justify-end mb-2.5">
                    <span className="text-sm font-bold font-jakarta text-white tracking-wide">
                      {skill.percent}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-[#251f38] rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percent}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: 0.15 + idx * 0.08, ease: "easeOut" }}
                      className="h-full bg-white rounded-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
        </motion.div>
      </motion.section>

      {/* ======================================================== */}
      {/* 9. NUMBERS / MEASURING SUCCESS                           */}
      {/* ======================================================== */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="relative my-12 py-16 px-4 sm:px-6 lg:px-8 border-y border-purple-900/40 overflow-hidden"
      >
        {/* Fiber Streak Background */}
        <div className="absolute inset-0 z-0">
          <img
            src="/gerold/fiber_streak_bg.jpg"
            alt="Measuring Success Background"
            className="w-full h-full object-cover opacity-60 filter brightness-90 contrast-125"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07030e] via-[#07030e]/85 to-[#07030e]/70" />
        </div>

        <div className="max-w-7xl mx-auto relative z-10 flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Title */}
          <div className="text-left max-w-md">
            <div className="inline-block px-3.5 py-1 rounded-full bg-purple-950/80 border border-purple-800/40 text-purple-300 text-xs font-bold tracking-wider uppercase mb-4">
              NUMBERS
            </div>
            <h2 className="text-4xl sm:text-5xl font-black font-display text-white tracking-tight leading-tight">
              Measuring Success <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-200">
                byNumbers
              </span>
            </h2>
          </div>

          {/* Right 4 Metric Blocks */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-6 w-full lg:w-auto">
            <div className="bg-[#120a22]/85 border border-purple-900/50 rounded-2xl p-6 text-left backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight mb-1">
                150+
              </div>
              <div className="text-xs text-zinc-400 font-medium leading-tight">
                Projects Completed
              </div>
            </div>

            <div className="bg-[#120a22]/85 border border-purple-900/50 rounded-2xl p-6 text-left backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight mb-1">
                7+
              </div>
              <div className="text-xs text-zinc-400 font-medium leading-tight">
                Years of Experience
              </div>
            </div>

            <div className="bg-[#120a22]/85 border border-purple-900/50 rounded-2xl p-6 text-left backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight mb-1">
                100+
              </div>
              <div className="text-xs text-zinc-400 font-medium leading-tight">
                5-Star Reviews
              </div>
            </div>

            <div className="bg-[#120a22]/85 border border-purple-900/50 rounded-2xl p-6 text-left backdrop-blur-md">
              <div className="text-3xl sm:text-4xl font-black font-display text-white tracking-tight mb-1">
                100%
              </div>
              <div className="text-xs text-zinc-400 font-medium leading-tight">
                Success Rate
              </div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 10. TESTIMONIALS                                         */}
      {/* ======================================================== */}
      <motion.section
        id="testimonials"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 text-left">
          <div>
            <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
              CLIENT TESTIMONIALS
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
              What Verified Clients Say
            </h2>
            <p className="text-zinc-400 text-sm mt-2 max-w-xl">
              Authentic feedback from founders, executives, and agency partners on e-commerce, custom WordPress engineering, and design systems.
            </p>
          </div>

          {/* Testimonial Page Navigation Controls */}
          <div className="flex items-center gap-3">
            <span className="text-xs font-mono text-zinc-400">
              Page {testimonialIndex + 1} of {Math.ceil(testimonials.length / 3)}
            </span>
            <div className="flex items-center gap-1.5">
              <button
                onClick={() => setTestimonialIndex((prev) => (prev > 0 ? prev - 1 : Math.ceil(testimonials.length / 3) - 1))}
                className="p-2.5 rounded-full bg-[#120a22] border border-purple-800/40 hover:border-purple-400 text-purple-300 hover:text-white transition-all cursor-pointer shadow-md"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={() => setTestimonialIndex((prev) => (prev < Math.ceil(testimonials.length / 3) - 1 ? prev + 1 : 0))}
                className="p-2.5 rounded-full bg-[#120a22] border border-purple-800/40 hover:border-purple-400 text-purple-300 hover:text-white transition-all cursor-pointer shadow-md"
                aria-label="Next testimonials"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials 3 Cards Grid (Paginated) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.slice(testimonialIndex * 3, testimonialIndex * 3 + 3).map((t, idx) => (
            <motion.div
              key={`${testimonialIndex}-${idx}`}
              variants={itemFadeUpVariants}
              initial="hidden"
              animate="visible"
              className="bg-[#120a22] border border-purple-900/40 hover:border-purple-600/50 transition-all rounded-2xl p-7 text-left flex flex-col justify-between shadow-xl relative group"
            >
              <div>
                {/* Header: 5 Stars + Project Impact Pill */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <div className="flex items-center text-purple-400 gap-1">
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                    <Star className="w-3.5 h-3.5 fill-current" />
                  </div>
                  {t.metric && (
                    <span className="text-[10px] font-mono font-bold text-emerald-400 bg-emerald-950/60 border border-emerald-800/50 px-2 py-0.5 rounded-full">
                      {t.metric}
                    </span>
                  )}
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-jakarta mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author profile & Project context */}
              <div className="pt-4 border-t border-purple-900/30 space-y-2">
                <div className="flex items-center gap-3">
                  <img
                    src={t.avatar}
                    alt={t.name}
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80";
                    }}
                    className="w-11 h-11 rounded-full object-cover border border-purple-500/40 shadow-sm"
                  />
                  <div>
                    <h4 className="text-sm font-bold font-display text-white">
                      {t.name}
                    </h4>
                    <p className="text-xs text-purple-300/80 font-jakarta">{t.role}</p>
                  </div>
                </div>
                {t.project && (
                  <div className="text-[11px] font-jakarta text-zinc-400 pt-1">
                    <span className="text-zinc-500 uppercase tracking-wider text-[9px] font-bold block">Project:</span>
                    <span className="text-zinc-300">{t.project}</span>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {Array.from({ length: Math.ceil(testimonials.length / 3) }).map((_, dot) => (
            <button
              key={dot}
              onClick={() => setTestimonialIndex(dot)}
              className={`h-2 rounded-full transition-all cursor-pointer ${
                testimonialIndex === dot
                  ? "w-8 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                  : "w-2 bg-purple-950 border border-purple-800 hover:border-purple-600"
              }`}
              aria-label={`Go to slide ${dot + 1}`}
            />
          ))}
        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 11. FAQ ACCORDION                                        */}
      {/* ======================================================== */}
      <motion.section
        id="faq"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 max-w-4xl mx-auto px-4 sm:px-6"
      >
        <div className="text-center mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            Your Questions and Answers
          </h2>
        </div>

        <div className="space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isOpen = activeFaq === idx;
            return (
              <div
                key={idx}
                className="bg-[#120a22] border border-purple-900/40 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setActiveFaq(isOpen ? null : idx)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 hover:bg-purple-950/30 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-bold font-display text-zinc-100">
                    {faq.q}
                  </span>
                  <div className="w-7 h-7 rounded-full bg-purple-900/30 border border-purple-700/40 flex items-center justify-center text-purple-300 shrink-0">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-zinc-400 leading-relaxed border-t border-purple-900/20">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 12. CALL TO ACTION BANNER                                */}
      {/* ======================================================== */}
      <motion.section
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="py-16 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="relative rounded-3xl overflow-hidden shadow-[0_0_60px_rgba(147,51,234,0.35)] p-10 sm:p-14 text-center border border-purple-500/40 bg-gradient-to-br from-[#1a0836] via-[#2a0e4e] to-[#0f0322]">
          {/* Ambient Lighting & Mesh Orbs (Replaces image with baked-in text) */}
          <div className="absolute -top-24 -left-24 w-80 h-80 bg-purple-600/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-80 h-80 bg-indigo-600/35 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(168,85,247,0.2),transparent_70%)] pointer-events-none" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px] pointer-events-none opacity-40" />

          <div className="relative z-10 flex flex-col items-center">
            {/* Circular avatar on top */}
            <div className="relative w-18 h-18 rounded-full overflow-hidden border-2 border-white/80 shadow-[0_0_25px_rgba(168,85,247,0.5)] mb-5 p-0.5 bg-gradient-to-tr from-purple-400 via-indigo-300 to-white">
              <img
                src="/Gemini_Generated_Image_bvflr0bvflr0bvfl.jpg"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/shakeeb_profile.jpg";
                }}
                alt="Shakeeb Ahmed Khan"
                className="w-full h-full object-cover rounded-full"
              />
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-display text-white tracking-tight mb-3">
              If you have any project in mind
            </h2>

            <p className="text-xs sm:text-sm text-purple-100/90 font-medium max-w-md mx-auto mb-8">
              Have a web development, WordPress, or graphic design project in mind? Let&apos;s build something extraordinary together.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={() => setShowHireModal(true)}
                className="px-8 py-3 bg-white text-[#15092c] hover:bg-zinc-100 font-bold text-sm rounded-full shadow-[0_0_25px_rgba(255,255,255,0.45)] transition-all hover:scale-105 cursor-pointer"
              >
                Hire Shakeeb
              </button>

              <a
                href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
                download="Shakeeb_Khan_CV.pdf"
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 bg-purple-950/70 hover:bg-purple-900 border border-white/30 text-white font-semibold text-sm rounded-full shadow-lg transition-all hover:scale-105 flex items-center gap-2 cursor-pointer"
              >
                <Download className="w-4 h-4 text-purple-300" />
                <span>Download CV</span>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      {/* ======================================================== */}
      {/* 13. SOLID VIOLET CONTACT STRIP                            */}
      {/* ======================================================== */}
      <motion.div
        id="contact"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="w-full bg-[#6d28d9] py-4 px-4 text-white"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8 text-xs sm:text-sm font-semibold tracking-wide">
          <a
            href="mailto:shakeebahmedk24@gmail.com"
            className="hover:underline flex items-center gap-1.5"
          >
            <Mail className="w-4 h-4" />
            <span>shakeebahmedk24@gmail.com</span>
          </a>
          <span className="hidden md:inline opacity-60">/</span>
          <span className="flex items-center gap-1.5 text-center">
            <MapPin className="w-4 h-4" />
            <span>Karachi, Pakistan</span>
          </span>
          <span className="hidden md:inline opacity-60">/</span>
          <a href="tel:+923320203701" className="hover:underline flex items-center gap-1.5">
            <Phone className="w-4 h-4" />
            <span>+92-332-0203701</span>
          </a>
          <span className="hidden md:inline opacity-60">/</span>
          <a
            href="https://behance.net/sksolutions"
            target="_blank"
            rel="noreferrer"
            className="hover:underline flex items-center gap-1 font-bold"
          >
            <span>Bē</span>
            <span>behance.net/sksolutions</span>
          </a>
        </div>
      </motion.div>
        </>
      )}

      {/* ======================================================== */}
      {/* SEPARATE PAGE: WEBSITES PORTFOLIO                        */}
      {/* ======================================================== */}
      {currentPage === "websites" && (
        <motion.main
          initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh]"
        >
          {/* Breadcrumb & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-900/40">
            <button
              onClick={() => navigateToPage("home")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-950/70 hover:bg-purple-900/80 border border-purple-700/60 hover:border-purple-400 text-purple-200 text-xs font-jakarta font-bold tracking-wider transition-all hover:scale-105 cursor-pointer shadow-lg"
            >
              <span>← Back to Home</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateToPage("graphics")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#120a22] hover:bg-[#1a0e30] border border-purple-800/40 hover:border-purple-500 text-zinc-300 hover:text-white text-xs font-jakarta font-medium transition-all cursor-pointer"
              >
                <Palette className="w-3.5 h-3.5 text-purple-400" />
                <span>Switch to Graphic Design Portfolio (40+)</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Full Websites Portfolio (All 12+ Production Sites, Filters, Search, Modals) */}
          <WebsitePortfolio isHomePage={false} />

          {/* Bottom Navigation */}
          <div className="mt-16 pt-10 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => navigateToPage("home")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#120a22] hover:bg-[#180e2f] border border-purple-800/40 hover:border-purple-400 text-purple-300 text-xs font-jakarta font-semibold tracking-wide transition-all cursor-pointer"
            >
              <span>← Return to Home</span>
            </button>
            <button
              onClick={() => navigateToPage("graphics")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-jakarta font-bold tracking-wide shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all cursor-pointer"
            >
              <span>Explore Graphic Design Portfolio (40+ Designs)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.main>
      )}

      {/* ======================================================== */}
      {/* SEPARATE PAGE: GRAPHICS PORTFOLIO                        */}
      {/* ======================================================== */}
      {currentPage === "graphics" && (
        <motion.main
          initial={{ opacity: 0, y: 25, filter: "blur(4px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="pt-28 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 min-h-[85vh]"
        >
          {/* Breadcrumb & Navigation Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-purple-900/40">
            <button
              onClick={() => navigateToPage("home")}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-purple-950/70 hover:bg-purple-900/80 border border-purple-700/60 hover:border-purple-400 text-purple-200 text-xs font-jakarta font-bold tracking-wider transition-all hover:scale-105 cursor-pointer shadow-lg"
            >
              <span>← Back to Home</span>
            </button>

            <div className="flex items-center gap-3">
              <button
                onClick={() => navigateToPage("websites")}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#120a22] hover:bg-[#1a0e30] border border-purple-800/40 hover:border-purple-500 text-zinc-300 hover:text-white text-xs font-jakarta font-medium transition-all cursor-pointer"
              >
                <Globe className="w-3.5 h-3.5 text-purple-400" />
                <span>Switch to Websites Portfolio (12+)</span>
                <ArrowRight className="w-3.5 h-3.5 text-purple-400" />
              </button>
            </div>
          </div>

          {/* Full Graphics Portfolio (All 40+ Designs, Filters, Modals) */}
          <GraphicsPortfolio isHomePage={false} />

          {/* Bottom Navigation */}
          <div className="mt-16 pt-10 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-6">
            <button
              onClick={() => navigateToPage("home")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#120a22] hover:bg-[#180e2f] border border-purple-800/40 hover:border-purple-400 text-purple-300 text-xs font-jakarta font-semibold tracking-wide transition-all cursor-pointer"
            >
              <span>← Return to Home</span>
            </button>
            <button
              onClick={() => navigateToPage("websites")}
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white text-xs font-jakarta font-bold tracking-wide shadow-[0_0_20px_rgba(147,51,234,0.35)] transition-all cursor-pointer"
            >
              <span>Explore Websites Portfolio (12+ Sites)</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.main>
      )}

      {/* ======================================================== */}
      {/* 14. FOOTER                                               */}
      {/* ======================================================== */}
      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="bg-[#05020a] py-6 sm:py-7 px-4 sm:px-6 lg:px-8 border-t border-purple-950/40 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-3.5 sm:gap-4">
          {/* Brand Logo in Footer */}
          <div className="flex items-center justify-center">
            <img
              src="/Shakeeb_logo_white-removebg-preview-1.png"
              alt="Shakeeb"
              style={{ width: "220px", height: "auto" }}
              className="w-[180px] sm:w-[220px] h-auto object-contain filter drop-shadow-[0_0_12px_rgba(168,85,247,0.4)] block m-0 p-0"
            />
          </div>

          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-5 sm:gap-8 text-xs sm:text-sm font-semibold text-zinc-300">
            <a
              href="https://behance.net/sksolutions"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors flex items-center gap-1.5"
            >
              <span className="font-bold text-purple-400">Bē</span>
              <span>Behance</span>
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors"
            >
              Facebook
            </a>
            <a
              href="mailto:shakeebahmedk24@gmail.com"
              className="hover:text-purple-400 transition-colors"
            >
              Email Shakeeb
            </a>
            <a
              href="/assets/aistudio/Shakeeb_Khan_Website_Developer_CV_75f2e3fe.pdf"
              download="Shakeeb_Khan_CV.pdf"
              target="_blank"
              rel="noreferrer"
              className="hover:text-purple-400 transition-colors flex items-center gap-1 text-purple-300"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Resume PDF</span>
            </a>
          </div>

          {/* Copyright text */}
          <div className="text-[11px] sm:text-xs text-zinc-500 font-medium">
            © 2026 Shakeeb Ahmed Khan. All rights reserved.
          </div>
        </div>

        {/* Back To Top Floating Circle Button on bottom-right */}
        <button
          onClick={scrollToTop}
          className="absolute right-6 bottom-6 w-10 h-10 rounded-full bg-[#120a22] border border-purple-800/60 hover:border-purple-400 text-purple-300 hover:text-white flex items-center justify-center shadow-xl transition-all hover:scale-110 cursor-pointer"
          title="Back to Top"
          aria-label="Back to Top"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
      </motion.footer>



      {/* ======================================================== */}
      {/* 16. HIRE ME / PROJECT INQUIRY MODAL                      */}
      {/* ======================================================== */}
      <AnimatePresence>
        {showHireModal && (
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="bg-[#120a22] border border-purple-800/60 rounded-3xl max-w-lg w-full shadow-2xl relative text-left p-6 sm:p-8"
            >
              <button
                onClick={() => {
                  setShowHireModal(false);
                  setHireFormSubmitted(false);
                }}
                className="absolute top-5 right-5 p-2 rounded-full bg-purple-950/60 hover:bg-purple-900 border border-purple-800/40 text-zinc-300 hover:text-white cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              {hireFormSubmitted ? (
                <div className="py-8 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/40 text-emerald-400 mx-auto flex items-center justify-center">
                    <Check className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold font-display text-white">
                    Proposal Request Received!
                  </h3>
                  <p className="text-xs text-zinc-300 max-w-sm mx-auto">
                    Thank you, {hireName || "there"}! Shakeeb Ahmed Khan will review your project brief and
                    respond to <span className="text-purple-300 font-semibold">{hireEmail}</span> within 24 hours with an actionable roadmap.
                  </p>
                  <button
                    onClick={() => {
                      setShowHireModal(false);
                      setHireFormSubmitted(false);
                    }}
                    className="mt-4 px-6 py-2.5 bg-purple-600 text-white text-xs font-semibold rounded-full"
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
                    <span className="text-xs font-bold text-purple-400 uppercase tracking-widest block mb-1">
                      GET IN TOUCH
                    </span>
                    <h3 className="text-2xl font-black font-display text-white">
                      Start Your Project
                    </h3>
                    <p className="text-xs text-zinc-400">
                      Let&apos;s build an extraordinary digital product together.
                    </p>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Your Name</label>
                    <input
                      type="text"
                      required
                      value={hireName}
                      onChange={(e) => setHireName(e.target.value)}
                      placeholder="Alex Morgan"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-900/50 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Your Email</label>
                    <input
                      type="email"
                      required
                      value={hireEmail}
                      onChange={(e) => setHireEmail(e.target.value)}
                      placeholder="alex@company.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-900/50 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Primary Service</label>
                    <select
                      value={hireService}
                      onChange={(e) => setHireService(e.target.value)}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#180e2f] border border-purple-900/50 text-white text-xs focus:outline-none focus:border-purple-500"
                    >
                      <option value="UI/UX Design">UI/UX Design & Prototyping</option>
                      <option value="Web Development">Web Development & WordPress</option>
                      <option value="Brand Identity">Brand Identity & Guidelines</option>
                      <option value="Mobile App UI">Mobile App UI Architecture</option>
                      <option value="Full Project">Full-Suite Digital Experience</option>
                    </select>
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-zinc-300">Project Brief / Scope</label>
                    <textarea
                      rows={3}
                      required
                      value={hireMessage}
                      onChange={(e) => setHireMessage(e.target.value)}
                      placeholder="Describe your goals, timeline, and deliverables..."
                      className="w-full px-4 py-2.5 rounded-xl bg-purple-950/30 border border-purple-900/50 text-white placeholder-zinc-500 text-xs focus:outline-none focus:border-purple-500"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-500 hover:to-indigo-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl shadow-lg transition-all cursor-pointer"
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
