// app/_not-found.js

export const metadata = {
  title: 'Page not found – Malthouse Surgery',
  description: 'The page you requested could not be found.',
};
// ❌ Do not add themeColor here — it lives in app/layout.js via `export const viewport`

export default function NotFound() {
  return (
    <main className="mx-auto max-w-3xl p-6">
      <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
        <h1 className="text-2xl font-semibold text-gray-900">Page not found</h1>
        <p className="mt-2 text-[15px] text-gray-700">
          Sorry, we can’t find the page you’re looking for.
        </p>

        <div className="mt-4">
          <a
            href="/"
            className="inline-block rounded-lg border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-[#0b5fad] hover:shadow-sm"
          >
            ← Back to home
          </a>
        </div>
      </div>
    </main>
  );
}
