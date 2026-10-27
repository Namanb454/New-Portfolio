"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const navItems = [
  {
    href: "/",
    label: "Home",
    icon: (
      <path d="M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6h-6v6H4a1 1 0 0 1-1-1z" />
    ),
  },
  {
    href: "/projects",
    label: "Projects",
    icon: (
      <>
        <rect x="4" y="9" width="16" height="11" rx="2" />
        <path d="M6 6h12M8 3h8" />
      </>
    ),
  },
  {
    href: "/about",
    label: "About",
    icon: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 21a8 8 0 0 1 16 0" />
      </>
    ),
  },
  {
    href: "/gallery",
    label: "Design gallery",
    icon: <path d="M16.5 3.5a2.1 2.1 0 0 1 3 3L8 18l-4 1 1-4z" />,
  },
];

const circleBtn =
  "grid h-10 w-10 place-items-center rounded-full bg-[var(--tile)]";

export default function Navbar() {
  const pathname = usePathname();
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const isDark = mounted && resolvedTheme === "dark";
  const themeLabel = isDark ? "Switch to light theme" : "Switch to dark theme";

  return (
    <header className="bi d1 flex flex-wrap items-center justify-between gap-3 pt-6">
      <nav aria-label="Primary" className="flex gap-2.5">
        {navItems.map((item) => {
          const active =
            item.href === "/"
              ? pathname === "/"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              aria-label={item.label}
              aria-current={active ? "page" : undefined}
              title={item.label}
              className={`ib ${active ? "on" : ""} ${circleBtn}`}
            >
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                {item.icon}
              </svg>
            </Link>
          );
        })}
      </nav>

      <div className="flex items-center gap-2.5">
        <button
          type="button"
          onClick={() => setTheme(isDark ? "light" : "dark")}
          aria-label={themeLabel}
          title={themeLabel}
          className={`ib ${circleBtn} border-0`}
        >
          {isDark ? (
            <svg
              className="ticon"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <path d="M20 14.5A8 8 0 1 1 9.5 4a6.5 6.5 0 0 0 10.5 10.5z" />
            </svg>
          ) : (
            <svg
              className="ticon"
              width="17"
              height="17"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="4" />
              <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
            </svg>
          )}
        </button>
        <a
          href="https://github.com/Namanb454"
          aria-label="GitHub"
          title="GitHub"
          target="_blank"
          rel="noreferrer"
          className={`ib ${circleBtn}`}
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="m8 7-5 5 5 5M16 7l5 5-5 5" />
          </svg>
        </a>
        <Link
          href="/book-a-call"
          className="ibp inline-flex h-10 items-center rounded-full bg-[var(--fg)] px-[18px] text-[13px] font-medium text-[var(--bg)]"
        >
          Book a call
        </Link>
      </div>
    </header>
  );
}
