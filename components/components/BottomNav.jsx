// components/BottomNav.jsx
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const TABS = [
  { key: "home", label: "Home", href: "/", icon: HomeIcon },
  { key: "messages", label: "Messages", href: "/messages", icon: ChatIcon },
  { key: "appts", label: "Appointments", href: "/appointments", icon: CalendarIcon },
  { key: "rx", label: "Prescriptions", href: "/prescriptions", icon: PillIcon },
  { key: "more", label: "More", href: "/more", icon: DotsIcon },
];

export default function BottomNav() {
  const pathname = usePathname();

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 border-t border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/75">
      <div className="mx-auto max-w-lg grid grid-cols-5">
        {TABS.map(({ key, label, href, icon: Icon }) => {
          const active = pathname === href;
          return (
            <Link key={key} href={href} className="flex flex-col items-center justify-center h-16 gap-1">
              <Icon active={active} />
              <span className={`text-[11px] ${active ? "text-nhs-blue font-semibold" : "text-slate-600"}`}>
                {label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}

/* inline icons */
function HomeIcon({ active }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" className={active ? "fill-nhs-blue" : "fill-slate-500"}>
    <path d="M12 3.172 3 10v11h6v-6h6v6h6V10l-9-6.828z"/></svg>;
}
function ChatIcon({ active }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" className={active ? "fill-nhs-blue" : "fill-slate-500"}>
    <path d="M4 4h16v12H7l-3 3V4z"/></svg>;
}
function CalendarIcon({ active }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" className={active ? "fill-nhs-blue" : "fill-slate-500"}>
    <path d="M7 2h2v2h6V2h2v2h3v18H4V4h3V2zm13 8H4v12h16V10z"/></svg>;
}
function PillIcon({ active }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" className={active ? "fill-nhs-blue" : "fill-slate-500"}>
    <path d="M8 3a5 5 0 0 0-5 5c0 2.8 2.2 5 5 5s5-2.2 5-5-2.2-5-5-5zm8 8-6 10h4a5 5 0 0 0 5-5v-5h-3z"/></svg>;
}
function DotsIcon({ active }) {
  return <svg width="22" height="22" viewBox="0 0 24 24" className={active ? "fill-nhs-blue" : "fill-slate-500"}>
    <path d="M6 10h2v4H6v-4zm5 0h2v4h-2v-4zm5 0h2v4h-2v-4z"/></svg>;
}