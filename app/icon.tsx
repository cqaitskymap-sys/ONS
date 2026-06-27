import { createLogoIcon } from "@/lib/generate-logo-icon";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default async function Icon() {
  return createLogoIcon(32);
}
