"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const NAV_ITEMS = [
  { label: "Home", href: "/" },
  { label: "Matches", href: "/matches" },
  { label: "Favourites", href: "/favourites" },
  { label: "Profile", href: "/profile" },
];

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <div
        className="
          flex flex-col md:flex-row items-center gap-2 md:gap-6
          px-6 py-3
          rounded-2xl
          bg-white/10
          backdrop-blur-lg
          border border-white/20
          shadow-xl
        "
      >
        {NAV_ITEMS.map(item => {
          const isActive = pathname === item.href;

          return (
            <Link
              key={item.href}
              href={item.href}
              className={clsx(
                "px-3 py-1.5 rounded-lg text-sm transition",
                "hover:bg-white/20",
                isActive && "bg-white/20 font-semibold"
              )}
            >
              {item.label}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
