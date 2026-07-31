import { cn } from "@/lib/utils";
import type { BookingStatus } from "@/lib/types";

const statusStyles: Record<BookingStatus, string> = {
  NEW: "border-[1px] border-status-new-bg text-status-new-text",
  "IN PROGRESS":
    "border-[1px] border-status-inprogress-bg text-status-inprogress-text",
  RECEIVED: "border-[1px] border-status-received-bg text-status-received-text",
  COMPLETED:
    "border-[1px] border-status-completed-bg text-status-completed-text",
  CANCELLED:
    "border-[1px] border-status-cancelled-bg text-status-cancelled-text",
};

export function StatusBadge({
  status,
  className,
}: {
  status: BookingStatus;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-[11px] font-semibold tracking-wide",
        statusStyles[status],
        className,
      )}
    >
      {status}
    </span>
  );
}
