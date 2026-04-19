"use client";

import Link from "next/link";
import { useEffect, useId, useState } from "react";

const mobileNavLinkClass =
  "block border-b border-slate-100 py-3 text-sm font-medium text-slate-600 transition-colors last:border-b-0 hover:text-slate-900 dark:border-slate-800 dark:text-slate-300 dark:hover:text-white";

export function MobileNav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuPanelId = useId();

  useEffect(() => {
    if (!menuOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMenuOpen(false);
    };

    document.addEventListener("keydown", handleKeyDown);
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = previousOverflow;
    };
  }, [menuOpen]);

  return (
    <div className="md:hidden">
      <button
        type="button"
        className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-md border border-slate-200 bg-white text-slate-900 transition hover:bg-slate-50 dark:border-slate-700 dark:bg-slate-900 dark:text-slate-100 dark:hover:bg-slate-800"
        onClick={() => setMenuOpen((open) => !open)}
        aria-expanded={menuOpen}
        aria-controls={menuPanelId}
        aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
      >
        {menuOpen ? (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M18 6L6 18M6 6l12 12" />
          </svg>
        ) : (
          <svg
            className="h-5 w-5"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            aria-hidden="true"
          >
            <path d="M4 7h16M4 12h16M4 17h16" />
          </svg>
        )}
      </button>

      {menuOpen ? (
        <>
          <button
            type="button"
            className="fixed inset-x-0 bottom-0 top-16 z-30 bg-black/40 dark:bg-black/60 md:hidden"
            aria-label="Close navigation menu"
            onClick={() => setMenuOpen(false)}
          />
          <nav
            id={menuPanelId}
            className="fixed left-0 right-0 top-16 z-40 border-b border-slate-200 bg-white shadow-md dark:border-slate-800 dark:bg-slate-950 md:hidden"
            role="navigation"
            aria-label="Mobile"
          >
            <div className="mx-auto flex max-w-6xl flex-col px-4 pb-2 sm:px-6 lg:px-8">
              <Link
                href="/"
                className={mobileNavLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Products
              </Link>
              <Link
                href="/quote"
                className={mobileNavLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                Request Quote
              </Link>
            </div>
          </nav>
        </>
      ) : null}
    </div>
  );
}
