import React, { useEffect } from "react";
import Lenis from "lenis";
import "lenis/dist/lenis.css";
import { GeroldHome } from "./components/GeroldHome";

export default function App() {
  useEffect(() => {
    // Detect mobile and touch devices
    // Mobile browsers (iOS Safari, Android Chrome) have 120Hz native hardware-accelerated momentum scrolling.
    // Emulating scroll via JS on touch devices causes touch lockups and freezes.
    const isTouchDevice =
      typeof window !== "undefined" &&
      ("ontouchstart" in window ||
        navigator.maxTouchPoints > 0 ||
        window.matchMedia("(pointer: coarse)").matches);

    if (isTouchDevice) {
      // Clean up any existing instance so touch devices use 100% native scrolling
      delete (window as any).__lenis;
      return;
    }

    // Initialize Lenis only for desktop pointer devices with mouse wheels
    const lenis = new Lenis({
      duration: 1.1,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: "vertical",
      gestureOrientation: "vertical",
      smoothWheel: true,
      wheelMultiplier: 0.95,
      infinite: false,
    });

    (window as any).__lenis = lenis;

    let rafId: number;
    function raf(time: number) {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    }

    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      lenis.destroy();
      delete (window as any).__lenis;
    };
  }, []);

  return (
    <div className="min-h-screen bg-[#07030e] text-[#f3f4f6] font-sans antialiased selection:bg-purple-600/40 selection:text-white relative">
      <GeroldHome />
    </div>
  );
}
