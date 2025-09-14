"use client";

import Link from "next/link";

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="mx-auto flex max-w-5xl items-center">
        {/* Cover photo (clickable, links home) */}
        <Link href="/" className="flex-grow flex justify-center">
          <img
            src="/icons/Google-Cover-Photo.jpeg"
            alt="Malthouse Surgery Cover"
            className="h-36 object-contain"
          />
        </Link>
      </div>
    </header>
  );
}