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
        {/* Logo */}
        <Image
          src="/logo.png" // replace with your logo file in /public
          alt="Malthouse Surgery Logo"
          width={120}
          height={120}
          className="rounded-md"
        />

        {/* Welcome text */}
        <h1 className="text-white text-2xl md:text-3xl font-bold tracking-tight">
          Welcome to the Malthouse Surgery App
        </h1>
      </div>
    </div>
  );
}