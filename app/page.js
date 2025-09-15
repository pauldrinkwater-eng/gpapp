// app/page.js (server component)
import Image from "next/image";
import Link from "next/link";
import { getNews } from "../lib/getNews";
import AlertTicker from "../components/AlertTicker"; // scrolling banner

export const revalidate = 1800; // cache page for 30 minutes

// 📌 Simplified TopCard with emerald call button
function TopCard({
  name = "Malthouse Surgery",
  phone = "01235468860",
  tagline = "Providing NHS GP care to Abingdon",
  logo = "/icons/512x512.png",
}) {
  return (
    <section className="relative">
      {/* Header background strip */}
      <div className="h-24 w-full rounded-3xl bg-[#4e5c83]" />

      {/* White card content */}
      <div className="relative -mt-10 mx-auto w-full max-w-xl rounded-[24px] border border-gray-200 bg-white p-6 text-center shadow-xl">
        {/* Logo */}
        <div className="mx-auto h-16 w-16 overflow-hidden rounded-full border border-gray-200 shadow-sm">
          <Image
            src={logo}
            alt={`${name} logo`}
            width={64}
            height={64}
            className="h-full w-full object-contain"
            priority
          />
        </div>

        {/* Practice name */}
        <h1 className="mt-4 text-2xl font-extrabold tracking-tight text-[#1b2540]">
          {name}
        </h1>

        {/* Tagline */}
        <p className="mt-2 text-sm text-gray-600">{tagline}</p>

        {/* Call button - emerald brand color */}
        <a
          href={`tel:${phone}`}
          className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-emerald-600 px-5 py-4 text-base font-bold text-white shadow-md transition hover:bg-emerald-700 active:scale-[0.99]"
          aria-label={`Call ${name}`}
        >
          {/* Phone icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.8 19.8 0 0 1 11.19 19a19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.08 4.2 2 2 0 0 1 4.06 2h3a2 2 0 0 1 2 1.72c.12.9.33 1.78.62 2.63a2 2 0 0 1-.45 2.11L8.1 9.9a16 16 0 0 0 6 6l1.44-1.13a2 2 0 0 1 2.11-.45c.85.29 1.73.5 2.63.62A2 2 0 0 1 22 16.92z" />
          </svg>
          <span>Call Now</span>
        </a>
      </div>
    </section>
  );
}

// Reusable card link with "compact" option
function RowCard({ href, title, subtitle, compact = false, className = "" }) {
  const isExternal = href?.startsWith("http") || href?.startsWith("tel:");
  const Cmp = isExternal ? "a" : Link;
  const props = { href };

  const padding = compact ? "px-4 py-3" : "px-5 py-4";
  const titleSize = compact ? "text-[15px]" : "text-[16px]";
  const subtitleSize = compact ? "text-[13px]" : "text-[14px]";

  return (
    <Cmp
      {...props}
      className={`block rounded-2xl border border-gray-200 bg-white ${padding} shadow-sm transition-shadow hover:shadow ${className}`}
      {...(isExternal ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      <div className={`${titleSize} font-medium text-[#0b5fad]`}>{title}</div>
      {subtitle && (
        <div className={`mt-1 ${subtitleSize} text-gray-600`}>{subtitle}</div>
      )}
    </Cmp>
  );
}

// Info tiles (Opening / Call / Find)
function InfoTile({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="text-[16px] font-medium">{title}</div>
      <div className="mt-1 text-[14px] text-gray-600">{children}</div>
    </div>
  );
}

export default async function HomePage() {
  const items = await getNews(5);

  const newsAlerts = (items || []).map((n) => ({
    text: n?.title ?? "News",
    href: n?.url ?? n?.link ?? "https://www.malthousesurgery.co.uk/news/",
  }));

  const alerts = [...[], ...newsAlerts];

  return (
    <div className="space-y-8 animate-page-fade pb-[calc(112px+env(safe-area-inset-bottom))]">
      {/* 🔔 Scrolling alert banner at very top */}
      <AlertTicker items={alerts} speed={36} />

      {/* 🔝 Top Section */}
      <TopCard
        name="Malthouse Surgery"
        phone="01235468860"
        tagline="Providing NHS GP care to Abingdon"
        logo="/icons/512x512.png"
      />

      {/* Welcome panel */}
      <section className="rounded-2xl bg-emerald-50/60 px-6 py-6 shadow-sm ring-1 ring-emerald-100">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Welcome to Malthouse Surgery
        </h1>
        <p className="mt-2 text-[15px] leading-6 text-gray-700">
          Use this app to quickly access appointments, prescriptions, opening,
          and the latest updates. Everything links straight into our main
          website so you always get the most up-to-date information.
        </p>
      </section>

      {/* Flu clinics banner */}
      <section className="rounded-2xl bg-blue-50 px-6 py-6 shadow-sm ring-1 ring-blue-100">
        <h3 className="text-[18px] font-medium text-gray-900">
          Flu Vaccination Clinics
        </h3>
        <p className="mt-2 text-[14px] text-gray-700">
          Flu and COVID vaccination clinics are now available to book.
        </p>
        <a
          href="https://malthousesurgery.co.uk/flu-covid-vaccinations-autumn-winter-2025/"
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
              <Link
                href="/opening-hours"
                className="mt-2 inline-block text-[14px] font-medium text-[#0b5fad]"
              >
                View hours
              </Link>
            </div>
          </InfoTile>

          <InfoTile title="Call Us">
            Tap to call the surgery.
            <div>
              <a
                href="tel:01235468860"
                className="mt-2 inline-block text-[14px] font-medium text-[#0b5fad]"
              >
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
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <RowCard compact href="/make-a-request" title="Online Requests" />
          <RowCard
            compact
            href="https://malthousesurgery.co.uk/contact-the-practice/"
            title="Contact the practice"
          />
          <RowCard
            compact
            href="https://malthousesurgery.co.uk/practice-team/"
            title="Practice Team"
          />
          <RowCard
            compact
            href="https://malthousesurgery.co.uk/register-with-our-practice/"
            title="Register with our Practice"
          />
          <RowCard
            compact
            href="https://malthousesurgery.co.uk/update-your-details/"
            title="Update your Details"
          />
        </div>
      </section>

      {/* Self-help & Resources */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Self-help & Resources
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <RowCard
            href="https://111.nhs.uk/"
            title="NHS 111"
            subtitle="Get medical help online or by phone."
          />
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
        <h2 className="mb-3 text-xl font-semibold text-gray-900">
          Accessibility & Inclusion
        </h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <RowCard
            href="https://malthousesurgery.co.uk/neurodiversity-strategy/"
            title="Neurodiversity Passport"
            subtitle="Tell us how we can make our practice accessible for you."
          />
          <RowCard
            href="https://malthousesurgery.co.uk/accessibility-statement/"
            title="Accessibility Statement"
            subtitle="Read our accessibility commitment and support."
          />
        </div>
      </section>
    </div>
  );
}
