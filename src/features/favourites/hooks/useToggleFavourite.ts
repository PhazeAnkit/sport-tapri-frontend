import { useMutation, useQueryClient } from "@tanstack/react-query";
import { addFavourite, removeFavourite } from "@/api/favourites";
import { FavouriteItem } from "@/api/favourites";

export function useToggleFavourite() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({
      matchId,
      favouriteId,
      isFavourite,
    }: {
      matchId: string;
      favouriteId: string | null;
      isFavourite: boolean;
    }) =>
      isFavourite
        ? removeFavourite(favouriteId!)
        : addFavourite(matchId),

    // OPTIMISTIC UPDATE
    onMutate: async ({ favouriteId, isFavourite }) => {
      if (!isFavourite || !favouriteId) return;

      await queryClient.cancelQueries({ queryKey: ["favourites"] });

      const previousFavourites =
        queryClient.getQueryData<FavouriteItem[]>(["favourites"]);

      // Remove unfavourited match immediately
      queryClient.setQueryData<FavouriteItem[]>(["favourites"], old =>
        old?.filter(fav => fav.id !== favouriteId) ?? []
      );

      return { previousFavourites };
    },

    // Rollback if API fails
    onError: (_err, _vars, context) => {
      if (context?.previousFavourites) {
        queryClient.setQueryData(
          ["favourites"],
          context.previousFavourites
        );
      }
    },

    // Re-sync everything after success
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["matches"] });
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });
}
