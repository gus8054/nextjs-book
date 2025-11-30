import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export async function middleware(request) {
  //   const token = await request.headers.get("Authorization")?.split(" ")[1];
  const token =
    "eyJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6ImR1bW15QGdtYWlsLmNvbSIsImV4cCI6MTc2NDUwNjg5N30.AYS37U2a3sTUqSn3ZB4plXlCZE2DxkydeZfZSNpkRB4";
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
