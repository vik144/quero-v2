"use client";

import { useActionState } from "react";

import { submitLeadForm, type LeadFormState } from "@/app/actions";

type LeadFormProps = {
  source: string;
  heading: string;
  description: string;
  interestPlaceholder: string;
  compact?: boolean;
};

const initialState: LeadFormState = {
  success: false,
  message: "",
};

export function LeadForm({
  source,
  heading,
  description,
  interestPlaceholder,
  compact = false,
}: LeadFormProps) {
  const [state, action, pending] = useActionState(submitLeadForm, initialState);

  return (
    <div className="rounded-2xl border border-white/5 bg-[#151515] p-6 sm:p-8">
      <div className="max-w-xl">
        <div className="text-xs font-bold uppercase tracking-[0.3em] text-[#ff6b00]">{source}</div>
        <h2 className="mt-3 text-2xl font-extrabold text-white sm:text-3xl">{heading}</h2>
        <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
      </div>
      <form action={action} className={`mt-8 grid gap-4 ${compact ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
        <input type="hidden" name="source" value={source} />
        <label className="grid gap-2 text-sm text-white/70">
          Name
          <input
            required
            name="name"
            defaultValue={state.fields?.name}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]/50"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Email
          <input
            required
            type="email"
            name="email"
            defaultValue={state.fields?.email}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]/50"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Phone
          <input
            name="phone"
            defaultValue={state.fields?.phone}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]/50"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Company
          <input
            name="company"
            defaultValue={state.fields?.company}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]/50"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/70">
          Interest
          <input
            name="interest"
            defaultValue={state.fields?.interest}
            placeholder={interestPlaceholder}
            className="rounded-xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]/50"
          />
        </label>
        <label className={`grid gap-2 text-sm text-white/70 ${compact ? "lg:col-span-2" : "lg:col-span-3"}`}>
          Brief
          <textarea
            required
            name="message"
            rows={6}
            defaultValue={state.fields?.message}
            className="rounded-2xl border border-white/10 bg-[#0a0a0a] px-4 py-3 text-white outline-none transition focus:border-[#ff6b00]/50"
          />
        </label>
        <div className={`${compact ? "lg:col-span-2" : "lg:col-span-3"} flex flex-wrap items-center gap-4`}>
          <button
            type="submit"
            disabled={pending}
            className="rounded-xl bg-[#ff6b00] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#ff6b00]/90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Submitting..." : "Send request"}
          </button>
          {state.message ? (
            <div className={`text-sm ${state.success ? "text-green-400" : "text-orange-300"}`}>{state.message}</div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
