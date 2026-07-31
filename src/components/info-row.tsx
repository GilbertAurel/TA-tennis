import { cn } from "@/lib/utils";

export function InfoRow({
  label,
  value,
  underline,
}: {
  label: string;
  value: string;
  underline?: boolean;
}) {
  return (
    <div
      className={cn("pb-[10px]", underline ? "border-b border-b-gray-200" : "")}
    >
      <p className="text-[12px] font-semibold text-ink">{label}</p>
      <p className="mt-2 text-[14px] font-medium text-ink">{value}</p>
    </div>
  );
}
