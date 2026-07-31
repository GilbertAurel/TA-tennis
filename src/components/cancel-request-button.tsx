"use client";

import { motion } from "framer-motion";

export function CancelRequestButton({ onConfirm }: { onConfirm: () => void }) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onConfirm}
      className="w-full rounded-xl border-[1.5px] border-cancel bg-white py-3.5 text-center text-base font-semibold text-cancel"
    >
      Cancel Request
    </motion.button>
  );
}
