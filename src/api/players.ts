import { http } from "./http";

export type PlayerItem = {
  id: string;
  name: string;
  country: string;
  role?: string;
  ranking?: number;

  sport: {
    id: string;
    name: string;
  };

  team?: {
    id: string;
    name: string;
  };
};

export type PlayersResponse = {
  data: PlayerItem[];
  nextCursor: string | null; // player.id
  hasMore: boolean;
};

export async function fetchPlayers(
  cursor?: string,
  limit = 10
): Promise<PlayersResponse> {
  const res = await http.get("/players", {
    params: { cursor, limit },
  });
  return res.data;
}
