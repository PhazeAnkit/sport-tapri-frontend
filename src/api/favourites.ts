import { http } from "./http";
import { MatchItem } from "./matches";

export type FavouriteItem = {
  id: string;
  match: MatchItem;
};

export async function fetchFavourites(): Promise<FavouriteItem[]> {
  const res = await http.get("/favourite");
  return res.data.data;
}

export async function addFavourite(matchId: string) {
  return http.post(`/favourite/${matchId}`);
}

export async function removeFavourite(favouriteId: string) {
  return http.delete(`/favourite/${favouriteId}`);
}
