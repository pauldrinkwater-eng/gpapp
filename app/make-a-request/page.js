// app/make-a-request/page.js
import Link from "next/link";

export const revalidate = 1800; // cache for 30 minutes

function RowCard({ href, title, subtitle, className = "" }) {
  const isExternal = href?.startsWith("http") || href?.startsWith("tel:");
  const Cmp = isExternal ? "a" : Link;
  const props = { href };

  return (
    <Cmp
      {...props}
      className={`block rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="text-[16px] font-medium text-[#0b5fad]">{title}</div>
      {subtitle && <div className="mt-1 text-[14px] text-gray-600">{subtitle}</div>}
    </Cmp>
  );
}

export default async function RequestsPage() {
  return (
    <div className="space-y-8 animate-page-fade px-5 py-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Online Requests</h1>
        <p className="text-[15px] text-gray-600">
          Send non-urgent requests to the practice. For urgent medical help, use <a href="https://111.nhs.uk/" target="_blank" rel="noreferrer" className="underline underline-offset-2">NHS 111</a> or call 999 in an emergency.
        </p>
      </header>

      <section className="space-y-4">
        <RowCard
          href="https://accurx.nhs.uk/patient-initiated/K84027/flow/medical-request"
          title="Make an Appointment"
          subtitle="Book or request a GP appointment online."
        />
        <RowCard
          href="https://malthousesurgery.co.uk/order-your-repeat-prescription/"
          title="Prescription Request"
          subtitle="Order your repeat prescriptions online."
        />
        <RowCard
          href="https://accurx.nhs.uk/patient-initiated/K84027/flow/fit-note"
          title="Fit Note"
          subtitle="Request or renew a fit note online."
        />
        <RowCard
          href="https://www.malthousesurgery.co.uk/test-results"
          title="Test Results"
          subtitle="Check the results of your tests."
        />
      </section>

      {/* Optional: add other helpful links below */}
      <section className="rounded-2xl bg-blue-50 px-5 py-4 shadow-sm ring-1 ring-blue-100">
        <h2 className="text-[16px] font-medium text-gray-900">Tips</h2>
        <p className="mt-1 text-[14px] text-gray-700">
          Our phone lines are busiest 8–10am. For non-urgent issues, online requests are usually quicker.
        </p>
      </section>
    </div>
  );
}