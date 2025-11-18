import { ShieldCheck, Banknote, Stethoscope, FileText, Globe2, Landmark } from "lucide-react";

const services = [
  {
    icon: FileText,
    title: "United States Tax Advice",
    desc: "From simple filings to complex cross‑border situations, handled by U.S.‑qualified partners.",
  },
  {
    icon: Globe2,
    title: "Tax Residency in Thailand",
    desc: "Plan and document your tax status correctly as an expat living in Thailand.",
  },
  {
    icon: Banknote,
    title: "Banking & Payments",
    desc: "Open and manage accounts in the U.S. and abroad; solve international transfer needs.",
  },
  {
    icon: Landmark,
    title: "Pensions & Investments",
    desc: "Access global platforms; support for 401k/IRA rollovers and tax‑aware investing.",
  },
  {
    icon: Stethoscope,
    title: "Health Insurance Quotes",
    desc: "Compare international health coverage with our vetted referral partners.",
  },
  {
    icon: ShieldCheck,
    title: "Specialist U.S. Nomad & HNWI",
    desc: "Custom strategies for digital nomads and high‑net‑worth individuals.",
  },
];

export default function Services() {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center">What we help with</h2>
        <p className="text-blue-200/80 text-center mt-3 max-w-3xl mx-auto">
          Americans abroad face extra scrutiny and obligations. We make the path clearer—and friendlier—with practical, compliant solutions.
        </p>

        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map(({ icon: Icon, title, desc }) => (
            <div key={title} className="rounded-xl border border-white/10 bg-slate-800/60 p-6 hover:bg-slate-800 transition-colors">
              <div className="h-10 w-10 rounded-md bg-blue-500/20 border border-blue-400/40 inline-flex items-center justify-center text-blue-300">
                <Icon size={20} />
              </div>
              <h3 className="mt-4 text-white font-semibold text-lg">{title}</h3>
              <p className="mt-2 text-blue-200/80 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
