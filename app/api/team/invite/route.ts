import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const { email, role } = await req.json();
    const token = req.headers.get("Authorization")?.split(" ")[1];

    const response = await fetch("/api/team/invite", { // Updated endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ email, role }),
    });

    if (!response.ok) {
      throw new Error("Failed to send invite");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send invite" },
      { status: 500 }
    );
  }
} 