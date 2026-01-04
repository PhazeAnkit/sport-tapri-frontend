import { http } from "./http";

export type SportItem = {
  id: string;
  name: string;
  slug: string;
  sportType: "TEAM" | "INDIVIDUAL" | "MOTORSPORT";
  isActive: boolean;
  leaguesCount?: number;
  upcomingMatchesCount?: number;
};

export type SportsResponse = {
  data: SportItem[];
};

export async function fetchSports(): Promise<SportsResponse> {
  const res = await http.get("/sports");
  return res.data;
}
