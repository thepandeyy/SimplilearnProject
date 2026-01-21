import React from "react";
import Image from "next/image";
import RSVPForm from "./RSVPForm";

const points = [
  "A clear view of the leadership & workforce capabilities that will matter most over the next 24–36 months.",
  "Insights from high-scale operating environments including the former CLO of McDonald’s on what truly scales and what breaks under pressure.",
  "Signals for where capability gaps may already be forming in your organization.",
  "Peer-validated perspectives from leaders running workforce, talent, and transformation ecosystems at scale.",
  "Actionable insights you can take straight into your next exec meeting.",
];

const GoBehindTheCurtain = () => {
  return (
    <section className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Top layout */}
        <div className="grid grid-cols-1 lg:grid-cols-[3fr_2fr] gap-12 items-start">
          {/* LEFT */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold text-orange-500 mb-6">
              Go behind the curtain with real <br />
              examples and high-scale insights
            </h2>

            <p className="text-gray-900 font-medium mb-6">
              You’ll walk away with:
            </p>

            <ul className="space-y-5">
              {points.map((point, index) => (
                <li key={index} className="flex gap-4">
                  {/* vertical accent */}
                  <span className="w-1 bg-orange-400 rounded-sm mt-1" />
                  <p className="text-gray-700 leading-relaxed">{point}</p>
                </li>
              ))}
            </ul>

            {/* RSVP – closer to bullets */}
            <div className="mt-10 max-w-3xl">
              <RSVPForm />
            </div>
          </div>

          {/* RIGHT – image pulled inward */}
          <div className="relative flex justify-center lg:justify-start">
            <div className="relative w-[380px] h-[380px] lg:-ml-6">
              <Image
                src="/1fa49518d5276ad3c9802cde9d22329cf0a02cbe.png"
                alt="Strategic chess pieces"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoBehindTheCurtain;
