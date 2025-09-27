'use client';

import { useEffect, useState } from 'react';
import AlertTicker from './AlertTicker';

export default function AlertNewsClient() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const ctrl = new AbortController();
    const timeout = setTimeout(() => ctrl.abort(), 10000);

    fetch(
      'https://www.malthousesurgery.co.uk/wp-json/wp/v2/posts?per_page=5&_fields=id,date,title,link',
      { signal: ctrl.signal }
    )
      .then(async (r) => {
        if (!r.ok) throw new Error('Bad status');
        const posts = await r.json();
        setItems(
          posts.map((p) => ({
            text: p?.title?.rendered || 'News',
            href: p?.link || 'https://www.malthousesurgery.co.uk/news/',
          }))
        );
      })
      .catch(() => setItems([]))
      .finally(() => {
        clearTimeout(timeout);
      });

    return () => {
      clearTimeout(timeout);
      ctrl.abort();
    };
  }, []);

  return <AlertTicker items={items} size="sm" durationSec={36} />;
}
