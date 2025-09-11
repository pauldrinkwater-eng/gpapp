"use client";

import Link from "next/link";

export default function HomePage() {
  return (
    <div className="space-y-6">
      {/* Hero / Intro */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        {/* Small brand kicker – the big NHS banner comes from your Header */}
        <p className="text-xs uppercase tracking-wide text-gray-500">NHS</p>
        <h1 className="mt-1 text-xl font-bold text-nhs-blue">Malthouse Surgery</h1>
        <p className="mt-1 text-sm text-gray-700">Your health, made simpler.</p>

        {/* Quick link to main site + news */}
        <div className="mt-3 flex flex-wrap gap-3 text-sm">
          <a
            href="https://www.malthousesurgery.co.uk/"
            className="underline underline-offset-4"
          >
            Main Site
          </a>
          <a
            href="https://www.malthousesurgery.co.uk/news"
            className="underline underline-offset-4"
          >
            News
          </a>
        </div>
      </section>

      {/* Welcome copy */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h2 className="text-base font-semibold">Welcome to Malthouse Surgery</h2>
        <p className="mt-1 text-sm text-gray-700">
          Use this app to quickly access appointments, prescriptions, opening hours, and the latest updates. Everything
          links straight into our main website so you always get the most up-to-date information.
        </p>
      </section>

      {/* Make a Request */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium">Make a Request</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-2">
          {/* Make an appointment */}
          <a
            href="https://www.malthousesurgery.co.uk/appointments"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Make an Appointment
            <p className="mt-1 text-xs font-normal text-gray-600">
              Book or request a GP appointment online.
            </p>
          </a>

          {/* Prescription Request */}
          <a
            href="https://www.malthousesurgery.co.uk/prescriptions"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Prescription Request
            <p className="mt-1 text-xs font-normal text-gray-600">
              Order your repeat prescriptions online.
            </p>
          </a>

          {/* Fit Note */}
          <a
            href="https://www.malthousesurgery.co.uk/fit-note"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Fit Note
            <p className="mt-1 text-xs font-normal text-gray-600">
              Request or renew a fit note online.
            </p>
          </a>

          {/* Test Results */}
          <a
            href="https://www.malthousesurgery.co.uk/test-results"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm font-medium hover:bg-gray-50"
          >
            Test Results
            <p className="mt-1 text-xs font-normal text-gray-600">Check the results of your tests.</p>
          </a>
        </div>
      </section>

      {/* Flu clinics banner */}
      <section className="rounded-xl border border-blue-100 bg-nhs-tint p-4 shadow-sm">
        <h3 className="text-sm font-medium text-nhs-blue">Flu Vaccination Clinics</h3>
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

      {/* Opening / Call / Find */}
      <section className="grid grid-cols-1 gap-4 sm:grid-cols-3">
        {/* Opening Hours */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <h4 className="text-sm font-medium">Opening Hours</h4>
          <p className="mt-1 text-sm text-gray-700">See today’s hours and holiday closures.</p>
          <Link
            href="/opening-hours"
            className="mt-2 inline-flex items-center text-sm font-semibold underline underline-offset-4"
          >
            View hours →
          </Link>
        </div>

        {/* Call Us */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <h4 className="text-sm font-medium">Call Us</h4>
          <p className="mt-1 text-sm text-gray-700">Tap to call the surgery.</p>
          <a
            href="tel:01235468860"
            className="mt-2 inline-flex items-center text-sm font-semibold underline underline-offset-4"
          >
            01235 468860
          </a>
        </div>

        {/* Find Us */}
        <div className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
          <h4 className="text-sm font-medium">Find Us</h4>
          <p className="mt-1 text-sm text-gray-700">View map and directions.</p>
          <a
            href="https://maps.google.com/?q=Malthouse+Surgery"
            className="mt-2 inline-flex items-center text-sm font-semibold underline underline-offset-4"
          >
            Open in Maps →
          </a>
        </div>
      </section>

      {/* Jump to… */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium">Jump to…</h3>
        <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
          <a
            href="https://www.malthousesurgery.co.uk/contact-us"
            className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Contact the practice
          </a>
          <a
            href="https://www.malthousesurgery.co.uk/practice-team"
            className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Practice Team
          </a>
          <a
            href="https://www.malthousesurgery.co.uk/register-with-us"
            className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Register with our Practice
          </a>
          <a
            href="https://www.malthousesurgery.co.uk/update-your-details"
            className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Update your Details
          </a>
          <a
            href="https://www.nhs.uk/"
            className="inline-flex items-center rounded-lg border border-gray-300 px-3 py-2 text-sm hover:bg-gray-50"
          >
            Self-help & Resources
          </a>
        </div>
      </section>

      {/* NHS Resources */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
          <a
            href="https://111.nhs.uk/"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">NHS 111</div>
            <div className="mt-1 text-xs text-gray-600">Get medical help online or by phone.</div>
          </a>

          <a
            href="https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">Find a Pharmacy</div>
            <div className="mt-1 text-xs text-gray-600">Locate nearby pharmacies and opening hours.</div>
          </a>

          <a
            href="https://www.nhs.uk/conditions/"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">Health A–Z</div>
            <div className="mt-1 text-xs text-gray-600">Information about conditions, symptoms and treatments.</div>
          </a>

          <a
            href="https://www.nhs.uk/live-well/"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">Live Well</div>
            <div className="mt-1 text-xs text-gray-600">Tips, advice and support for healthy living.</div>
          </a>
        </div>
      </section>

      {/* Accessibility & Inclusion */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium">Accessibility & Inclusion</h3>
        <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-3">
          <a
            href="https://www.malthousesurgery.co.uk/language-services"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">Language Services</div>
            <div className="mt-1 text-xs text-gray-600">Interpreting and translation support.</div>
          </a>

          <a
            href="https://www.malthousesurgery.co.uk/neurodiversity-passport"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">Neurodiversity Passport</div>
            <div className="mt-1 text-xs text-gray-600">Tell us how we can make our practice accessible for you.</div>
          </a>

          <a
            href="https://www.malthousesurgery.co.uk/accessibility"
            className="block rounded-lg border border-gray-300 px-4 py-3 text-sm hover:bg-gray-50"
          >
            <div className="font-medium">Accessibility Statement</div>
            <div className="mt-1 text-xs text-gray-600">Read our accessibility commitment and support.</div>
          </a>
        </div>
      </section>

      {/* Latest news */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium">Latest news</h3>
          <a
            href="https://www.malthousesurgery.co.uk/news"
            className="text-sm font-semibold underline underline-offset-4"
          >
            View all
          </a>
        </div>

        {/* Static list matching your snapshot; you can replace with live data later */}
        <ul className="mt-3 space-y-2 text-sm">
          <li className="flex items-baseline justify-between gap-4">
            <a href="https://www.malthousesurgery.co.uk/news" className="hover:underline">
              Flu and COVID Vaccinations – Autumn/Winter 2025
            </a>
            <span className="text-xs text-gray-500">26 Aug 2025</span>
          </li>
          <li className="flex items-baseline justify-between gap-4">
            <a href="https://www.malthousesurgery.co.uk/news" className="hover:underline">
              NHS Cervical Screening Programme
            </a>
            <span className="text-xs text-gray-500">26 Aug 2025</span>
          </li>
          <li className="flex items-baseline justify-between gap-4">
            <a href="https://www.malthousesurgery.co.uk/news" className="hover:underline">
              We’re Moving to Accurx Triage in September
            </a>
            <span className="text-xs text-gray-500">22 Aug 2025</span>
          </li>
          <li className="flex items-baseline justify-between gap-4">
            <a href="https://www.malthousesurgery.co.uk/news" className="hover:underline">
              📢 You and Your General Practice – New NHS Patient Guide
            </a>
            <span className="text-xs text-gray-500">20 Aug 2025</span>
          </li>
        </ul>
      </section>

      {/* App Rollout – Staff Feedback */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium">App Rollout – Staff Feedback</h3>
        <p className="mt-1 text-sm text-gray-700">
          We’d love to hear your ideas on how this app could be most useful for patients and staff. Please share your feedback below:
        </p>
        <a
          href="https://forms.gle/"
          className="mt-2 inline-flex items-center text-sm font-semibold underline underline-offset-4"
        >
          Open Feedback Form →
        </a>
      </section>

      {/* Install hint */}
      <section className="rounded-xl border border-gray-200 bg-white p-4 shadow-sm">
        <h3 className="text-sm font-medium">Add this app to your home screen</h3>
        <p className="mt-1 text-sm text-gray-700">
          On iPhone/iPad: tap the share icon in Safari and choose <em>Add to Home Screen</em>. On Android/Chrome: open the menu (⋮) and choose <em>Install app</em>.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          © 2025 Malthouse Surgery. Links open the official site at malthousesurgery.co.uk.
        </p>
      </section>
    </div>
  );
}