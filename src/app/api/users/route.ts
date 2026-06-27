import { NextResponse } from "next/server";
import { dataStore } from "@/lib/data-store";

export async function GET() {
  return NextResponse.json(dataStore.getUsers().map(({ password, ...u }) => u));
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const user = dataStore.createUser(data);
    const { password, ...safe } = user;
    return NextResponse.json(safe, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
