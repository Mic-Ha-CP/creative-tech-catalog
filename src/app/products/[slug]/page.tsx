import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductImageFrame } from "@/components/catalog/ProductImageFrame";
import { Container } from "@/components/layout/Container";
import { formatCurrency, getAllProducts, getProductBySlug } from "@/lib/catalog";

type ProductDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllProducts().map((product) => ({ slug: product.slug }));
}

export default async function ProductDetailPage({
  params,
}: ProductDetailPageProps) {
  const { slug } = await params;
  const product = getProductBySlug(slug);

  if (!product) {
    notFound();
  }

  return (
    <Container className="py-8 sm:py-10">
      <div className="mb-6">
        <Link href="/" className="text-sm font-medium text-slate-600 hover:text-slate-900">
          Back to products
        </Link>
      </div>
      <article className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        <ProductImageFrame
          src={product.imageUrl}
          alt={product.name}
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="rounded-xl border border-slate-200 bg-white"
        />
        <div className="space-y-5">
          <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
            {product.category}
          </p>
          <h1 className="text-3xl font-semibold tracking-tight text-slate-900">
            {product.name}
          </h1>
          <p className="text-2xl font-semibold text-slate-900">
            {formatCurrency(product.price)}
          </p>
          <p className="text-base leading-7 text-slate-700">{product.longDescription}</p>
          <section className="rounded-lg border border-slate-200 bg-white p-4">
            <h2 className="mb-3 text-base font-semibold text-slate-900">Key specs</h2>
            <dl className="space-y-2">
              {product.specs.map((spec) => (
                <div
                  key={spec.label}
                  className="flex items-start justify-between gap-4 border-b border-slate-100 pb-2 text-sm last:border-b-0 last:pb-0"
                >
                  <dt className="text-slate-600">{spec.label}</dt>
                  <dd className="text-right font-medium text-slate-900">{spec.value}</dd>
                </div>
              ))}
            </dl>
          </section>
        </div>
      </article>
    </Container>
  );
}
