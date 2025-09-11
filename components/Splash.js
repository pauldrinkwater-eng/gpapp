"use client";

import { useEffect, useState } from "react";

// bump the key so it shows once for all users again
const KEY = "mh_splash_seen_v2";

export default function Splash({ timeoutMs = 1800 }) {
  const [show, setShow] = useState(false);
  const [anim, setAnim] = useState(false);

  useEffect(() => {
    try {
      const seen = localStorage.getItem(KEY);
      if (!seen) {
        setShow(true);              // mount overlay
        const af = requestAnimationFrame(() => setAnim(true)); // fade in
        const t = setTimeout(() => close(), timeoutMs);        // auto-close
        return () => { cancelAnimationFrame(af); clearTimeout(t); };
      }
    } catch {
      // if localStorage blocked, still show splash once
      setShow(true);
      const af = requestAnimationFrame(() => setAnim(true));
      const t = setTimeout(() => close(), timeoutMs);
      return () => { cancelAnimationFrame(af); clearTimeout(t); };
    }
  }, [timeoutMs]);

  function close() {
    setAnim(false);
    setTimeout(() => {
      setShow(false);
      try { localStorage.setItem(KEY, "1"); } catch {}
    }, 300); // match fade-out
  }

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white
        transition-opacity duration-300 ${anim ? "opacity-100" : "opacity-0"}`}
      role="dialog"
      aria-label="Loading Malthouse Surgery"
    >
      <div className="flex flex-col items-center gap-4">
        <div className="relative">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/icons/192x192.png"
            alt="Malthouse Surgery"
            className="h-16 w-16 rounded-md animate-splash-zoom"
          />
          <div className="absolute -inset-3 rounded-xl bg-[#005EB8]/10 blur-md" />
        </div>

        <div className="text-lg font-semibold text-gray-900">
          Malthouse Surgery
        </div>

        <div className="w-56 h-2 overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-1/3 animate-splash-shimmer bg-[#005EB8]" />
        </div>

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