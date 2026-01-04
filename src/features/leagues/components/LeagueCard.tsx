import { LeagueItem } from "@/api/leagues";

export default function LeagueCard({ league }: { league: LeagueItem }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-5 hover:bg-white/15 transition">
      <div className="flex items-center justify-between">
        <h4 className="font-semibold">{league.name}</h4>
        <span className="text-xs text-white/60">{league.country}</span>
      </div>

      <p className="text-sm text-white/70 mt-1">
        {league.sport.name} • {league.currentSeason}
      </p>
    </div>
  );
}
