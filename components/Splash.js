"use client";
import { useEffect, useState } from "react";

export default function SplashScreen({ children }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000); // 2s splash
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b5fad] text-white">
        <h1 className="text-3xl font-bold">Welcome</h1>
      </div>
    );
  }

  return children;
}