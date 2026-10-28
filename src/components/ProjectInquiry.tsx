import React, { useState } from "react";
import { Mail, Phone, Globe, ExternalLink, Copy, Check, Send } from "lucide-react";

interface ProjectInquiryProps {
  onCopySuccess: (label: string) => void;
}

export function ProjectInquiry({ onCopySuccess }: ProjectInquiryProps) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    service: "Full-Stack Website Development",
    budget: "$1.5k - $3k",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const [formError, setFormError] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    try {
      if (navigator?.clipboard?.writeText) {
        navigator.clipboard.writeText(text).catch(() => {});
      }
    } catch {}
    setCopiedChannel(label);
    onCopySuccess(label);
    setTimeout(() => setCopiedChannel(null), 2000);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim()) {
      setFormError("Please provide both your name and email to initialize the brief.");
      return;
    }
    setFormError(null);
    setSubmitted(true);
  };

  const getMailtoLink = () => {
    const subject = encodeURIComponent(`Project Brief Inquiry - ${form.name}`);
    const body = encodeURIComponent(
      `Hi Shakeeb,\n\n` +
      `I would like to get in touch regarding a project with you.\n\n` +
      `Project Type: ${form.service}\n` +
      `Estimated Budget: ${form.budget}\n\n` +
      `Project Brief / Goals:\n${form.message}\n\n` +
      `My Contact details:\n` +
      `Name: ${form.name}\n` +
      `Email: ${form.email}\n`
    );
    return `mailto:shakeebahmedk24@gmail.com?subject=${subject}&body=${body}`;
  };

  const getWhatsAppLink = () => {
    const text = `Hello Shakeeb, my name is ${form.name}. I am looking for ${form.service} with a budget of ${form.budget}. Here is a brief of what I need: ${form.message}. You can reach me back at ${form.email}`;
    return `https://wa.me/923320203701?text=${encodeURIComponent(text)}`;
  };

  return (
    <div
      id="contact"
      className="py-24 border-b border-zinc-800/80 bg-zinc-950/80"
    >
      <div className="grid lg:grid-cols-12 gap-12 items-start max-w-6xl mx-auto px-3 sm:px-6">
        
        {/* Left Side: Contact details */}
        <div className="lg:col-span-5 flex flex-col gap-8 text-left">
          <div className="space-y-3">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-zinc-900 text-[10px] font-mono font-bold text-amber-400 uppercase tracking-widest border border-zinc-800">
              <Mail className="w-3.5 h-3.5 text-amber-400" />
              Direct Communication
            </div>
            <h2 className="font-serif text-3xl md:text-4xl font-black tracking-tight text-white leading-[1.15]">
              Let's Build Something Exceptional
            </h2>
            <p className="text-zinc-400 text-sm leading-relaxed max-w-md mt-1">
              Have an e-commerce platform, corporate portal, or design refresh in mind? Let's consult and structure an ultra-fast digital solution.
            </p>
          </div>

          <div className="space-y-3.5">
            
            {/* Email */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3 shadow-xl transition-all hover:border-amber-500/40 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Email Channel</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 break-all">shakeebahmedk24@gmail.com</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy("shakeebahmedk24@gmail.com", "Email")}
                className="p-2 sm:p-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer shrink-0"
              >
                {copiedChannel === "Email" ? <Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Phone */}
            <div className="p-3.5 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3 shadow-xl transition-all hover:border-amber-500/40 min-w-0">
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">WhatsApp Hotline</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 break-all">+92-332-0203701</div>
                </div>
              </div>
              <button
                onClick={() => handleCopy("+923320203701", "Phone")}
                className="p-2 sm:p-2.5 rounded-xl bg-zinc-950 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer shrink-0"
              >
                {copiedChannel === "Phone" ? <Check className="w-4 h-4 text-emerald-400 stroke-[3]" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* Portfolio Link */}
            <a
              href="https://behance.net/sksolutions"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3.5 sm:p-5 rounded-2xl bg-zinc-900/80 border border-zinc-800 flex items-center justify-between gap-3 shadow-xl hover:border-amber-500/40 transition-all group min-w-0"
            >
              <div className="flex items-center gap-3 sm:gap-4 min-w-0 flex-1">
                <div className="p-2.5 sm:p-3 rounded-xl bg-amber-500/10 text-amber-400 border border-amber-500/20 shrink-0">
                  <Globe className="w-5 h-5" />
                </div>
                <div className="min-w-0 flex-1">
                  <div className="text-[9px] font-mono text-zinc-500 uppercase tracking-widest font-bold">Graphic Portfolio</div>
                  <div className="text-xs sm:text-sm font-bold text-white mt-0.5 break-all">behance.net/sksolutions</div>
                </div>
              </div>
              <div className="p-2 sm:p-2.5 rounded-xl bg-zinc-950 text-zinc-400 group-hover:text-amber-400 border border-zinc-800 transition-colors shrink-0">
                <ExternalLink className="w-4 h-4" />
              </div>
            </a>

          </div>
        </div>

        {/* Right Side: Consultation Form */}
        <div className="lg:col-span-7">
          <div className="bg-zinc-900/90 border border-zinc-800 rounded-2xl shadow-2xl p-4 sm:p-8 relative">
            <h3 className="text-base font-bold text-white tracking-tight mb-6">
              Generate Project Brief
            </h3>

            {submitted ? (
              <div className="py-10 flex flex-col items-center justify-center text-center gap-5">
                <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
                  <Check className="w-6 h-6 stroke-[3]" />
                </div>
                
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white">Project Inquiry Generated</h4>
                  <p className="text-xs text-zinc-400 max-w-sm leading-relaxed">
                    Your specifications are organized. Please select your preferred communication channel below to dispatch your message immediately:
                  </p>
                </div>

                <div className="flex flex-col sm:flex-row gap-2.5 w-full pt-4 max-w-md">
                  <a
                    href={getMailtoLink()}
                    className="flex-1 text-center py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Open Mail Client
                  </a>
                  <a
                    href={getWhatsAppLink()}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 text-center py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer"
                  >
                    Send on WhatsApp
                  </a>
                </div>

                <button
                  onClick={() => setSubmitted(false)}
                  className="text-[10px] font-mono text-zinc-500 hover:text-zinc-300 mt-3 underline"
                >
                  Edit details
                </button>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-5">
                
                <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Name */}
                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Your Name</label>
                    <input
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
                      placeholder="e.g. John Doe"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs text-zinc-200 outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Your Email</label>
                    <input
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((prev) => ({ ...prev, email: e.target.value }))}
                      placeholder="e.g. john@example.com"
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs text-zinc-200 outline-none transition-all placeholder:text-zinc-600"
                    />
                  </div>

                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  
                  {/* Service type */}
                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Service Category</label>
                    <select
                      value={form.service}
                      onChange={(e) => setForm((prev) => ({ ...prev, service: e.target.value }))}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs text-zinc-200 outline-none transition-all"
                    >
                      <option>Full-Stack Website Development</option>
                      <option>WooCommerce Dynamic E-Commerce</option>
                      <option>Elementor Pro Custom Theme Building</option>
                      <option>Mobile App UI & Brand Design</option>
                      <option>Speed Optimization & Hardening</option>
                    </select>
                  </div>

                  {/* Budget */}
                  <div className="space-y-1 text-left">
                    <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Budget Tier</label>
                    <select
                      value={form.budget}
                      onChange={(e) => setForm((prev) => ({ ...prev, budget: e.target.value }))}
                      className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs text-zinc-200 outline-none transition-all"
                    >
                      <option>Under $1k (Small Project)</option>
                      <option>$1.5k - $3k (Medium Custom Build)</option>
                      <option>$3k - $6k (Corporate / E-Commerce)</option>
                      <option>$6k+ (Enterprise Multi-vendor)</option>
                    </select>
                  </div>

                </div>

                {/* Brief Message */}
                <div className="space-y-1 text-left">
                  <label className="text-[9px] font-mono uppercase tracking-widest text-zinc-400 font-bold">Project Brief Requirements</label>
                  <textarea
                    rows={4}
                    value={form.message}
                    onChange={(e) => setForm((prev) => ({ ...prev, message: e.target.value }))}
                    placeholder="Provide details about your goals, key features, and desired timeline..."
                    className="w-full bg-zinc-950 border border-zinc-800 focus:border-amber-500/50 rounded-xl px-4 py-3 text-xs text-zinc-200 outline-none transition-all resize-none placeholder:text-zinc-600"
                  />
                </div>

                {formError && (
                  <div className="p-3 rounded-xl bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs font-mono text-left">
                    {formError}
                  </div>
                )}

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-zinc-950 font-mono text-xs font-bold uppercase tracking-wider transition-colors flex items-center justify-center gap-2 cursor-pointer mt-2 shadow-lg"
                >
                  <Send className="w-3.5 h-3.5" />
                  Build Project Brief Inquiry
                </button>

              </form>
            )}

          </div>
        </div>

      </div>
    </div>
  );
}
