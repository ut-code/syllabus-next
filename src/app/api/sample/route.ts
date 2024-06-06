/*
- https://nextjs.org/docs/app/building-your-application/routing/route-handlers
*/

import { NextResponse } from "next/server";

export async function GET() {
  const data = {
    message: "Hello, this is a sample API response!",
    timestamp: new Date().toISOString(),
  };

  return NextResponse.json(data);
}
