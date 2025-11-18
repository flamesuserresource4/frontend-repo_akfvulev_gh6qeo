import { CheckCircle2, Info } from "lucide-react";

export default function StreamlineChecklist() {
  return (
    <section id="streamline" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-8">
          <div className="flex items-center gap-2 text-amber-200 mb-4">
            <Info size={18} />
            <p className="text-sm">General information only — not legal or tax advice. Speak with a qualified advisor for your situation.</p>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Am I eligible for the IRS Streamlined Filing Compliance Procedures?</h2>
          <p className="mt-4 text-blue-200/80 leading-relaxed text-center max-w-3xl mx-auto">
            Many Americans abroad who fell behind unintentionally can get caught up under the Streamlined program. Here are common indicators that you may qualify:
          </p>

          <ul className="mt-8 grid md:grid-cols-2 gap-4">
            {[
              "Your failure to file or report was non‑willful (due to oversight, misunderstanding, or negligence).",
              "You live outside the United States (non‑residency) or meet the foreign presence requirements.",
              "You can file the last 3 years of delinquent or amended tax returns and related information forms.",
              "You can submit up to 6 years of FBARs (Foreign Bank Account Reports), if required.",
              "You can certify non‑willful conduct and compliance steps (Form 14653/14654, as applicable).",
              "You want to avoid larger penalties while getting back into compliance."
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 rounded-xl bg-slate-900/40 border border-white/10 p-4">
                <CheckCircle2 className="text-emerald-400 mt-0.5" size={20} />
                <span className="text-blue-100/90 text-sm leading-relaxed">{item}</span>
              </li>
            ))}
          </ul>

          <p className="mt-6 text-blue-200/80 text-sm leading-relaxed">
            Every case is different. Documentation, residency, and account history matter. We’ll connect you with U.S.‑qualified tax partners to review your facts and outline the steps to get caught up the right way.
          </p>

          <div className="mt-8 text-center">
            <a href="#consult" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-amber-500 hover:bg-amber-600 text-slate-950 font-semibold transition-colors">
              Ask about Streamlined eligibility
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
