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
      className="flex w-full items-center gap-3 rounded-xl bg-alert-yellow-bg p-3.5 text-left"
    >
      <AlertTriangle
        className="h-7 w-7 shrink-0 text-alert-yellow-icon"
        strokeWidth={2}
        fill="currentColor"
        stroke="none"
      />
      <span className="flex-1 text-[15px] font-semibold text-clickhere">
        Click Here
      </span>
      <ChevronRight className="h-5 w-5 text-clickhere/60" strokeWidth={2} />
    </motion.button>
  );
}
