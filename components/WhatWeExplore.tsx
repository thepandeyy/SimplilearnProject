// components/WhatWeExplore.tsx
import React from "react";

const shifts = [
  {
    title: "Skills Decay",
    description: "every 2–3 years faster for technical skills",
    icon: "⏱️",
  },
  {
    title: "Manager Role Shift",
    description: "orchestrating people + AI agents",
    icon: "🧩",
  },
  {
    title: "Leaders + AI Co-Pilots",
    description: "requires sensemaking and systems thinking",
    icon: "📊",
  },
  {
    title: "Frontline Capability",
    description: "now depends on digital fluency",
    icon: "🛡️",
  },
  {
    title: "Core Human Capabilities",
    description: "analytical reasoning and scenario planning",
    icon: "🧠",
  },
  {
    title: "Winning Organizations",
    description: "predict skills ahead of demand",
    icon: "🚀",
  },
];

const WhatWeExplore = () => {
  return (
    <section className="bg-blue-50 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-orange-500 mb-2">
          What We&apos;ll Explore
        </h2>
        <p className="text-gray-700 mb-10">
          The critical shifts every enterprise must plan for:
        </p>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {shifts.map((shift, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                {/* Icon */}
                <div className="text-blue-600 text-xl">{shift.icon}</div>

                {/* Text */}
                <div>
                  <h4 className="font-semibold text-gray-900 mb-1">
                    {shift.title}
                  </h4>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    {shift.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatWeExplore;
