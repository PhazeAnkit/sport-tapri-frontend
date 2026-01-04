import LeagueCardSkeleton from "./LeagueCardSkeleton";

export default function LeaguesSkeleton({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {Array.from({ length: count }).map((_, i) => (
        <LeagueCardSkeleton key={i} />
      ))}
    </div>
  );
}
