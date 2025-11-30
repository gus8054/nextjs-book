import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  try {
    await connectDB();
    await ItemModel.create(reqBody);
    return NextResponse.json({ message: "아이템 작성" });
  } catch {
    return NextResponse.json({ message: "아이템 작성 실패" });
  }
}
