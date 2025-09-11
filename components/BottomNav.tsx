// components/BottomNav.tsx
"use client";

import Link from "next/link";

export default function BottomNav() {
  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white/95 backdrop-blur p-2">
      <ul className="mx-auto flex max-w-md items-center justify-between text-sm">
        <li>
          <Link href="/" className="px-3 py-2 font-medium">Home</Link>
        </li>
        <li>
          <Link href="/opening-hours" className="px-3 py-2 font-medium">Opening Hours</Link>
        </li>
        <li>
          <Link href="/contact" className="px-3 py-2 font-medium">Contact</Link>
        </li>
      </ul>
    </nav>
  );
}
