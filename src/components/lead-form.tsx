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
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-6 sm:p-8">
      <div className="max-w-xl">
        <div className="text-xs uppercase tracking-[0.3em] text-cyan-200/70">{source}</div>
        <h2 className="mt-3 font-[family:var(--font-display)] text-3xl text-white">{heading}</h2>
        <p className="mt-3 text-sm leading-7 text-white/60">{description}</p>
      </div>
      <form action={action} className={`mt-8 grid gap-4 ${compact ? "lg:grid-cols-2" : "lg:grid-cols-3"}`}>
        <input type="hidden" name="source" value={source} />
        <label className="grid gap-2 text-sm text-white/72">
          Name
          <input
            required
            name="name"
            defaultValue={state.fields?.name}
            className="rounded-2xl border border-white/12 bg-slate-950 px-4 py-3 text-white outline-none ring-0 transition focus:border-cyan-300/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          Email
          <input
            required
            type="email"
            name="email"
            defaultValue={state.fields?.email}
            className="rounded-2xl border border-white/12 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          Phone
          <input
            name="phone"
            defaultValue={state.fields?.phone}
            className="rounded-2xl border border-white/12 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          Company
          <input
            name="company"
            defaultValue={state.fields?.company}
            className="rounded-2xl border border-white/12 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
        </label>
        <label className="grid gap-2 text-sm text-white/72">
          Interest
          <input
            name="interest"
            defaultValue={state.fields?.interest}
            placeholder={interestPlaceholder}
            className="rounded-2xl border border-white/12 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
        </label>
        <label className={`grid gap-2 text-sm text-white/72 ${compact ? "lg:col-span-2" : "lg:col-span-3"}`}>
          Brief
          <textarea
            required
            name="message"
            rows={6}
            defaultValue={state.fields?.message}
            className="rounded-3xl border border-white/12 bg-slate-950 px-4 py-3 text-white outline-none transition focus:border-cyan-300/40"
          />
        </label>
        <div className={`${compact ? "lg:col-span-2" : "lg:col-span-3"} flex flex-wrap items-center gap-4`}>
          <button
            type="submit"
            disabled={pending}
            className="rounded-full bg-[linear-gradient(135deg,#22d3ee_0%,#bef264_100%)] px-5 py-3 text-sm font-semibold text-slate-950 transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
          >
            {pending ? "Submitting..." : "Send request"}
          </button>
          {state.message ? (
            <div className={`text-sm ${state.success ? "text-lime-300" : "text-amber-300"}`}>{state.message}</div>
          ) : null}
        </div>
      </form>
    </div>
  );
}
