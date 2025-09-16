// components/AlertTicker.jsx
"use client";
import Link from "next/link";

export default function AlertTicker({ items = [], label = "NEWS", durationSec = 36 }) {
  if (!items?.length) return null;

  const renderItems = (keyPrefix) =>
    items.map((it, i) => {
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
    });

  return (
    <div className="outer" aria-label="Latest updates" style={{ ["--loopSeconds"]: `${durationSec}s` }}>
      <div className="label">{label}</div>
      <div className="inner">
        <div className="track">
          {renderItems("a")}
          {renderItems("b")}
        </div>
      </div>

      <style jsx>{`
        .outer {
          display: flex;
          align-items: center;
          overflow: hidden;
          background: #005eb8; /* NHS Blue */
          color: #fff;
          font-size: 14px;
          font-weight: 600;
          letter-spacing: 0.3px;
        }
        .label {
          flex: none;
          padding: 6px 12px;
          background: #003087; /* darker NHS blue */
          border-right: 2px solid #fff;
          text-transform: uppercase;
        }
        .inner {
          flex: 1;
          white-space: nowrap;
          overflow: hidden;
          position: relative;
        }
        .track {
          display: inline-flex;
          align-items: center;
          gap: 2rem;
          padding-left: 1rem;
          animation: scroll var(--loopSeconds) linear infinite;
        }
        @keyframes scroll {
          from { transform: translateX(0); }
          to   { transform: translateX(-50%); }
        }
        .item {
          display: inline-block;
          color: #fff;
          text-decoration: none;
        }
        .item:hover {
          text-decoration: underline;
        }
      `}</style>
    </div>
  );
}