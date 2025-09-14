import { NextRequest } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { token, platform } = await req.json();

    if (!token) {
      return new Response(JSON.stringify({ ok: false, error: "Missing token" }), { status: 400 });
    }

    // TODO: Store in your database. For now, log to Vercel function logs.
    console.log("[register-device]", { token: token?.slice(0, 12) + "…", platform });

    // Example: You might upsert by token into a table like `push_devices`
    // await db.pushDevices.upsert({ token, platform, createdAt: new Date() });

    return new Response(JSON.stringify({ ok: true }), { status: 200 });
  } catch (e) {
    return new Response(JSON.stringify({ ok: false, error: "Bad request" }), { status: 400 });
  }
}