"use client";

import { useEffect, useRef } from "react";
import { usePlayers } from "../hooks/usePlayers";
import PlayerCard from "./PlayerCard";
import PlayersSkeleton from "./PlayersSkeleton";

export default function PlayersSection({ enabled }: { enabled: boolean }) {
  const {
    data,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    isLoading,
    isError,
  } = usePlayers(enabled);

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
        <h2 className="text-xl font-semibold">Players</h2>
        <PlayersSkeleton count={6} />
      </section>
    );
  }

  if (isError) {
    return (
      <section className="space-y-6">
        <h2 className="text-xl font-semibold">Players</h2>
        <p className="text-sm text-red-400">Failed to load players.</p>
      </section>
    );
  }

  const players = data?.pages.flatMap((p) => p.data) ?? [];

  return (
    <section className="space-y-6">
      <h2 className="text-xl font-semibold">Players</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {players.map((player) => (
          <PlayerCard key={player.id} player={player} />
        ))}
      </div>

      {hasNextPage && <div ref={loadMoreRef} className="h-8" />}
      {isFetchingNextPage && <PlayersSkeleton count={3} />}
    </section>
  );
}
