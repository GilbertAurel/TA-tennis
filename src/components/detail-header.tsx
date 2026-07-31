"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, MessageCircleMore } from "lucide-react";

export function DetailHeader() {
  const router = useRouter();

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-4 pb-2 pt-3">
      <button
        type="button"
        aria-label="Back"
        onClick={() => router.back()}
        className="flex h-9 w-9 items-center justify-center text-accent transition-opacity active:opacity-60"
      >
        <ChevronLeft className="h-6 w-6" strokeWidth={2.25} />
      </button>
      <button
        type="button"
        aria-label="Chat"
        className="relative flex h-9 w-9 items-center justify-center text-ink transition-opacity active:opacity-60"
      >
        <MessageCircleMore className="h-[22px] w-[22px]" strokeWidth={2} />
        <span className="absolute right-1.5 top-1.5 h-2 w-2 rounded-full bg-[#e11d48]" />
      </button>
    </header>
  );
}
