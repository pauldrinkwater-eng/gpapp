"use client";
import { useMemo } from "react";

/**
 * AlertTicker
 * - Left: fixed "Important" pill (doesn't move)
 * - Right: smoothly scrolling track of items (duplicates for seamless loop)
 *
 * items: Array<{ text: string, href?: string }>
 * speed: pixels per second (e.g. 40 = faster, 20 = slower)
 */
export default function AlertTicker({ items = [], speed = 36 }) {
  // Fallback content so the track isn't empty
  const safeItems = useMemo(
    () =>
      items?.length
        ? items
        : [{ text: "No alerts right now", href: undefined }],
    [items]
  );

  // Duration is based on track width; we approximate with char count for simplicity
  const approxChars = safeItems.reduce((n, it) => n + (it?.text?.length || 0), 0);
  const approxWidthPx = Math.max(600, approxChars * 8); // rough width estimate
  const duration = Math.max(12, Math.min(60, Math.round(approxWidthPx / speed)));

  return (
    <div
      className="relative w-full overflow-hidden border-y bg-[#eef6ff] flex items-stretch"
      style={{ borderColor: "#0b5fad" }}
      role="status"
      aria-live="polite"
    >
      {/* Fixed label (doesn't scroll) */}
      <div className="shrink-0 flex items-center gap-2 px-3 md:px-4">
        <span className="rounded-md bg-[#0b5fad] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
          Important
        </span>
      </div>

      {/* Scrolling area */}
      <div className="relative flex-1 overflow-hidden group">
        {/* subtle left/right fades */}
        <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#eef6ff] to-transparent" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#eef6ff] to-transparent" />

        {/* Animated track */}
        <div
          className="flex w-max items-center gap-12 whitespace-nowrap pr-12"
          style={{
            animation: `mh-marquee ${duration}s linear infinite`,
          }}
        >
          {/* Track A */}
          {safeItems.map((item, idx) => (
            <TickerItem key={`a-${idx}`} item={item} />
          ))}
          {/* Track B (duplicate for seamless loop) */}
          {safeItems.map((item, idx) => (
            <TickerItem key={`b-${idx}`} item={item} ariaHidden />
          ))}
        </div>
      </div>

      {/* Inline CSS so no Tailwind config needed */}
      <style jsx>{`
        @keyframes mh-marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        /* Pause on hover */
        .group:hover > div { animation-play-state: paused; }
        @media (prefers-reduced-motion: reduce) {
          .group > div { animation: none !important; transform: none !important; }
        }
      `}</style>
    </div>
  );
}

function TickerItem({ item, ariaHidden = false }) {
  const content = item?.href ? (
    <a
      href={item.href}
      className="underline-offset-2 hover:underline text-gray-900"
    >
      {item.text}
    </a>
  ) : (
    <span className="text-gray-900">{item?.text}</span>
  );

  return (
    <span
      className="inline-flex items-center text-sm"
      aria-hidden={ariaHidden ? "true" : undefined}
    >
      {content}
    </span>
  );
}