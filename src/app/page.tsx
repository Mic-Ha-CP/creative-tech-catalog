import { CategoryFilter } from "@/components/catalog/CategoryFilter";
import { ProductGrid } from "@/components/catalog/ProductGrid";
import { SearchField } from "@/components/catalog/SearchField";
import { Container } from "@/components/layout/Container";
import { filterProducts, getCategories } from "@/lib/catalog";

type HomePageProps = {
  searchParams: Promise<{ q?: string; category?: string }>;
};

export default async function Home({ searchParams }: HomePageProps) {
  const params = await searchParams;
  const searchQuery = params.q ?? "";
  const selectedCategory = params.category ?? "";
  const products = filterProducts({
    query: searchQuery,
    category: selectedCategory,
  });
  const categories = getCategories();

  return (
    <Container className="py-8 sm:py-10">
      <section className="mb-8 space-y-3">
        <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
          Creative Tech Product Catalog
        </h1>
        <p className="max-w-2xl text-sm leading-6 text-slate-600 sm:text-base">
          Explore fictional creative tools, from drawing tablets to desk
          accessories. Use search and category filters to quickly narrow results.
        </p>
      </section>

      <form className="mb-8 grid grid-cols-1 gap-4 rounded-xl border border-slate-200 bg-white p-4 sm:grid-cols-3">
        <div className="sm:col-span-2">
          <SearchField defaultValue={searchQuery} />
        </div>
        <CategoryFilter
          categories={categories}
          defaultValue={selectedCategory}
        />
        <div className="sm:col-span-3">
          <button
            type="submit"
            className="h-10 rounded-md bg-slate-900 px-4 text-sm font-medium text-white transition hover:bg-slate-700"
          >
            Apply Filters
          </button>
        </div>
      </form>

      {products.length === 0 ? (
        <div className="rounded-xl border border-dashed border-slate-300 bg-white p-8 text-center text-slate-600">
          No products match your search. Try changing the query or category.
        </div>
      ) : (
        <ProductGrid products={products} />
      )}
    </Container>
  );
}
