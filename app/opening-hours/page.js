'use client';

function Row({ label, value }) {
  return (
    <div className="flex justify-between border-b border-gray-200 py-2 text-sm">
      <span className="font-medium text-gray-700">{label}</span>
      <span className="text-gray-900">{value}</span>
    </div>
  );
}

export default function OpeningHoursPage() {
  return (
    <div className="space-y-6 pb-[calc(96px+env(safe-area-inset-bottom))]">
      <section className="rounded-2xl bg-green-50 p-5 shadow-sm ring-1 ring-green-100">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">Opening Hours</h1>
        <p className="mt-2 text-[15px] leading-6 text-gray-700">
          Our regular opening hours are listed below. Extended hours and bank holiday information is
          also available.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-3 text-base font-semibold text-nhs-blue">Regular Hours</h2>
        <div>
          <Row label="Monday" value="08:00 – 18:30" />
          <Row label="Tuesday" value="08:00 – 18:30" />
          <Row label="Wednesday" value="08:00 – 18:30" />
          <Row label="Thursday" value="08:00 – 18:30" />
          <Row label="Friday" value="08:00 – 18:30" />
          <Row label="Saturday" value="Closed" />
          <Row label="Sunday" value="Closed" />
        </div>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-2 text-base font-semibold text-nhs-blue">Extended Hours</h2>
        <p className="text-sm text-gray-700">
          We also offer extended hours appointments on some evenings and weekends. Please contact
          reception for availability.
        </p>
      </section>

      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="mb-2 text-base font-semibold text-nhs-blue">Bank Holidays</h2>
        <p className="text-sm text-gray-700">
          The surgery is closed on all UK Bank Holidays. Please call NHS 111 when we are closed.
        </p>
      </section>
    </div>
  );
}
