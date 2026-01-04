import { SportItem } from "@/api/sports";

export default function SportCard({ sport }: { sport: SportItem }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-5 hover:bg-white/15 transition">
      <h4 className="font-semibold text-lg">{sport.name}</h4>

      <p className="text-sm text-white/70 mt-1">
        {sport.sportType.replace("_", " ").toLowerCase()}
      </p>

      {(sport.leaguesCount !== undefined ||
        sport.upcomingMatchesCount !== undefined) && (
        <div className="mt-3 text-xs text-white/60 space-y-1">
          {sport.leaguesCount !== undefined && (
            <p>{sport.leaguesCount} leagues</p>
          )}
          {sport.upcomingMatchesCount !== undefined && (
            <p>{sport.upcomingMatchesCount} upcoming matches</p>
          )}
        </div>
      )}
    </div>
  );
}
