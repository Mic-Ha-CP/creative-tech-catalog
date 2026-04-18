import Link from "next/link";
import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";

export function SiteHeader() {
  return (
    <header className="relative z-50 border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between gap-3">
        <Link
          href="/"
          className="min-w-0 truncate text-base font-semibold text-slate-900 sm:text-lg md:truncate-none"
        >
          Creative Tech Catalog
        </Link>
        <nav
          className="hidden items-center gap-4 text-sm font-medium text-slate-600 md:flex"
          aria-label="Main"
        >
          <Link href="/" className="hover:text-slate-900">
            Products
          </Link>
          <Link href="/quote" className="hover:text-slate-900">
            Request Quote
          </Link>
        </nav>
        <MobileNav />
      </Container>
    </header>
  );
}
