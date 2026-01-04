import { MatchItem } from "@/api/matches";

export type MatchWithFavourite = MatchItem & {
  favourite?: {
    id: string;
  } | null;
};
