"use client";

import MatchCard from "@/features/matches/components/MatchCard";
import MatchesSkeleton from "@/features/matches/components/MatchesSkeleton";
import { groupMatchesByDate } from "@/features/matches/utils/groupByDate";
import { useFavourites } from "@/features/favourites/hooks/useFavourites";

export default function FavouritesPage() {
  const { data, isLoading } = useFavourites();

  if (isLoading) {
    return (
      <section className="space-y-6">
        <h1 className="text-2xl font-semibold">Your Favourites</h1>
        <MatchesSkeleton count={4} />
      </section>
    );
  }

  if (!data || data.length === 0) {
    return (
      <section className="space-y-4">
        <h1 className="text-2xl font-semibold">Your Favourites</h1>
        <p className="text-white/60">
          You haven’t favourited any matches yet.
        </p>
      </section>
    );
  }

  const matches = data.map(fav => ({
    ...fav.match,
    isFavourite: true,
    favouriteId: fav.id,
  }));

  const grouped = groupMatchesByDate(matches);

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Your Favourites</h1>

      {(["Today", "Tomorrow", "Upcoming"] as const).map(label =>
        grouped[label].length ? (
          <div key={label} className="space-y-3">
            <h3 className="text-sm uppercase tracking-wide text-white/70">
              {label}
            </h3>

            <div className="space-y-3">
              {grouped[label].map(match => (
                <MatchCard key={match.id} match={match} />
              ))}
            </div>
          </div>
        ) : null
      )}
    </section>
  );
}
