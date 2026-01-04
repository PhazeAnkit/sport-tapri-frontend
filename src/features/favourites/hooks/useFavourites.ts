import { useQuery } from "@tanstack/react-query";
import { fetchFavourites } from "@/api/favourites";

export function useFavourites() {
  return useQuery({
    queryKey: ["favourites"],
    queryFn: fetchFavourites,
    staleTime: 60_000,
  });
}
