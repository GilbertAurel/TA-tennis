"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import { AlertTriangle, ChevronRight } from "lucide-react";

export function AlertCard({ bookingId }: { bookingId: number }) {
  const router = useRouter();

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(`/activity/${bookingId}/additional-info`)}
      className="flex w-full items-center gap-3 rounded-xl bg-white px-[24px] py-[20px] text-left drop-shadow"
    >
      <AlertTriangle
        className="h-7 w-7 shrink-0 text-alert-yellow-icon"
        strokeWidth={2}
        fill="currentColor"
        stroke="none"
      />
      <span className="flex-1 text-[15px] font-semibold text-ink-active">
        Click Here.
      </span>
    </motion.button>
  );
}
