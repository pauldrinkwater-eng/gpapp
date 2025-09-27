// app/news/page.js
'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'News – Malthouse Surgery',
  description: 'Latest updates and announcements from Malthouse Surgery.',
};

export default function NewsPage() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 10000); // 10s safety

    fetch(
      'https://www.malthousesurgery.co.uk/wp-json/wp/v2/posts?per_page=20&_fields=id,date,title,link,excerpt',
      { signal: ctrl.signal }
    )
      .then(async (r) => {
        if (!r.ok) throw new Error('Bad response');
        const posts = await r.json();
        setItems(
          posts.map((p) => ({
            id: p.id,
            title: p.title?.rendered || 'News',
            url: p.link,
            date: p.date,
            summary: p.excerpt?.rendered?.replace(/<[^>]+>/g, '') ?? '',
          }))
        );
      })
      .catch(() => setItems([]))
      .finally(() => {
        clearTimeout(timeout);
        setLoading(false);
      });

    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
  }, []);

  return (
    <div className="space-y-6 animate-page-fade px-5 py-6 pb-[calc(112px+env(safe-area-inset-bottom))]">
      <h1 className="text-2xl font-bold tracking-tight text-gray-900">Latest News</h1>
      <p className="text-[15px] text-gray-600">
        Updates from Malthouse Surgery. Tap a headline to read the full story.
      </p>

      <ul className="divide-y divide-gray-200 rounded-2xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <li className="p-4 text-sm text-gray-500">Loading news…</li>
        ) : items.length > 0 ? (
          items.map((item) => (
            <li key={item.id} className="p-4 hover:bg-gray-50">
              <a
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="block"
              >
                <div className="text-[16px] font-medium text-[#0b5fad]">
                  {item.title}
                </div>
                {item.date && (
                  <div className="mt-1 text-xs text-gray-500">
                    {new Date(item.date).toLocaleDateString('en-GB', {
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </div>
                )}
                {item.summary && (
                  <div className="mt-2 text-[14px] text-gray-700 line-clamp-2">
                    {item.summary}
                  </div>
                )}
              </a>
            </li>
          ))
        ) : (
          <li className="p-4 text-sm text-gray-500">No news available.</li>
        )}
      </ul>

      <div className="text-center">
        <Link
          href="https://www.malthousesurgery.co.uk/news/"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#0b5fad] hover:shadow-sm"
        >
          View all news →
        </Link>
      </div>
    </div>
  );
}
