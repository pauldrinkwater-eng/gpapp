"use client";

import { useEffect, useState } from "react";

// bump to re-show once per device after this change
const KEY = "mh_splash_seen_v5";

export default function Splash({ totalMs = 1800 }) {
  // sequence flags
  const [show, setShow] = useState(false);
  const [logoIn, setLogoIn] = useState(false);
  const [titleIn, setTitleIn] = useState(false);
  const [exit, setExit] = useState(false);

  useEffect(() => {
    const force =
      typeof window !== "undefined" &&
      new URLSearchParams(location.search).get("splash") === "1";

    const seen = !force && typeof window !== "undefined" && localStorage.getItem(KEY);
    if (seen) return;

    setShow(true);

    // timeline
    const t0 = requestAnimationFrame(() => setLogoIn(true));          // 0ms: logo pop
    const t1 = setTimeout(() => setTitleIn(true), 400);               // 400ms: title fade
    const t2 = setTimeout(() => setExit(true), Math.max(0, totalMs - 300)); // start overlay fade
    const t3 = setTimeout(() => {
      setShow(false);
      if (!force) try { localStorage.setItem(KEY, "1"); } catch {}
    }, totalMs);

    return () => {
      cancelAnimationFrame(t0);
      clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, [totalMs]);

  if (!show) return null;

  return (
    <div
      role="dialog"
      aria-label="Welcome to Malthouse Surgery"
      className={`fixed inset-0 z-[1000] flex items-center justify-center
                  bg-[#005EB8] transition-opacity duration-300
                  ${exit ? "opacity-0" : "opacity-100"}`}
    >
      <div className="flex flex-col items-center">
        {/* Logo */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/icons/192x192.png"
          alt="Malthouse Surgery"
          className={`h-20 w-20 rounded-md ${logoIn ? "animate-logo-pop" : "opacity-0"}`}
        />

        {/* Soft halo pulse behind logo */}
        <div className={`relative -mt-6 h-10 w-24 overflow-visible`}>
          <div className={`absolute inset-0 mx-auto h-10 w-24 rounded-full bg-white/15 blur-lg
                           ${logoIn ? "animate-halo" : "opacity-0"}`} />
        </div>

        {/* Wordmark */}
        <div className={`mt-2 text-white/95 text-lg font-semibold
                         ${titleIn ? "animate-title-fade" : "opacity-0"}`}>
          Malthouse Surgery
        </div>
      </div>
    </div>
  );
}
