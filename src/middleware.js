import { NextResponse } from "next/server";


export function middleware(request) {
  let cookie = request.cookies.get("_token");
  if (cookie?.name === "_token" && cookie?.value) {
    return NextResponse.next();
  } else {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: "/dashboard",
};
