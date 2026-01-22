"use server";

import { base } from "@/lib/airtable";
import type { FieldSet } from "airtable";

interface RSVPFields extends FieldSet {
  Email: string;
  SubmittedAt: string; // ✅ MUST be string, NOT Date
}

export async function submitRSVP(formData: FormData) {
  const email = formData.get("email");

  if (typeof email !== "string" || !email.trim() || !email.includes("@")) {
    throw new Error("Invalid email address");
  }

  const tableName = process.env.AIRTABLE_TABLE_NAME;
  if (!tableName) {
    throw new Error("AIRTABLE_TABLE_NAME is not set");
  }

  try {
    await base<RSVPFields>(tableName).create([
      {
        fields: {
          Email: email,
          SubmittedAt: new Date().toISOString(), // ✅ correct
        },
      },
    ]);
  } catch (error) {
    console.error("Airtable create failed:", error);
    throw new Error("Failed to submit RSVP");
  }
}
