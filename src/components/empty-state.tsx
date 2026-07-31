import { Inbox } from "lucide-react";

export function EmptyState({
  title = "No activity yet",
  message = "Your bookings will appear here.",
}: {
  title?: string;
  message?: string;
}) {
  return (
    <div className="flex flex-1 flex-col items-center justify-center gap-2 px-8 py-24 text-center">
      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white shadow-sm">
        <Inbox className="h-6 w-6 text-ink-muted" />
      </div>
      <p className="mt-2 text-[15px] font-semibold text-ink">{title}</p>
      <p className="text-[13px] text-ink-secondary">{message}</p>
    </div>
  );
}
