"use client";

import { cn } from "@/lib/utils";
import { motion } from "framer-motion";

export function CancelRequestButton({
  isCancel,
  onConfirm,
}: {
  isCancel: boolean;
  onConfirm: () => void;
}) {
  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={onConfirm}
      className={cn(
        "w-full rounded-xl border-[1.5px] bg-white py-3.5 text-center text-base font-semibold",
        isCancel
          ? "border-cancel text-cancel"
          : "border-ink-active text-ink-active",
      )}
    >
      {isCancel ? "Cancel Request" : "Reopen"}
    </motion.button>
  );
}
