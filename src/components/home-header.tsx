"use client";

import { Bell, SlidersHorizontal } from "lucide-react";
import { Iconify } from "./base/Icon";

export function HomeHeader() {
  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-5 pb-[24px] pt-4 drop-shadow">
      <h1 className="text-xl font-semibold text-[#525C68]">My Activity</h1>
      <div className="flex items-center gap-4">
        <button
          type="button"
          aria-label="Filter"
          className="text-accent transition-opacity active:opacity-60"
        >
          <Iconify
            icon="heroicons-solid:menu-alt-2"
            fontSize={28}
            className="text-ink-active"
          />
        </button>
        <button
          type="button"
          aria-label="Notifications"
          className="text-accent transition-opacity active:opacity-60"
        >
          <Iconify
            icon="mdi-light:bell"
            fontSize={26}
            className="text-ink-active"
          />
        </button>
      </div>
    </header>
  );
}
