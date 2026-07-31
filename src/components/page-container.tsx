"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

export function PageContainer({ children }: { children: ReactNode }) {
  return (
    <motion.main
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="flex min-h-dvh flex-1 flex-col gap-[0px]"
    >
      {children}
    </motion.main>
  );
}
