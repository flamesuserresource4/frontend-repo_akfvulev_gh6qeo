export default function WhyAmericans() {
  return (
    <section id="why" className="py-16">
      <div className="max-w-5xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-8">
          <h2 className="text-3xl md:text-4xl font-bold text-white text-center">Why Americans get singled out abroad</h2>
          <p className="mt-4 text-blue-200/80 leading-relaxed">
            The United States has extra‑territorial tax and reporting rules that impact Americans worldwide. Under FATCA (the Foreign Account Tax Compliance Act), any financial institution that uses the SWIFT system to transfer money is required to share U.S. client financial information back to the United States. This reporting obligation comes with significant compliance costs and risk for banks, pension providers, and investment platforms.
          </p>
          <div className="mt-6 grid md:grid-cols-2 gap-6 text-blue-100/90">
            <div className="rounded-xl bg-slate-900/40 border border-white/10 p-5">
              <h3 className="text-white font-semibold">What this means in practice</h3>
              <ul className="list-disc list-inside mt-3 space-y-2 text-sm">
                <li>More documentation and verification when opening or maintaining accounts.</li>
                <li>Limited availability of products or services to U.S. persons living overseas.</li>
                <li>Heightened scrutiny on cross‑border transfers and investments.</li>
              </ul>
            </div>
            <div className="rounded-xl bg-slate-900/40 border border-white/10 p-5">
              <h3 className="text-white font-semibold">Account closures can happen</h3>
              <p className="mt-3 text-sm leading-relaxed">
                Even institutions located in the U.S. sometimes close or restrict accounts when a client resides outside the country. Pension providers and investment platforms may take similar steps to reduce their compliance exposure. This is frustrating—and avoidable with the right planning.
              </p>
            </div>
          </div>
          <p className="mt-6 text-blue-200/80 leading-relaxed">
            We help you navigate these rules, stay compliant, and set up practical banking, pension, and investment arrangements as an American living abroad.
          </p>
          <div className="mt-8 text-center">
            <a href="#consult" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">Talk to us about your situation</a>
          </div>
        </div>
      </div>
    </section>
  );
}
