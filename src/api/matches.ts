import { http } from "./http";

export type MatchItem = {
  id: string;
  startTime: string;
  status: "SCHEDULED" | "LIVE" | "FINISHED";
  sport: { id: string; name: string; slug: string };
  league: { id: string; name: string; country: string };
  homeTeam: { id: string; name: string; shortName?: string; logoUrl?: string };
  awayTeam: { id: string; name: string; shortName?: string; logoUrl?: string };
  result?: { homeScore?: number; awayScore?: number };
};

export type MatchesResponse = {
  data: MatchItem[];
  nextCursor: string | null; // ISO startTime
  hasMore: boolean;
};

export async function fetchMatches(
  cursor?: string,
  limit = 20
): Promise<MatchesResponse> {
  const res = await http.get("/matches", {
    params: { cursor, limit },
  });
  return res.data;
}
