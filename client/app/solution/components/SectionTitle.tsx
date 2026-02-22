export function SectionTitle({
  primary,
  secondary,
  className = "",
}: {
  primary: string;
  secondary: string;
  className?: string;
}) {
  return (
    <h2 className={`max-w-[60.2rem] text-4xl font-bold ${className}`}>
      <span className="text-[#3b82f6]">{primary}</span>
      <br />
      <span className="text-[#1a365d]">{secondary}</span>
    </h2>
  );
}
