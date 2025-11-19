export default function ExpatTaxThailand() {
  return (
    <section id="thailand-tax" className="relative py-16">
      <div className="max-w-6xl mx-auto px-6">
        <div className="mb-8">
          <span className="inline-flex items-center px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/30 text-emerald-200 text-sm">
            Thailand Focus
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white">Expat Taxation in Thailand</h2>
        <p className="mt-4 text-blue-100/90 max-w-3xl leading-relaxed">
          Thailand has specific rules that can impact how your foreign and Thai-source income is treated. Residency status and remittance
          timing matter. We help you plan ahead so you remain compliant while optimizing your position.
        </p>

        <div className="mt-8 grid md:grid-cols-3 gap-6">
          <div className="rounded-xl border border-white/10 bg-slate-800/60 backdrop-blur p-6">
            <h3 className="font-semibold text-white">Residency trigger</h3>
            <p className="mt-2 text-blue-100/90">
              The first qualifying event is staying in Thailand for <span className="font-semibold text-white">180 days or more</span> in a calendar year.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/60 backdrop-blur p-6">
            <h3 className="font-semibold text-white">Income & remittances</h3>
            <p className="mt-2 text-blue-100/90">
              Treatment can differ for Thai-source vs. foreign-source income and when funds are brought into Thailand.
            </p>
          </div>
          <div className="rounded-xl border border-white/10 bg-slate-800/60 backdrop-blur p-6">
            <h3 className="font-semibold text-white">Your specific situation</h3>
            <p className="mt-2 text-blue-100/90">
              Rules vary by nationality, visa, and income type. Get tailored guidance for your case.
            </p>
          </div>
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <a
            href="#consult"
            className="inline-flex items-center justify-center px-5 py-3 rounded-lg bg-emerald-500 hover:bg-emerald-600 text-white font-semibold transition-colors shadow-lg shadow-emerald-500/10"
          >
            How does it affect my nationality and specific situation?
          </a>
          <span className="text-sm text-blue-200/80">Speak with us for a quick assessment.</span>
        </div>
      </div>
    </section>
  );
}
