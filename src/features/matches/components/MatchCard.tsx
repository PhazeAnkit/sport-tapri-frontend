import { MatchWithFavourite } from "../types";
import FavouriteButton from "@/features/favourites/components/FavouritesButton";

export default function MatchCard({ match }: { match: MatchWithFavourite }) {
  const isFinished = match.status === "FINISHED";

  const timeLabel = new Date(match.startTime).toLocaleString(undefined, {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-4">
      <div className="flex items-center justify-between text-xs text-white/70 mb-2">
        <span>{match.league.name}</span>
        <span>{match.league.country}</span>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="flex-1 text-right">
          <p className="font-semibold">{match.homeTeam.name}</p>
        </div>

        <div className="text-center min-w-[72px]">
          {isFinished ? (
            <p className="font-bold text-lg">
              {match.result?.homeScore ?? "-"} :{" "}
              {match.result?.awayScore ?? "-"}
            </p>
          ) : (
            <p className="text-sm text-white/80">{timeLabel}</p>
          )}
          <p className="text-xs text-white/60">{match.status}</p>
        </div>

        <div className="flex-1">
          <p className="font-semibold">{match.awayTeam.name}</p>
        </div>
      </div>

      <div className="mt-3 flex justify-end">
        <FavouriteButton
          matchId={match.id}
          isFavourite={match.isFavourite}
          favouriteId={match.favouriteId}
        />
      </div>
    </div>
  );
}
