import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addFavourite,
  removeFavourite,
} from "@/api/favourites";

export function useToggleFavourite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      matchId,
      favouriteId,
    }: {
      matchId: string;
      favouriteId?: string | null;
    }) => {
      return favouriteId
        ? removeFavourite(favouriteId)
        : addFavourite(matchId);
    },

    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });
}
