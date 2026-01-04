import { NextRequest, NextResponse } from "next/server";

const PUBLIC_ROUTES = ["/auth"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  if (PUBLIC_ROUTES.some(route => pathname.startsWith(route))) {
    return NextResponse.next();
  }

  const token = request.cookies.get("access_token");

  if (!token) {
    const authUrl = new URL("/auth", request.url);
    authUrl.searchParams.set("mode", "login");
    authUrl.searchParams.set("redirectTo", pathname);
    return NextResponse.redirect(authUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
