import { http } from "./http";

export type MatchItem = {
  id: string;
  startTime: string;
  status: "SCHEDULED" | "LIVE" | "FINISHED";

  // ✅ NEW — provided by backend
  isFavourite: boolean;
  favouriteId: string | null;

  sport: {
    id: string;
    name: string;
    slug: string;
  };

  league: {
    id: string;
    name: string;
    country: string;
  };

  homeTeam: {
    id: string;
    name: string;
    shortName?: string;
    logoUrl?: string;
  };

  awayTeam: {
    id: string;
    name: string;
    shortName?: string;
    logoUrl?: string;
  };

  result?: {
    homeScore?: number;
    awayScore?: number;
  };
};

export type MatchesResponse = {
  data: MatchItem[];
  nextCursor: string | null;
  hasMore: boolean;
};

export async function fetchMatches(params: {
  cursor?: string;
  limit?: number;
  sportId?: string;
  leagueId?: string;
  teamId?: string;
  fromDate?: string;
  toDate?: string;
}) {
  const res = await http.get("/matches", { params });
  return res.data;
}
