import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPlayers } from "@/api/players";

export function usePlayers(enabled: boolean) {
  return useInfiniteQuery({
    queryKey: ["players"],
    queryFn: ({ pageParam }) => fetchPlayers(pageParam),
    getNextPageParam: (last) => (last.hasMore ? last.nextCursor : undefined),
    initialPageParam: undefined as string | undefined,
    enabled,
    staleTime: 5 * 60 * 1000,
  });
}
