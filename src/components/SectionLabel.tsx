interface SectionLabelProps {
  children: React.ReactNode;
}

export function SectionLabel({ children }: SectionLabelProps) {
  return (
    <p className="text-xs font-medium tracking-[0.2em] text-gold-500 uppercase mb-3 font-body">
      {children}
    </p>
  );
}
