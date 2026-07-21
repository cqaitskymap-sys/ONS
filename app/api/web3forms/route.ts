import { NextResponse } from "next/server";

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function POST(request: Request) {
  const accessKey =
    process.env.WEB3FORMS_ACCESS_KEY ??
    process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    return NextResponse.json(
      { success: false, message: "Form is not configured" },
      { status: 500 },
    );
  }

  try {
    const payload = await request.json();

    const res = await fetch(WEB3FORMS_ENDPOINT, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: accessKey,
        ...payload,
      }),
    });

    const text = await res.text();
    let json: { success?: boolean; message?: string };

    try {
      json = JSON.parse(text) as { success?: boolean; message?: string };
    } catch {
      return NextResponse.json(
        { success: false, message: "Failed to reach form service" },
        { status: 502 },
      );
    }

    if (!res.ok || !json.success) {
      return NextResponse.json(
        { success: false, message: json.message ?? "Failed to send message" },
        { status: res.ok ? 400 : res.status },
      );
    }

    return NextResponse.json(json);
  } catch {
    return NextResponse.json(
      { success: false, message: "Internal server error" },
      { status: 500 },
    );
  }
}
