"use client";

import SportCard from "./SportCard";
import SportCardSkeleton from "./SportCardSkeleton";
import { useSports } from "../hooks/useSports";

export default function SportsSection({ enabled }: { enabled: boolean }) {
  const { data, isLoading, isError } = useSports(enabled);

  if (!enabled) {
    return null;
  }

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Sports</h2>

      {isError && (
        <p className="text-sm text-red-400">Failed to load sports.</p>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {isLoading &&
          Array.from({ length: 3 }).map((_, i) => (
            <SportCardSkeleton key={i} />
          ))}

        {!isLoading &&
          data?.data.map((sport) => <SportCard key={sport.id} sport={sport} />)}
      </div>
    </section>
  );
}
