export const BOOKING_STATUSES = [
  "NEW",
  "IN PROGRESS",
  "RECEIVED",
  "COMPLETED",
  "CANCELLED",
] as const;

export type BookingStatus = (typeof BOOKING_STATUSES)[number];

export interface Booking {
  id?: number;
  referenceNumber: string;
  category: string;
  facilityName: string;
  eventName: string;
  description: string;
  location: string;
  /** ISO date string: yyyy-MM-dd */
  date: string;
  /** HH:mm (24h) */
  startTime: string;
  /** HH:mm (24h) */
  endTime: string;
  status: BookingStatus;
  /** epoch ms */
  createdAt: number;
}
