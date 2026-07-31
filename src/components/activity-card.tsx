"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { MapPin, Calendar } from "lucide-react";
import type { Booking } from "@/lib/types";
import { StatusBadge } from "@/components/status-badge";
import { formatCardDate } from "@/lib/format";
import { Iconify } from "./base/Icon";

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
      className="block w-full rounded-2xl bg-white py-[18px] text-left shadow-[0_1px_3px_rgba(16,24,40,0.06),0_1px_2px_rgba(16,24,40,0.04)]"
    >
      <div className="px-[18px] pb-[12px] border-b border-b-gray-200">
        <div className="flex items-center justify-between gap-3">
          <span className="text-[12px] font-medium text-ink-secondary">
            {booking.referenceNumber}
          </span>
          <StatusBadge
            status={booking.status === "NEW" ? "IN PROGRESS" : booking.status}
          />
        </div>

        <h2 className="mt-1.5 text-[14px] font-semibold text-ink">
          {booking.facilityName}
        </h2>
      </div>

      <div className="px-[18px] pt-[10px]">
        <div className="mt-2 flex items-center gap-[10px]">
          <div className="size-[14px] flex items-center justify-center">
            <Iconify icon="la:home" fontSize={14} className="text-ink" />
          </div>
          <span className="text-[11px] font-medium text-ink-secondary">
            {booking.location}
          </span>
        </div>

        <div className="mt-1.5 flex items-center gap-[10px]">
          <div className="size-[14px] flex items-center justify-center">
            <Iconify icon="fontisto:date" fontSize={12} className="text-ink" />
          </div>
          <span className="text-[11px] font-medium text-ink-secondary">
            {formatCardDate(booking.date)}&nbsp;&nbsp;{booking.startTime}
          </span>
        </div>
      </div>
    </motion.button>
  );
}
