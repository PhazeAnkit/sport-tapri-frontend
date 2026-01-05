"use client";

import { useEffect, useRef } from "react";
import { MatchFilters } from "@/app/(protected)/matches/page";
import { useMatches } from "../hooks/useMatches";
import MatchCard from "./MatchCard";
import MatchesSkeleton from "./MatchesSkeleton";

export default function MatchesList({
  filters,
}: {
  filters: MatchFilters;
}) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
  } = useMatches(filters);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!hasNextPage) return;
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) fetchNextPage();
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [fetchNextPage, hasNextPage]);

  if (isLoading) return <MatchesSkeleton count={4} />;

  const matches = data?.pages.flatMap((p) => p.data) ?? [];

  if (!matches.length) {
    return (
      <p className="text-white/60">
        No matches found for selected filters.
      </p>
    );
  }

  return (
    <div className="space-y-3">
      {matches.map((match) => (
        <MatchCard key={match.id} match={match} />
      ))}

      {hasNextPage && <div ref={loadMoreRef} className="h-6" />}
      {isFetchingNextPage && <MatchesSkeleton count={2} />}
    </div>
  );
}
