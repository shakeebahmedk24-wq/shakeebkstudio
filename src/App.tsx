import React, { useState, useEffect } from "react";
import { GeroldHome } from "./components/GeroldHome";

export default function App() {
  const [portfolioTab, setPortfolioTab] = useState<"all" | "case_studies" | "websites" | "graphics">("all");

  // Synchronize hash with portfolio tabs and smooth scrolling
  useEffect(() => {
    const handleUrlSync = () => {
      try {
        if (typeof window === "undefined" || !window.location) return;
        const hash = (window.location.hash || "").toLowerCase();

        if (hash.startsWith("#web-portfolio") || hash.startsWith("#websites-portfolio") || hash.startsWith("#portfolio")) {
          setPortfolioTab("websites");
          setTimeout(() => {
            const el = document.getElementById("web-portfolio") || document.getElementById("portfolio");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else if (hash.startsWith("#graphics-portfolio") || hash.startsWith("#graphic-portfolio") || hash.startsWith("#graphics")) {
          setPortfolioTab("graphics");
          setTimeout(() => {
            const el = document.getElementById("graphics-portfolio");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        } else if (hash.startsWith("#works") || hash.startsWith("#case-studies")) {
          setPortfolioTab("case_studies");
          setTimeout(() => {
            const el = document.getElementById("works");
            if (el) el.scrollIntoView({ behavior: "smooth" });
          }, 100);
        }
      } catch (err) {
        console.warn("Navigation URL sync warning:", err);
      }
    };

    handleUrlSync();
    window.addEventListener("popstate", handleUrlSync);
    window.addEventListener("hashchange", handleUrlSync);

    return () => {
      window.removeEventListener("popstate", handleUrlSync);
      window.removeEventListener("hashchange", handleUrlSync);
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07030e] text-[#f3f4f6] font-sans antialiased selection:bg-purple-600/40 selection:text-white relative">
      <GeroldHome initialPortfolioTab={portfolioTab} />
    </div>
  );
}
