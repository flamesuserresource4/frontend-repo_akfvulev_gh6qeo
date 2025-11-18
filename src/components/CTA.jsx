import { useState } from "react";

export default function CTA() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", interest: "US Tax Advice", notes: "" });
  const [status, setStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((f) => ({ ...f, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";
      const res = await fetch(`${baseUrl}/api/leads`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone || null,
          interest: form.interest,
          notes: form.notes || null,
        }),
      });

      if (!res.ok) throw new Error(`Request failed: ${res.status}`);
      const data = await res.json();
      if (data.success) {
        setStatus("success");
        setForm({ name: "", email: "", phone: "", interest: "US Tax Advice", notes: "" });
      } else {
        throw new Error("Submission error");
      }
    } catch (err) {
      setStatus("error");
    }
  };

  return (
    <section id="consult" className="py-16">
      <div className="max-w-4xl mx-auto px-6">
        <div className="rounded-2xl border border-white/10 bg-slate-800/60 p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-white text-center">Free 30‑minute consultation</h3>
          <p className="text-blue-200/80 text-center mt-2">Tell us a bit about you and what you’re looking for.</p>

          <form onSubmit={handleSubmit} className="mt-8 grid md:grid-cols-2 gap-5">
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Name</label>
              <input name="name" value={form.name} onChange={handleChange} required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Your full name" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Email</label>
              <input name="email" type="email" value={form.email} onChange={handleChange} required className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="you@example.com" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Phone</label>
              <input name="phone" value={form.phone} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Optional" />
            </div>
            <div>
              <label className="block text-sm text-blue-200/80 mb-1">Area of interest</label>
              <select name="interest" value={form.interest} onChange={handleChange} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option>US Tax Advice</option>
                <option>Thailand Tax Residency</option>
                <option>Banking Solutions</option>
                <option>Pension & Investments</option>
                <option>Health Insurance Quotes</option>
                <option>US Digital Nomad Taxes</option>
                <option>High Net Worth Advisory</option>
                <option>Other</option>
              </select>
            </div>
            <div className="md:col-span-2">
              <label className="block text-sm text-blue-200/80 mb-1">Notes</label>
              <textarea name="notes" value={form.notes} onChange={handleChange} rows={4} className="w-full rounded-lg bg-slate-900/60 border border-white/10 px-4 py-2.5 text-white focus:outline-none focus:ring-2 focus:ring-blue-500" placeholder="Share any details that will help us prepare" />
            </div>
            <div className="md:col-span-2 flex flex-col items-center gap-3">
              <button type="submit" className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-semibold transition-colors">
                {status === "sending" ? "Sending..." : "Click here for more information"}
              </button>
              {status === "success" && (
                <p className="text-green-400">Thanks! We’ll be in touch shortly.</p>
              )}
              {status === "error" && (
                <p className="text-red-400">Something went wrong. Please try again.</p>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
