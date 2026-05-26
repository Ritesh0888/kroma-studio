import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-black text-white px-6">
      <div className="text-center max-w-md">
        <p className="text-xs font-semibold text-neon-purple uppercase tracking-[0.2em] mb-4">
          404
        </p>
        <h1 className="text-3xl font-bold text-white mb-3">
          Page not found
        </h1>
        <p className="text-sm text-[#4a4a4a] leading-relaxed mb-8">
          Looks like this mockup got lost in the render. Head back to the studio.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-linear-to-r from-neon-purple to-neon-pink text-white text-sm font-semibold hover:opacity-90 transition-opacity"
        >
          Back to KromaStudio
        </Link>
      </div>
      <p className="absolute bottom-6 text-[10px] text-border tracking-widest uppercase">
        kromastudio.in
      </p>
    </main>
  );
}
