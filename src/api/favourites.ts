import { http } from "./http";

export type FavouriteItem = {
  id: string;
  matchId: string;
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
