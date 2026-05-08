import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  const { email } = await request.json();

  if (!email) {
    return NextResponse.json({ error: "Email is required" }, { status: 400 });
  }

  const apiKey = process.env.LUMA_API_KEY;
  if (!apiKey) {
    return NextResponse.json({ error: "Waitlist not configured" }, { status: 500 });
  }

  const response = await fetch("https://api.lu.ma/public/v1/calendar/add-guest", {
    method: "POST",
    headers: {
      "x-luma-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, tags: ["TPB_Course_Site"] }),
  });

  if (!response.ok) {
    const body = await response.text();
    console.error("Luma API error:", response.status, body);
    return NextResponse.json({ error: "Failed to join waitlist" }, { status: 502 });
  }

  return NextResponse.json({ success: true });
}
