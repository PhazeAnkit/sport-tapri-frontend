import { useQuery } from "@tanstack/react-query";
import { fetchTeams } from "@/api/teams";

export function useTeams(leagueId?: string) {
  return useQuery({
    queryKey: ["teams", leagueId],
    queryFn: () => fetchTeams(leagueId),
    enabled: !!leagueId,
    staleTime: 60_000,
  });
}
