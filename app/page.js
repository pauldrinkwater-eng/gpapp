// app/page.js (server component)
import Link from 'next/link';
import AlertNewsClient from '../components/AlertNewsClient';
import OpenInMapsButton from '../components/OpenInMapsButton';

export const revalidate = 1800; // cache page shell for 30 minutes

function RowCard({ href, title, subtitle, compact = false, className = '' }) {
  const isExternal = href?.startsWith('http') || href?.startsWith('tel:');
  const Cmp = isExternal ? 'a' : Link;
  const props = { href };

  const padding = compact ? 'px-4 py-3' : 'px-5 py-4';
  const titleSize = compact ? 'text-[15px]' : 'text-[16px]';
  const subtitleSize = compact ? 'text-[13px]' : 'text-[14px]';

  return (
    <Cmp
      {...props}
      className={`block rounded-2xl border border-gray-200 bg-white ${padding} shadow-sm transition-shadow hover:shadow ${className}`}
      {...(isExternal ? { target: '_blank', rel: 'noreferrer' } : {})}
    >
      <div className={`${titleSize} font-medium text-[#0b5fad]`}>{title}</div>
      {subtitle && <div className={`mt-1 ${subtitleSize} text-black`}>{subtitle}</div>}
    </Cmp>
  );
}

function InfoTile({ title, children }) {
  return (
    <div className="rounded-2xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="text-[16px] font-medium text-[#0b5fad]">{title}</div>
      <div className="mt-1 text-[14px] text-black">{children}</div>
    </div>
  );
}

export default function HomePage() {
  return (
    <div className="space-y-8 animate-page-fade pb-[calc(112px+env(safe-area-inset-bottom))]">
      {/* 🔔 News ticker (client-side fetch; no SSR timeout) */}
      <AlertNewsClient />

      {/* Welcome panel */}
      <section className="rounded-2xl bg-emerald-50/60 px-6 py-6 shadow-sm ring-1 ring-emerald-100 text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-gray-900">
          Welcome to
          <br />
          Malthouse Surgery
        </h1>
        <p className="mt-2 text-[15px] leading-6 text-gray-700">
          This app is designed to make it easier for patients to access our services.
          You can book appointments, request repeat prescriptions, check our opening
          times and stay informed with the latest updates from the practice.
        </p>
      </section>

      {/* Opening, Call, Find – three tiles */}
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
              <OpenInMapsButton address="Malthouse Surgery, Abingdon, Oxfordshire" />
            </div>
          </InfoTile>
        </div>
      </section>

      {/* Jump to… — compact pills */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-[#0b5fad]">Jump to…</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          <RowCard compact href="/make-a-request" title="Online Requests" />
          <RowCard compact href="https://malthousesurgery.co.uk/contact-the-practice/" title="Contact the practice" />
          <RowCard compact href="https://malthousesurgery.co.uk/practice-team/" title="Practice Team" />
          <RowCard compact href="https://gp-registration.nhs.uk/K84027/gpregistration/landing" title="Register with our Practice" />
          <RowCard compact href="https://malthousesurgery.co.uk/update-your-details/" title="Update your Details" />
        </div>
      </section>

      {/* Self-help & Resources */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-[#0b5fad]">Self-help & Resources</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <RowCard href="https://111.nhs.uk/" title="NHS 111" subtitle="Get medical help online or by phone." />
          <RowCard href="https://www.nhs.uk/service-search/pharmacy/find-a-pharmacy" title="Find a Pharmacy" subtitle="Locate nearby pharmacies and opening hours." />
          <RowCard href="https://www.nhs.uk/conditions/" title="Health A–Z" subtitle="Information about conditions, symptoms and treatments." />
          <RowCard href="https://www.nhs.uk/live-well/" title="Live Well" subtitle="Tips, advice and support for healthy living." />
        </div>
      </section>

      {/* Accessibility & Inclusion */}
      <section>
        <h2 className="mb-3 text-xl font-semibold text-[#0b5fad]">Accessibility & Inclusion</h2>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <RowCard href="https://malthousesurgery.co.uk/neurodiversity-strategy/" title="Neurodiversity Passport" subtitle="Tell us how we can make our practice accessible for you." />
          <RowCard href="https://malthousesurgery.co.uk/accessibility-statement/" title="Accessibility Statement" subtitle="Read our accessibility commitment and support." />
        </div>
      </section>
    </div>
  );
}
