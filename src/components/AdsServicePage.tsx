import React from "react";
import { motion } from "motion/react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Check,
  Layers,
  Megaphone,
  MousePointerClick,
  Search,
  Star,
  Target,
  TrendingUp
} from "lucide-react";

interface AdsServicePageProps {
  onBackHome: () => void;
  onOpenHire: (serviceTitle: string, prefillBrief?: string) => void;
  onNavigateWebsites: () => void;
  onNavigateHealthChecker: () => void;
}

const GOOGLE_ADS_ITEMS = [
  "High-intent Search & exact-match buyer keyword campaigns",
  "Google Shopping & Merchant Center feed optimization for WooCommerce / Shopify",
  "Performance Max campaigns with strict negative keyword & placement guardrails",
  "GA4, Google Tag Manager & Enhanced Conversions tracking setup",
  "Landing page speed & Quality Score alignment to cut cost-per-click"
];

const META_ADS_ITEMS = [
  "Full-funnel Facebook & Instagram prospecting, retargeting & Advantage+ campaigns",
  "Custom static, carousel & short-form creative variants designed in-house",
  "Meta Pixel + Conversions API (CAPI) server deduplication for clean attribution",
  "Warm audience segmentation, lookalike scaling & dynamic product catalogs",
  "Clear weekly reporting focused on CPA, ROAS & booked revenue — not vanity clicks"
];

const EXECUTION_PILLARS = [
  {
    num: "01.",
    icon: Target,
    title: "Tracking & Attribution First",
    desc: "Before spending a dollar, I audit and configure GA4, Google Enhanced Conversions, and Meta Pixel + Conversions API so every lead, call, and checkout fires accurately."
  },
  {
    num: "02.",
    icon: MousePointerClick,
    title: "High-Converting Ad Creative",
    desc: "Because I also handle graphic design and UI in-house, your Meta visuals, ad copy, and Google responsive search headlines feel cohesive and built to stop thumbs."
  },
  {
    num: "03.",
    icon: TrendingUp,
    title: "Fast Landing Pages Included",
    desc: "Paid traffic dies on slow sites. I pair your Google and Meta campaigns with sub-second WordPress, Shopify, or React landing pages tuned for Quality Score and checkout speed."
  },
  {
    num: "04.",
    icon: BarChart3,
    title: "Weekly Pruning & Scaling",
    desc: "No set-and-forget agency retainers. Weekly search-term sculpting, creative fatigue swaps, bid refinements, and plain-English Loom/PDF performance summaries."
  }
];

export function AdsServicePage({
  onBackHome,
  onOpenHire,
  onNavigateWebsites,
  onNavigateHealthChecker
}: AdsServicePageProps) {
  return (
    <main className="min-h-[85vh] overflow-x-clip">
      {/* ======================================================== */}
      {/* ARCHITECTURAL HERO (#2C1156 Grid matching subpages)      */}
      {/* ======================================================== */}
      <section className="bg-work-hero-grid text-white pt-24 sm:pt-28 pb-16 sm:pb-24 relative overflow-x-clip border-b border-purple-400/20">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 relative z-10 space-y-10 sm:space-y-12">
          {/* Subpage Quick Navigation Strip */}
          <div className="flex flex-wrap items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBackHome}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-[#120a22]/75 hover:bg-[#180e2f] border border-purple-300/30 text-white text-xs font-bold tracking-wide transition-colors cursor-pointer whitespace-nowrap"
            >
              <span>← Back to Home</span>
            </button>

            <button
              type="button"
              onClick={onNavigateHealthChecker}
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold tracking-wide transition-colors cursor-pointer shadow-lg whitespace-nowrap"
            >
              <span>Run Free Landing Page Audit</span>
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
                PAID GROWTH · GOOGLE ADS &amp; META ADS
              </span>

              <div className="inline-block relative">
                <h1 className="font-display text-5xl sm:text-[96px] lg:text-[118px] font-black uppercase tracking-tight leading-[0.86] text-white">
                  GOOGLE &amp; META ADS
                </h1>
                <svg
                  viewBox="0 0 360 22"
                  fill="none"
                  className="w-[62%] ml-auto mt-2 text-[#e9d5ff]"
                  aria-hidden="true"
                >
                  <motion.path
                    d="M4 16C110 4 245 4 356 13"
                    stroke="currentColor"
                    strokeWidth="6"
                    strokeLinecap="round"
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 0.65, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
                  />
                </svg>
              </div>

              <p className="text-sm sm:text-lg text-purple-100/90 max-w-2xl leading-relaxed">
                Targeted Google Search, Shopping &amp; Performance Max campaigns paired with scroll-stopping Meta (Facebook &amp; Instagram) ad creative — connected directly to fast landing pages and clean server-side conversion tracking.
              </p>

              <div className="flex flex-wrap items-center gap-3 pt-1">
                <button
                  type="button"
                  onClick={() =>
                    onOpenHire(
                      "Google Ads & Meta Ads Management",
                      "Hi Shakeeb, I'd like help launching/optimizing our Google Ads & Meta Ads campaigns."
                    )
                  }
                  className="px-6 sm:px-7 py-3.5 bg-white hover:bg-[#e9d5ff] text-[#120a22] text-xs sm:text-sm font-bold rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap shadow-xl"
                >
                  <span>Request Free Ads Audit</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  type="button"
                  onClick={onNavigateWebsites}
                  className="px-6 sm:px-7 py-3.5 bg-white/10 hover:bg-white/20 border border-white/30 text-white text-xs sm:text-sm font-semibold rounded-full inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
                >
                  <span>Inspect Converting Sites</span>
                </button>
              </div>
            </motion.div>

            {/* Right Tilted White Proof Card */}
            <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end py-4">
              <motion.div
                initial={{ opacity: 0, y: 20, rotate: 6, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, rotate: 2, scale: 1 }}
                whileHover={{ rotate: 0, y: -4 }}
                transition={{ type: "spring", stiffness: 240, damping: 18 }}
                className="relative z-10 w-full max-w-[345px] bg-white text-[#120a22] rounded-3xl p-7 sm:p-8 shadow-[0_28px_70px_rgba(7,3,14,0.55)] text-left"
              >
                <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-zinc-500 block">
                  PAID ACQUISITION
                </span>
                <div className="font-display text-5xl sm:text-6xl font-black text-[#6d28d9] leading-none mt-2">
                  FULL FUNNEL
                </div>
                <div className="flex items-center gap-1 text-amber-400 mt-3">
                  {[...Array(5)].map((_, s) => (
                    <Star key={s} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-zinc-600 leading-relaxed mt-3">
                  Ad creative, tracking pixels, high-speed landing pages, and campaign management unified under one studio.
                </p>
                <div className="mt-5 pt-4 border-t border-purple-100 flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] font-mono font-bold text-[#120a22]">
                  <span>GOOGLE ADS</span>
                  <span aria-hidden="true" className="text-purple-400">·</span>
                  <span>META CAPI &amp; CREATIVE</span>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ======================================================== */}
      {/* TWO-CHANNEL DEEP DIVE: GOOGLE ADS vs META ADS            */}
      {/* ======================================================== */}
      <section className="py-14 sm:py-20 bg-[#0D071E]">
        <div className="max-w-[1480px] mx-auto px-4 sm:px-6 lg:px-10 space-y-12 text-left">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Google Ads Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#120A21] border border-purple-800/45 hover:border-purple-400/75 rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-7 shadow-[0_14px_38px_rgba(0,0,0,0.4)] transition-colors"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#6d28d9] text-white flex items-center justify-center shadow-[0_6px_18px_rgba(109,40,217,0.45)] shrink-0">
                    <Search className="w-6 h-6" />
                  </div>
                  <span className="font-hand text-xl font-bold px-3 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] -rotate-2">
                    capture active buyer intent
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    Google Ads
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    Show up first when customers actively search for your product or service, with zero wasted spend on irrelevant broad keywords.
                  </p>
                </div>

                <ul className="space-y-3 pt-1">
                  {GOOGLE_ADS_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-200">
                      <span className="w-5 h-5 rounded-full bg-[#6d28d9]/30 border border-purple-400/40 text-[#e9d5ff] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenHire(
                    "Google Ads Campaign Setup & Management",
                    "Looking to scale Search, Shopping or Performance Max campaigns on Google Ads."
                  )
                }
                className="self-start px-6 py-3 rounded-full bg-white hover:bg-[#e9d5ff] text-[#120a22] text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Launch Google Ads</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>

            {/* Meta Ads Card */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: "some" }}
              transition={{ duration: 0.4, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="bg-[#120A21] border border-purple-800/45 hover:border-purple-400/75 rounded-3xl p-7 sm:p-9 flex flex-col justify-between gap-7 shadow-[0_14px_38px_rgba(0,0,0,0.4)] transition-colors"
            >
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#6d28d9] text-white flex items-center justify-center shadow-[0_6px_18px_rgba(109,40,217,0.45)] shrink-0">
                    <Megaphone className="w-6 h-6" />
                  </div>
                  <span className="font-hand text-xl font-bold px-3 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] -rotate-2">
                    create demand &amp; retarget cleanly
                  </span>
                </div>

                <div>
                  <h2 className="font-display text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
                    Meta Ads (FB &amp; IG)
                  </h2>
                  <p className="text-sm text-zinc-300 leading-relaxed mt-2">
                    Scroll-stopping static, carousel, and catalog ads built around real hooks, paired with clean Meta CAPI event tracking.
                  </p>
                </div>

                <ul className="space-y-3 pt-1">
                  {META_ADS_ITEMS.map((item) => (
                    <li key={item} className="flex items-start gap-2.5 text-sm text-zinc-200">
                      <span className="w-5 h-5 rounded-full bg-[#6d28d9]/30 border border-purple-400/40 text-[#e9d5ff] flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button
                type="button"
                onClick={() =>
                  onOpenHire(
                    "Meta Ads (Facebook & Instagram) Management",
                    "Looking to launch or improve Facebook & Instagram ads and creative testing."
                  )
                }
                className="self-start px-6 py-3 rounded-full bg-white hover:bg-[#e9d5ff] text-[#120a22] text-xs sm:text-sm font-bold inline-flex items-center gap-2 transition-colors cursor-pointer whitespace-nowrap"
              >
                <span>Launch Meta Ads</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </motion.div>
          </div>

          {/* 4-Step Execution Sprint */}
          <div className="pt-4 space-y-7">
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
              <div className="space-y-2.5">
                <span className="font-hand text-xl font-bold px-3.5 py-0.5 rounded bg-[#e9d5ff] text-[#120a22] inline-block -rotate-2 shadow-sm">
                  how campaigns actually scale
                </span>
                <h2 className="font-display text-4xl sm:text-6xl font-black uppercase tracking-tight leading-[0.92] text-white">
                  Ads + Landing Pages Under One Roof
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-zinc-300 max-w-md leading-relaxed">
                Most ad accounts burn budget because creative, tracking, and website speed live with three different vendors. Here they work as one system.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
              {EXECUTION_PILLARS.map((pillar, idx) => {
                const IconComp = pillar.icon;
                return (
                  <motion.div
                    key={pillar.num}
                    initial={{ opacity: 0, y: 12 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: "some" }}
                    transition={{ duration: 0.35, delay: idx * 0.05 }}
                    className="bg-[#120A21] border border-purple-800/45 rounded-2xl p-6 space-y-4"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-10 h-10 rounded-xl bg-[#6d28d9] text-white flex items-center justify-center shrink-0">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-xs font-bold text-purple-300/75 tabular-nums">
                        {pillar.num}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-white leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">
                      {pillar.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Bottom Navigation Bar */}
          <div className="pt-8 border-t border-purple-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
            <button
              type="button"
              onClick={onBackHome}
              className="px-6 py-3 rounded-full bg-[#120a22] border border-purple-800/50 text-white text-xs font-bold cursor-pointer whitespace-nowrap"
            >
              ← Return to Home
            </button>
            <button
              type="button"
              onClick={() =>
                onOpenHire(
                  "Google Ads & Meta Ads + Landing Page Bundle",
                  "Hi Shakeeb, I'd like to discuss running Google Ads & Meta Ads together with landing page optimization."
                )
              }
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-[#8750f7] to-purple-600 hover:from-purple-500 hover:to-[#8750f7] text-white text-xs font-bold cursor-pointer whitespace-nowrap shadow-lg"
            >
              <Layers className="w-3.5 h-3.5" />
              <span>Book a Free Google &amp; Meta Ads Call</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>
    </main>
  );
}
