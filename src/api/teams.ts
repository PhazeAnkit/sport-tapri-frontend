import { http } from "./http";

export type TeamItem = {
  id: string;
  name: string;
  shortName?: string;
  leagueId: string;
};

export async function fetchTeams(
  leagueId?: string
): Promise<TeamItem[]> {
  const res = await http.get("/teams/teamName", {
    params: leagueId ? { leagueId } : {},
  });
  return res.data.data;
}
