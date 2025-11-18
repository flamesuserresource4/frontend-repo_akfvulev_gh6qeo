import { Briefcase, Globe2 } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(14,165,233,0.12),transparent_40%),radial-gradient(circle_at_50%_80%,rgba(99,102,241,0.12),transparent_40%)]" />
      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/30 text-blue-200 text-sm mb-5">
              <Globe2 size={16} />
              Expat Solutions in Asia
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight">
              Guidance for American Expats living and working in Asia
            </h1>
            <p className="mt-5 text-blue-100/90 text-lg leading-relaxed">
              Moving abroad can be complicated—especially for Americans. We make it simpler with trusted partners for U.S. taxes, Thailand tax residency, cross‑border banking, pensions and investments, and international health insurance.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <a href="#consult" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
                Get a free 30‑minute consultation
              </a>
              <div className="flex items-center text-blue-200/80 text-sm">
                <Briefcase size={18} className="mr-2" />
                For digital nomads and high‑net‑worth clients as well
              </div>
            </div>
          </div>
          <div className="md:justify-self-end">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/40 to-cyan-400/40 blur-xl rounded-2xl" />
              <div className="relative rounded-2xl border border-white/10 bg-slate-800/60 backdrop-blur p-6">
                <ul className="space-y-4 text-blue-100">
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-400/30 inline-flex items-center justify-center text-xs">1</span>
                    U.S. tax advice and filings with specialist partners
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-400/30 inline-flex items-center justify-center text-xs">2</span>
                    Thailand tax residency planning for expats
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-400/30 inline-flex items-center justify-center text-xs">3</span>
                    Banking and payments—inside and outside the U.S.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-400/30 inline-flex items-center justify-center text-xs">4</span>
                    Pension and investment platforms incl. 401k/IRA options
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-6 w-6 rounded-full bg-blue-500/20 border border-blue-400/30 inline-flex items-center justify-center text-xs">5</span>
                    Health insurance quotes through our referral partners
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
