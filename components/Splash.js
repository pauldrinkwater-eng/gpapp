"use client";

import { useEffect, useState } from "react";

// bump key to re-show once for everyone after this change
const KEY = "mh_splash_seen_v3";

export default function Splash({ timeoutMs = 1800 }) {
  const [show, setShow] = useState(false);
  const [enter, setEnter] = useState(false); // logo pop-in
  const [exit, setExit] = useState(false);   // overlay fade-out

  useEffect(() => {
    try {
      const seen = localStorage.getItem(KEY);
      if (!seen) {
        setShow(true);
        // enter animation next frame
        const af = requestAnimationFrame(() => setEnter(true));
        // start exit a bit before we remove it (for smooth fade)
        const startExit = setTimeout(() => setExit(true), Math.max(0, timeoutMs - 300));
        // remove and store flag after timeout
        const done = setTimeout(() => {
          setShow(false);
          localStorage.setItem(KEY, "1");
        }, timeoutMs);
        return () => {
          cancelAnimationFrame(af);
          clearTimeout(startExit);
          clearTimeout(done);
        };
      }
    } catch {
      // if localStorage not available, still show once
      setShow(true);
      const af = requestAnimationFrame(() => setEnter(true));
      const startExit = setTimeout(() => setExit(true), Math.max(0, timeoutMs - 300));
      const done = setTimeout(() => setShow(false), timeoutMs);
      return () => {
        cancelAnimationFrame(af);
        clearTimeout(startExit);
        clearTimeout(done);
      };
    }
  }, [timeoutMs]);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Loading Malthouse Surgery"
      className={`fixed inset-0 z-[1000] flex items-center justify-center
                  bg-[#005EB8] transition-opacity duration-300
                  ${exit ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center gap-4">
        {/* Logo pop/fade in */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/192x192.png"
          alt="Malthouse Surgery"
          className={`h-20 w-20 rounded-md
                      motion-safe:${enter ? "animate-logo-pop" : ""}`}
        />

        {/* Optional name under logo (white) — remove if you want logo only */}
        {/* <div className="text-white/95 text-lg font-semibold">Malthouse Surgery</div> */}

        {/* Progress shimmer */}
        <div className="w-56 h-2 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-1/3 bg-white/90 motion-safe:animate-splash-shimmer" />
        </div>

        {/* Skip button */}
        <button
          onClick={() => {
            setExit(true);
            setTimeout(() => {
              setShow(false);
              try { localStorage.setItem(KEY, "1"); } catch {}
            }, 300);
          }}
          className="mt-2 text-sm text-white/80 underline underline-offset-4 hover:text-white"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
