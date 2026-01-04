import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/api/matches";

export function useMatches() {
  return useInfiniteQuery({
    queryKey: ["matches"],
    queryFn: ({ pageParam }) => fetchMatches(pageParam),
    getNextPageParam: (last) => (last.hasMore ? last.nextCursor : undefined),
    initialPageParam: undefined as string | undefined,
    staleTime: 30_000,
  });
}
