"use client";

import { useRef } from "react";
import MatchesSection from "@/features/matches/components/MatchesSections";
import SportsSection from "@/features/sports/components/SportsSection";
import { useOnScreen } from "@/hooks/useOnScreen";

export default function HomePage() {
  const sportsTriggerRef = useRef<HTMLDivElement | null>(null);
  const showSports = useOnScreen(sportsTriggerRef, "200px");

  return (
    <div className="space-y-16">
      <MatchesSection />

      {/* Trigger when MatchesSection ends */}
      <div ref={sportsTriggerRef} />

      <SportsSection enabled={showSports} />
    </div>
  );
}
