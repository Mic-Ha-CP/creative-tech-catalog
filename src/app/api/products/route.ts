import { NextResponse } from "next/server";
import { readProductsFromFile } from "@/lib/products-source";

export async function GET() {
  try {
    const products = await readProductsFromFile();
    return NextResponse.json(products);
  } catch {
    return NextResponse.json(
      { error: "Failed to load products" },
      { status: 500 },
    );
  }
}
