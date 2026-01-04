import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchLeagues } from "@/api/leagues";

export function useLeagues(enabled: boolean) {
  return useInfiniteQuery({
    queryKey: ["leagues"],
    queryFn: ({ pageParam }) => fetchLeagues(pageParam),
    getNextPageParam: (last) => (last.hasMore ? last.nextCursor : undefined),
    initialPageParam: undefined as string | undefined,
    enabled, // lazy-load
    staleTime: 5 * 60 * 1000,
  });
}
