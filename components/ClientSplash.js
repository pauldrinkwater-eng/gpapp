// components/ClientSplash.js
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function ClientSplash() {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // hides after 2s
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#005eb8]">
      <div className="flex flex-col items-center text-center space-y-6">
        {/* Logo from icons folder */}
        <Image
          src="/icons/512x512.png" // adjust name if different
          alt="Malthouse Surgery Logo"
          width={160}
          height={160}
          priority
        />

        {/* Welcome text */}
        <div className="text-white font-bold tracking-tight">
          <p className="text-xl md:text-2xl">Welcome to the</p>
          <p className="text-2xl md:text-3xl">Malthouse Surgery App</p>
        </div>
      </div>
    </div>
  );
}