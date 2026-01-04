export default function SportCardSkeleton() {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-5 animate-pulse">
      <div className="h-5 w-24 bg-white/20 rounded mb-2" />
      <div className="h-3 w-20 bg-white/20 rounded" />
      <div className="mt-4 space-y-2">
        <div className="h-3 w-28 bg-white/20 rounded" />
        <div className="h-3 w-32 bg-white/20 rounded" />
      </div>
    </div>
  );
}
