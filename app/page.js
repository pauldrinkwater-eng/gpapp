"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Welcome */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h1 className="text-lg font-semibold text-nhs-blue">
          Welcome to Malthouse Surgery
        </h1>
        <p className="mt-1 text-sm text-gray-700">
          Quick links for patients to get things done.
        </p>
      </section>

      {/* Action tiles */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {/* Opening → View hours */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium">Opening</p>
          <Link
            href="/opening-hours"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
          >
            View hours →
          </Link>
        </div>

        {/* Example: Contact */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <p className="text-sm font-medium">Need help?</p>
          <Link
            href="/contact"
            className="mt-2 inline-flex items-center gap-2 text-sm font-semibold underline underline-offset-4"
          >
            Contact us →
          </Link>
        </div>
      </section>
    </div>
  );
}
