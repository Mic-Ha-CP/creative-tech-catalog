import { QuoteForm } from "@/components/quote/QuoteForm";
import { Container } from "@/components/layout/Container";
import { getAllProducts } from "@/lib/catalog";

export default function QuotePage() {
  const productOptions = getAllProducts().map((product) => product.name);

  return (
    <Container className="py-8 sm:py-10">
      <section className="mb-6 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900 dark:text-slate-50">
          Request a Quote
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-300 sm:text-base">
          Tell us what you need and we will respond with a tailored quote for your
          creative setup.
        </p>
      </section>
      <QuoteForm productOptions={productOptions} />
    </Container>
  );
}
