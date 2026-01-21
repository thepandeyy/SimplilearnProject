"use client";

import { submitRSVP } from "@/app/actions/rsvp";

export default function RSVPForm() {
  return (
    <section className="bg-white py-12">
      <div className="flex justify-center px-6">
        <form
          action={submitRSVP}
          className="flex w-full max-w-3xl bg-white rounded-lg shadow-md overflow-hidden border"
        >
          {/* Email Input */}
          <div className="flex items-center flex-1 px-4 gap-3">
            <span className="text-gray-400 text-lg">✉️</span>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your work email to confirm your attendance"
              className="w-full py-4 text-gray-700 placeholder-gray-400 focus:outline-none"
            />
          </div>

          {/* RSVP Button */}
          <button
            type="submit"
            className="bg-orange-400 hover:bg-orange-500 text-white font-semibold px-8 transition-colors"
          >
            RSVP Now
          </button>
        </form>
      </div>
    </section>
  );
}
