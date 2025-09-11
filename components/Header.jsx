"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <header className="bg-[#005EB8] px-4 py-3 text-white">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        {/* Left: Back button (if not home) OR Logo (if home) */}
        {isHome ? (
          <Link href="/" className="flex items-center">
            <img
              src="/icons/192x192.png"
              alt="Malthouse Surgery"
              className="h-10 w-10"
            />
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className="text-sm underline underline-offset-4 hover:text-gray-200"
          >
            ← Back
          </button>
        )}

        {/* Center: Title */}
        <h1 className="text-base font-bold text-center flex-1">
          Malthouse Surgery
        </h1>

        {/* Right: empty span for spacing */}
        <span className="w-10" />
      </div>
    </header>
  );
}