// components/Header.jsx
"use client";

const LINKS = {
  mainSite: "https://www.malthousesurgery.co.uk/",
  news: "https://www.malthousesurgery.co.uk/news/",
};

export default function Header() {
  return (
    <header className="w-full border-b border-slate-200 bg-[#005EB8]">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-3">
          <div className="h-8 w-8 rounded-lg bg-white/90 flex items-center justify-center font-bold text-[#005EB8]">
            M
          </div>
          <div className="text-white">
            <div className="font-semibold leading-tight">Malthouse Surgery</div>
            <div className="text-xs opacity-90">Your health, made simpler.</div>
          </div>
        </div>

        {/* Right links */}
        <nav className="flex items-center gap-6 text-white">
          <a
            href={LINKS.mainSite}
            className="text-sm hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            Main Site
          </a>
          <a
            href={LINKS.news}
            className="text-sm hover:underline"
            target="_blank"
            rel="noreferrer"
          >
            News
          </a>
        </nav>
      </div>
    </header>
  );
}