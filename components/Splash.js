"use client";

import { useEffect, useState } from "react";

const KEY = "mh_splash_seen_v1";

export default function Splash({ timeoutMs = 1800 }) {
  const [show, setShow] = useState(false);
  const [anim, setAnim] = useState(false); // trigger CSS animation once mounted

  useEffect(() => {
    // Only show if never seen before
    const seen = typeof window !== "undefined" && localStorage.getItem(KEY);
    if (!seen) {
      setShow(true);
      // animate in next frame
      const t = requestAnimationFrame(() => setAnim(true));
      const timer = setTimeout(() => close(), timeoutMs);
      return () => {
        cancelAnimationFrame(t);
        clearTimeout(timer);
      };
    }
  }, [timeoutMs]);

  function close() {
    // animate out then hide
    setAnim(false);
    setTimeout(() => {
      setShow(false);
      try {
        localStorage.setItem(KEY, "1");
      } catch {}
    }, 300); // must match fade-out duration
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white
        transition-opacity duration-300
        ${anim ? "opacity-100" : "opacity-0"}
      `}
      role="dialog"
      aria-label="Loading Malthouse Surgery"
    >
      {/* Content container */}
      <div className="flex flex-col items-center gap-4">
        {/* Logo + pulse/zoom (disabled if prefers-reduced-motion) */}
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/192x192.png"
            alt="Malthouse Surgery"
            className="h-16 w-16 rounded-md motion-safe:animate-splash-zoom"
          />
          {/* Soft halo */}
          <div className="absolute -inset-3 rounded-xl bg-[#005EB8]/10 blur-md" />
        </div>

        {/* App name */}
        <div className="text-lg font-semibold text-gray-900">
          Malthouse Surgery
        </div>

        {/* Progress shimmer bar */}
        <div className="w-56 h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/3 motion-safe:animate-splash-shimmer bg-[#005EB8]" />
        </div>

        {/* Skip button (for impatient users 😄) */}
        <button
          onClick={close}
          className="mt-2 text-sm text-gray-600 underline underline-offset-4 hover:text-gray-900"
        >
          Skip
        </button>
      </div>
    </div>
  );
}