"use server";

import type { LeadFormSubmission } from "@/types/site";

export type LeadFormState = {
  success: boolean;
  message: string;
  fields?: Partial<LeadFormSubmission>;
};

function asString(formData: FormData, key: string) {
  const value = formData.get(key);
  return typeof value === "string" ? value.trim() : "";
}

export async function submitLeadForm(
  _previousState: LeadFormState,
  formData: FormData,
): Promise<LeadFormState> {
  const payload: LeadFormSubmission = {
    name: asString(formData, "name"),
    email: asString(formData, "email"),
    phone: asString(formData, "phone"),
    company: asString(formData, "company"),
    message: asString(formData, "message"),
    source: asString(formData, "source"),
    interest: asString(formData, "interest"),
  };

  if (!payload.name || !payload.email || !payload.message || !payload.source) {
    return {
      success: false,
      message: "Name, email, message, and source are required.",
      fields: payload,
    };
  }

  const webhook = process.env.LEAD_WEBHOOK_URL;

  if (webhook) {
    try {
      await fetch(webhook, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(payload),
      });
    } catch {
      return {
        success: false,
        message: "Lead capture failed. Check LEAD_WEBHOOK_URL or try again.",
        fields: payload,
      };
    }
  } else {
    console.log("Lead submission", payload);
  }

  return {
    success: true,
    message: "Thanks. Quero Tech has your brief and can follow up from this captured lead.",
  };
}
