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
      {/* Google cover photo logo */}
      <img
        src="/icons/google-cover-photo.png"
        alt="Malthouse Surgery Logo"
        width={1024}
        height={575}
        className="animate-mh-fade-in"
        loading="eager"
        decoding="async"
      />
    </div>
  );
}