import { useState, type ReactNode } from "react"

type View = "overview" | "departments" | "tracking" | "reports"

const incidents = [
  {
    id: "020003429",
    name: "Jesica Smith",
    department: "PNP",
    type: "Flood rescue",
    location: "Block 11 lot 1, Aguho St., Pembo, Taguig City",
    time: "2 min ago",
    tone: "critical",
  },
  {
    id: "321321314",
    name: "Renato Mediola",
    department: "BFP",
    type: "Fire incident",
    location: "229 Renato Homes, Brembo St., Taguig City",
    time: "5 min ago",
    tone: "critical",
  },
  {
    id: "022312435",
    name: "Ryan Zenado",
    department: "DOH",
    type: "Medical assist",
    location: "Block 69 lot 420, Shemele St. Pinki, Taguig City",
    time: "8 min ago",
    tone: "warning",
  },
  {
    id: "321321466",
    name: "Maria Santos",
    department: "LGU",
    type: "Disaster response",
    location: "Block 38 lot 42, Horton St. Pinki, Taguig City",
    time: "12 min ago",
    tone: "warning",
  },
  {
    id: "321321466",
    name: "Luis Reyes",
    department: "BFP",
    type: "Fire incident",
    location: "Block 36 lot 42, Galaxy St. Trento, Taguig City",
    time: "18 min ago",
    tone: "critical",
  },
]

const departments = [
  ["FR", "Fire", "Fire and Rescue Operation"],
  ["PNP", "Crime", "Law Enforcement and Safety"],
  ["DR", "Disaster", "Disaster Response Coordination"],
  ["EMS", "Accident", "Humanitarian and First Aid Response"],
  ["DOH", "Medical", "Medical Services"],
  ["LGU", "LGU", "Local Government Unit"],
]

const reports = [
  {
    type: "Flood rescue",
    id: "020003429",
    date: "August 21, 2024",
    name: "Jessica Smith",
    unit: "NDDRMC – Taguig",
    location: "Block 11 Lot 1, Aguho St., Barangay Pembo, Taguig City",
    summary:
      "A rescue operation was conducted due to a sudden rise of floodwaters caused by continuous heavy rainfall. Responders immediately proceeded to the location upon receiving help.",
    action:
      "The rescue team utilized a rubber boat and life vests to safely evacuate Ms. Jessica Smith to a designated evacuation center.",
    outcome:
      "The operation was successfully completed with no reported injuries. The victim was safely relocated.",
  },
  {
    type: "Fire incident",
    id: "321321314",
    date: "September 12, 2024",
    name: "Renato Mediola",
    unit: "Bureau of Fire Protection – Taguig City",
    location: "229 Renato Homes, Brembo St., Taguig City",
    summary:
      "The Bureau of Fire Protection Taguig promptly responded after receiving the emergency call from nearby residents.",
    action:
      "Firefighters conducted suppression operations, safely rescued Mr. Mediola, and provided immediate medical attention.",
    outcome:
      "The fire was declared under control. No fatalities were reported and the rescued individual is stable.",
  },
  {
    type: "Crime incident",
    id: "022312435",
    date: "July 6, 2024",
    name: "Ryan Zenado",
    unit: "Philippine National Police – Taguig City",
    location: "Block 69 Lot 420, Shemele St., Barangay Pinqui, Taguig City",
    summary:
      "The PNP immediately dispatched a team to secure the area and provide assistance to Mr. Ryan Zenado.",
    action:
      "Responding officers rescued the victim, secured the scene, and initiated a follow-up investigation.",
    outcome:
      "The victim is safe and under observation. The case remains under investigation.",
  },
]

function Icon({
  children,
  className = "h-5 w-5",
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {children}
    </svg>
  )
}

const navItems: { id: View label: string icon: ReactNode }[] = [
  {
    id: "overview",
    label: "Emergency queue",
    icon: (
      <Icon>
        <rect x="3" y="3" width="7" height="7" rx="2" />
        <rect x="14" y="3" width="7" height="7" rx="2" />
        <rect x="3" y="14" width="7" height="7" rx="2" />
        <rect x="14" y="14" width="7" height="7" rx="2" />
      </Icon>
    ),
  },
  {
    id: "departments",
    label: "Departments",
    icon: (
      <Icon>
        <path d="M3 21h18M5 21V9l7-4 7 4v12M9 21v-7h6v7" />
      </Icon>
    ),
  },
  {
    id: "tracking",
    label: "Live tracking",
    icon: (
      <Icon>
        <path d="m3 6 6-3 6 3 6-3v15l-6 3-6-3-6 3V6Z" />
        <path d="M9 3v15M15 6v15" />
      </Icon>
    ),
  },
  {
    id: "reports",
    label: "Completed reports",
    icon: (
      <Icon>
        <path d="M6 3h9l3 3v15H6V3Z" />
        <path d="M14 3v4h4M9 12h6M9 16h6" />
      </Icon>
    ),
  },
]

function Header({ title, eyebrow }: { title: string eyebrow: string }) {
  return (
    <header className="mb-7 flex items-start justify-between gap-5">
      <div>
        <p className="mb-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          {eyebrow}
        </p>
        <h1 className="font-display text-2xl font-semibold tracking-[-0.035em] text-[#17202b] sm:text-[30px]">
          {title}
        </h1>
      </div>
      <div className="flex items-center gap-3">
        <button
          aria-label="Notifications"
          className="relative grid h-10 w-10 place-items-center rounded-xl border border-slate-200 bg-white text-slate-500 transition hover:border-slate-300 hover:text-slate-900"
        >
          <Icon className="h-[18px] w-[18px]">
            <path d="M18 8a6 6 0 0 0-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9M10 21h4" />
          </Icon>
          <span className="absolute right-2.5 top-2.5 h-1.5 w-1.5 rounded-full bg-[#d70404]" />
        </button>
        <div className="hidden items-center gap-3 rounded-xl border border-slate-200 bg-white py-1.5 pl-1.5 pr-3 sm:flex">
          <div className="grid h-8 w-8 place-items-center rounded-lg bg-[#17202b] text-[10px] font-semibold text-white">
            AD
          </div>
          <div className="text-left">
            <p className="text-xs font-semibold text-[#17202b]">Admin desk</p>
            <p className="text-[10px] text-slate-400">Taguig command</p>
          </div>
        </div>
      </div>
    </header>
  )
}

function StatusDot({ tone = "critical" }: { tone?: string }) {
  return (
    <span
      className={`inline-block h-2 w-2 rounded-full ${
        tone === "critical" ? "bg-[#d70404]" : "bg-amber-400"
      }`}
    />
  )
}

function MapCard({ large = false }: { large?: boolean }) {
  return (
    <div
      className={`relative overflow-hidden rounded-2xl bg-slate-200 ${
        large ? "min-h-[430px] lg:min-h-[590px]" : "h-[235px]"
      }`}
    >
      <img
        src="/assets/55df8.png"
        alt="Street map of the active emergency route"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className={`absolute ${
          large ? "left-[24%] top-[20%]" : "left-[24%] top-[18%]"
        } scale-75 sm:scale-100`}
      >
        <img src="/assets/bc7c7.svg" alt="" />
      </div>
      <div className="absolute left-[27%] top-[27%]">
        <img src="/assets/dba57.svg" alt="" />
      </div>
      <div className="absolute bottom-[22%] right-[24%] h-[44px] w-[32px] overflow-hidden">
        <img
          src="/assets/6be9f.png"
          alt="Destination pin"
          className="absolute left-[-406%] top-[-33%] h-[288%] w-[769%] max-w-none"
        />
      </div>
      <div className="absolute left-4 top-4 rounded-lg bg-white/90 px-3 py-2 shadow-sm backdrop-blur">
        <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
          Responder ETA
        </p>
        <p className="mt-0.5 text-sm font-semibold text-[#17202b]">04:18 min</p>
      </div>
    </div>
  )
}

function ActiveIncidentCard({ onTrack }: { onTrack: () => void }) {
  return (
    <section className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
      <div className="flex items-center justify-between border-b border-slate-100 px-5 py-4">
        <div className="flex items-center gap-2">
          <span className="live-pulse h-2 w-2 rounded-full bg-[#d70404]" />
          <p className="text-xs font-semibold uppercase tracking-[0.12em] text-[#17202b]">
            Active response
          </p>
        </div>
        <span className="text-[11px] text-slate-400">Case #020003429</span>
      </div>
      <div className="p-5">
        <div className="mb-5 flex items-center gap-4">
          <img
            src="/assets/d27dc.png"
            alt="Jesica Smith"
            className="h-16 w-16 rounded-2xl object-cover"
          />
          <div>
            <h2 className="font-display text-lg font-semibold text-[#17202b]">
              Jesica Smith
            </h2>
            <p className="mt-0.5 text-xs text-slate-400">
              Flood rescue request
            </p>
            <p className="mt-1 text-xs font-medium text-[#d70404]">
              High priority
            </p>
          </div>
        </div>
        <dl className="mb-5 grid grid-cols-2 gap-x-4 gap-y-3 text-xs">
          <div>
            <dt className="text-slate-400">Contact</dt>
            <dd className="mt-0.5 font-medium text-slate-700">0929 706 0502</dd>
          </div>
          <div>
            <dt className="text-slate-400">Blood type</dt>
            <dd className="mt-0.5 font-medium text-slate-700">O+</dd>
          </div>
          <div>
            <dt className="text-slate-400">Allergies</dt>
            <dd className="mt-0.5 font-medium text-slate-700">Seafoods</dd>
          </div>
          <div>
            <dt className="text-slate-400">Occupation</dt>
            <dd className="mt-0.5 font-medium text-slate-700">N/A</dd>
          </div>
        </dl>
        <MapCard />
        <button
          onClick={onTrack}
          className="mt-4 w-full rounded-xl bg-[#17202b] px-4 py-3 text-xs font-semibold text-white transition hover:bg-[#253241]"
        >
          Open live tracking
        </button>
      </div>
    </section>
  )
}

function Overview({
  onAssign,
  onTrack,
  onReports,
}: {
  onAssign: () => void
  onTrack: () => void
  onReports: () => void
}) {
  return (
    <>
      <Header eyebrow="Emergency operations" title="Command overview" />
      <div className="mb-6 grid gap-4 sm:grid-cols-3">
        {[
          ["Immediate response", "12", "+3 today", "/assets/d8f66.svg"],
          ["Units responding", "08", "4 departments", "/assets/7c5be.svg"],
          ["Completed", "06", "92% success rate", "/assets/9a6ea.svg"],
        ].map(([label, value, detail, color]) => (
          <div
            key={label}
            className="rounded-2xl border border-slate-200 bg-white p-5 shadow-[0_1px_2px_rgba(15,23,42,0.02)]"
          >
            <div className="mb-5 flex items-center justify-between">
              <p className="text-xs font-medium text-slate-500">{label}</p>
              <img src={color} alt="" />
            </div>
            <div className="flex items-end justify-between">
              <p className="font-display text-3xl font-semibold tracking-[-0.06em] text-[#17202b]">
                {value}
              </p>
              <p className="pb-1 text-[10px] text-slate-400">{detail}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_350px]">
        <section className="min-w-0 overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex flex-col gap-4 border-b border-slate-100 px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <h2 className="font-display text-base font-semibold text-[#17202b]">
                Requesting help
              </h2>
              <p className="mt-0.5 text-[11px] text-slate-400">
                Live incoming emergency requests
              </p>
            </div>
            <div className="flex gap-2">
              <button className="rounded-lg bg-slate-100 px-3 py-2 text-[11px] font-medium text-slate-600">
                All requests
              </button>
              <button
                onClick={onReports}
                className="rounded-lg px-3 py-2 text-[11px] font-medium text-slate-400 hover:bg-slate-50"
              >
                Completed
              </button>
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full min-w-[720px] border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[10px] uppercase tracking-[0.12em] text-slate-400">
                  <th className="px-5 py-3.5 font-medium">Status</th>
                  <th className="px-3 py-3.5 font-medium">Citizen</th>
                  <th className="px-3 py-3.5 font-medium">Incident</th>
                  <th className="px-3 py-3.5 font-medium">Department</th>
                  <th className="px-3 py-3.5 font-medium">Location</th>
                  <th className="px-5 py-3.5 font-medium">Received</th>
                </tr>
              </thead>
              <tbody className="text-xs">
                {incidents.map((incident, index) => (
                  <tr
                    key={`${incident.id}-${index}`}
                    className="group border-b border-slate-100 last:border-0 hover:bg-slate-50/80"
                  >
                    <td className="px-5 py-4">
                      <StatusDot tone={incident.tone} />
                    </td>
                    <td className="px-3 py-4">
                      <button
                        onClick={index === 0 ? onTrack : undefined}
                        className="text-left"
                      >
                        <span className="block font-medium text-slate-700 group-hover:text-[#17202b]">
                          {incident.name}
                        </span>
                        <span className="mt-0.5 block text-[10px] text-slate-400">
                          {incident.id}
                        </span>
                      </button>
                    </td>
                    <td className="px-3 py-4 text-slate-600">
                      {incident.type}
                    </td>
                    <td className="px-3 py-4">
                      <button
                        onClick={onAssign}
                        className="rounded-md bg-slate-100 px-2 py-1 text-[10px] font-semibold text-slate-600 hover:bg-slate-200"
                      >
                        {incident.department}
                      </button>
                    </td>
                    <td className="max-w-[220px] px-3 py-4 text-[11px] leading-4 text-slate-500">
                      {incident.location}
                    </td>
                    <td className="px-5 py-4 text-[10px] text-slate-400">
                      {incident.time}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
        <ActiveIncidentCard onTrack={onTrack} />
      </div>
    </>
  )
}

function Departments() {
  const [selected, setSelected] = useState("PNP")
  const selectedDepartment = departments.find((item) => item[0] === selected)
  return (
    <>
      <Header eyebrow="Dispatch workflow" title="Assign department" />
      <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
        <section className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-7">
          <div className="mb-7 flex items-center gap-4">
            <img
              src="/assets/2d324.png"
              alt="Emergency services shield"
              className="h-14 w-14 object-contain"
            />
            <div>
              <h2 className="font-display text-lg font-semibold text-[#17202b]">
                Select response unit
              </h2>
              <p className="mt-1 text-xs text-slate-400">
                Choose the best equipped department for this request.
              </p>
            </div>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {departments.map(([code, name, description], index) => (
              <button
                key={code}
                onClick={() => setSelected(code)}
                className={`group relative min-h-40 overflow-hidden rounded-2xl border p-5 text-left transition ${
                  selected === code
                    ? "border-[#d70404] bg-[#fff7f7] shadow-[0_0_0_3px_rgba(215,4,4,0.06)]"
                    : "border-slate-200 bg-slate-50 hover:border-slate-300 hover:bg-white"
                }`}
              >
                {index === 0 && (
                  <img
                    src="/assets/df10e.svg"
                    alt=""
                    className="pointer-events-none absolute left-0 top-0 opacity-[0.08]"
                  />
                )}
                <span
                  className={`mb-7 grid h-10 w-10 place-items-center rounded-xl text-[10px] font-bold tracking-wide ${
                    selected === code
                      ? "bg-[#d70404] text-white"
                      : "bg-white text-slate-600 shadow-sm"
                  }`}
                >
                  {code}
                </span>
                <span className="block font-display text-sm font-semibold text-[#17202b]">
                  {name}
                </span>
                <span className="mt-1 block text-[10px] leading-4 text-slate-400">
                  {description}
                </span>
              </button>
            ))}
          </div>
        </section>
        <aside className="h-fit rounded-2xl bg-[#17202b] p-6 text-white">
          <p className="text-[10px] font-semibold uppercase tracking-[0.16em] text-slate-400">
            Dispatch summary
          </p>
          <div className="my-6 border-y border-white/10 py-5">
            <p className="text-xs text-slate-400">Incident</p>
            <p className="mt-1 font-display text-lg font-semibold">
              Flood rescue
            </p>
            <p className="mt-4 text-xs text-slate-400">Selected unit</p>
            <p className="mt-1 text-sm font-medium">
              {selectedDepartment?.[1]} · {selected}
            </p>
          </div>
          <div className="mb-7 flex items-center justify-between text-xs">
            <span className="text-slate-400">Available teams</span>
            <span className="font-semibold">04</span>
          </div>
          <button className="w-full rounded-xl bg-[#d70404] px-4 py-3.5 text-xs font-semibold transition hover:bg-[#bb0303]">
            Confirm and dispatch
          </button>
        </aside>
      </div>
    </>
  )
}

function Tracking() {
  const [responding, setResponding] = useState(false)
  return (
    <>
      <Header eyebrow="Case #020003429" title="Live tracking" />
      <div className="grid gap-6 xl:grid-cols-[350px_minmax(0,1fr)]">
        <section className="rounded-2xl border border-slate-200 bg-white p-6">
          <div className="mb-6 flex items-center gap-4">
            <img
              src="/assets/d27dc.png"
              alt="Jesica Smith"
              className="h-[72px] w-[72px] rounded-2xl object-cover"
            />
            <div>
              <div className="mb-1 flex items-center gap-2">
                <img src="/assets/7adf7.svg" alt="" />
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#d70404]">
                  Live request
                </span>
              </div>
              <h2 className="font-display text-xl font-semibold text-[#17202b]">
                Jesica Smith
              </h2>
              <p className="text-xs text-slate-400">Citizen ID 020003429</p>
            </div>
          </div>
          <div className="space-y-4 border-y border-slate-100 py-5 text-xs">
            {[
              ["Contact number", "0929 706 0502"],
              ["Blood type", "O+"],
              ["Allergies", "Seafoods"],
              ["Occupation", "N/A"],
            ].map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4">
                <span className="text-slate-400">{label}</span>
                <span className="font-medium text-slate-700">{value}</span>
              </div>
            ))}
          </div>
          <div className="py-5">
            <p className="text-[10px] font-semibold uppercase tracking-[0.12em] text-slate-400">
              Current location
            </p>
            <p className="mt-2 text-xs leading-5 text-slate-600">
              Block 11 lot 1, Aguho St., Pembo, Taguig City
            </p>
          </div>
          <button
            onClick={() => setResponding(true)}
            className={`w-full rounded-xl px-4 py-3.5 text-xs font-semibold text-white transition ${
              responding ? "bg-[#09a507]" : "bg-[#d70404] hover:bg-[#bb0303]"
            }`}
          >
            {responding ? "Response unit dispatched" : "Respond now"}
          </button>
        </section>
        <section className="rounded-2xl border border-slate-200 bg-white p-3">
          <MapCard large />
        </section>
      </div>
    </>
  )
}

function Reports() {
  const [expanded, setExpanded] = useState(0)
  return (
    <>
      <Header eyebrow="Incident archive" title="Completed reports" />
      <div className="mb-5 flex flex-col gap-3 rounded-2xl border border-slate-200 bg-white p-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 px-2">
          <img src="/assets/0a66c.svg" alt="" />
          <span className="text-xs font-medium text-slate-600">
            6 completed operations
          </span>
        </div>
        <div className="flex gap-2">
          <button className="rounded-lg border border-slate-200 px-3 py-2 text-[11px] text-slate-500">
            All departments
          </button>
          <button className="rounded-lg bg-[#17202b] px-3 py-2 text-[11px] font-medium text-white">
            Export reports
          </button>
        </div>
      </div>
      <div className="space-y-4">
        {reports.map((report, index) => (
          <article
            key={report.id}
            className="overflow-hidden rounded-2xl border border-slate-200 bg-white"
          >
            <button
              onClick={() => setExpanded(expanded === index ? -1 : index)}
              className="flex w-full items-center justify-between gap-5 p-5 text-left sm:px-6"
            >
              <div className="flex min-w-0 items-center gap-4">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-[#eef1f4] text-[10px] font-bold text-slate-500">
                  {report.type === "Fire incident"
                    ? "BFP"
                    : report.type === "Crime incident"
                      ? "PNP"
                      : "DR"}
                </span>
                <div className="min-w-0">
                  <div className="mb-1 flex items-center gap-2">
                    <StatusDot tone="completed" />
                    <span className="text-[10px] font-medium text-[#09a507]">
                      Completed
                    </span>
                  </div>
                  <h2 className="truncate font-display text-sm font-semibold text-[#17202b] sm:text-base">
                    {report.type} · {report.name}
                  </h2>
                  <p className="mt-1 truncate text-[11px] text-slate-400">
                    {report.location}
                  </p>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-5">
                <span className="hidden text-[11px] text-slate-400 sm:block">
                  {report.date}
                </span>
                <span
                  className={`text-slate-400 transition ${
                    expanded === index ? "rotate-180" : ""
                  }`}
                >
                  <Icon className="h-4 w-4">
                    <path d="m6 9 6 6 6-6" />
                  </Icon>
                </span>
              </div>
            </button>
            {expanded === index && (
              <div className="border-t border-slate-100 bg-slate-50/60 px-5 py-6 sm:px-6">
                <div className="grid gap-6 lg:grid-cols-[220px_1fr_1fr_1fr]">
                  <dl className="space-y-3 text-xs">
                    <div>
                      <dt className="text-slate-400">User ID</dt>
                      <dd className="mt-1 font-medium text-slate-700">
                        {report.id}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Responding unit</dt>
                      <dd className="mt-1 leading-5 text-slate-700">
                        {report.unit}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-slate-400">Date</dt>
                      <dd className="mt-1 text-slate-700">{report.date}</dd>
                    </div>
                  </dl>
                  {[
                    ["Summary", report.summary],
                    ["Actions taken", report.action],
                    ["Outcome", report.outcome],
                  ].map(([heading, body]) => (
                    <div key={heading}>
                      <h3 className="mb-2 text-xs font-semibold text-[#17202b]">
                        {heading}
                      </h3>
                      <p className="text-[11px] leading-5 text-slate-500">
                        {body}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </article>
        ))}
      </div>
    </>
  )
}

export default function App() {
  const [view, setView] = useState<View>("overview")
  const current = navItems.find((item) => item.id === view)

  return (
    <div className="app-shell min-h-screen bg-[#f4f6f8] text-[#17202b]">
      <aside className="desktop-sidebar fixed inset-y-0 left-0 z-20 hidden w-[230px] flex-col border-r border-slate-200 bg-white px-4 py-6 lg:flex">
        <div className="flex items-center gap-3 px-2">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#d70404] text-[11px] font-bold tracking-wide text-white">
            SC
          </div>
          <div>
            <p className="font-display text-sm font-semibold tracking-[-0.02em]">
              SMART Command
            </p>
            <p className="text-[10px] text-slate-400">Emergency response</p>
          </div>
        </div>
        <p className="mb-3 mt-10 px-3 text-[9px] font-semibold uppercase tracking-[0.18em] text-slate-300">
          Operations
        </p>
        <nav className="space-y-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setView(item.id)}
              className={`flex w-full items-center gap-3 rounded-xl px-3 py-3 text-left text-xs font-medium transition ${
                view === item.id
                  ? "bg-[#17202b] text-white"
                  : "text-slate-500 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              <span
                className={view === item.id ? "text-white" : "text-slate-400"}
              >
                {item.icon}
              </span>
              {item.label}
              {item.id === "overview" && (
                <span className="ml-auto rounded-full bg-[#d70404] px-2 py-0.5 text-[9px] text-white">
                  12
                </span>
              )}
            </button>
          ))}
        </nav>
        <div className="mt-auto rounded-2xl bg-[#f4f6f8] p-4">
          <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold text-[#09a507]">
            <span className="h-2 w-2 rounded-full bg-[#09ba06]" />
            All systems operational
          </div>
          <p className="text-[10px] leading-4 text-slate-400">
            Last system check completed at 09:42 AM.
          </p>
        </div>
      </aside>

      <div className="pb-20 lg:ml-[230px] lg:pb-0">
        <main className="mx-auto max-w-[1440px] p-5 sm:p-7 xl:p-10">
          {view === "overview" && (
            <Overview
              onAssign={() => setView("departments")}
              onTrack={() => setView("tracking")}
              onReports={() => setView("reports")}
            />
          )}
          {view === "departments" && <Departments />}
          {view === "tracking" && <Tracking />}
          {view === "reports" && <Reports />}
        </main>
      </div>

      <nav className="mobile-nav fixed inset-x-0 bottom-0 z-30 flex border-t border-slate-200 bg-white/95 px-2 py-2 backdrop-blur lg:hidden">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setView(item.id)}
            aria-label={item.label}
            className={`flex flex-1 flex-col items-center gap-1 rounded-lg py-1.5 text-[9px] ${
              view === item.id ? "text-[#d70404]" : "text-slate-400"
            }`}
          >
            {item.icon}
            <span className="max-w-[72px] truncate">{item.label}</span>
          </button>
        ))}
      </nav>

      <div className="sr-only" aria-live="polite">
        Current view: {current?.label}
      </div>
    </div>
  )
}
