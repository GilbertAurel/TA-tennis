"use client";

import { motion } from "framer-motion";

export function CancelRequestButton({
  isCancel,
  onConfirm,
  onDelete,
}: {
  isCancel: boolean;
  onConfirm: () => void;
  onDelete: () => void;
}) {
  return (
    <>
      {isCancel ? (
        <motion.button
          type="button"
          whileTap={{ scale: 0.98 }}
          onClick={onConfirm}
          className="w-full rounded-xl border-[1.5px] bg-white py-3.5 text-center text-[14px] font-semibold border-cancel text-cancel"
        >
          Cancel Request
        </motion.button>
      ) : (
        <div className="flex gap-3">
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onConfirm}
            className="w-full rounded-xl border-[1.5px] bg-white py-3.5 text-center text-[14px] font-semibold border-ink-active text-ink-active"
          >
            Reopen
          </motion.button>
          <motion.button
            type="button"
            whileTap={{ scale: 0.98 }}
            onClick={onDelete}
            className="w-full rounded-xl border-[1.5px] bg-white py-3.5 text-center text-[14px] font-semibold border-cancel text-cancel"
          >
            Delete
          </motion.button>
        </div>
      )}
    </>
  );
}
