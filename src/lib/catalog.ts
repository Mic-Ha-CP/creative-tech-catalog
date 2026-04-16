import { products } from "@/data/products";
import { Product, ProductCategory } from "@/types/product";

type FilterProductsInput = {
  query?: string;
  category?: string;
};

export function getAllProducts(): Product[] {
  return products;
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((product) => product.slug === slug);
}

export function getCategories(): ProductCategory[] {
  return Array.from(new Set(products.map((product) => product.category)));
}

export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(amount);
}

export function filterProducts({
  query = "",
  category = "",
}: FilterProductsInput): Product[] {
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
