import { NextResponse } from "next/server";
import { readProductsFromFile } from "@/lib/products-source";

type RouteContext = {
  params: Promise<{ slug: string }>;
};

export async function GET(_request: Request, { params }: RouteContext) {
  const { slug } = await params;

  try {
    const products = await readProductsFromFile();
    const product = products.find((item) => item.slug === slug);
    if (!product) {
      return NextResponse.json({ error: "Not found" }, { status: 404 });
    }
    return NextResponse.json(product);
  } catch {
    return NextResponse.json(
      { error: "Failed to load products" },
      { status: 500 },
    );
  }
}
