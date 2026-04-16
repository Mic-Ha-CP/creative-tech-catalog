import Image from "next/image";
import Link from "next/link";
import { formatCurrency } from "@/lib/catalog";
import { Product } from "@/types/product";

type ProductCardProps = {
  product: Product;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm transition-shadow hover:shadow-md">
      <Link href={`/products/${product.slug}`} className="block">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={1200}
          height={900}
          className="h-48 w-full object-cover"
        />
      </Link>
      <div className="space-y-3 p-4">
        <p className="text-xs font-medium uppercase tracking-wide text-slate-500">
          {product.category}
        </p>
        <h2 className="text-lg font-semibold text-slate-900">
          <Link href={`/products/${product.slug}`} className="hover:underline">
            {product.name}
          </Link>
        </h2>
        <p className="text-sm text-slate-600">{product.shortDescription}</p>
        <p className="text-base font-semibold text-slate-900">
          {formatCurrency(product.price)}
        </p>
      </div>
    </article>
  );
}
