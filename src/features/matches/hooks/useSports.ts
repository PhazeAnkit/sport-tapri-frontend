import { useQuery } from "@tanstack/react-query";
import { fetchSportsName } from "@/api/sports";

export function useSports() {
  return useQuery({
    queryKey: ["sports-Name"],
    queryFn: fetchSportsName,
    staleTime: 60_000,
  });
}
