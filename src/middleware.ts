import { NextResponse } from "next/server";

// middleware.ts
export function middleware() {
  // DO NOT check cookie
  return NextResponse.next();
}
