import Dexie, { type Table } from "dexie";
import type { Booking } from "@/lib/types";
import { seedBookings } from "@/lib/seed";

export class BookingDatabase extends Dexie {
  bookings!: Table<Booking, number>;

  constructor() {
    super("BookingDatabase");
    this.version(1).stores({
      bookings: "++id, referenceNumber, status, date, createdAt",
    });
  }
}

let dbInstance: BookingDatabase | null = null;

export function getDb(): BookingDatabase {
  if (!dbInstance) {
    dbInstance = new BookingDatabase();
  }
  return dbInstance;
}

export async function createBooking(
  booking: Omit<Booking, "id" | "createdAt">
): Promise<number> {
  const db = getDb();
  return db.bookings.add({ ...booking, createdAt: Date.now() });
}

export async function updateBooking(
  id: number,
  changes: Partial<Booking>
): Promise<number> {
  const db = getDb();
  return db.bookings.update(id, changes);
}

export async function deleteBooking(id: number): Promise<void> {
  const db = getDb();
  return db.bookings.delete(id);
}

export async function getBooking(id: number): Promise<Booking | undefined> {
  const db = getDb();
  return db.bookings.get(id);
}

let seedPromise: Promise<void> | null = null;

export function seedDatabase(): Promise<void> {
  if (!seedPromise) {
    seedPromise = (async () => {
      const db = getDb();
      const count = await db.bookings.count();
      if (count === 0) {
        const now = Date.now();
        await db.bookings.bulkAdd(
          seedBookings.map((b, i) => ({
            ...b,
            // Preserve screenshot ordering: first seed item is newest.
            createdAt: now - i * 1_000,
          }))
        );
      }
    })().catch((error) => {
      // Allow retry on next call if seeding failed.
      seedPromise = null;
      throw error;
    });
  }
  return seedPromise;
}

export async function getAllBookings(): Promise<Booking[]> {
  await seedDatabase();
  const db = getDb();
  return db.bookings.orderBy("createdAt").reverse().toArray();
}
