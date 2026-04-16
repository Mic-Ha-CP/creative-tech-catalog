import Link from "next/link";
import { Container } from "@/components/layout/Container";

export function SiteHeader() {
  return (
    <header className="border-b border-slate-200 bg-white">
      <Container className="flex h-16 items-center justify-between">
        <Link href="/" className="text-lg font-semibold text-slate-900">
          Creative Tech Catalog
        </Link>
        <nav className="flex items-center gap-4 text-sm font-medium text-slate-600">
          <Link href="/" className="hover:text-slate-900">
            Products
          </Link>
          <Link href="/quote" className="hover:text-slate-900">
            Request Quote
          </Link>
        </nav>
      </Container>
    </header>
  );
}
