"use client";

import { useEffect, useRef } from "react";
import { useMatches } from "../hooks/useMatches";
import MatchCard from "./MatchCard";
import MatchesSkeleton from "./MatchesSkeleton";
import { groupMatchesByDate } from "../utils/groupByDate";

export default function MatchesSection() {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useMatches();

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  // Infinite scroll observer
  useEffect(() => {
    if (!hasNextPage) return;
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) {
        fetchNextPage();
      }
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  // Initial loading state
  if (isLoading) {
    return (
      <section className="space-y-8">
        <h2 className="text-xl font-semibold">Matches</h2>
        <div className="space-y-6">
          <MatchesSkeleton count={3} />
          <MatchesSkeleton count={2} />
        </div>
      </section>
    );
  }

  // Flatten paginated matches
  const allMatches = data?.pages.flatMap(page => page.data) ?? [];

  // Group by date (Today / Tomorrow / Upcoming)
  const grouped = groupMatchesByDate(allMatches);

  return (
    <section className="space-y-8">
      <h2 className="text-xl font-semibold">Matches</h2>

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

      {/* Infinite scroll sentinel */}
      {hasNextPage && <div ref={loadMoreRef} className="h-8" />}

      {/* Loading more */}
      {isFetchingNextPage && <MatchesSkeleton count={2} />}
    </section>
  );
}
