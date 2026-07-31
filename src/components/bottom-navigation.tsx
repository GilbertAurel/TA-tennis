"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Iconify } from "./base/Icon";

const items = [
  { href: "/home", label: "Home", icon: "ic:sharp-home" },
  { href: "/", label: "My Activity", icon: "griddy-icons:file-list" },
  { href: "/billing", label: "Billing", icon: "la:file-invoice-dollar" },
  { href: "/account", label: "Account", icon: "mdi:user" },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-20 mt-auto border-t border-[#eef0f3] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="grid grid-cols-4">
        {items.map(({ href, label, icon }) => {
          const active =
            href === "/"
              ? pathname === "/" || pathname.startsWith("/activity")
              : pathname.startsWith(href);
          return (
            <Link
              key={label}
              href={href}
              className={cn(
                "flex flex-col items-center gap-1 py-2.5 transition-colors",
                active ? "text-accent-active" : "text-ink-secondary",
              )}
            >
              <Iconify icon={icon} fontSize={26} />
              <span className="text-[10px] font-bold">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
