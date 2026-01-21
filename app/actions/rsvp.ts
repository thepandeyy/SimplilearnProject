"use server";

import { base } from "@/lib/airtable";

export async function submitRSVP(formData: FormData) {
  console.log("SERVER ACTION HIT");

  const email = formData.get("email") as string;

  console.log("EMAIL RECEIVED:", email);

  await base(process.env.AIRTABLE_TABLE_NAME!).create([
    {
      fields: {
        Email: email,
        SubmittedAt: new Date(),
      },
    },
  ]);

  console.log("RECORD CREATED");
}
