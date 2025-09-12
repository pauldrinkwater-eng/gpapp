// app/page.js (server component)
import Link from "next/link";
import { getNews } from "../lib/getNews";
import NewsCarousel from "../components/NewsCarousel";
import ClientSplash from "../components/ClientSplash"; // client-only splash bridge

export const revalidate = 1800; // cache page for 30 minutes

// Large row card (lighter heading font)
function RowCard({ href, title, subtitle }) {
  const isExternal = href?.startsWith("http") || href?.startsWith("tel:");
  const Cmp = isExternal ? "a" : Link;
  const props = { href };

  return (
    <Cmp
      {...props}
      className="block rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm transition-shadow hover:shadow"
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className="text-[16px] font-medium text-[#0b5fad]">{title}</div>
      {subtitle && <div className="mt-1 text-[14px] text-gray-600">{subtitle}</div>}
    </Cmp>
  );
}

// Info tiles (Opening / Call / Find) – lighter heading font
function InfoTile({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="text-[16px] font-medium">{title}</div>
      <div className="mt-1 text-[14px] text-gray-600">{children}</div>
    </div>
  );
}

export default async function HomePage() {
  const items = await getNews(5); // latest 5 posts from your site feed

  return (
    <div className="space-y-8 animate-page-fade">
      {/* Splash overlay (first visit only) */}
      <ClientSplash />

      {/* Welcome panel */}
      <section className="rounded-2xl bg-emerald-50/60 px-6 py-6 shadow-sm ring-1 ring-emerald-100">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Welcome to Malthouse Surgery
        </h1>
        <p className="mt-2 text-[15px] leading-6 text-gray-700">
          Use this app to quickly access appointments, prescriptions, opening, and the latest updates.
          Everything links straight into our main website so you always get the most up-to-date information.
        </p>
      </section>

      {/* Make a Request */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Make a Request</h2>
        <div className="space-y-4">
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
        </div>
      </section>

      {/* Flu clinics banner */}
      <section className="rounded-2xl bg-blue-50 px-6 py-6 shadow-sm ring-1 ring-blue-100">
        <h3 className="text-[18px] font-medium text-gray-900">Flu Vaccination Clinics</h3>
        <p className="mt-2 text-[14px] text-gray-700">
          Flu and COVID vaccination clinics are now available to book.
        </p>
        <a
          href="https://www.malthousesurgery.co.uk/news"
          target="_blank"
          rel="noreferrer"
          className="mt-4 inline-flex items-center gap-2 rounded-xl border border-blue-200 bg-white px-4 py-2 text-[14px] font-medium text-[#0b5fad] hover:shadow-sm"
        >
          Learn more →
        </a>
      </section>

      {/* Opening, Call, Find */}
      <section>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          <InfoTile title="Opening Hours">
            See today’s hours and holiday closures.
            <div>
              <Link href="/opening-hours" className="mt-2 inline-block text-[14px] font-medium text-[#0b5fad]">
                View hours
              </Link>
            </div>
          </InfoTile>

          <InfoTile title="Call Us">
            Tap to call the surgery.
            <div>
              <a href="tel:01235468860" className="mt-2 inline-block text-[14px] font-medium text-[#0b5fad]">
                01235 468860
              </a>
            </div>
          </InfoTile>

          <InfoTile title="Find Us">
            View map and directions.
            <div>
              <a
                href="https://maps.google.com/?q=Malthouse+Surgery"
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-[14px] font-medium text-[#0b5fad]"
              >
                Open in Maps
              </a>
            </div>
          </InfoTile>
        </div>
      </section>

      {/* Jump to… */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Jump to…</h2>
        <div className="space-y-4">
          <RowCard href="https://www.malthousesurgery.co.uk/contact-us" title="Contact the practice" />
          <RowCard href="https://www.malthousesurgery.co.uk/practice-team" title="Practice Team" />
          <RowCard href="https://www.malthousesurgery.co.uk/register-with-us" title="Register with our Practice" />
          <RowCard href="https://www.malthousesurgery.co.uk/update-your-details" title="Update your Details" />
          <RowCard href="https://www.nhs.uk/" title="Self-help & Resources" />
        </div>
      </section>

      {/* Accessibility & Inclusion */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">Accessibility & Inclusion</h2>
        <div className="space-y-4">
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
        <NewsCarousel items={items} websiteNewsUrl="https://www.malthousesurgery.co.uk/news/" />
      </section>

      {/* Feedback */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">App Rollout – Staff Feedback</h2>
        <p className="text-[14px] text-gray-700">
          We’d love to hear your ideas on how this app could be most useful for patients and staff.
        </p>
        <a
          href="https://forms.cloud.microsoft/e/i7END6yxWM"
          target="_blank"
          rel="noreferrer"
          className="mt-2 inline-block text-[14px] font-medium underline underline-offset-4"
        >
          Open Feedback Form →
        </a>
      </section>

      {/* Install instructions */}
      <section className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
        <h2 className="text-[15px] font-medium">Add this app to your home screen</h2>
        <p className="mt-1 text-[14px] text-gray-700">
          On iPhone/iPad: tap the share icon in Safari and choose <em>Add to Home Screen</em>. On Android/Chrome:
          open the menu (⋮) and choose <em>Install app</em>.
        </p>
        <p className="mt-3 text-xs text-gray-500">
          © 2025 Malthouse Surgery. Links open the official site at malthousesurgery.co.uk.
        </p>
      </section>
    </div>
  );
}
