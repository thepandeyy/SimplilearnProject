import React from "react";
import Image from "next/image";
import RSVPForm from "./RSVPForm";

const FinalCTAWithWhite = () => {
  return (
    <>
      {/* IMAGE SECTION */}
      <section className="relative w-full h-[260px]">
        {/* Background image */}
        <Image
          src="/Maskgroup-3.png"
          alt="Venue background"
          fill
          className="object-cover"
          priority
        />

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/60" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-10 text-white h-full flex flex-col justify-between">
          {/* Top */}
          <p className="text-sm font-semibold">
            Space is limited.
          </p>

          {/* RSVP */}
          <div className="max-w-3xl">
            <RSVPForm />
          </div>

          {/* Footer */}
          <div className="flex justify-between items-center">
            <div className="text-xl font-semibold">
              simpl!<span >learn</span>
            </div>

            <p className="text-xs text-white/80">
              © 2009–2025 · Simplilearn Solutions. All Rights Reserved.
            </p>
          </div>
        </div>
      </section>

      {/* WHITE SECTION BELOW */}
      <section className="bg-white h-24" />
    </>
  );
};

export default FinalCTAWithWhite;
