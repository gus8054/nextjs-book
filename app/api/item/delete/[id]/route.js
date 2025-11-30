import connectDB from "@/app/utils/database";
import { ItemModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function DELETE(request, context) {
  try {
    await connectDB();
    await ItemModel.deleteOne({ _id: context.params.id });

    return NextResponse.json({ messaage: "아이템 삭제" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "아이템 삭제 실패" });
  }
}
