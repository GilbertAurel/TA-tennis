"use client";

import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Icon from "./base/Icon";

export function AlertCard({ bookingId }: { bookingId: number }) {
  const router = useRouter();

  return (
    <motion.button
      type="button"
      whileTap={{ scale: 0.98 }}
      onClick={() => router.push(`/activity/${bookingId}/additional-info`)}
      className="flex w-full items-center gap-3 rounded-xl bg-white px-[24px] py-[20px] text-left drop-shadow"
    >
      <Icon
        icon="si:warning-fill"
        fontSize={28}
        className="text-alert-yellow-icon"
      />
      <span className="flex-1 text-[13px] font-semibold text-ink-active">
        Click Here.
      </span>
    </motion.button>
  );
}
