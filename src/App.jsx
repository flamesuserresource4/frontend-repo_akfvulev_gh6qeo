import Hero from "./components/Hero";
import Services from "./components/Services";
import WhyAmericans from "./components/WhyAmericans";
import CTA from "./components/CTA";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.07),transparent_55%)] pointer-events-none" />
      <header className="py-6 border-b border-white/10 sticky top-0 backdrop-blur bg-slate-950/50 z-10">
        <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
          <div className="text-lg font-semibold">Expat Solutions in Asia</div>
          <nav className="hidden md:flex items-center gap-6 text-blue-200/80">
            <a href="#services" className="hover:text-white">Services</a>
            <a href="#why" className="hover:text-white">Why Americans?</a>
            <a href="#consult" className="hover:text-white">Consultation</a>
          </nav>
          <a href="#consult" className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-blue-500 hover:bg-blue-600 text-white font-medium">Free consult</a>
        </div>
      </header>

      <main>
        <Hero />
        <div id="services">
          <Services />
        </div>
        <WhyAmericans />
        <CTA />
      </main>

      <Footer />
    </div>
  );
}

export default App;
