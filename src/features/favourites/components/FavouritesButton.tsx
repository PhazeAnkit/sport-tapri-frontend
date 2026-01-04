"use client";

import { useToggleFavourite } from "../hooks/useToggleFavourite";

export default function FavouriteButton({
  matchId,
  isFavourite,
  favouriteId,
}: {
  matchId: string;
  isFavourite: boolean;
  favouriteId: string | null;
}) {
  const { mutate, isPending } = useToggleFavourite();

  const handleClick = () => {
    mutate({
      matchId,
      favouriteId,
      isFavourite,
    });
  };

  return (
    <button
      onClick={handleClick}
      disabled={isPending}
      className="text-xl transition hover:scale-110 disabled:opacity-50"
      aria-label="Toggle favourite"
    >
      {isFavourite ? "⭐" : "☆"}
    </button>
  );
}
