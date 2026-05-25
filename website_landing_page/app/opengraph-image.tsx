import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "SHE - Women's Health AI";
export const size = {
  width: 1200,
  height: 630
};
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 72,
          background: "radial-gradient(circle at 70% 20%, rgba(124,92,255,.42), transparent 38%), #07070A",
          color: "#E5E7EB",
          fontFamily: "Arial"
        }}
      >
        <div
          style={{
            width: 72,
            height: 72,
            borderRadius: 36,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background: "#7C5CFF",
            color: "white",
            fontSize: 34,
            fontWeight: 700
          }}
        >
          S
        </div>
        <div style={{ marginTop: 46, fontSize: 78, fontWeight: 700, letterSpacing: -1 }}>
          SHE - Women&apos;s Health AI
        </div>
        <div style={{ marginTop: 26, maxWidth: 850, fontSize: 34, lineHeight: 1.35, color: "#D4D4D8" }}>
          Private AI-powered health conversations designed for women.
        </div>
        <div style={{ marginTop: 54, fontSize: 24, color: "#A78BFA" }}>sheapp.in</div>
      </div>
    ),
    size
  );
}
