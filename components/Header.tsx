// components/Header.tsx
import Image from "next/image";

export default function Header() {
  return (
    <header className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <Image
        src="/e48f068cfb1a8d0f3a6eac1cdf8cf7b6d5a26264.jpg"
        alt="Abstract AI background"
        fill
        priority
        className="object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      {/* Content */}
      <div className="relative z-10 max-w-5xl px-6 text-center text-white">
        {/* Logo */}
        <div className="mb-10">
          <h2 className="text-3xl font-bold tracking-wide">
            simpl<span className="text-500">!</span>learn
          </h2>
        </div>

        {/* Invite-only */}
        <div className="mb-8">
          <p className="text-blue-400 font-semibold text-lg">Invite-Only</p>
          <p className="text-gray-300 text-lg">
            An Executive Roundtable – Live
          </p>
        </div>

        {/* Title */}
        <div className="mb-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            The Skills That Matter Next:
          </h1>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-blue-400 mt-2">
            Preparing Your Workforce & Leaders for the AI Era
          </h1>
        </div>

        {/* Date & Location */}
        <div className="flex flex-col items-center gap-4 text-lg text-gray-200">
          <div className="flex items-center gap-3">
            <span>📅</span>
            <span>February 20, 2026</span>
          </div>
          <div className="flex items-center gap-3">
            <span>📍</span>
            <span>Chamberlain&apos;s Steak & Fish House, Dallas</span>
          </div>
        </div>
      </div>
    </header>
  );
}
