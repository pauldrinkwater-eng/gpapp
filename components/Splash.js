"use client";
import { useEffect, useState } from "react";

export default function Splash({ children }) {
  const [show, setShow] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShow(false), 2000); // 2s splash
    return () => clearTimeout(timer);
  }, []);

  if (show) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-[#0b5fad] text-white">
        <h1 className="text-3xl font-bold">Welcome</h1>
      </div>
    );
  }

  return children;
}