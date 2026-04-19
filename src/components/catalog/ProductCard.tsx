import Link from "next/link";
import { ProductImageFrame } from "@/components/catalog/ProductImageFrame";
import { formatCurrency } from "@/lib/catalog";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md dark:border-slate-800 dark:bg-slate-900 dark:shadow-none dark:hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <ProductImageFrame
          src={product.imageUrl}
          alt={product.name}
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </Link>
      <div className="space-y-3 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500 dark:text-slate-400">
          {product.category}
        </p>
        <h2 className="text-lg font-semibold text-slate-900 dark:text-slate-50">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h2>
        <p className="text-sm text-slate-600 dark:text-slate-300">{product.shortDescription}</p>
        <p className="text-base font-semibold text-slate-900 dark:text-slate-50">
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}
