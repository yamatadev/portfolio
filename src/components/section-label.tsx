export function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <div className="w-8 h-px bg-neutral-900" />
      <span className="text-xs font-medium tracking-widest uppercase text-neutral-400">
        {children}
      </span>
    </div>
  );
}