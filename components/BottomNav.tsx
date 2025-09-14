"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

/** Icon props for our inline SVGs */
type IconProps = React.SVGProps<SVGSVGElement> & { className?: string };

/** Props for each nav item */
type NavLinkProps = {
  href: string;
  label: string;
  icon: React.ComponentType<IconProps>;
  external?: boolean;
  active?: boolean;
};

function NavLink({ href, label, icon: Icon, external = false, active = false }: NavLinkProps) {
  const classes =
    "flex flex-col items-center justify-center gap-1 py-2 px-3 text-xs " +
    (active ? "text-[#0b5fad] font-semibold" : "text-gray-600");

  const inner = (
    <>
      <Icon className="h-6 w-6" aria-hidden="true" />
      <span>{label}</span>
    </>
  );

  return external ? (
    <a href={href} target="_blank" rel="noreferrer" className={classes} aria-label={label}>
      {inner}
    </a>
  ) : (
    <Link href={href} className={classes} aria-label={label}>
      {inner}
    </Link>
  );
}

/* Inline SVG icons (typed) */
const HomeIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M3 11.5 12 4l9 7.5" />
    <path d="M5 10.5V20h14v-9.5" />
  </svg>
);

const ClockIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v6l4 2" />
  </svg>
);

const PhoneIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M22 17.5v2a2 2 0 0 1-2.2 2 19 19 0 0 1-8.3-3.1 18.7 18.7 0 0 1-5.8-5.8A19 19 0 0 1 2.6 4.3 2 2 0 0 1 4.6 2h2a2 2 0 0 1 2 1.7c.1.8.3 1.7.6 2.4a2 2 0 0 1-.5 2.1l-1 1a15 15 0 0 0 5.8 5.8l1-1a2 2 0 0 1 2.1-.5c.8.3 1.6.5 2.4.6A2 2 0 0 1 22 17.5Z" />
  </svg>
);

const MapPinIcon: React.FC<IconProps> = (props) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} {...props}>
    <path d="M12 22s7-5.4 7-12a7 7 0 1 0-14 0c0 6.6 7 12 7 12Z" />
    <circle cx="12" cy="10" r="2.8" />
  </svg>
);

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 left-0 right-0 border-t border-gray-200 bg-white shadow-sm">
      <div
        className="mx-auto grid max-w-5xl grid-cols-4"
        style={{ paddingBottom: "env(safe-area-inset-bottom)" }}
      >
        <NavLink href="/" label="Home" icon={HomeIcon} active={pathname === "/"} />
        <NavLink href="/opening-hours" label="Hours" icon={ClockIcon} active={pathname === "/opening-hours"} />
        <NavLink href="tel:01235468860" label="Call" icon={PhoneIcon} external />
        <NavLink
          href="https://maps.google.com/?q=Malthouse+Surgery"
          label="Find"
          icon={MapPinIcon}
          external
        />
      </div>
    </nav>
  );
}