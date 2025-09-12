// components/ClientSplash.js
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClientSplash() {
  const [show, setShow] = useState(true);
  const [logoSrc, setLogoSrc] = useState("/icons/icon-512x512.png");

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // hides after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-[#33C79F] to-[#6AD97E]">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Logo with fallback */}
        <Image
          src={logoSrc}
          alt="Malthouse Surgery Logo"
          width={160}
          height={160}
          priority
          className="animate-mh-fade-in"
          onError={() => setLogoSrc("/icons/192x192.png")}
        />

        {/* Welcome text */}
        <div className="text-white font-bold tracking-tight animate-mh-fade-in anim-delay-150 drop-shadow-lg">
          <p className="text-xl md:text-2xl">Welcome to the</p>
          <p className="text-2xl md:text-3xl">Malthouse Surgery</p>
          <p className="text-xl md:text-2xl">App</p>
        </div>
      </div>
    </div>
  );
}