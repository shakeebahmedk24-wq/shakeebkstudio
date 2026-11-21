import React, { useEffect, useRef, useState } from "react";

const CURSOR_SELECTOR_INTERACTIVE =
  'a, button, [role="button"], label, summary, select, [data-cursor], [tabindex]:not([tabindex="-1"])';
const CURSOR_SELECTOR_TEXT =
  'input:not([type="button"]):not([type="submit"]):not([type="reset"]):not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="color"]), textarea, [contenteditable="true"]';

export function CreativeCursor() {
  const [enabled, setEnabled] = useState(false);
  const [visible, setVisible] = useState(false);
  const [isInteractive, setIsInteractive] = useState(false);
  const [isText, setIsText] = useState(false);
  const [isPressed, setIsPressed] = useState(false);

  const haloRef = useRef<HTMLDivElement | null>(null);
  const spotlightRef = useRef<HTMLDivElement | null>(null);

  const pointerPos = useRef({ x: -240, y: -240 });
  const haloPos = useRef({ x: -240, y: -240 });
  const spotPos = useRef({ x: -240, y: -240 });

  const visibleRef = useRef(false);
  const interactiveRef = useRef(false);
  const textRef = useRef(false);
  const reducedMotionRef = useRef(false);
  const rafIdRef = useRef<number | null>(null);

  useEffect(() => {
    if (typeof window === "undefined" || !window.matchMedia) return;

    const finePointerMq = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reducedMotionMq = window.matchMedia("(prefers-reduced-motion: reduce)");

    const sync = () => {
      reducedMotionRef.current = reducedMotionMq.matches;
      const isFine = finePointerMq.matches;
      setEnabled(isFine);
      if (!isFine) {
        visibleRef.current = false;
        setVisible(false);
      }
    };

    sync();
    finePointerMq.addEventListener("change", sync);
    reducedMotionMq.addEventListener("change", sync);

    return () => {
      finePointerMq.removeEventListener("change", sync);
      reducedMotionMq.removeEventListener("change", sync);
    };
  }, []);

  useEffect(() => {
    if (!enabled) return;

    const resolveTarget = (target: EventTarget | null) => {
      if (!(target instanceof Element)) {
        if (interactiveRef.current) {
          interactiveRef.current = false;
          setIsInteractive(false);
        }
        if (textRef.current) {
          textRef.current = false;
          setIsText(false);
        }
        return;
      }

      const nextText = Boolean(target.closest(CURSOR_SELECTOR_TEXT));
      const nextInteractive = !nextText && Boolean(target.closest(CURSOR_SELECTOR_INTERACTIVE));

      if (textRef.current !== nextText) {
        textRef.current = nextText;
        setIsText(nextText);
      }
      if (interactiveRef.current !== nextInteractive) {
        interactiveRef.current = nextInteractive;
        setIsInteractive(nextInteractive);
      }
    };

    const handlePointerMove = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== "pen") {
        if (visibleRef.current) {
          visibleRef.current = false;
          setVisible(false);
        }
        return;
      }

      pointerPos.current.x = e.clientX;
      pointerPos.current.y = e.clientY;

      if (!visibleRef.current) {
        haloPos.current.x = e.clientX;
        haloPos.current.y = e.clientY;
        spotPos.current.x = e.clientX;
        spotPos.current.y = e.clientY;
        visibleRef.current = true;
        setVisible(true);
      }

      resolveTarget(e.target);
    };

    const handlePointerDown = (e: PointerEvent) => {
      if (e.pointerType && e.pointerType !== "mouse" && e.pointerType !== "pen") return;
      setIsPressed(true);
    };

    const handlePointerUp = () => {
      setIsPressed(false);
    };

    const handleMouseLeave = () => {
      visibleRef.current = false;
      setVisible(false);
      setIsPressed(false);
    };

    const animate = () => {
      const targetX = pointerPos.current.x;
      const targetY = pointerPos.current.y;
      const isReduced = reducedMotionRef.current;

      const easeHalo = isReduced ? 1 : 0.16;
      const easeSpot = isReduced ? 1 : 0.1;

      haloPos.current.x += (targetX - haloPos.current.x) * easeHalo;
      haloPos.current.y += (targetY - haloPos.current.y) * easeHalo;

      spotPos.current.x += (targetX - spotPos.current.x) * easeSpot;
      spotPos.current.y += (targetY - spotPos.current.y) * easeSpot;

      if (haloRef.current) {
        haloRef.current.style.transform = `translate3d(${haloPos.current.x}px, ${haloPos.current.y}px, 0)`;
      }

      if (spotlightRef.current) {
        spotlightRef.current.style.transform = `translate3d(${spotPos.current.x}px, ${spotPos.current.y}px, 0)`;
      }

      rafIdRef.current = window.requestAnimationFrame(animate);
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerdown", handlePointerDown, { passive: true });
    window.addEventListener("pointerup", handlePointerUp, { passive: true });
    document.addEventListener("mouseleave", handleMouseLeave);
    window.addEventListener("blur", handleMouseLeave);

    rafIdRef.current = window.requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerdown", handlePointerDown);
      window.removeEventListener("pointerup", handlePointerUp);
      document.removeEventListener("mouseleave", handleMouseLeave);
      window.removeEventListener("blur", handleMouseLeave);
      if (rafIdRef.current !== null) {
        window.cancelAnimationFrame(rafIdRef.current);
      }
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none fixed inset-0 z-[9998] overflow-hidden transition-opacity duration-200 ${
        visible ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Subtle ambient studio spotlight illuminating dark surfaces */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 -ml-44 -mt-44 w-[352px] h-[352px] rounded-full will-change-transform"
        style={{
          background:
            "radial-gradient(circle, rgba(135, 80, 247, 0.11) 0%, rgba(168, 85, 247, 0.04) 42%, transparent 72%)",
        }}
      />

      {/* Delicate silky orbital halo synced behind the hardware SVG pointer */}
      <div ref={haloRef} className="fixed top-0 left-0 will-change-transform">
        <div
          className={`-translate-x-1/2 -translate-y-1/2 rounded-full transition-[width,height,border-color,background-color,opacity,transform] duration-200 ease-out ${
            isText
              ? "w-5 h-5 opacity-0 scale-50"
              : isInteractive
              ? "w-11 h-11 border border-[#c084fc]/65 bg-[#8750f7]/10 shadow-[0_0_22px_rgba(135,80,247,0.28)]"
              : "w-8 h-8 border border-[#c084fc]/38 bg-transparent"
          } ${isPressed ? "scale-75" : "scale-100"}`}
        />
      </div>
    </div>
  );
}
