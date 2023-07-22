import { NextApiRequest } from "next";
import { NextResponse } from "next/server";

export function middleware(req: NextApiRequest) {
  return NextResponse.next()
}