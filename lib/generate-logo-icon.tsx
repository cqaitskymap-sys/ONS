import { readFile } from "node:fs/promises";
import path from "node:path";
import { ImageResponse } from "next/og";

export async function createLogoIcon(size: number) {
  const file = await readFile(path.join(process.cwd(), "public", "logo.png"));
  const logo = `data:image/png;base64,${file.toString("base64")}`;
  const inset = Math.round(size * 0.06);
  const logoWidth = size - inset * 2;
  const logoHeight = Math.round(logoWidth * 1.25);

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background:
            "linear-gradient(155deg, #111827 0%, #080f1e 55%, #0c1426 100%)",
          boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.12)",
        }}
      >
        <img
          src={logo}
          width={logoWidth}
          height={logoHeight}
          alt=""
          style={{ objectFit: "contain" }}
        />
      </div>
    ),
    { width: size, height: size }
  );
}
