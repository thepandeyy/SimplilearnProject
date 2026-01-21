// components/EventAgenda.tsx
import React from "react";

const agendaItems = [
  {
    heading: "Welcome & Opening",
    speaker: "Sudipto Mitra, CRO Simplilearn",
    description:
      "Why capability-building is now a board-level issue and what’s changing in the workforce landscape.",
  },
  {
    heading: "Keynote:\nWhat Enterprise Leaders Are Seeing on the Ground",
    speaker: "Rob Lauber, Former CLO McDonald’s",
    description:
      "A grounded view of how AI and AI agents are reshaping work, workflows, and leadership across industries.",
  },
  {
    heading: "Lunch & Executive Conversation",
    speaker: "Industry Experts Invited",
    description:
      "What large enterprise talent ecosystems are learning about capability-building at scale.",
  },
];

const EventAgenda = () => {
  return (
    <section className="bg-cyan-400 py-20">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-2xl font-bold text-blue-700 mb-12">
          Event Agenda
        </h2>

        {/* Agenda cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {agendaItems.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-md"
            >
              <h3 className="text-blue-700 font-semibold mb-4 whitespace-pre-line">
                {item.heading}
              </h3>

              <p className="text-sm font-medium text-gray-900 mb-3">
                {item.speaker}
              </p>

              <p className="text-sm text-gray-600 leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventAgenda;
