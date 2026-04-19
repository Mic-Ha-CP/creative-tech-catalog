import { QuoteForm } from "@/components/quote/QuoteForm";
import { Container } from "@/components/layout/Container";
import { fetchAllProducts } from "@/lib/catalog";

export default async function QuotePage() {
  let productOptions: string[] = [];
  let loadError: string | null = null;

  try {
    const products = await fetchAllProducts();
    productOptions = products.map((product) => product.name);
  } catch {
    loadError = "Could not load product names. Please try again later.";
  }

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
      {loadError ? (
        <div className="rounded-xl border border-red-200 bg-red-50 p-6 text-red-800 dark:border-red-900 dark:bg-red-950/40 dark:text-red-200">
          {loadError}
        </div>
      ) : (
        <QuoteForm productOptions={productOptions} />
      )}
    </Container>
  );
}
