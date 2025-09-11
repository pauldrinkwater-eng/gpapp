"use client";
import { useEffect, useRef, useState } from "react";

export default function NewsCarousel({
  items = [],
  websiteNewsUrl = "https://www.malthousesurgery.co.uk/news/",
  intervalMs = 5000,
}) {
  const [idx, setIdx] = useState(0);
  const total = items.length;

  // autoplay
  const timer = useRef(null);
  const pauseRef = useRef(false);

  useEffect(() => {
    if (total <= 1) return;
    timer.current && clearInterval(timer.current);
    if (!pauseRef.current) {
      timer.current = setInterval(() => {
        setIdx((i) => (i + 1) % total);
      }, intervalMs);
    }
    return () => clearInterval(timer.current);
  }, [total, idx, intervalMs]);

  // swipe
  const touchStartX = useRef(0);
  const touchDeltaX = useRef(0);
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
    pauseRef.current = true;
    clearInterval(timer.current);
  };
  const onTouchMove = (e) => {
    touchDeltaX.current = e.touches[0].clientX - touchStartX.current;
  };
  const onTouchEnd = () => {
    const threshold = 50;
    if (touchDeltaX.current > threshold) setIdx((i) => (i - 1 + total) % total);
    else if (touchDeltaX.current < -threshold) setIdx((i) => (i + 1) % total);
    pauseRef.current = false;
  };

  if (!total) {
    return (
      <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
        <div className="text-sm text-gray-600">No news posts available right now.</div>
      </div>
    );
  }

  return (
    <div
      className="rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden"
      onMouseEnter={() => {
        pauseRef.current = true;
        clearInterval(timer.current);
      }}
      onMouseLeave={() => {
        pauseRef.current = false;
      }}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
        <h2 className="text-base font-semibold text-gray-900">Latest news</h2>
        <a
          href={websiteNewsUrl}
          target="_blank"
          rel="noreferrer"
          className="text-sm text-blue-700 hover:underline"
        >
          See all
        </a>
      </div>

      {/* Slides viewport */}
      <div className="relative w-full overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${idx * 100}%)` }}
        >
          {items.map((post, i) => (
            <a
              key={i}
              href={post.link}
              target="_blank"
              rel="noreferrer"
              className="block w-full flex-shrink-0 group"
              aria-label={post.title}
            >
              {post.image && (
                <div className="h-40 w-full overflow-hidden bg-gray-50">
                  <img
                    src={post.image}
                    alt=""
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                  />
                </div>
              )}
              <div className="p-4">
                <div className="text-sm text-gray-500">
                  {post.pubDate ? new Date(post.pubDate).toLocaleDateString() : ""}
                </div>
                <h3 className="mt-1 text-lg font-medium text-gray-900">
                  {post.title}
                </h3>
                {post.excerpt && (
                  <p className="mt-1 text-sm text-gray-600 line-clamp-3">
                    {post.excerpt}
                  </p>
                )}
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Dots */}
      {total > 1 && (
        <div className="flex items-center justify-center gap-1.5 pb-3">
          {items.map((_, i) => (
            <button
              key={i}
              aria-label={`Go to slide ${i + 1}`}
              onClick={() => setIdx(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === idx ? "w-4 bg-gray-900" : "w-1.5 bg-gray-300"
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}