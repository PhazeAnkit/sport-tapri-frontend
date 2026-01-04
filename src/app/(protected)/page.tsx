import MatchesSection from "@/features/matches/components/MatchesSections";

export default function HomePage() {
  return (
    <div className="space-y-16">
      <MatchesSection />
      {/* SportsSection, LeaguesSection, PlayersSection come next */}
    </div>
  );
}
