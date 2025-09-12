// components/ClientSplash.js
"use client";
import { useState, useEffect } from "react";

export default function ClientSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // hides after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Google cover photo logo */}
        <img
          src="/icons/google-cover-photo.png"
          alt="Malthouse Surgery Logo"
          width={280}
          height={280}
          className="animate-mh-fade-in"
          loading="eager"
          decoding="async"
        />

        {/* Optional welcome text (remove if logo already has text) */}
        <div className="font-bold tracking-tight text-gray-800 animate-mh-fade-in anim-delay-150">
          <p className="text-xl md:text-2xl">Welcome to the</p>
          <p className="text-2xl md:text-3xl">Malthouse Surgery App</p>
        </div>
      </div>
    </div>
  );
}