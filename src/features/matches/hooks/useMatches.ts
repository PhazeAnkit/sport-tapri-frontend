// import { useInfiniteQuery } from "@tanstack/react-query";
// import { fetchMatches } from "@/api/matches";

// export function useMatches() {
//   return useInfiniteQuery({
//     queryKey: ["matches"],
//     queryFn: ({ pageParam }) => fetchMatches(pageParam),
//     getNextPageParam: (last) => (last.hasMore ? last.nextCursor : undefined),
//     initialPageParam: undefined as string | undefined,
//     staleTime: 30_000,
//   });
// }


import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchMatches } from "@/api/matches";
import { MatchFilters } from "@/app/(protected)/matches/page";

export function useMatches(filters?: MatchFilters) {
  return useInfiniteQuery({
    queryKey: ["matches", filters],
    queryFn: ({ pageParam }) =>
      fetchMatches({
        cursor: pageParam,
        limit: 20,
        ...filters,
      }),
    getNextPageParam: (last) =>
      last.hasMore ? last.nextCursor : undefined,
    initialPageParam: undefined,
  });
}
