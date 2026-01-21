// components/FeaturedSpeakers.tsx
import React from "react";
import Image from "next/image";

const speakers = [
  {
    name: "Rob Lauber",
    image: "/8758be041fc3c2393248520addd8819945da0eaa.jpg",
    description:
      "Rob Lauber is a global workforce and capability-building leader with over 25 years of experience helping organizations prepare leaders and frontline teams for change. Most recently, he served as SVP and Chief Learning Officer at McDonald’s, leading learning and development across 37,000+ restaurants worldwide. His perspective is especially relevant as organizations rethink leadership and capability models in the age of AI.",
  },
  {
    name: "Krishna Kumar",
    image: "/8d9ee17f99e1dee2bdac7250e5fb075b9f7fbfa7.png",
    description:
      "Krishna Kumar is the Founder and CEO of Simplilearn, working closely with enterprises navigating workforce transformation driven by AI and digital change. At the center of the learning and skills ecosystem, he brings a unique perspective on how roles, leadership expectations, and capabilities are evolving across industries. Through direct engagement with enterprise leaders and education partners, he sees what scales, and what doesn’t, in building workforce readiness for the AI era.",
  },
  {
    name: "Sudipto Mitra",
    image: "/a3a53adb8072ded352c9def0ac3d5a8ad497ecff.jpg",
    description:
      "Sudipto Mitra is a senior transformation and growth leader with over 20 years of experience helping enterprises navigate large-scale change across technology, operations, and talent. As Chief Revenue Officer at Simplilearn, he works with executive teams to address workforce capability gaps as AI reshapes roles and operating models. He previously held leadership roles at Accenture, IBM Consulting, and WorkFusion.",
  },
];

const FeaturedSpeakers = () => {
  return (
    <section className="bg-blue-600 py-20 text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-xl font-bold text-yellow-400 mb-12">
          Featured Speakers
        </h2>

        {/* Speakers list */}
        <div className="space-y-14">
          {speakers.map((speaker, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row gap-8 items-start"
            >
              {/* Speaker Image */}
              <div className="w-40 h-40 relative shrink-0">
                <Image
                  src={speaker.image}
                  alt={speaker.name}
                  fill
                  className="object-cover rounded"
                />
              </div>

              {/* Speaker Content */}
              <div>
                <h3 className="text-lg font-semibold text-cyan-300 mb-2">
                  {speaker.name}
                </h3>
                <p className="text-sm leading-relaxed text-white/90">
                  {speaker.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlight */}
        <div className="mt-16 bg-blue-500/70 p-6 rounded">
          <h4 className="text-cyan-300 font-semibold mb-2">
            Additional Expert Perspectives
          </h4>
          <p className="text-sm text-white/90">
            Invited experts from leading consulting and enterprise learning
            organizations will contribute short perspectives, offering insight
            into how large organizations are evolving skills and leadership
            models in the AI era.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSpeakers;
