import connectDB from "@/app/utils/database";
import { UserModel } from "@/app/utils/schemaModels";
import { NextResponse } from "next/server";

export async function POST(request) {
  const reqBody = await request.json();
  try {
    await connectDB();
    await UserModel.create(reqBody);
    return NextResponse.json({ message: "사용자 등록 성공" });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "사용자 등록 실패" });
  }
}
