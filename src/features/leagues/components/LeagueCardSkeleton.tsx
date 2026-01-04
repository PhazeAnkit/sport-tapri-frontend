export default function LeagueCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-5 animate-pulse">
      <div className="flex justify-between mb-2">
        <div className="h-4 w-28 bg-white/20 rounded" />
        <div className="h-3 w-16 bg-white/20 rounded" />
      </div>
      <div className="h-3 w-40 bg-white/20 rounded" />
    </div>
  );
}
