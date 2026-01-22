"use server";

import { base } from "@/lib/airtable";

export async function submitRSVP(formData: FormData) {
  const email = formData.get("email");

  // ✅ Strong validation
  if (typeof email !== "string" || !email.trim() || !email.includes("@")) {
    throw new Error("Invalid email address");
  }

  const tableName = process.env.AIRTABLE_TABLE_NAME;
  if (!tableName) {
    throw new Error("AIRTABLE_TABLE_NAME is not set");
  }

  try {
    await base(tableName).create([
      {
        fields: {
          Email: email,
          SubmittedAt: new Date().toISOString(), // ✅ Airtable-compatible
        },
      },
    ]);
  } catch (error) {
    console.error("Airtable create failed:", error);
    throw new Error("Failed to submit RSVP");
  }
}
