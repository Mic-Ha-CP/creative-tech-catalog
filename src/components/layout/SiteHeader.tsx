import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { ThemeToggle } from "@/components/layout/ThemeToggle";

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white dark:border-slate-800 dark:bg-slate-950">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="min-w-0 truncate text-base font-semibold text-slate-900 dark:text-slate-50 sm:text-lg md:truncate-none"
        >
          Creative Tech Catalog
        </Link>
        <div className="flex shrink-0 items-center gap-2 md:gap-3">
          <ThemeToggle />
          <nav
            className="hidden items-center gap-4 text-sm font-medium text-slate-600 dark:text-slate-300 md:flex"
            aria-label="Main"
          >
            <Link href="/" className="hover:text-slate-900 dark:hover:text-white">
              Products
            </Link>
            <Link href="/quote" className="hover:text-slate-900 dark:hover:text-white">
              Request Quote
            </Link>
          </nav>
          <MobileNav />
        </div>
      </Container>
    </header>
  );
}
