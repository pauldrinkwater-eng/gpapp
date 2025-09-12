"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const isHome = pathname === "/";

  return (
    <header className="bg-white px-4 py-3 border-b border-gray-200">
      <div className="mx-auto flex max-w-3xl items-center">
        {/* Back button (only if not home) */}
        {!isHome && (
          <button
            onClick={() => router.back()}
            className="mr-4 text-sm text-gray-600 hover:text-gray-900"
          >
            ← Back
          </button>
        )}

        {/* Cover photo (clickable, links home) */}
        <Link href="/" className="flex-grow flex justify-center">
          <img
            src="/icons/Google-Cover-Photo.png"
            alt="Malthouse Surgery Cover"
            className="h-12 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}