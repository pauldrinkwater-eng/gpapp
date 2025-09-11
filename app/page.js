// app/page.js
function Card({ children, as = "div", className = "" }) {
  const Tag = as;
  return (
    <Tag className={`rounded-2xl bg-white shadow-sm ring-1 ring-slate-200 ${className}`}>
      {children}
    </Tag>
  );
}

function LinkTile({ title, desc, href }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      className="block rounded-2xl ring-1 ring-slate-200 bg-white hover:bg-slate-50 transition-colors p-5 shadow-sm"
    >
      <div className="font-semibold text-[#0B4A8B]">{title}</div>
      {desc && <div className="mt-1 text-sm text-slate-600">{desc}</div>}
    </a>
  );
}

const LINKS = {
  // 🔧 Update any of these to the exact pages on your website
  appointments: "https://www.malthousesurgery.co.uk/appointments/",
  prescriptions: "https://www.malthousesurgery.co.uk/online-services/",
  fitNote: "https://www.malthousesurgery.co.uk/",
  testResults: "https://www.malthousesurgery.co.uk/",
  openingHours: "https://www.malthousesurgery.co.uk/opening-times/",
  callUs: "tel:01235468860",
  findUs: "https://maps.google.com/?q=Malthouse+Surgery+Abingdon",
  fluInfo: "https://www.malthousesurgery.co.uk/",
  contact: "https://www.malthousesurgery.co.uk/contact-us/",
  team: "https://www.malthousesurgery.co.uk/practice-information/meet-the-team/",
  register: "https://www.malthousesurgery.co.uk/new-patients/",
  updateDetails: "https://www.malthousesurgery.co.uk/online-services/update-your-details/",
};

export default function Home() {
  return (
    <div className="space-y-6">
      {/* Welcome panel */}
      <Card className="p-6">
        <h1 className="text-3xl font-bold text-[#0B4A8B]">Welcome to Malthouse Surgery</h1>
        <p className="mt-3 text-slate-700 leading-relaxed">
          Use this app to quickly access appointments, prescriptions, opening times, and the latest
          updates. Everything links straight into our main website so you always get the most
          up-to-date information.
        </p>
      </Card>

      {/* Make a Request */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-800">Make a Request</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <LinkTile
            title="Make an Appointment"
            desc="Book or request a GP appointment online."
            href={LINKS.appointments}
          />
          <LinkTile
            title="Prescription Request"
            desc="Order your repeat prescriptions online."
            href={LINKS.prescriptions}
          />
          <LinkTile
            title="Fit Note"
            desc="Request or renew a fit note online."
            href={LINKS.fitNote}
          />
          <LinkTile
            title="Test Results"
            desc="Check the results of your tests."
            href={LINKS.testResults}
          />
        </div>
      </section>

      {/* Flu banner */}
      <Card className="p-6 bg-yellow-50 ring-yellow-100">
        <h3 className="text-lg font-semibold text-slate-900">Flu Vaccination Clinics</h3>
        <p className="mt-1 text-slate-700">
          Flu and COVID vaccination clinics are now available to book.
        </p>
        <a
          href={LINKS.fluInfo}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-3 rounded-lg bg-[#0B4A8B] px-4 py-2 text-white text-sm font-medium hover:opacity-95"
        >
          Learn more
        </a>
      </Card>

      {/* Info trio */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card className="p-5">
          <div className="font-semibold text-slate-900">Opening</div>
          <div className="mt-1 text-sm text-slate-600">See today’s and holiday closures.</div>
          <a href={LINKS.openingHours} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#0B4A8B] text-sm font-medium hover:underline">
            View hours
          </a>
        </Card>

        <Card className="p-5">
          <div className="font-semibold text-slate-900">Call Us</div>
          <div className="mt-1 text-sm text-slate-600">Tap to call the surgery.</div>
          <a href={LINKS.callUs} className="mt-2 inline-block text-[#0B4A8B] text-sm font-medium hover:underline">
            01235 468860
          </a>
        </Card>

        <Card className="p-5">
          <div className="font-semibold text-slate-900">Find Us</div>
          <div className="mt-1 text-sm text-slate-600">View map and directions.</div>
          <a href={LINKS.findUs} target="_blank" rel="noreferrer" className="mt-2 inline-block text-[#0B4A8B] text-sm font-medium hover:underline">
            Open in Maps
          </a>
        </Card>
      </div>

      {/* Jump to… */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-slate-800">Jump to…</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          <LinkTile title="Contact the practice" href={LINKS.contact} />
          <LinkTile title="Practice Team" href={LINKS.team} />
          <LinkTile title="Register with our Practice" href={LINKS.register} />
          <LinkTile title="Update your Details" href={LINKS.updateDetails} />
        </div>
      </section>
    </div>
  );
}