// app/page.tsx
import Header from '@/components/Header';
import RSVPForm from '@/components/RSVPForm';
import Introduction from '@/components/Introduction';
import WhatWeExplore from '@/components/WhatWeExplore';
import FeaturedSpeakers from '@/components/FeaturedSpeakers';
import GoBehindTheCurtain from '@/components/GoBehindTheCurtain';
import EventAgenda from '@/components/EventAgenda';
import FinalCTA from '@/components/FinalCTA';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <RSVPForm />
      <Introduction />
      <WhatWeExplore />
      <FeaturedSpeakers />
      <GoBehindTheCurtain />
      <EventAgenda />
      <FinalCTA />
    </main>
  );
}