"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Calendar, Clock } from "lucide-react";
import type { Booking } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";
import { formatCardDate } from "@/lib/format";

export function ActivityCard({
  booking,
  index = 0,
}: {
  booking: Booking;
  index?: number;
}) {
  const router = useRouter();

  return (
    <motion.button
      type="button"
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(`/activity/${booking.id}`)}
      className="block w-full rounded-2xl bg-white px-4 py-3.5 text-left shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)]"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="text-[13px] font-medium text-ink-secondary">
          {booking.referenceNumber}
        </span>
        <StatusBadge status={booking.status} />
      </div>

      <h2 className="mt-1.5 text-base font-semibold text-ink">
        {booking.facilityName}
      </h2>

      <div className="mt-2 flex items-center gap-1.5">
        <MapPin className="h-3.5 w-3.5 text-[#8b8b8b]" strokeWidth={2} />
        <span className="text-[13px] font-medium text-ink-secondary">
          {booking.location}
        </span>
      </div>

      <div className="mt-1.5 flex items-center gap-1.5">
        <Calendar className="h-3.5 w-3.5 text-[#8b8b8b]" strokeWidth={2} />
        <span className="text-[13px] font-medium text-ink-secondary">
          {formatCardDate(booking.date)}
        </span>
        <Clock className="ml-3 h-3.5 w-3.5 text-[#8b8b8b]" strokeWidth={2} />
        <span className="text-[13px] font-medium text-ink-secondary">
          {booking.startTime}
        </span>
      </div>
    </motion.button>
  );
}
