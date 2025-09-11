"use client";

import Link from "next/link";

// Card row component
function RowCard({ href, title, subtitle }) {
  const Cmp = href?.startsWith("http") || href?.startsWith("tel:") ? "a" : Link;
  const props = Cmp === "a" ? { href } : { href };

  return (
    <Cmp
      {...props}
      className="block rounded-2xl border border-gray-200 bg-white px-4 py-3 shadow-sm hover:shadow transition-shadow"
    >
      <div className="text-[15px] font-semibold text-[#0b5fad]">{title}</div>
      {subtitle && <div className="mt-1 text-[13px] text-gray-600">{subtitle}</div>}
    </Cmp>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-8">
      {/* Welcome panel */}
      <section className="rounded-2xl bg-green-50 p-5 shadow-sm ring-1 ring-green-100">
        <h1 className="text-2xl font-extrabold tracking-tight text-gray-900">
          Welcome to Malthouse Surgery
        </h1>
        <p className="mt-2 text-[15px] leading-6 text-gray-700">
          Use this app to quickly access appointments, prescriptions, opening,
          and the latest updates. Everything links straight into our main
          website so you always get the most up-to-date information.
        </p>
      </section>

      {/* Make a Request */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Make a Request</h2>
        <div className="space-y-3">
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
            href="https://www.malthousesurgery.co.uk/fit-note"
            title="Fit Note"
            subtitle="Request or renew a fit note online."
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/test-results"
            title="Test Results"
            subtitle="Check the results of your tests."
          />
        </div>
      </section>

      {/* Flu clinics banner */}
      <section className="rounded-2xl bg-nhs-tint p-5 shadow-sm ring-1 ring-blue-100">
        <h3 className="text-base font-semibold text-nhs-blue">Flu Vaccination Clinics</h3>
        <p className="mt-1 text-sm text-gray-700">
          Flu and COVID vaccination clinics are now available to book.
        </p>
        <a
          href="https://www.malthousesurgery.co.uk/news"
          className="mt-2 inline-flex items-center text-sm font-semibold underline underline-offset-4"
        >
          Learn more →
        </a>
      </section>

      {/* Opening, Call, Find */}
      <section>
        <div className="space-y-3">
          <RowCard
            href="/opening-hours"
            title="Opening Hours"
            subtitle="See today’s hours and holiday closures."
          />
          <RowCard
            href="tel:01235468860"
            title="Call Us"
            subtitle="Tap to call the surgery. 01235 468860"
          />
          <RowCard
            href="https://maps.google.com/?q=Malthouse+Surgery"
            title="Find Us"
            subtitle="View map and directions."
          />
        </div>
      </section>

      {/* Jump to… */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Jump to…</h2>
        <div className="space-y-3">
          <RowCard
            href="https://www.malthousesurgery.co.uk/contact-us"
            title="Contact the practice"
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/practice-team"
            title="Practice Team"
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/register-with-us"
            title="Register with our Practice"
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/update-your-details"
            title="Update your Details"
          />
          <RowCard href="https://www.nhs.uk/" title="Self-help & Resources" />
        </div>
      </section>

      {/* NHS Resources */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">NHS Resources</h2>
        <div className="space-y-3">
          <RowCard href="https://111.nhs.uk/" title="NHS 111" subtitle="Get medical help online or by phone." />
          <RowCard
            href="https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy"
            title="Find a Pharmacy"
            subtitle="Locate nearby pharmacies and opening hours."
          />
          <RowCard
            href="https://www.nhs.uk/conditions/"
            title="Health A–Z"
            subtitle="Information about conditions, symptoms and treatments."
          />
          <RowCard
            href="https://www.nhs.uk/live-well/"
            title="Live Well"
            subtitle="Tips, advice and support for healthy living."
          />
        </div>
      </section>

      {/* Accessibility & Inclusion */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Accessibility & Inclusion</h2>
        <div className="space-y-3">
          <RowCard
            href="https://www.malthousesurgery.co.uk/language-services"
            title="Language Services"
            subtitle="Interpreting and translation support."
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/neurodiversity-passport"
            title="Neurodiversity Passport"
            subtitle="Tell us how we can make our practice accessible for you."
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/accessibility"
            title="Accessibility Statement"
            subtitle="Read our accessibility commitment and support."
          />
        </div>
      </section>

      {/* Latest news */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Latest news</h2>
        <div className="space-y-3">
          <RowCard
            href="https://www.malthousesurgery.co.uk/news"
            title="Flu and COVID Vaccinations – Autumn/Winter 2025"
            subtitle="26 Aug 2025"
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/news"
            title="NHS Cervical Screening Programme"
            subtitle="26 Aug 2025"
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/news"
            title="We’re Moving to Accurx Triage in September"
            subtitle="22 Aug 2025"
          />
          <RowCard
            href="https://www.malthousesurgery.co.uk/news"
            title="📢 You and Your General Practice – New NHS Patient Guide"
            subtitle="20 Aug 2025"
          />
        </div>
        <a
          href="https://www.malthousesurgery.co.uk/news"
          className="mt-2 inline-block text-sm font-semibold underline underline-offset-4"
        >
          View all →
        </a>
      </section>

      {/* Feedback */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">App Rollout – Staff Feedback</h2>
        <p className="text-sm text-gray-700">
          We’d love to hear your ideas on how this app could be most useful for patients and staff. Please share your
          feedback below:
        </p>
        <a
          href="https://forms.cloud.microsoft/e/i7END6yxWM"
          className="mt-2 inline-block text-sm font-semibold underline underline-offset-4"
        >
          Open Feedback Form →
        </a>
      </section>

      {/* Install instructions */}
      <section className="rounded-2xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-sm font-medium">Add this app to your home screen</h2>
        <p className="mt-1 text-sm text-gray-700">
          On iPhone/iPad: tap the share icon in Safari and choose <em>Add to Home Screen</em>. On Android/Chrome: open
          the menu (⋮) and choose <em>Install app</em>.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          © 2025 Malthouse Surgery. Links open the official site at malthousesurgery.co.uk.
        </p>
      </section>
    </div>
  );
}