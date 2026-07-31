export function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs font-medium text-ink-muted">{label}</p>
      <p className="mt-1.5 text-[15px] font-medium text-ink">{value}</p>
    </div>
  );
}
