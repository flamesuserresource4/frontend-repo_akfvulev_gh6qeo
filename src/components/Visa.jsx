import { useState } from "react";

const faqs = [
  {
    q: "What Thailand visa should I apply for?",
    a: "It depends on your goals: long-term living (Retirement or LTR), flexible stays (DTV), or premium convenience and airport services (Thailand Privilege/Elite). We’ll help you choose based on age, income, remote work/employment status, and timeline.",
  },
  {
    q: "Can you handle the application end-to-end?",
    a: "Yes. Our partner can advise eligibility, prepare documents, book appointments, and accompany you if needed. You’ll know fees and timelines up front.",
  },
  {
    q: "Do I need to be in Thailand to start?",
    a: "No. Most categories can be initiated remotely. Some steps (e.g., biometrics, visa issuance) may require an in-person visit at a Thai embassy/consulate or in Thailand.",
  },
  {
    q: "Will the visa affect my taxes?",
    a: "Visa type and number of days in Thailand may influence tax residency and how foreign income is treated. We coordinate tax planning alongside your visa process to avoid surprises.",
  },
];

const categories = [
  {
    name: "Retirement Visa (Non-O)",
    tags: ["50+ years", "Bank balance or monthly income"],
    blurb:
      "Popular for long-term stays if you’re 50+. Requires meeting financial thresholds via deposit, income, or combination.",
    docs: [
      "Passport (6+ months validity)",
      "Recent photos (per embassy specs)",
      "Thai bank letter or income proof",
      "Police clearance (sometimes required)",
      "Health insurance (varies by consulate/policy)",
    ],
  },
  {
    name: "Digital Nomad Visa (DTV)",
    tags: ["Remote workers", "Freelancers"],
    blurb:
      "A flexible option oriented to remote workers and location‑independent professionals. Good for extended stays.",
    docs: [
      "Passport and photos",
      "Proof of remote work/income",
      "Company or client letters (if applicable)",
      "Travel/health insurance",
      "Proof of funds",
    ],
  },
  {
    name: "Long‑Term Resident (LTR)",
    tags: ["High‑skill", "Wealthy global", "Remote professionals"],
    blurb:
      "A premium long‑stay path with fast‑track services for qualifying applicants (e.g., professionals, investors, retirees with assets).",
    docs: [
      "Passport and photos",
      "Proof of qualifying income/assets",
      "Employment/portfolio evidence",
      "Health insurance",
      "Background checks (as required)",
    ],
  },
  {
    name: "Thailand Privilege (Elite)",
    tags: ["1–20 year packages", "Airport services"],
    blurb:
      "Membership‑based long‑stay program with multiple package options and concierge/arrival benefits.",
    docs: [
      "Passport and photos",
      "Application/membership forms",
      "Background check",
      "Payment confirmation",
    ],
  },
];

export default function Visa() {
  const [open, setOpen] = useState(0);

  return (
    <section id="visa" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm">
            Thailand Visa Guide
          </span>
        </div>

        <h2 className="text-3xl md:text-4xl font-bold text-white">Find the right Thailand visa</h2>
        <p className="mt-3 text-blue-100/90 max-w-3xl">
          Compare popular options, see what you need to prepare, and start with a free consult. We’ll pre‑check eligibility and
          coordinate the paperwork so your timeline stays on track.
        </p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {categories.map((c) => (
            <div key={c.name} className="rounded-xl border border-white/10 bg-slate-800/60 p-6">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-white">{c.name}</h3>
                <a
                  href="?interest=Thailand%20Visa%20Assistance#consult"
                  className="text-sm font-semibold text-blue-200 hover:text-white underline underline-offset-4"
                >
                  Check my eligibility
                </a>
              </div>
              <p className="mt-2 text-blue-100/90">{c.blurb}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                {c.tags.map((t) => (
                  <span key={t} className="px-2 py-1 rounded-md bg-blue-400/10 border border-blue-300/20 text-blue-100/80">
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-5">
                <h4 className="text-sm font-semibold text-blue-200/90">Typical documents</h4>
                <ul className="mt-2 space-y-2 text-sm text-blue-100/90">
                  {c.docs.map((d) => (
                    <li key={d} className="flex items-start gap-2">
                      <input type="checkbox" className="mt-1 h-4 w-4 rounded border-white/20 bg-slate-900/60" />
                      <span>{d}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border border-white/10 bg-slate-800/60 p-6">
          <h3 className="text-xl font-semibold text-white">Frequently asked questions</h3>
          <div className="mt-4 divide-y divide-white/10">
            {faqs.map((item, idx) => (
              <button
                key={item.q}
                onClick={() => setOpen(open === idx ? -1 : idx)}
                className="w-full text-left py-4 focus:outline-none"
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium text-white">{item.q}</span>
                  <span className="text-blue-200/70 text-sm">{open === idx ? "−" : "+"}</span>
                </div>
                {open === idx && (
                  <p className="mt-2 text-blue-100/90">{item.a}</p>
                )}
              </button>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="?interest=Thailand%20Visa%20Assistance#consult"
              className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors"
            >
              Talk to a visa specialist
            </a>
            <p className="mt-2 text-sm text-blue-200/80">We’ll pre‑select “Thailand Visa Assistance” in the form to streamline your request.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
