import { format, parse, parseISO } from "date-fns";

/** "2026-08-01" + "14:00" -> "1 Aug 2026" */
export function formatCardDate(isoDate: string): string {
  return format(parseISO(isoDate), "d MMM yyyy");
}

/** "2026-08-01" -> "01 August 2026" */
export function formatLongDate(isoDate: string): string {
  return format(parseISO(isoDate), "dd MMMM yyyy");
}

/** Build the "Time Slot" string: "01 August 2026, 14:00 - 15:00" */
export function formatTimeSlot(
  isoDate: string,
  startTime: string,
  endTime: string
): string {
  return `${formatLongDate(isoDate)}, ${startTime} - ${endTime}`;
}

/** Convert a Date + "HH:mm" string pair for form inputs */
export function toTimeInput(date: Date): string {
  return format(date, "HH:mm");
}

export function parseTime(value: string): Date {
  return parse(value, "HH:mm", new Date());
}
