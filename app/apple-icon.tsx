import { createLogoIcon } from "@/lib/generate-logo-icon";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  return createLogoIcon(180);
}
