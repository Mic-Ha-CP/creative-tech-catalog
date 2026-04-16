export const productCategories = [
  "drawing tablets",
  "styluses",
  "keyboards",
  "desk accessories",
  "creative tools",
] as const;

export type ProductCategory = (typeof productCategories)[number];

export type ProductSpec = {
  label: string;
  value: string;
};

export type Product = {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  shortDescription: string;
  longDescription: string;
  price: number;
  imageUrl: string;
  specs: ProductSpec[];
};
