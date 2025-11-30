import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function GET(request, context) {
  try {
    await connectDB();
    const singleItem = await ItemModel.findById(context.params.id);
    return NextResponse.json({ message: "아이템 읽기 (하나)", singleItem });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "아이템 읽기 실패 (하나)" });
  }
}
