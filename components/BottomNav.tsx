"use client";
import { useRouter, usePathname } from "next/navigation";
import * as React from "react";

type IconProps = React.SVGProps<SVGSVGElement>;

type NavItem = {
  label: string;
  href: string;
  icon: (props: IconProps) => JSX.Element;
};

export default function BottomNav() {
  const router = useRouter();
  const pathname = usePathname();

  const navItems: NavItem[] = [
    { label: "Home", href: "/", icon: HomeIcon },
    { label: "Online Req", href: "/make-a-request", icon: RequestIcon },
    { label: "News", href: "/news", icon: NewsIcon },
    { label: "More", href: "/more", icon: MoreIcon },
  ];

  return (
    <nav
      className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-sm"
      style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
    >
      <div className="mx-auto flex max-w-5xl justify-around py-2">
        {navItems.map(({ label, href, icon: Icon }) => {
          const active =
            (href === "/" && pathname === "/") ||
            (href !== "/" && pathname?.startsWith(href));

          return (
            <button
              key={href}
              onClick={() => router.push(href)}
              className={`flex flex-col items-center ${
                active ? "text-[#0b5fad]" : "text-gray-600 hover:text-[#0b5fad]"
              }`}
              aria-current={active ? "page" : undefined}
            >
              <Icon className="h-6 w-6" aria-hidden />
              <span className="text-xs">{label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}

function HomeIcon(props: IconProps) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 9.75L12 3l9 6.75M4.5 10.5v9.75h15V10.5" />
    </svg>
  );
}

function NewsIcon(props: IconProps) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h8m-8 6h16" />
    </svg>
  );
}

function RequestIcon(props: IconProps) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={1.8} viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
  );
}

function MoreIcon(props: IconProps) {
  return (
    <svg {...props} fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
      <circle cx="5" cy="12" r="2" />
      <circle cx="12" cy="12" r="2" />
      <circle cx="19" cy="12" r="2" />
    </svg>
  );
}
