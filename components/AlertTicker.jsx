"use client";

export default function AlertTicker({ items = [], speed = 24 }) {
  // `speed` is pixels per second (lower = slower, higher = faster)
  // Each item: { text: string, href?: string }
  const duration = Math.max(12, Math.min(60, Math.round(1000 / speed))); // clamp to sane range

  return (
    <div
      className="relative w-full overflow-hidden border-y bg-[#eef6ff]"
      style={{ borderColor: "#0b5fad" }}
      role="status"
      aria-live="polite"
    >
      <div
        className="flex w-max gap-12 whitespace-nowrap [animation:marquee_linear_infinite] hover:[animation-play-state:paused]"
        style={{ ["--marquee-duration"]: `${duration}s` }}
      >
        {/* Track A */}
        <div className="flex items-center gap-12 pr-12">
          {items.map((item, idx) => (
            <TickerItem key={`a-${idx}`} item={item} />
          ))}
        </div>

        {/* Track B (duplicate for seamless loop) */}
        <div className="flex items-center gap-12 pr-12" aria-hidden="true">
          {items.map((item, idx) => (
            <TickerItem key={`b-${idx}`} item={item} />
          ))}
        </div>
      </div>

      {/* subtle left/right fades */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-10 bg-gradient-to-r from-[#eef6ff] to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-10 bg-gradient-to-l from-[#eef6ff] to-transparent" />

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .[animation\\:marquee_linear_infinite] {
          animation: marquee var(--marquee-duration, 20s) linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .[animation\\:marquee_linear_infinite] {
            animation: none !important;
            transform: none !important;
          }
        }
      `}</style>
    </div>
  );
}

function TickerItem({ item }) {
  return (
    <span className="inline-flex items-center gap-2 text-sm">
      {/* NHS-ish blue pill label */}
      <span className="rounded-md bg-[#0b5fad] px-2 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
        Important
      </span>
      {item?.href ? (
        <a
          href={item.href}
          className="underline-offset-2 hover:underline text-gray-900"
        >
          {item.text}
        </a>
      ) : (
        <span className="text-gray-900">{item.text}</span>
      )}
    </span>
  );
}