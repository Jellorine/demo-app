import { NextResponse } from "next/server";
import { childrenProducts } from "@/data/products";

export async function GET() {
  return NextResponse.json(childrenProducts);
}
