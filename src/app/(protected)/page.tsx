"use client";

import { useRef } from "react";
import MatchesSection from "@/features/matches/components/MatchesSections";
import SportsSection from "@/features/sports/components/SportsSection";
import LeaguesSection from "@/features/leagues/components/LeaguesSection";
import PlayersSection from "@/features/players/components/PlayerSection";
import { useOnScreen } from "@/hooks/useOnScreen";

export default function HomePage() {
  const sportsTriggerRef = useRef<HTMLDivElement | null>(null);
  const leaguesTriggerRef = useRef<HTMLDivElement | null>(null);
  const playersTriggerRef = useRef<HTMLDivElement | null>(null);

  const showSports = useOnScreen(sportsTriggerRef, "200px");
  const showLeagues = useOnScreen(leaguesTriggerRef, "200px");
  const showPlayers = useOnScreen(playersTriggerRef, "200px");

  return (
    <div className="space-y-16">
      <MatchesSection />

      <div ref={sportsTriggerRef} />
      <SportsSection enabled={showSports} />

      <div ref={leaguesTriggerRef} />
      <LeaguesSection enabled={showLeagues} />

      <div ref={playersTriggerRef} />
      <PlayersSection enabled={showPlayers} />
    </div>
  );
}
