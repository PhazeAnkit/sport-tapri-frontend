import { PlayerItem } from "@/api/players";

export default function PlayerCard({ player }: { player: PlayerItem }) {
  return (
    <div className="rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-lg p-5 hover:bg-white/15 transition">
      <h4 className="font-semibold">{player.name}</h4>

      <p className="text-sm text-white/70 mt-1">
        {player.country}
        {player.role ? ` • ${player.role}` : ""}
      </p>

      <div className="mt-3 text-xs text-white/60 space-y-1">
        <p>{player.sport.name}</p>
        {player.team && <p>{player.team.name}</p>}
        {player.ranking !== undefined && <p>Ranking: {player.ranking}</p>}
      </div>
    </div>
  );
}
