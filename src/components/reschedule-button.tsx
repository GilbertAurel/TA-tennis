"use client";

import { motion } from "framer-motion";

export function RescheduleButton({ onClick }: { onClick: () => void }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onClick}
      className="w-full rounded-xl border-[1.5px] bg-white py-3.5 text-center text-[14px] font-semibold border-ink-active text-ink-active"
    >
      Request Reschedule
    </motion.button>
  );
}
