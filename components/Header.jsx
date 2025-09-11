"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <header className="bg-white px-4 py-3 border-b border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center gap-3">
        {/* Back button (only if not home) */}
        {!isHome && (
          <button
            onClick={() => router.back()}
            className="mr-2 text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
        )}

        {/* Logo */}
        <Link href="/" className="flex-shrink-0">
          <img
            src="/icons/192x192.png"
            alt="Malthouse Surgery"
            className="h-10 w-10 rounded"
          />
        </Link>

        {/* Text (title + tagline) */}
        <div className="flex flex-col">
          <span className="font-semibold text-lg text-gray-900">
            Malthouse Surgery
          </span>
          <span className="text-sm text-gray-500">
            Your health, made simpler.
          </span>
        </div>
      </div>
    </header>
  );
}