import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { userId, role } = await req.json();
    const token = req.headers.get("Authorization")?.split(" ")[1];

    const response = await fetch("https://chimlybackendmain.onrender.com/api/team/roles", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ userId, role }),
    });

    if (!response.ok) {
      throw new Error("Failed to update role");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update role" },
      { status: 500 }
    );
  }
} 