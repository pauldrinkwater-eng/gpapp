// components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-[#005EB8] text-white px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        <Link href="/" className="text-base font-bold">Malthouse Surgery</Link>
        <nav className="space-x-4 text-sm">
          <Link href="/opening-hours" className="underline-offset-4 hover:underline">
            Opening Hours
          </Link>
          <Link href="/contact" className="underline-offset-4 hover:underline">
            Contact
          </Link>
        </nav>
      </div>
    </header>
  );
}
