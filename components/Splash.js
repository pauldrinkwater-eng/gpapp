"use client";

import { useEffect, useState } from "react";

// bump the key so it shows once for everyone after this change
const KEY = "mh_splash_seen_v4";

export default function Splash({ timeoutMs = 2000 }) {
  const [show, setShow] = useState(false);
  const [enter, setEnter] = useState(false); // start logo pop
  const [exit, setExit] = useState(false);   // overlay fade out

  useEffect(() => {
    const force = typeof window !== "undefined" && new URLSearchParams(location.search).get("splash") === "1";

    try {
      const seen = !force && localStorage.getItem(KEY);
      if (!seen) {
        setShow(true);                        // mount overlay
        const af = requestAnimationFrame(() => setEnter(true));           // start logo pop
        const t1 = setTimeout(() => setExit(true), Math.max(0, timeoutMs - 300)); // start fade out
        const t2 = setTimeout(() => {
          setShow(false);
          if (!force) localStorage.setItem(KEY, "1");
        }, timeoutMs);
        return () => { cancelAnimationFrame(af); clearTimeout(t1); clearTimeout(t2); };
      }
    } catch {
      // fallback: still show once without storage
      setShow(true);
      const af = requestAnimationFrame(() => setEnter(true));
      const t1 = setTimeout(() => setExit(true), Math.max(0, timeoutMs - 300));
      const t2 = setTimeout(() => setShow(false), timeoutMs);
      return () => { cancelAnimationFrame(af); clearTimeout(t1); clearTimeout(t2); };
    }
  }, [timeoutMs]);

  const closeNow = () => {
    setExit(true);
    setTimeout(() => {
      setShow(false);
      try { localStorage.setItem(KEY, "1"); } catch {}
    }, 300);
  };

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
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/192x192.png"
          alt="Malthouse Surgery"
          className={`h-20 w-20 rounded-md ${enter ? "animate-logo-pop" : ""}`}
        />

        {/* progress shimmer */}
        <div className="w-56 h-2 overflow-hidden rounded-full bg-white/25">
          <div className="h-full w-1/3 bg-white/90 animate-splash-shimmer" />
        </div>

        <button
          onClick={closeNow}
          className="mt-2 text-sm text-white/85 underline underline-offset-4 hover:text-white"
        >
          Skip
        </button>
      </div>
    </div>
  );
}
