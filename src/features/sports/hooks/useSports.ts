import { useQuery } from "@tanstack/react-query";
import { fetchSports } from "@/api/sports";

export function useSports(enabled: boolean) {
  return useQuery({
    queryKey: ["sports-full"],
    queryFn: fetchSports,
    enabled, 
    staleTime: 5 * 60 * 1000,
  });
}
