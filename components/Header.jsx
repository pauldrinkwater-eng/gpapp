"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const isHome = pathname === "/";

  return (
    <header className="bg-[#005EB8] text-white px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        {/* Title always links to home */}
        <Link href="/" className="text-base font-bold">
          Malthouse Surgery
        </Link>

        {/* Show Back link only if not on home */}
        {!isHome && (
          <Link
            href="/"
            className="text-sm underline underline-offset-4 hover:text-gray-200"
          >
            ← Back
          </Link>
        )}
      </div>
    </header>
  );
}