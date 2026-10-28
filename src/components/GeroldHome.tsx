import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { WebsitePortfolio } from "./WebsitePortfolio";
import { GraphicsPortfolio } from "./GraphicsPortfolio";
import { Hero3DCanvas } from "./Hero3DCanvas";
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
  // Navigation & UI States
  const [activeNav, setActiveNav] = useState("services");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeFaq, setActiveFaq] = useState<number | null>(0); // First FAQ open by default like screenshot
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [showHireModal, setShowHireModal] = useState(false);
  const [hireFormSubmitted, setHireFormSubmitted] = useState(false);

  // Hire me form state
  const [hireName, setHireName] = useState("");
  const [hireEmail, setHireEmail] = useState("");
  const [hireService, setHireService] = useState("WordPress Development");
  const [hireMessage, setHireMessage] = useState("");

  // 3D Mouse Parallax State for Hero
  const [heroMouse, setHeroMouse] = useState({ x: 0, y: 0 });
  const handleHeroMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setHeroMouse({ x, y });
  };
  const handleHeroMouseLeave = () => {
    setHeroMouse({ x: 0, y: 0 });
  };

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    setActiveNav(id);
    setMobileMenuOpen(false);

    setTimeout(() => {
      const element = document.getElementById(id);
      if (element) {
        const yOffset = -80;
        const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }, 60);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Section animation variants for scroll entrance
  const sectionVariants = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const }
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



  // Testimonial items
  const testimonials = [
    {
      name: "Brandon Fraser",
      role: "Senior Software Dev, Cosmic Sport",
      avatar: "/gerold/author_1.jpg",
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business."
    },
    {
      name: "Tim Bailey",
      role: "SEO Specialist, Theme Junction",
      avatar: "/gerold/author_2.jpg",
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business."
    },
    {
      name: "Brandon Fraser",
      role: "SEO Specialist, Theme Junction",
      avatar: "/gerold/author_3.jpg",
      quote:
        "Taylor is a professional Designer he really helps my business by providing value to my business. Taylor is a professional Designer he really helps my business by providing value to my business."
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
          {/* Brand Logo - Swirl Monogram */}
          <a
            href="#hero"
            onClick={(e) => {
              e.preventDefault();
              scrollToTop();
            }}
            className="flex items-center gap-3 group"
          >
            <div className="w-10 h-10 rounded-full flex items-center justify-center transition-transform duration-300 group-hover:scale-105 bg-gradient-to-tr from-purple-700 to-indigo-600 p-0.5 shadow-[0_0_15px_rgba(168,85,247,0.4)]">
              <div className="w-full h-full bg-[#0d071d] rounded-full flex items-center justify-center text-purple-300 font-bold font-display text-base group-hover:text-white">
                S
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-bold font-display tracking-tight text-white group-hover:text-purple-300 transition-colors leading-none">
                Shakeeb
              </span>
              <span className="text-[10px] text-purple-400 tracking-wider font-mono uppercase mt-0.5">
                Developer & Designer
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav className="hidden md:flex items-center gap-5 lg:gap-7 text-xs lg:text-sm font-medium text-zinc-300">
            {[
              { id: "services", label: "Services" },
              { id: "works", label: "Works" },
              { id: "web-portfolio", label: "Websites" },
              { id: "graphics-portfolio", label: "Graphics" },
              { id: "testimonials", label: "Testimonials" },
              { id: "contact", label: "Contact" }
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`relative py-1 transition-colors hover:text-white cursor-pointer ${
                  activeNav === link.id ? "text-purple-400 font-semibold" : "text-zinc-400"
                }`}
              >
                {link.label}
                {activeNav === link.id && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
                  />
                )}
              </button>
            ))}
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
              className="md:hidden bg-[#0a0515] border-b border-purple-900/40 px-6 py-6 space-y-4"
            >
              {[
                { id: "services", label: "Services" },
                { id: "works", label: "Works (Case Studies)" },
                { id: "web-portfolio", label: "Websites Portfolio" },
                { id: "graphics-portfolio", label: "Graphics & Branding" },
                { id: "testimonials", label: "Testimonials" },
                { id: "contact", label: "Contact" }
              ].map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="block w-full text-left text-base text-zinc-300 hover:text-purple-400 py-1 font-medium"
                >
                  {link.label}
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

      {/* ======================================================== */}
      {/* 2. HERO SECTION WITH 3D UNIVERSE & PARALLAX              */}
      {/* ======================================================== */}
      <motion.section
        id="hero"
        variants={sectionVariants}
        initial="hidden"
        animate="visible"
        onMouseMove={handleHeroMouseMove}
        onMouseLeave={handleHeroMouseLeave}
        className="relative pt-36 pb-24 md:pt-40 md:pb-32 text-center flex flex-col items-center justify-center overflow-hidden min-h-[92vh]"
      >
        {/* Interactive Three.js 3D Universe Backdrop */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-auto">
          <Hero3DCanvas />
        </div>

        {/* Ambient Top Glow Overlay */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-purple-600/10 rounded-full blur-[140px] pointer-events-none z-0" />

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

        {/* Massive Giant Title: I AM SHAKEEB KHAN */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="relative z-10 space-y-1 mb-6 pointer-events-none"
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

        {/* Central Portrait Visual with 3D Holographic Orbit & Surrounding Badges */}
        <div className="relative max-w-5xl w-full mx-auto px-4 flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 my-4 z-10">
          {/* Left Floating Badge: Happy Clients */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              transform: `translate3d(${heroMouse.x * -24}px, ${heroMouse.y * -24}px, 0)`,
              transition: "transform 0.15s ease-out"
            }}
            className="md:absolute md:left-6 lg:left-12 md:top-1/3 z-20 bg-[#120a22]/90 border border-purple-800/40 rounded-2xl p-4 shadow-2xl backdrop-blur-md text-left animate-float-badge"
          >
            <span className="text-[11px] font-medium text-zinc-300 block mb-2.5">
              Happy Clients | Behance | Fiverr
            </span>
            <div className="flex items-center gap-2 mb-2">
              <div className="flex -space-x-2">
                <img
                  src="/gerold/author_1.jpg"
                  alt="Client"
                  className="w-7 h-7 rounded-full border-2 border-[#120a22] object-cover"
                />
                <img
                  src="/gerold/author_2.jpg"
                  alt="Client"
                  className="w-7 h-7 rounded-full border-2 border-[#120a22] object-cover"
                />
                <img
                  src="/gerold/author_3.jpg"
                  alt="Client"
                  className="w-7 h-7 rounded-full border-2 border-[#120a22] object-cover"
                />
              </div>
              <div className="flex items-center text-amber-400 text-xs">
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

          {/* Central Circular Headshot with 3D Holographic Tilt */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            style={{
              transform: `perspective(1000px) rotateY(${heroMouse.x * 22}deg) rotateX(${-heroMouse.y * 22}deg)`,
              transition: "transform 0.12s ease-out"
            }}
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

            {/* Right pill badge: WordPress & AI Developer with parallax */}
            <div
              style={{
                transform: `translate3d(${heroMouse.x * 16}px, ${heroMouse.y * 16}px, 0)`,
                transition: "transform 0.15s ease-out"
              }}
              className="absolute top-1/2 -right-6 sm:-right-10 -translate-y-1/2 bg-[#120a22]/95 border border-purple-700/60 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md animate-float-badge-delayed"
            >
              WordPress & AI Developer
            </div>

            {/* Bottom-left pill badge: Graphic & UI Designer with parallax */}
            <div
              style={{
                transform: `translate3d(${heroMouse.x * -16}px, ${heroMouse.y * -16}px, 0)`,
                transition: "transform 0.15s ease-out"
              }}
              className="absolute bottom-4 -left-6 sm:-left-8 bg-[#120a22]/95 border border-purple-700/60 rounded-full px-4 py-1.5 text-xs font-semibold text-white shadow-2xl backdrop-blur-md animate-float-badge"
            >
              Graphic & UI Designer
            </div>
          </motion.div>

          {/* Right Side Stats Stack */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            style={{
              transform: `translate3d(${heroMouse.x * 24}px, ${heroMouse.y * 24}px, 0)`,
              transition: "transform 0.15s ease-out"
            }}
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
      {/* 6. WEBSITES & PRODUCTION PORTFOLIO                       */}
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
          <WebsitePortfolio isHomePage={false} />
        </div>
      </motion.div>

      {/* ======================================================== */}
      {/* 7. GRAPHICS, BRAND IDENTITY & MOBILE UI PORTFOLIO        */}
      {/* ======================================================== */}
      <motion.div
        id="graphics-portfolio"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-60px" }}
        className="scroll-mt-24"
      >
        <GraphicsPortfolio isHomePage={false} />
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
      {/* 8. SKILLS SECTION ("My Favourite Stakes")                */}
      {/* ======================================================== */}
      <motion.section
        id="skills"
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-80px" }}
        className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="text-left mb-12">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            SKILLS & EXPERTISE
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            My Core Tech Stack & Tools
          </h2>
        </div>

        {/* 4 Interactive Skill Cards with Animated Progress Bars */}
        <motion.div
          variants={cardStaggerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            {
              name: "WordPress & Elementor",
              percent: 98,
              iconBg: "bg-sky-500/10 border-sky-500/30 text-sky-400",
              desc: "Deep expertise in custom themes, Elementor Pro design systems, WooCommerce, and ACF."
            },
            {
              name: "Shopify Customization",
              percent: 90,
              iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
              desc: "Bespoke store setups, Liquid theme modifications, checkout enhancements, and payment setups."
            },
            {
              name: "HTML, CSS, JS & PHP",
              percent: 95,
              iconBg: "bg-purple-500/10 border-purple-500/30 text-purple-400",
              desc: "Semantic clean code, responsive design, modern JavaScript, and high-performance PHP backend."
            },
            {
              name: "Graphic & UI/UX Design",
              percent: 92,
              iconBg: "bg-rose-500/10 border-rose-500/30 text-rose-400",
              desc: "Adobe Photoshop, Illustrator & Canva Pro for distinctive brand identities and visual systems."
            }
          ].map((skill, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUpVariants}
              whileHover={{ y: -5 }}
              className="bg-[#120a22] border border-purple-900/30 hover:border-purple-500/50 rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`w-9 h-9 rounded-lg flex items-center justify-center font-bold text-xs border ${skill.iconBg}`}
                  >
                    {skill.name[0]}
                  </div>
                  <h3 className="text-lg font-bold font-display text-white">
                    {skill.name}
                  </h3>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-sans mb-6">
                  {skill.desc}
                </p>
              </div>

              {/* Animated Progress Bar */}
              <div>
                <div className="flex items-center justify-end text-xs font-mono font-bold text-white mb-2">
                  <span>{skill.percent}%</span>
                </div>
                <div className="w-full h-1.5 bg-purple-950/80 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.percent}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: 0.2 + idx * 0.1, ease: "easeOut" }}
                    className="h-full bg-gradient-to-r from-purple-500 to-indigo-400 rounded-full"
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
        <div className="text-left mb-14">
          <div className="inline-block px-4 py-1 rounded-full bg-purple-950/50 border border-purple-800/40 text-purple-400 text-xs font-semibold tracking-wider uppercase mb-3">
            TESTIMONIAL
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold font-display text-white tracking-tight">
            What Clients Are Saying
          </h2>
        </div>

        {/* Testimonials 3 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              variants={itemFadeUpVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="bg-[#120a22] border border-purple-900/40 rounded-2xl p-7 text-left flex flex-col justify-between shadow-xl relative"
            >
              <div>
                {/* 5 Stars */}
                <div className="flex items-center text-purple-400 mb-4 gap-1">
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                  <Star className="w-3.5 h-3.5 fill-current" />
                </div>

                <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed font-sans mb-8">
                  &ldquo;{t.quote}&rdquo;
                </p>
              </div>

              {/* Author profile */}
              <div className="flex items-center gap-3 pt-4 border-t border-purple-900/20">
                <img
                  src={t.avatar}
                  alt={t.name}
                  className="w-10 h-10 rounded-full object-cover border border-purple-700/40"
                />
                <div>
                  <h4 className="text-sm font-bold font-display text-white">
                    {t.name}
                  </h4>
                  <p className="text-xs text-zinc-400">{t.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pagination Dots matching screenshot */}
        <div className="flex items-center justify-center gap-2 mt-10">
          {[0, 1, 2].map((dot) => (
            <button
              key={dot}
              onClick={() => setTestimonialIndex(dot)}
              className={`w-2 h-2 rounded-full transition-all cursor-pointer ${
                testimonialIndex === dot
                  ? "w-6 bg-purple-500 shadow-[0_0_8px_rgba(168,85,247,0.8)]"
                  : "bg-purple-950 border border-purple-800"
              }`}
              aria-label={`Slide ${dot + 1}`}
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

      {/* ======================================================== */}
      {/* 14. FOOTER                                               */}
      {/* ======================================================== */}
      <motion.footer
        variants={sectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-40px" }}
        className="bg-[#05020a] py-14 px-4 sm:px-6 lg:px-8 border-t border-purple-950/40 relative"
      >
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-8">
          {/* Social Links Row */}
          <div className="flex flex-wrap items-center justify-center gap-6 sm:gap-10 text-sm font-semibold text-zinc-300">
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
          <div className="text-xs text-zinc-500 font-medium">
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
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
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
