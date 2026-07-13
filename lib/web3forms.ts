const WEB3FORMS_ENDPOINT = "https://api.web3forms.com/submit";

type Web3FormsPayload = Record<string, string | boolean | undefined>;

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

  const json = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !json.success) {
    throw new Error(json.message ?? "Failed to send message");
  }

  return json;
}
