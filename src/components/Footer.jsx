export default function Footer() {
  return (
    <footer className="py-10">
      <div className="max-w-6xl mx-auto px-6 text-center text-blue-300/70 text-sm">
        <p>
          Expat Solutions in Asia — Supporting Americans and global expats with compliant, cross‑border solutions.
        </p>
        <p className="mt-2">© {new Date().getFullYear()} Expat Solutions in Asia. All rights reserved.</p>
      </div>
    </footer>
  );
}
