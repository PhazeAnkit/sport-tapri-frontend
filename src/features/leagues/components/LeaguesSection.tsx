"use client";

import { useEffect, useRef } from "react";
import { useLeagues } from "../hooks/useLeagues";
import LeagueCard from "./LeagueCard";
import LeaguesSkeleton from "./LeaguesSkeleton";

export default function LeaguesSection({ enabled }: { enabled: boolean }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = useLeagues(enabled);

  const loadMoreRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!enabled || !hasNextPage) return;
    const el = loadMoreRef.current;
    if (!el) return;

    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) fetchNextPage();
    });

    observer.observe(el);
    return () => observer.disconnect();
  }, [enabled, fetchNextPage, hasNextPage]);

  if (!enabled) return null;

  if (isLoading) {
    return (
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Leagues</h2>
        <LeaguesSkeleton count={6} />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Leagues</h2>
        <p className="text-sm text-red-400">Failed to load leagues.</p>
      </section>
    );
  }

  const leagues = data?.pages.flatMap((p) => p.data) ?? [];

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Leagues</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {leagues.map((league) => (
          <LeagueCard key={league.id} league={league} />
        ))}
      </div>

      {hasNextPage && <div ref={loadMoreRef} className="h-8" />}
      {isFetchingNextPage && <LeaguesSkeleton count={3} />}
    </section>
  );
}
