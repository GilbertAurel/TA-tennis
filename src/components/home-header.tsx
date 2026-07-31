"use client";

import Link from "next/link";
import { Iconify } from "./base/Icon";

export function HomeHeader() {
  const handleClearCache = () => {
    localStorage.clear();
    sessionStorage.clear();
    window.indexedDB.deleteDatabase("BookingDatabase");
  };

  return (
    <header className="sticky top-0 z-20 flex items-center justify-between bg-white px-5 pb-[24px] pt-4 drop-shadow">
      <h1 className="text-xl font-semibold text-[#525C68]">My Activity</h1>
      <div className="flex items-center gap-4">
        <Link
          key={"admin-page"}
          href={"/admin"}
          className="text-accent transition-opacity active:opacity-60"
        >
          <Iconify
            icon="heroicons-solid:menu-alt-2"
            fontSize={28}
            className="text-ink-active"
          />
        </Link>
        <button
          type="button"
          aria-label="Notifications"
          className="text-accent transition-opacity active:opacity-60"
          onClick={handleClearCache}
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
