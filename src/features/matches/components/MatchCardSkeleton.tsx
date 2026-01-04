export default function MatchCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-4 animate-pulse">
      <div className="flex justify-between mb-3">
        <div className="h-3 w-24 bg-white/20 rounded" />
        <div className="h-3 w-16 bg-white/20 rounded" />
      </div>

      {/* Teams row */}
      <div className="flex items-center justify-between gap-4">
        <div className="flex-1">
          <div className="h-4 w-28 bg-white/20 rounded ml-auto" />
        </div>

        <div className="min-w-[72px] flex flex-col items-center gap-2">
          <div className="h-4 w-12 bg-white/20 rounded" />
          <div className="h-3 w-10 bg-white/20 rounded" />
        </div>

        <div className="flex-1">
          <div className="h-4 w-28 bg-white/20 rounded" />
        </div>
      </div>
    </div>
  );
}
