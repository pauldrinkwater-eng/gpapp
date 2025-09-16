// components/AlertTicker.jsx
"use client";
import Link from "next/link";

export default function AlertTicker({
  items = [],
  label = "IMPORTANT",
  size = "sm",           // "sm" | "md"
  speed,                 // keep for backwards compatibility; lower = slower
  durationSec,           // override: exact seconds per loop
}) {
  if (!items?.length) return null;

  // Visual scale based on size
  const S = size === "md"
    ? { padY: 8, padX: 12, gap: 20, badgeH: 26, badgeFS: 12, itemFS: 14, mask: 40 }
    : { padY: 6, padX: 10, gap: 14, badgeH: 22, badgeFS: 11, itemFS: 13, mask: 28 };

  // Motion: slower by default; you can still pass speed or durationSec
  // If 'speed' is provided, convert to a slower-friendly duration.
  const derived = speed ? Math.max(22, Math.round(180 / Math.max(1, speed))) : undefined;
  const loopSeconds = durationSec ?? derived ?? 28; // default: nice & slow

  const renderItems = (keyPrefix) => (
    <>
      <span className="badge" key={`${keyPrefix}-badge`}>{label}</span>
      {items.map((it, i) => {
        const isExternal = it?.href?.startsWith("http");
        const Cmp = isExternal ? "a" : Link;
        const props = isExternal
          ? { href: it.href, target: "_blank", rel: "noreferrer" }
          : { href: it.href || "#" };
        return (
          <Cmp key={`${keyPrefix}-${i}`} {...props} className="item">
            {it?.text ?? "Update"}
          </Cmp>
        );
      })}
    </>
  );

  return (
    <div
      className="outer"
      aria-label="Latest updates"
      style={{
        ["--loopSeconds"]: `${loopSeconds}s`,
        ["--padY"]: `${S.padY}px`,
        ["--padX"]: `${S.padX}px`,
        ["--gap"]: `${S.gap}px`,
        ["--mask"]: `${S.mask}px`,
        ["--badgeH"]: `${S.badgeH}px`,
        ["--badgeFS"]: `${S.badgeFS}px`,
        ["--itemFS"]: `${S.itemFS}px`,
      }}
    >
      <div className="inner">
        <div className="track">
          {renderItems("a")}
          {renderItems("b")}
        </div>
      </div>

      <style jsx>{`
        .outer {
          position: relative;
          overflow: hidden;
          border-radius: 12px;
          border: 1px solid rgba(11, 95, 173, 0.25);
          background: #eef6ff;
          padding: var(--padY) var(--padX);
          -webkit-mask-image: linear-gradient(
            to right, transparent, black var(--mask),
            black calc(100% - var(--mask)), transparent
          );
          mask-image: linear-gradient(
            to right, transparent, black var(--mask),
            black calc(100% - var(--mask)), transparent
          );
        }
        .inner { white-space: nowrap; }
        .track {
          display: inline-flex;
          align-items: center;
          gap: var(--gap);
          padding-right: var(--gap);
          animation: scroll var(--loopSeconds) linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }
        .badge {
          display: inline-flex;
          align-items: center;
          height: var(--badgeH);
          padding: 0 10px;
          border-radius: 9999px;
          background: #0b5fad;
          color: #fff;
          font-weight: 800;
          font-size: var(--badgeFS);
          letter-spacing: 0.2px;
        }
        .item {
          display: inline-block;
          color: #111827;
          font-size: var(--itemFS);
          text-decoration: none;
          line-height: 1.2;
        }
        .item:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}