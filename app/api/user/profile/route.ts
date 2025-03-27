import { NextResponse } from "next/server";

export async function PUT(req: Request) {
  try {
    const { name } = await req.json();
    const token = req.headers.get("Authorization")?.split(" ")[1];

    const response = await fetch("https://chimlybackendmain.onrender.com/api/user/profile", {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ name }),
    });

    if (!response.ok) {
      throw new Error("Failed to update profile");
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to update profile" },
      { status: 500 }
    );
  }
} 