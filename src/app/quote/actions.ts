"use server";

type QuoteActionState = {
  success: boolean;
  message: string;
};

export async function submitQuoteRequest(
  _previousState: QuoteActionState,
  formData: FormData,
): Promise<QuoteActionState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const productInterest = String(formData.get("productInterest") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();

  if (!name || !email || !productInterest || !message) {
    return {
      success: false,
      message: "Please complete all required fields before submitting.",
    };
  }

  const isValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!isValidEmail) {
    return {
      success: false,
      message: "Please provide a valid email address.",
    };
  }

  await new Promise((resolve) => setTimeout(resolve, 500));

  return {
    success: true,
    message:
      "Thanks for your request. We received your message and will follow up soon.",
  };
}
