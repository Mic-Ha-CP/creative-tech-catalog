"use client";

import { useActionState } from "react";
import { submitQuoteRequest } from "@/app/quote/actions";
import { SubmitButton } from "@/components/quote/SubmitButton";

const initialState = {
  success: false,
  message: "",
};

type QuoteFormProps = {
  productOptions: string[];
};

export function QuoteForm({ productOptions }: QuoteFormProps) {
  const [state, formAction] = useActionState(submitQuoteRequest, initialState);

  return (
    <form action={formAction} className="space-y-4 rounded-xl border border-slate-200 bg-white p-5 sm:p-6">
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <div className="space-y-2">
          <label htmlFor="name" className="text-sm font-medium text-slate-700">
            Full name *
          </label>
          <input
            id="name"
            name="name"
            required
            className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm font-medium text-slate-700">
            Work email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="company" className="text-sm font-medium text-slate-700">
          Company (optional)
        </label>
        <input
          id="company"
          name="company"
          className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
        />
      </div>

      <div className="space-y-2">
        <label
          htmlFor="productInterest"
          className="text-sm font-medium text-slate-700"
        >
          Product interest *
        </label>
        <select
          id="productInterest"
          name="productInterest"
          required
          className="h-10 w-full rounded-md border border-slate-300 px-3 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          defaultValue=""
        >
          <option value="" disabled>
            Select a product
          </option>
          {productOptions.map((productName) => (
            <option key={productName} value={productName}>
              {productName}
            </option>
          ))}
        </select>
      </div>

      <div className="space-y-2">
        <label htmlFor="message" className="text-sm font-medium text-slate-700">
          Request details *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm text-slate-900 outline-none transition focus:border-slate-500"
          placeholder="Share your timeline, quantity, and any technical requirements."
        />
      </div>

      <div className="flex items-center justify-between gap-4">
        <SubmitButton />
        {state.message ? (
          <p
            className={`text-sm ${
              state.success ? "text-emerald-700" : "text-red-600"
            }`}
          >
            {state.message}
          </p>
        ) : null}
      </div>
    </form>
  );
}
