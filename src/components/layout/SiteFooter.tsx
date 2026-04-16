import { Container } from "@/components/layout/Container";

export function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <Container className="py-6 text-sm text-slate-500">
        Built as a portfolio demo with Next.js, TypeScript, and Tailwind CSS.
      </Container>
    </footer>
  );
}
