import { headers } from "next/headers";
import { readProductsFromFile } from "@/lib/products-source";
import type { Product, ProductCategory } from "@/types/product";

async function resolveRequestOrigin(): Promise<string> {
  try {
    const headerList = await headers();
    const host = headerList.get("x-forwarded-host") ?? headerList.get("host");
    if (host) {
      const protocol = headerList.get("x-forwarded-proto") ?? "http";
      return `${protocol}://${host}`;
    }
  } catch {
    // No request context (e.g. some static generation paths).
  }
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return `http://127.0.0.1:${process.env.PORT ?? 3000}`;
}

/**
 * Server-side fetch to GET /api/products. Falls back to reading products.json when the
 * HTTP call fails (typical during `next build` when no dev server is listening).
 */
export async function fetchAllProducts(): Promise<Product[]> {
  try {
    const origin = await resolveRequestOrigin();
    const response = await fetch(`${origin}/api/products`, {
      cache: "no-store",
    });
    if (!response.ok) {
      throw new Error(`GET /api/products failed: ${response.status}`);
    }
    return (await response.json()) as Product[];
  } catch {
    return readProductsFromFile();
  }
}

/**
 * Server-side fetch to GET /api/products/[slug]. Falls back to products.json on failure.
 */
export async function fetchProductBySlug(slug: string): Promise<Product | null> {
  try {
    const origin = await resolveRequestOrigin();
    const response = await fetch(
      `${origin}/api/products/${encodeURIComponent(slug)}`,
      { cache: "no-store" },
    );
    if (response.status === 404) {
      return null;
    }
    if (!response.ok) {
      throw new Error(`GET /api/products/${slug} failed: ${response.status}`);
    }
    return (await response.json()) as Product;
  } catch {
    const products = await readProductsFromFile();
    return products.find((item) => item.slug === slug) ?? null;
  }
}

type FilterProductsInput = {
  query?: string;
  category?: string;
};

export function filterProducts(
  products: Product[],
  { query = "", category = "" }: FilterProductsInput,
): Product[] {
  const normalizedQuery = query.trim().toLowerCase();
  const normalizedCategory = category.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      normalizedCategory.length === 0 ||
      product.category.toLowerCase() === normalizedCategory;

    const searchableText = [
      product.name,
      product.shortDescription,
      product.longDescription,
      product.category,
    ]
      .join(" ")
      .toLowerCase();

    const matchesQuery =
      normalizedQuery.length === 0 || searchableText.includes(normalizedQuery);

    return matchesCategory && matchesQuery;
  });
}

export function getCategories(products: Product[]): ProductCategory[] {
  return Array.from(new Set(products.map((product) => product.category)));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}
