import connectDB from "@/app/utils/database";
import { NextResponse } from "next/server";
import { ItemModel } from "@/app/utils/schemaModels";

export async function PUT(request, context) {
  const reqBody = await request.json();
  try {
    await connectDB();
    await ItemModel.updateOne({ _id: context.params.id }, reqBody);
    return NextResponse.json({ message: "아이템 수정" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "아이템 수정 실패" });
  }
}
