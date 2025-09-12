"use client";
import { useEffect, useState } from "react";

export default function Splash() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Always show on load
    const t = setTimeout(() => {
      setFade(true);
      setTimeout(() => setShow(false), 500); // fade-out duration
    }, 1300); // visible duration before fade
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div
      className={`fixed inset-0 z-[1000] flex items-center justify-center bg-white
                  transition-opacity duration-500 ${fade ? "opacity-0" : "opacity-100"}`}
    >
      <div className="text-center">
        <div className="text-2xl font-semibold text-[#0b5fad]">Malthouse Surgery</div>
        <div className="mt-2 text-sm text-gray-600">Loading…</div>
      </div>
    </div>
  );
}
