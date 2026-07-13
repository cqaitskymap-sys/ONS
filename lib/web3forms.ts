type Web3FormsPayload = Record<string, string | boolean | undefined>;

export async function submitToWeb3Forms(payload: Web3FormsPayload) {
  const res = await fetch("/api/web3forms", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(payload),
  });

  const json = (await res.json()) as { success?: boolean; message?: string };

  if (!res.ok || !json.success) {
    throw new Error(json.message ?? "Failed to send message");
  }

  return json;
}
