// app/more/page.js
import Link from "next/link";
import dynamic from "next/dynamic";

export const revalidate = 3600; // cache for 1 hour

// Client-only button that requests native push permission & registers the device
const EnableNotifications = dynamic(
  () => import("../../components/EnableNotifications"),
  { ssr: false }
);

function RowCard({ href, title, subtitle, external = false }) {
  const Cmp = external ? "a" : Link;
  const props = external
    ? { href, target: "_blank", rel: "noreferrer" }
    : { href };

  return (
    <Cmp
      {...props}
      className="block rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow"
    >
      <div className="text-[16px] font-medium text-[#0b5fad]">{title}</div>
      {subtitle && <div className="mt-1 text-[14px] text-gray-600">{subtitle}</div>}
    </Cmp>
  );
}

export default async function MorePage() {
  return (
    <div className="space-y-8 animate-page-fade px-5 py-6">
      <header className="space-y-1">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">More</h1>
        <p className="text-[15px] text-gray-600">
          Helpful links, policies, and information about this app.
        </p>
      </header>

      {/* NEW: Notifications */}
      <section>
        <EnableNotifications />
      </section>

      {/* Quick actions */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Quick actions</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RowCard href="/opening-hours" title="Opening Hours" subtitle="See today’s hours and holiday closures." />
          <RowCard href="/make-a-request" title="Online Requests" subtitle="Appointments, prescriptions, fit notes." />
          <RowCard href="tel:01235468860" title="Call the Surgery" subtitle="Tap to call 01235 468860" external />
          <RowCard href="https://maps.google.com/?q=Malthouse+Surgery" title="Find Us" subtitle="Open in Google Maps" external />
        </div>
      </section>

      {/* Practice info */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Practice information</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RowCard href="https://www.malthousesurgery.co.uk/practice-team/" title="Practice Team" subtitle="Meet our clinicians and staff." external />
          <RowCard href="https://www.malthousesurgery.co.uk/register-with-our-practice/" title="Register with our Practice" subtitle="How to register and eligibility." external />
          <RowCard href="https://www.malthousesurgery.co.uk/update-your-details/" title="Update your Details" subtitle="Change address, phone or preferences." external />
          <RowCard href="https://www.malthousesurgery.co.uk/contact-the-practice/" title="Contact the Practice" subtitle="Best ways to get in touch." external />
        </div>
      </section>

      {/* Policies & accessibility */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Policies & accessibility</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <RowCard href="https://www.malthousesurgery.co.uk/accessibility-statement/" title="Accessibility Statement" subtitle="Our commitment to accessible care." external />
          <RowCard href="https://www.malthousesurgery.co.uk/privacy-policy/" title="Privacy Policy" subtitle="How we use and protect your data." external />
          <RowCard href="https://malthousesurgery.co.uk/neurodiversity-strategy/" title="Neurodiversity Passport" subtitle="Tell us how to tailor your care." external />
        </div>
      </section>

      {/* Feedback */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Feedback</h2>
        <RowCard href="https://forms.cloud.microsoft/e/i7END6yxWM" title="App Feedback" subtitle="Share ideas and report issues." external />
      </section>

      {/* App info */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h3 className="text-[16px] font-medium text-gray-900">App information</h3>
        <p className="mt-1 text-[14px] text-gray-700">
          This app presents key services and links for Malthouse Surgery in an easy, mobile-friendly format.
        </p>
        <ul className="mt-3 text-[13px] text-gray-600">
          <li>• Design: NHS-styled components</li>
          <li>• Works on iOS and Android</li>
          <li>• Bottom nav for quick access</li>
        </ul>
        <p className="mt-3 text-xs text-gray-500">© {new Date().getFullYear()} Malthouse Surgery.</p>
      </section>
    </div>
  );
}