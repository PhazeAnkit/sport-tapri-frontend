"use client";

import { useToggleFavourite } from "../hooks/useToggleFavourite";

export default function FavouriteButton({
  matchId,
  favouriteId,
}: {
  matchId: string;
  favouriteId?: string | null;
}) {
  const { mutate, isPending } = useToggleFavourite();

  const isFavourite = Boolean(favouriteId);

  return (
    <button
      disabled={isPending}
      onClick={() => mutate({ matchId, favouriteId })}
      className="text-xl transition hover:scale-110 disabled:opacity-50"
    >
      {isFavourite ? "⭐" : "☆"}
    </button>
  );
}
