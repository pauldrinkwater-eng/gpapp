export const metadata = {
  title: 'Page not found',
  description: 'The page you requested could not be found.',
};
// Optional per-page override (otherwise rely on layout.js):
// export const viewport = { themeColor: '#005EB8' };

export default function NotFound() {
  return (
    <main className="p-6">
      <h1 className="text-2xl font-semibold">Not found</h1>
      <p className="mt-2">Sorry, we can’t find that page.</p>
    </main>
  );
}
