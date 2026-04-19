import { readFile } from "fs/promises";
import path from "path";
import type { Product } from "@/types/product";

const PRODUCTS_FILE = path.join(process.cwd(), "src/data/products.json");

export async function readProductsFromFile(): Promise<Product[]> {
  const raw = await readFile(PRODUCTS_FILE, "utf-8");
  const parsed = JSON.parse(raw) as unknown;
  if (!Array.isArray(parsed)) {
    throw new Error("products.json must contain a JSON array");
  }
  return parsed as Product[];
}
