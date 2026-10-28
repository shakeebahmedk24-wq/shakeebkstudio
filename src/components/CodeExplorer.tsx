import React, { useState } from "react";
import { Copy, Check, Terminal, Code2, Sparkles, Settings, Play, CheckCircle2 } from "lucide-react";
import { SNIPPETS } from "../data";
import type { Snippet } from "../data";

interface CodeExplorerProps {
  onCopySuccess: (label: string) => void;
}

export function CodeExplorer({ onCopySuccess }: CodeExplorerProps) {
  const [selectedId, setSelectedId] = useState<string>(SNIPPETS[0].id);
  const [copiedId, setCopiedId] = useState<string | null>(null);

  // Dynamic code options
  const [isStrictSanitization, setIsStrictSanitization] = useState(true);
  const [customTokenName, setCustomTokenName] = useState("SHAKEEB_SECURE_METRIC_TOKEN_99");
  const [cacheExpiryYears, setCacheExpiryYears] = useState("1 Year");

  const handleCopy = (code: string, id: string, title: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(code).catch(() => {});
      }
    } catch {}
    setCopiedId(id);
    onCopySuccess(title);
    setTimeout(() => setCopiedId(null), 2500);
  };

  const getCustomizedCode = (snippet: Snippet) => {
    let code = snippet.code;
    
    if (snippet.id === "rest-auth") {
      code = code.replace("SHAKEEB_SECURE_METRIC_TOKEN_99", customTokenName);
    }
    
    if (snippet.id === "woo-checkout") {
      if (!isStrictSanitization) {
        code = code.replace("sanitize_text_field( $_POST['billing_delivery_notes'] )", "$_POST['billing_delivery_notes'] // ⚠️ UNSANITIZED INPUT!");
      }
    }

    if (snippet.id === "speed-headers") {
      if (cacheExpiryYears === "2 Years") {
        code = code.replace("max-age=31536000", "max-age=63072000 // 2 Years");
      } else if (cacheExpiryYears === "6 Months") {
        code = code.replace("max-age=31536000", "max-age=15768000 // 6 Months");
      }
    }

    return code;
  };

  const activeSnippet = SNIPPETS.find((s) => s.id === selectedId) || SNIPPETS[0];
  const customizedCode = getCustomizedCode(activeSnippet);

  // Premium Custom Syntax Highlighting - simulating highlight.js with beautiful JSX tags
  const renderHighlightedCode = (code: string) => {
    const lines = code.split("\n");
    return lines.map((line, idx) => {
      // Regex replace basic terms with elegant glowing span elements
      // Comments
      if (line.trim().startsWith("//") || line.trim().startsWith("#")) {
        return (
          <div key={idx} className="text-stone-500 italic selection:bg-stone-800">
            {line}
          </div>
        );
      }

      // Check if line is a function or hook
      const parts = line.split(/(\s+)/);
      const elements = parts.map((part, pIdx) => {
        if (part.startsWith("add_filter") || part.startsWith("add_action") || part.startsWith("register_rest_route")) {
          return <span key={pIdx} className="text-purple-400 font-bold">{part}</span>;
        }
        if (part.startsWith("function") || part.startsWith("return")) {
          return <span key={pIdx} className="text-rose-400 font-semibold">{part}</span>;
        }
        if (part.startsWith("update_post_meta") || part.startsWith("sanitize_text_field") || part.startsWith("WP_REST_Response")) {
          return <span key={pIdx} className="text-blue-400">{part}</span>;
        }
        if (part.startsWith("Header") || part.startsWith("<IfModule") || part.startsWith("</IfModule>")) {
          return <span key={pIdx} className="text-emerald-400">{part}</span>;
        }
        if (part.startsWith("true") || part.startsWith("false") || part.match(/^[0-9]+$/)) {
          return <span key={pIdx} className="text-amber-400 font-semibold">{part}</span>;
        }
        if (part.startsWith("'") || part.startsWith('"') || part.endsWith("'") || part.endsWith('"')) {
          return <span key={pIdx} className="text-amber-200/90">{part}</span>;
        }
        return part;
      });

      return (
        <div key={idx} className="min-h-[1.2rem] hover:bg-stone-900/40 px-2 rounded -mx-2 transition-colors">
          <span className="text-stone-600 select-none mr-4 text-[10px] inline-block w-4 text-right">
            {idx + 1}
          </span>
          {elements}
        </div>
      );
    });
  };

  return (
    <div id="snippets" className="py-24 border-b border-zinc-800/80 bg-zinc-950/90 relative">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto px-3 sm:px-6 relative z-10 text-left">
        <div className="flex flex-col gap-3 mb-12 text-left">
          <div className="inline-flex self-start items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest border border-zinc-800">
            <Code2 className="w-3.5 h-3.5 text-amber-400" />
            Enterprise PHP Core Hooks
          </div>
          
          <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.1]">
            Web Architecture & Engine Studio
          </h2>
          
          <p className="text-zinc-400 text-sm max-w-2xl leading-relaxed mt-1">
            Explore production-ready web hooks and backend logic. Customize specific execution triggers below to see 
            how variables mutate live in compliance with clean engineering guidelines.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Asymmetrical selection drawer */}
          <div className="lg:col-span-4 flex flex-col gap-3 text-left">
            <span className="font-mono text-[9px] text-zinc-500 uppercase tracking-widest font-bold block mb-1">
              AVAILABLE HOOKS
            </span>

            {SNIPPETS.map((snippet) => (
              <button
                key={snippet.id}
                onClick={() => setSelectedId(snippet.id)}
                className={`p-3.5 sm:p-5 rounded-2xl border text-left transition-all flex flex-col gap-3 cursor-pointer relative overflow-hidden group ${
                  selectedId === snippet.id
                    ? "bg-zinc-900 border-amber-500/40 text-white shadow-xl translate-x-1"
                    : "bg-zinc-900/40 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700 text-zinc-400"
                }`}
              >
                <div className="flex justify-between items-center w-full">
                  <span className={`text-[9px] font-mono font-bold uppercase tracking-widest px-2 py-0.5 rounded ${
                    selectedId === snippet.id
                      ? "text-amber-300 bg-amber-500/10 border border-amber-500/30"
                      : "text-zinc-500 bg-zinc-950/60"
                  }`}>
                    {snippet.category}
                  </span>

                  {selectedId === snippet.id && (
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                  )}
                </div>
                
                <div className="space-y-1">
                  <h3 className={`text-sm font-bold leading-snug ${selectedId === snippet.id ? "text-white" : "text-zinc-300"}`}>
                    {snippet.title}
                  </h3>
                  <p className="text-xs leading-relaxed text-zinc-400">
                    {snippet.description}
                  </p>
                </div>
              </button>
            ))}
          </div>

          {/* Right Column: High-End IDE Simulator with Dynamic Parameters */}
          <div className="lg:col-span-8 space-y-6">
            
            {/* Main IDE Terminal */}
            <div className="bg-zinc-950 border border-zinc-800 rounded-2xl overflow-hidden shadow-2xl relative">
              
              {/* Header tab controller */}
              <div className="bg-zinc-900/90 border-b border-zinc-800 px-5 py-4 flex flex-wrap items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-1.5 mr-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                  </div>
                  <Terminal className="w-3.5 h-3.5 text-zinc-400" />
                  <span className="text-[10px] text-zinc-400 font-mono tracking-widest uppercase font-bold">
                    {activeSnippet.id === "speed-headers" ? "Server-Config/.htaccess" : "wp-content/themes/sak/functions.php"}
                  </span>
                </div>
                
                <button
                  onClick={() => handleCopy(customizedCode, activeSnippet.id, activeSnippet.title)}
                  className="px-3.5 py-1.5 rounded-xl bg-amber-500/10 hover:bg-amber-500/20 text-amber-300 font-mono text-[9px] font-bold tracking-widest uppercase flex items-center gap-2 transition-colors cursor-pointer border border-amber-500/30"
                >
                  {copiedId === activeSnippet.id ? (
                    <>
                      <Check className="w-3 h-3 text-emerald-400 stroke-[3]" />
                      CODE COPIED
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3 text-amber-400" />
                      EXPORT CODE
                    </>
                  )}
                </button>
              </div>

              {/* Simulated Workspace Files Tree bar */}
              <div className="bg-zinc-950 border-b border-zinc-800 px-5 py-2 flex gap-4 text-[9px] font-mono text-zinc-500">
                <span className="text-amber-300 border-b border-amber-400 pb-1 cursor-pointer font-bold">
                  functions.php
                </span>
                <span className="hover:text-zinc-300 cursor-pointer">wp-config.php</span>
                <span className="hover:text-zinc-300 cursor-pointer">header.php</span>
              </div>

              {/* Code Body */}
              <div className="p-3.5 sm:p-6 font-mono text-[11px] text-zinc-300 text-left overflow-x-auto max-h-[380px] scrollbar-thin scrollbar-thumb-zinc-800 scrollbar-track-transparent">
                <pre className="whitespace-pre">
                  <code>{renderHighlightedCode(customizedCode)}</code>
                </pre>
              </div>

              {/* Bottom Status bar */}
              <div className="bg-zinc-900/60 border-t border-zinc-800 px-5 py-3.5 text-[9px] text-zinc-500 font-mono tracking-widest text-left flex items-center justify-between font-bold">
                <span>// SECURITY PROTOCOL: VERIFIED BY PHP_CODESNIFFER (WPCS)</span>
                <span className="text-emerald-400 flex items-center gap-1 font-bold">
                  <CheckCircle2 className="w-3 h-3 text-emerald-400" />
                  100% PRODUCTION READY
                </span>
              </div>

            </div>

            {/* Mutation Parameters controls drawer */}
            <div className="bg-zinc-900/80 border border-zinc-800 rounded-2xl p-6 text-left shadow-xl">
              <div className="flex items-center gap-2 mb-4 border-b border-zinc-800 pb-3">
                <Settings className="w-4 h-4 text-amber-400" />
                <h4 className="text-[10px] font-mono font-bold uppercase text-zinc-400 tracking-widest">
                  INTERACTIVE CODE SANDBOX PARAMETERS
                </h4>
              </div>

              {activeSnippet.id === "woo-checkout" && (
                <div className="space-y-4">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    WordPress sanitization hooks protect transactional databases from cross-site scripting (XSS) and SQL injection. Use the toggle below to adjust sanitization rigor:
                  </p>
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4">
                    <button
                      onClick={() => setIsStrictSanitization(!isStrictSanitization)}
                      className={`px-4 py-2.5 rounded-xl border text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                        isStrictSanitization
                          ? "bg-amber-500 text-zinc-950 border-amber-400 font-extrabold shadow-sm"
                          : "bg-rose-950/80 text-rose-300 border-rose-800/80"
                      }`}
                    >
                      {isStrictSanitization ? "Strict Sanitization ON" : "⚠️ Raw POST Variable Mode"}
                    </button>
                    <span className="text-[10px] text-zinc-500 font-mono">
                      {isStrictSanitization ? "Uses sanitize_text_field() function safely" : "Warning: Direct database write allows potential scripts"}
                    </span>
                  </div>
                </div>
              )}

              {activeSnippet.id === "rest-auth" && (
                <div className="space-y-3">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Modify the API token constant below to simulate secure webhook secret handshakes:
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <input
                      type="text"
                      value={customTokenName}
                      onChange={(e) => setCustomTokenName(e.target.value)}
                      placeholder="Type custom API token..."
                      className="flex-1 bg-zinc-950 border border-zinc-800 focus:border-amber-500/50 rounded-xl px-4 py-2.5 text-xs font-mono text-zinc-200 outline-none transition-all"
                    />
                    <div className="bg-zinc-950 p-3 rounded-xl border border-zinc-800 flex items-center justify-center font-mono text-[9px] text-zinc-400 font-bold uppercase tracking-wider">
                      Token is validated via request headers
                    </div>
                  </div>
                </div>
              )}

              {activeSnippet.id === "speed-headers" && (
                <div className="space-y-3">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    Adjust standard Apache cache header policies for high-traffic assets (stylesheets, icons):
                  </p>
                  <div className="flex gap-2">
                    {["6 Months", "1 Year", "2 Years"].map((dur) => (
                      <button
                        key={dur}
                        onClick={() => setCacheExpiryYears(dur)}
                        className={`px-3.5 py-1.5 rounded-xl text-[10px] font-mono tracking-wider uppercase font-bold transition-all cursor-pointer ${
                          cacheExpiryYears === dur
                            ? "bg-amber-500 text-zinc-950 font-bold"
                            : "bg-zinc-950 border border-zinc-800 text-zinc-400 hover:text-white"
                        }`}
                      >
                        {dur} TTL
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {activeSnippet.id === "disable-gutenberg" && (
                <div className="space-y-1">
                  <p className="text-xs text-zinc-400 leading-relaxed">
                    This core hack prevents Gutenberg visual page-builder styles from enqueueing, stripping over <strong className="text-amber-300">140 KB</strong> of unneeded CSS loads off the frontend render instantly.
                  </p>
                  <span className="inline-flex px-2.5 py-1 rounded-xl bg-emerald-950/80 border border-emerald-800/80 text-[9px] font-mono text-emerald-300 font-bold uppercase mt-2">
                    No configuration needed for classic theme structures
                  </span>
                </div>
              )}

            </div>

          </div>

        </div>
      </div>
    </div>
  );
}
