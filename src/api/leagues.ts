import { http } from "./http";

export type LeagueItem = {
  id: string;
  name: string;
  country: string;
  currentSeason: string;
  logoUrl?: string;
  sport: {
    id: string;
    name: string;
    slug: string;
  };
};

export type LeaguesResponse = {
  data: LeagueItem[];
  nextCursor: string | null; // league.id
  hasMore: boolean;
};

export async function fetchLeagues(
  cursor?: string,
  limit = 10
): Promise<LeaguesResponse> {
  const res = await http.get("/leagues", {
    params: { cursor, limit },
  });
  return res.data;
}


export type LeagueName = {
  id: string;
  name: string;
  country: string;
  sportId: string;
};

export async function fetchLeaguesName(
  sportId?: string
): Promise<LeagueItem[]> {
  const res = await http.get("/leagues/leaguesName", {
    params: sportId ? { sportId } : {},
  });
  return res.data.data;
}
