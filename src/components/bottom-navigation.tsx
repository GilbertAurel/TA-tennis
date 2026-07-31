"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Home, ClipboardList, Receipt, User } from "lucide-react";
import { cn } from "@/lib/utils";

const items = [
  { href: "/home", label: "Home", icon: Home },
  { href: "/", label: "My Activity", icon: ClipboardList },
  { href: "/billing", label: "Billing", icon: Receipt },
  { href: "/account", label: "Account", icon: User },
];

export function BottomNavigation() {
  const pathname = usePathname();

  return (
    <nav className="sticky bottom-0 z-20 mt-auto border-t border-[#eef0f3] bg-white pb-[env(safe-area-inset-bottom)] shadow-[0_8px_30px_rgb(0,0,0,0.12)]">
      <div className="grid grid-cols-4">
        {items.map(({ href, label, icon: Icon }) => {
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
              <Icon className="h-[22px] w-[22px]" strokeWidth={2} />
              <span className="text-[10px] font-bold">{label}</span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
