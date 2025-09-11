"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <header className="bg-white px-4 py-3 border-b border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center justify-between">
        {/* Left: Back button if not home, otherwise logo */}
        {isHome ? (
          <Link href="/" className="flex items-center">
            <img
              src="/icons/192x192.png"
              alt="Malthouse Surgery"
              className="h-10 w-10 rounded"
            />
          </Link>
        ) : (
          <button
            onClick={() => router.back()}
            className="text-sm underline underline-offset-4 text-gray-700 hover:text-gray-900"
          >
            ← Back
          </button>
        )}

        {/* Center: Title + tagline */}
        <div className="flex flex-col items-center text-center flex-1">
          <span className="font-bold text-lg text-gray-900">
            Malthouse Surgery
          </span>
          <span className="text-sm text-gray-500">
            Your health, made simpler.
          </span>
        </div>

        {/* Right: empty span for spacing */}
        <span className="w-10" />
      </div>
    </header>
  );
}