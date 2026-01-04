import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavourite, removeFavourite } from "@/api/favourites";

export function useToggleFavourite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({
      matchId,
      favouriteId,
      isFavourite,
    }: {
      matchId: string;
      favouriteId: string | null;
      isFavourite: boolean;
    }) => {
      return isFavourite
        ? removeFavourite(favouriteId!)
        : addFavourite(matchId);        
    },

    onSuccess: () => {
      // single source of truth
      queryClient.invalidateQueries({ queryKey: ["matches"] });
    },
  });
}
