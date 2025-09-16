// components/AlertTicker.jsx
"use client";
import Link from "next/link";

export default function AlertTicker({ items = [], speed = 36, label = "IMPORTANT" }) {
  if (!items?.length) return null;

  // Higher 'speed' -> faster scroll; floor duration so it never goes too fast
  const durationSec = Math.max(14, Math.round(120 / Math.max(1, speed)));

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
    <div className="outer" aria-label="Latest updates" style={{ ["--duration"]: `${durationSec}s` }}>
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
          border-radius: 0.75rem;
          border: 1px solid rgba(11, 95, 173, 0.3);
          background: #eaf4ff;
          padding: 8px 12px;
          /* Fade edges so content never looks clipped/overrunning */
          -webkit-mask-image: linear-gradient(
            to right,
            transparent,
            black 40px,
            black calc(100% - 40px),
            transparent
          );
          mask-image: linear-gradient(
            to right,
            transparent,
            black 40px,
            black calc(100% - 40px),
            transparent
          );
        }
        .inner {
          white-space: nowrap;
        }
        .track {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding-right: 2rem; /* spacing before the loop joins */
          animation: scroll var(--duration) linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .badge {
          display: inline-flex;
          align-items: center;
          height: 28px;
          padding: 0 10px;
          border-radius: 9999px;
          background: #0b5fad; /* NHS blue */
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          letter-spacing: 0.3px;
        }
        .item {
          display: inline-block;
          color: #111827; /* black-ish text */
          font-size: 14px;
          text-decoration: none;
        }
        .item:hover { text-decoration: underline; }
      `}</style>
    </div>
  );
}