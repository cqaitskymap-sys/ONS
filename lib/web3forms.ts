type Web3FormsPayload = Record<string, string | boolean | undefined>;

const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

export async function submitToWeb3Forms(payload: Web3FormsPayload) {
  const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

  if (!accessKey) {
    throw new Error("Form is not configured");
  }

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
    throw new Error("Failed to send message. Please try again or email us directly.");
  }

  if (!res.ok || !json.success) {
    throw new Error(json.message ?? "Failed to send message");
  }

  return json;
}
