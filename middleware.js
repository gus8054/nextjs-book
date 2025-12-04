import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  const token = await request.headers.get("Authorization")?.split(" ")[1];
  if (!token) {
    return NextResponse.json({ message: "토큰이 없습니다." });
  }
  try {
    const secretKey = new TextEncoder().encode("next-market-app-book");
    const decodedJwt = await jwtVerify(token, secretKey);
    console.log("decodedJwt: ", decodedJwt);
    return NextResponse.next();
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "토큰이 올바르지 않습니다" });
  }
}

export const config = {
  matcher: [
    "/api/item/create",
    "/api/item/update/:path*",
    "/api/item/delete/:path*",
  ],
};
