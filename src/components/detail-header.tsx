"use client";

import { useRouter } from "next/navigation";
import { ChevronLeft, MessageCircleMore } from "lucide-react";
import Icon from "./base/Icon";

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
        <Icon
          icon="line-md:arrow-left"
          fontSize={22}
          className="text-ink-active"
        />
      </button>
      <button
        type="button"
        aria-label="Chat"
        className="relative flex h-9 w-9 items-center justify-center text-ink transition-opacity active:opacity-60"
      >
        <Icon
          icon="icon-park-outline:message-one"
          fontSize={22}
          className="text-ink-active"
        />
      </button>
    </header>
  );
}
