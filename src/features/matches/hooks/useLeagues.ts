import { useQuery } from "@tanstack/react-query";
import { fetchLeaguesName } from "@/api/leagues";

export function useLeagues(sportId?: string) {
  return useQuery({
    queryKey: ["leagues", sportId],
    queryFn: () => fetchLeaguesName(sportId),
    enabled: !!sportId,
    staleTime: 60_000,
  });
}
