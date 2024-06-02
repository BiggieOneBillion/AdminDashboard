import { NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function GET(request) {
  const cookieStore = cookies();

  // Delete the cookie by setting its value to an empty string and setting maxAge to 0
  cookieStore.set("_token", "", { maxAge: 0 });

  return NextResponse.json({ message: "done!!!" });
}
