export function Footer() {
  return (
    <footer className="py-8 border-t border-white/10">
      <div className="max-w-6xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm text-neutral-400">
          © {new Date().getFullYear()} Renan Paes. Built with Next.js &amp;
          Tailwind CSS.
        </p>
        <div className="flex items-center gap-1">
          <span className="text-sm text-neutral-400">Curitiba, Brazil 🇧🇷</span>
        </div>
      </div>
    </footer>
  );
}