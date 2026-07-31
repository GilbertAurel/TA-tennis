"use client";

import { Bell, SlidersHorizontal } from "lucide-react";

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-5 pb-3 pt-4">
      <h1 className="text-xl font-bold text-ink">My Activity</h1>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Filter"
          className="text-accent transition-opacity active:opacity-60"
        >
          <SlidersHorizontal className="h-[22px] w-[22px]" strokeWidth={2} />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="text-accent transition-opacity active:opacity-60"
        >
          <Bell className="h-[22px] w-[22px]" strokeWidth={2} />
        </button>
      </div>
    </header>
  );
}
