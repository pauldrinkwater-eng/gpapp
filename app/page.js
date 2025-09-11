import { useEffect, useMemo, useState } from 'react';
import Shell from '../components/Shell';
import { CalendarDays, Clock, ExternalLink, MapPin, Newspaper, Phone, Search } from 'lucide-react';

// Define Route locally so we don't depend on Shell exporting it
type Route = 'home' | 'news' | 'hours';

type NewsItem = { title: string; url: string; date?: string; excerpt?: string };
type OpeningDay = { day: string; open: string | null; close: string | null };
type Hours = { phone?: string; address?: string; days: OpeningDay[] };

function formatDate(iso?: string) {
  if (!iso) return '';
  const d = new Date(iso);
  return d.toLocaleDateString(undefined, { year: 'numeric', month: 'short', day: 'numeric' });
}

function isOpenNow(hours?: Hours) {
  if (!hours?.days) return { open: false, label: '—' };
  const now = new Date();
  const weekday = now.toLocaleDateString(undefined, { weekday: 'long' });
  const today = hours.days.find(d => d.day === weekday);
  if (!today || !today.open || !today.close) return { open: false, label: 'Closed today' };
  const [oh, om] = today.open.split(':').map(Number);
  const [ch, cm] = today.close.split(':').map(Number);
  const openT = new Date(now); openT.setHours(oh, om, 0, 0);
  const closeT = new Date(now); closeT.setHours(ch, cm, 0, 0);
  const open = now >= openT && now < closeT;
  return { open, label: open ? `Open now · until ${today.close}` : `Closed · opens ${today.open}` };
}

export default function Home() {
  const [route, setRoute] = useState<Route>('home');
  const [news, setNews] = useState<NewsItem[]>([]);
  const [hours, setHours] = useState<Hours | null>(null);
  const [loading, setLoading] = useState(true);

  // Adapter so Shell's onNav: (r: string) => void is satisfied
  const handleNav = (r: string) => setRoute(r as Route);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      const [nRes, hRes] = await Promise.all([
        fetch('/api/news').then(r => r.json()),
        fetch('/api/opening-hours').then(r => r.json()),
      ]);
      if (!mounted) return;
      setNews(nRes.items || []);
      setHours(hRes);
      setLoading(false);
    }
    load();
    return () => { mounted = false; };
  }, []);

  const state = useMemo(() => (hours ? isOpenNow(hours) : { open: false, label: '—' }), [hours]);

  return (
    <Shell active={route} onNav={handleNav}>
      {loading ? (
        <div className="text-center text-slate-500 py-20">Loading…</div>
      ) : route === 'home' ? (
        <div className="space-y-6">
          <section className="bg-white rounded-2xl shadow-sm border p-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 mt-0.5" />
              <div className="flex-1">
                <p className="text-sm text-slate-500">Today</p>
                <h2 className="text-lg font-semibold">{state.label}</h2>
                {hours && (
                  <div className="mt-3 flex gap-2">
                    {hours.phone && (
                      <a href={`tel:${hours.phone}`} className="px-3 py-2 rounded-xl bg-emerald-600 text-white text-sm">Call</a>
                    )}
                    {hours.address && (
                      <a
                        href={`https://maps.google.com/?q=${encodeURIComponent(hours.address)}`}
                        target="_blank"
                        rel="noreferrer"
                        className="px-3 py-2 rounded-xl border text-sm flex items-center gap-1"
                      >
                        <MapPin className="w-4 h-4"/> Directions
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="bg-white rounded-2xl shadow-sm border">
            <div className="p-4 border-b">
              <h3 className="text-base font-semibold flex items-center gap-2"><Newspaper className="w-5 h-5"/> Latest news</h3>
            </div>
            <ul className="divide-y">
              {news.slice(0, 5).map((n, i) => (
                <li className="p-4" key={i}>
                  <a href={n.url} target="_blank" rel="noreferrer" className="group block">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-medium group-hover:underline flex items-center gap-2">
                          {n.title}
                          <ExternalLink className="w-4 h-4 text-slate-400"/>
                        </h4>
                        {n.date && <p className="text-sm text-slate-500 mt-1">{formatDate(n.date)}</p>}
                        {n.excerpt && <p className="text-sm text-slate-700 mt-2 line-clamp-2">{n.excerpt}</p>}
                      </div>
                    </div>
                  </a>
                </li>
              ))}
            </ul>
            <div className="p-4 border-t text-right">
              <a className="text-sm text-emerald-700 hover:underline" href="https://malthousesurgery.co.uk/category/news/" target="_blank" rel="noreferrer">View all news</a>
            </div>
          </section>
        </div>
      ) : route === 'news' ? (
        <NewsScreen news={news} />
      ) : (
        <HoursScreen hours={hours} onBack={() => setRoute('home')} />
      )}

      <details className="mt-8 text-sm text-slate-600">
        <summary className="cursor-pointer">Implementation notes</summary>
        <div className="mt-3 space-y-2">
          <p>• API routes scrape server-side and cache for 15 minutes (CDN-friendly).</p>
          <p>• PWA enabled via <code>next-pwa</code> with offline shell.</p>
          <p>• Add bank holiday exceptions later (merge in manual overrides if needed).</p>
        </div>
      </details>
    </Shell>
  );
}

function NewsScreen({ news }: { news: NewsItem[] }) {
  const [q, setQ] = useState('');
  const filtered = useMemo(
    () => news.filter(n => [n.title, n.excerpt].join(' ').toLowerCase().includes(q.toLowerCase())),
    [news, q]
  );
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
          <input
            value={q}
            onChange={e => setQ(e.target.value)}
            placeholder="Search news"
            className="w-full pl-9 pr-3 py-2 rounded-xl border bg-white"
          />
        </div>
        <a
          href="https://malthousesurgery.co.uk/category/news/"
          target="_blank"
          rel="noreferrer"
          className="px-3 py-2 rounded-xl border text-sm flex items-center gap-1"
        >
          Site <ExternalLink className="w-4 h-4"/>
        </a>
      </div>

      <ul className="space-y-3">
        {filtered.map((n, i) => (
          <li key={i} className="bg-white rounded-2xl shadow-sm border p-4">
            <a href={n.url} target="_blank" rel="noreferrer" className="group block">
              <h4 className="font-semibold group-hover:underline">{n.title}</h4>
              {n.date && (
                <p className="text-sm text-slate-500 mt-1 flex items-center gap-1">
                  <CalendarDays className="w-4 h-4"/>{formatDate(n.date)}
                </p>
              )}
              {n.excerpt && <p className="text-sm text-slate-700 mt-2">{n.excerpt}</p>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HoursScreen({ hours, onBack }: { hours: Hours | null; onBack: () => void }) {
  if (!hours) return null;
  return (
    <div className="space-y-4">
      {/* Sticky Back/Home bar */}
      <div className="sticky top-0 z-50 bg-[#005eb8] text-white px-3 py-2 rounded-b-xl shadow flex items-center justify-between">
        <button
          onClick={onBack}
          className="px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 font-semibold"
          aria-label="Go back to home"
        >
          ← Back
        </button>
        <div className="font-bold">Opening Hours</div>
        <button
          onClick={onBack}
          className="px-3 py-2 rounded-lg bg-white/15 hover:bg-white/25 font-semibold"
          aria-label="Go to home"
        >
          Home
        </button>
      </div>

      <div className="bg-white rounded-2xl shadow-sm border p-4">
        <h3 className="text-base font-semibold">Opening hours</h3>
        <table className="w-full text-sm mt-3">
          <tbody>
            {(hours.days || []).map((d, i) => (
              <tr key={i} className="border-t">
                <td className="py-2 text-slate-600">{d.day}</td>
                <td className="py-2 text-right font-medium">
                  {d.open ? `${d.open} – ${d.close}` : 'Closed'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {hours.phone && (
          <a href={`tel:${hours.phone}`} className="bg-emerald-600 text-white rounded-2xl p-4 flex items-center justify-center gap-2">
            <Phone className="w-5 h-5"/> Call us
          </a>
        )}
        {hours.address && (
          <a
            href={`https://maps.google.com/?q=${encodeURIComponent(hours.address)}`}
            target="_blank"
            rel="noreferrer"
            className="bg-white border rounded-2xl p-4 flex items-center justify-center gap-2"
          >
            <MapPin className="w-5 h-5"/> Directions
          </a>
        )}
      </div>
    </div>
  );
}
