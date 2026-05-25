import { NextRequest, NextResponse } from "next/server";

type AnalyticsEvent = {
  event?: string;
  path?: string;
  timestamp?: string;
};

export async function POST(request: NextRequest) {
  let payload: AnalyticsEvent = {};

  try {
    payload = await request.json();
  } catch {
    return new NextResponse(null, { status: 204 });
  }

  if (payload.event === "page_view" && payload.path) {
    console.info("analytics:page_view", {
      path: payload.path,
      timestamp: payload.timestamp,
      userAgent: request.headers.get("user-agent")?.slice(0, 160) ?? "unknown"
    });
  }

  return new NextResponse(null, { status: 204 });
}
