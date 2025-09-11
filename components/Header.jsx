"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <header className="bg-[#005EB8] px-4 py-3">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        {/* Left side: Back button if not home */}
        {!isHome ? (
          <button
            onClick={() => router.back()}
            className="text-sm underline underline-offset-4 text-white hover:text-gray-200"
          >
            ← Back
          </button>
        ) : (
          <span /> // keeps spacing consistent
        )}

        {/* Center: Logo always links home */}
        <Link href="/" className="flex items-center justify-center">
          <img
            src="/icons/192x192.png"
            alt="Malthouse Surgery"
            className="h-10 w-10"
          />
        </Link>

        {/* Right side: empty span to balance flexbox */}
        <span />
      </div>
    </header>
  );
}