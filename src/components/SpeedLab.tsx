import React, { useState, useEffect } from "react";
import { Zap, Check, Sparkles, AlertCircle, RefreshCw, Layers, Wifi, Hourglass } from "lucide-react";

interface SpeedLabProps {
  onScoreChange?: (score: number) => void;
}

export function SpeedLab({ onScoreChange }: SpeedLabProps) {
  const [settings, setSettings] = useState({
    images: true,
    minify: false,
    redis: false,
    defer: false,
    cdn: false,
  });

  const [simulatedLoading, setSimulatedLoading] = useState(false);
  const [loadKey, setLoadKey] = useState(0);

  const getScore = () => {
    let score = 38; // Base unoptimized WordPress score
    if (settings.images) score += 12;
    if (settings.minify) score += 12;
    if (settings.redis) score += 16;
    if (settings.defer) score += 12;
    if (settings.cdn) score += 10;
    return Math.min(score, 100);
  };

  const score = getScore();

  // Notify parent if needed
  useEffect(() => {
    if (onScoreChange) {
      onScoreChange(score);
    }
  }, [score]);

  const toggleSetting = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
    // Trigger simulated reload of the preview site
    setSimulatedLoading(true);
    const timer = setTimeout(() => {
      setSimulatedLoading(false);
      setLoadKey(prev => prev + 1);
    }, Math.max(300, 2000 - (score * 18))); // Faster reload at higher scores
    return () => clearTimeout(timer);
  };

  // SVG Gauge calculations
  const radius = 60;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (score / 100) * circumference;

  const getStatusLabel = () => {
    if (score >= 90) return "PERFECT (GREEN TIER)";
    if (score >= 70) return "AVERAGE (YELLOW TIER)";
    return "CRITICAL (RED TIER)";
  };

  const getThemeColor = () => {
    if (score >= 90) return "emerald";
    if (score >= 70) return "amber";
    return "rose";
  };

  const getLCPValue = () => {
    if (score >= 90) return "0.68s";
    if (score >= 70) return "1.85s";
    return "4.28s";
  };

  const getTBTValue = () => {
    if (score >= 90) return "40ms";
    if (score >= 70) return "180ms";
    return "640ms";
  };

  const getCLSValue = () => {
    if (score >= 90) return "0.01 (Stable)";
    if (score >= 70) return "0.12 (Moderate)";
    return "0.38 (Unstable Jitter)";
  };

  const getTTFBValue = () => {
    if (score >= 90) return "0.08s (Edge Cached)";
    if (score >= 70) return "0.24s (Standard)";
    return "1.15s (Database Overload)";
  };

  // Calculate loading speed duration
  const loadDuration = (score: number) => {
    // 38 score -> 5.2s, 100 score -> 0.4s
    return (5.8 - (score / 100) * 5.4).toFixed(2);
  };

  return (
    <div
      id="tuner"
      className="hidden md:block py-24 border-b border-zinc-800/80 bg-zinc-950/90 relative overflow-hidden text-left"
    >
      
      {/* Decorative absolute background grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>

      <div className="grid lg:grid-cols-12 gap-12 items-start relative z-10 max-w-6xl mx-auto px-3 sm:px-6">
        
        {/* Left Column: Descriptive Context & Dashboard Specs */}
        <div className="lg:col-span-5 text-left flex flex-col gap-8">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest border border-zinc-800">
              <Zap className="w-3.5 h-3.5 text-amber-400" />
              Live Simulation Engine
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.1]">
              High-Speed Tuning Lab
            </h2>
            <p className="text-zinc-500 font-mono text-[10px] tracking-widest uppercase font-bold">
              // TARGETING SUB-SECOND CORE WEB VITALS
            </p>
          </div>

          <p className="text-zinc-400 text-sm leading-relaxed">
            In standard WordPress environments, page size bloat and database crawl latency kill conversion rates. 
            A single second delay in checkout load can degrade customer satisfaction metrics by over sixteen percent.
          </p>

          <p className="text-zinc-400 text-sm leading-relaxed">
            Interact with the custom configuration switches below. Watch how custom PHP optimizations, 
            Redis object caching, and WebP assets transform a sluggish, legacy setup into a green-tier speed demon.
          </p>

          {/* Core Web Vitals Realtime Spec Sheet */}
          <div className="border border-zinc-800 rounded-2xl bg-zinc-900/80 p-6 space-y-5 shadow-xl">
            <div className="flex items-center justify-between border-b border-zinc-800 pb-3">
              <span className="font-mono text-[9px] font-bold text-zinc-500 uppercase tracking-widest">
                AUDITED CORE WEB VITALS
              </span>
              <span className="text-[9px] font-mono text-zinc-400 font-bold bg-zinc-950 px-2 py-0.5 rounded border border-zinc-800 uppercase">
                3G/4G Simulated
              </span>
            </div>

            <div className="grid grid-cols-2 gap-x-6 gap-y-5">
              
              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                  Largest Contentful Paint (LCP)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-xl font-bold font-mono tracking-tight ${
                    score >= 90 ? "text-emerald-400" : score >= 70 ? "text-amber-400" : "text-rose-400"
                  }`}>{getLCPValue()}</span>
                  <span className="text-[9px] text-zinc-500 font-mono uppercase">
                    {score >= 90 ? "Fast" : score >= 70 ? "Mod" : "Slow"}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                  Total Blocking Time (TBT)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-xl font-bold font-mono tracking-tight ${
                    score >= 90 ? "text-emerald-400" : score >= 70 ? "text-amber-400" : "text-rose-400"
                  }`}>{getTBTValue()}</span>
                  <span className="text-[9px] text-zinc-500 font-mono uppercase">
                    {score >= 90 ? "Optimum" : "Acceptable"}
                  </span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                  Cumulative Layout Shift (CLS)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-sm font-bold font-mono tracking-tight ${
                    score >= 90 ? "text-emerald-400" : score >= 70 ? "text-amber-400" : "text-rose-400"
                  }`}>{getCLSValue()}</span>
                </div>
              </div>

              <div className="space-y-1">
                <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold block">
                  Time To First Byte (TTFB)
                </span>
                <div className="flex items-baseline gap-1.5">
                  <span className={`text-sm font-bold font-mono tracking-tight ${
                    score >= 90 ? "text-emerald-400" : score >= 70 ? "text-amber-400" : "text-rose-400"
                  }`}>{getTTFBValue()}</span>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* Right Column: Ultimate Revamped Interactive Tuning Board */}
        <div className="lg:col-span-7 grid gap-6">
          
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl shadow-xl overflow-hidden p-4 sm:p-8 relative grid md:grid-cols-12 gap-8">
            
            {/* Visual Gauge HUD */}
            <div className="md:col-span-5 flex flex-col items-center justify-center gap-6 text-center pb-6 md:pb-0 border-b md:border-b-0 md:border-r border-zinc-800 md:pr-8">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                LIGHTHOUSE HARNESS
              </span>

              {/* Minimalist modern gauge */}
              <div className="relative w-36 h-36 flex items-center justify-center">
                <svg className="w-full h-full transform -rotate-90">
                  {/* Outer circle track */}
                  <circle
                    cx="72"
                    cy="72"
                    r="56"
                    className="stroke-zinc-800"
                    strokeWidth="6"
                    fill="transparent"
                  />
                  {/* Dynamic path */}
                  <circle
                    cx="72"
                    cy="72"
                    r="56"
                    className={`transition-all duration-700 ease-out ${
                      score >= 90 ? "stroke-emerald-400" : score >= 70 ? "stroke-amber-400" : "stroke-rose-500"
                    }`}
                    strokeWidth="6"
                    strokeDasharray={2 * Math.PI * 56}
                    strokeDashoffset={(2 * Math.PI * 56) - (score / 100) * (2 * Math.PI * 56)}
                    strokeLinecap="round"
                    fill="transparent"
                  />
                </svg>

                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className={`text-4xl font-black tracking-tight font-sans transition-colors duration-500 ${
                    score >= 90 ? "text-emerald-400" : score >= 70 ? "text-amber-400" : "text-rose-400"
                  }`}>
                    {score}
                  </span>
                  <span className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest mt-0.5">/ 100</span>
                </div>
              </div>

              <div className="space-y-2">
                <span className={`px-2.5 py-1 rounded-xl text-[9px] font-mono tracking-widest border font-bold uppercase ${
                  score >= 90 ? "text-emerald-300 bg-emerald-950/80 border-emerald-800/80" :
                  score >= 70 ? "text-amber-300 bg-amber-950/80 border-amber-800/80" :
                  "text-rose-300 bg-rose-950/80 border-rose-800/80"
                }`}>
                  {getStatusLabel()}
                </span>
                <span className="text-[9px] font-mono text-zinc-400 block uppercase tracking-wide mt-2">
                  LOAD TIME: <strong className="text-white font-bold">{loadDuration(score)}s</strong>
                </span>
              </div>
            </div>

            {/* Toggle Switch List */}
            <div className="md:col-span-7 flex flex-col gap-4 text-left justify-center">
              <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold">
                OPTIMIZATIONS PIPELINE
              </span>

              <div className="space-y-2">
                {[
                  {
                    key: "images" as const,
                    title: "WebP Asset Encoding",
                    desc: "Reduces media payloads by ~75%.",
                    cost: "-1.2s",
                  },
                  {
                    key: "minify" as const,
                    title: "Asset Minification",
                    desc: "Compresses scripts, variables, and spacing.",
                    cost: "-0.9s",
                  },
                  {
                    key: "redis" as const,
                    title: "Redis Cache Layer",
                    desc: "Saves redundant database SQL lookups.",
                    cost: "-1.6s",
                  },
                  {
                    key: "defer" as const,
                    title: "Defer Render Blocking",
                    desc: "Executes non-critical script queues in background.",
                    cost: "-0.8s",
                  },
                  {
                    key: "cdn" as const,
                    title: "Cloudflare Edge Nodes",
                    desc: "Serves files directly from the nearest regional server.",
                    cost: "-0.5s",
                  },
                ].map((item) => (
                  <button
                    key={item.key}
                    onClick={() => toggleSetting(item.key)}
                    className={`w-full p-3.5 rounded-xl border text-left flex items-center justify-between transition-all cursor-pointer ${
                      settings[item.key]
                        ? "bg-zinc-950 text-white border-amber-500/40 shadow-sm scale-[1.01]"
                        : "bg-zinc-900/80 hover:bg-zinc-950 border-zinc-800 text-zinc-400"
                    }`}
                  >
                    <div className="space-y-0.5 pr-2">
                      <div className={`text-xs font-bold leading-none ${settings[item.key] ? "text-amber-300" : "text-zinc-300"}`}>
                        {item.title}
                      </div>
                      <div className="text-[10px] leading-tight text-zinc-500 mt-1">
                        {item.desc}
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-2.5 shrink-0">
                      <span className={`text-[9px] font-mono font-bold ${settings[item.key] ? "text-emerald-400" : "text-zinc-500"}`}>
                        {item.cost}
                      </span>
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center transition-colors ${
                        settings[item.key] ? "bg-amber-500 text-zinc-950 border-transparent font-black" : "border-zinc-700 bg-zinc-900"
                      }`}>
                        {settings[item.key] && <Check className="w-3 h-3 stroke-[3]" />}
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>

          </div>

          {/* Interactive Live Mockup Website Viewport */}
          <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl overflow-hidden shadow-xl text-left">
            <div className="bg-zinc-950 border-b border-zinc-800 px-4 py-3.5 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-rose-500"></span>
                <span className="w-2 h-2 rounded-full bg-amber-500"></span>
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                <span className="font-mono text-[9px] text-zinc-500 ml-2 uppercase tracking-widest font-bold">
                  LIVE CLIENT PERFORMANCE SANDBOX
                </span>
              </div>
              <div className="flex items-center gap-2 font-mono text-[9px] text-zinc-400 font-bold">
                <Wifi className="w-3 h-3 text-zinc-500" />
                <span>STATUS: {simulatedLoading ? "RE-PROFILING..." : "RENDERED"}</span>
              </div>
            </div>

            {/* Sandbox Render Window */}
            <div className="p-6 h-56 bg-zinc-950 flex flex-col justify-between relative overflow-hidden">
              
              {/* Simulated Loading Bar */}
              <div className="absolute top-0 inset-x-0 h-0.5 bg-zinc-900 z-30">
                <div 
                  key={loadKey}
                  className={`h-full transition-all duration-1000 ${
                    score >= 90 ? "bg-emerald-400 animate-none w-full" : 
                    score >= 70 ? "bg-amber-400 w-3/4" : "bg-rose-500 w-1/3"
                  }`}
                  style={{
                    animation: simulatedLoading ? 'shimmer 1.5s infinite linear' : 'none'
                  }}
                ></div>
              </div>

              {simulatedLoading ? (
                <div className="m-auto flex flex-col items-center justify-center gap-3 text-zinc-500">
                  <RefreshCw className="w-5 h-5 animate-spin text-amber-400" />
                  <span className="font-mono text-[10px] tracking-widest uppercase font-bold text-zinc-400">Measuring Handshakes...</span>
                </div>
              ) : (
                <>
                  {/* Top Bar info */}
                  <div className="flex justify-between items-start">
                    <div className="space-y-1 text-left">
                      <div className="text-[8px] font-mono text-zinc-500 uppercase tracking-widest font-bold">TARGET CLIENT STOREFRONT</div>
                      <div className="text-sm font-bold text-white font-serif tracking-tight">WooCommerce Luxury Apparel</div>
                    </div>
                    <span className={`px-2.5 py-0.5 rounded-lg text-[8px] font-mono uppercase tracking-widest font-bold ${
                      score >= 90 ? "text-emerald-400 bg-emerald-950/80 border border-emerald-800/80" : "text-zinc-400 bg-zinc-900 border border-zinc-800"
                    }`}>
                      {score >= 90 ? "INSTANT COMPILING" : "LEGACY ENGINE"}
                    </span>
                  </div>

                  {/* Render Mock Elements */}
                  <div className="grid grid-cols-3 gap-3 my-4">
                    
                    {/* Element 1: Hero Image */}
                    <div className="col-span-2 rounded-xl bg-zinc-900 border border-zinc-800 p-4 relative overflow-hidden flex flex-col justify-end h-24">
                      {settings.images ? (
                        <div className="absolute inset-0 bg-gradient-to-tr from-zinc-900 to-emerald-950/30 z-0"></div>
                      ) : (
                        <div className="absolute inset-0 bg-zinc-900 z-0 flex items-center justify-center">
                          <AlertCircle className="w-4 h-4 text-rose-400 mr-1.5" />
                          <span className="text-[8px] font-mono text-zinc-400 uppercase font-bold">Raw JPEG (3.4 MB)</span>
                        </div>
                      )}
                      
                      <div className="relative z-10 space-y-1">
                        <div className="w-12 h-2 bg-zinc-800 rounded"></div>
                        <div className="w-24 h-1 bg-zinc-700 rounded"></div>
                      </div>
                    </div>

                    {/* Element 2: Cart Block */}
                    <div className="rounded-xl bg-zinc-900 border border-zinc-800 p-3 flex flex-col justify-between h-24">
                      <div className="flex justify-between items-center">
                        <div className="w-6 h-1 bg-zinc-700 rounded"></div>
                        <div className="w-1.5 h-1.5 rounded-full bg-zinc-600"></div>
                      </div>
                      
                      {settings.redis ? (
                        <div className="space-y-0.5">
                          <div className="text-[8px] font-mono text-emerald-400 uppercase font-bold">Redis Active</div>
                          <div className="text-[10px] font-bold text-zinc-200 font-mono">Cached: 4ms</div>
                        </div>
                      ) : (
                        <div className="space-y-0.5">
                          <div className="text-[8px] font-mono text-amber-500 uppercase font-bold">SQL Query</div>
                          <div className="text-[10px] text-zinc-500 font-mono">Uncached: 312ms</div>
                        </div>
                      )}
                    </div>

                  </div>

                  {/* Render Pipeline Metrics footer */}
                  <div className="flex justify-between items-center border-t border-zinc-900 pt-3">
                    <div className="flex gap-4">
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${settings.defer ? "bg-emerald-400" : "bg-rose-500"}`}></div>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">JS Queue</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <div className={`w-1.5 h-1.5 rounded-full ${settings.cdn ? "bg-emerald-400" : "bg-rose-500"}`}></div>
                        <span className="text-[8px] font-mono text-zinc-500 uppercase font-bold">Edge TTL</span>
                      </div>
                    </div>

                    <span className="text-[8px] font-mono text-zinc-500 tracking-wider">
                      PAGE SIZE: <strong className={score >= 90 ? "text-emerald-400 font-bold" : "text-amber-400 font-bold"}>{score >= 90 ? "412 KB" : "4.8 MB"}</strong>
                    </span>
                  </div>
                </>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}
