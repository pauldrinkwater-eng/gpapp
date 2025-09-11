// components/Header.jsx
"use client";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-nhs-blue text-white">
      <div className="mx-auto max-w-lg px-4 h-12 flex items-center justify-between">
        {/* NHS mark */}
        <div className="flex items-center gap-2">
          <div className="bg-white rounded-[3px] px-1.5 py-0.5">
            <span className="block text-[14px] font-extrabold leading-none text-nhs-blue tracking-[0.02em]">
              NHS
            </span>
          </div>
          <span className="text-sm/none opacity-90">Malthouse Surgery</span>
        </div>

        {/* Right action (optional) */}
        <a
          href="https://www.malthousesurgery.co.uk/"
          target="_blank"
          rel="noreferrer"
          className="text-sm underline decoration-white/40 hover:decoration-white"
        >
          Main site
        </a>
      </div>
    </header>
  );
}