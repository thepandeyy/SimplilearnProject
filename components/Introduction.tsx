// components/Introduction.tsx
import React from "react";

const Introduction = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">
        {/* Intro paragraph */}
        <p className="text-lg md:text-xl text-gray-800 leading-relaxed mb-10">
          AI is accelerating change across every operational layer. Roles are
          shifting. Leadership models are collapsing and reforming. Frontline and
          mid-level managers will soon lead teams of people and intelligent
          agents.
        </p>

        {/* Lead-in */}
        <p className="text-lg text-gray-700 mb-8">
          But even the most advanced enterprises are asking the same question:
        </p>

        {/* Main Question */}
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug mb-10">
          Which capabilities will matter most,
          <br />
          and how do we build them at scale?
        </h2>

        {/* Closing */}
        <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
          This invite-only roundtable gathers CHROs, CLOs, and enterprise
          workforce leaders for a candid, senior-level discussion on what’s
          coming next.
        </p>
      </div>
    </section>
  );
};

export default Introduction;
