"use client";

import { MatchFilters } from "@/app/(protected)/matches/page";
import { useSports } from "../hooks/useSports";
import { useLeagues } from "../hooks/useLeagues";
import { useTeams } from "../hooks/useTeams";

export default function MatchesFilters({
  filters,
  onChange,
}: {
  filters: MatchFilters;
  onChange: (f: MatchFilters) => void;
}) {
  const { data: sports } = useSports();
  const { data: leagues } = useLeagues(filters.sportId);
  const { data: teams } = useTeams(filters.leagueId);

  return (
    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 bg-white/5 p-4 rounded-xl backdrop-blur border border-white/10">
      <select
        value={filters.sportId ?? ""}
        onChange={(e) =>
          onChange({
            sportId: e.target.value || undefined,
            leagueId: undefined,
            teamId: undefined,
          })
        }
        className="filter-select"
      >
        <option value="">All Sports</option>
        {sports?.map((s) => (
          <option key={s.id} value={s.id}>
            {s.name}
          </option>
        ))}
      </select>

      <select
        value={filters.leagueId ?? ""}
        onChange={(e) =>
          onChange({ ...filters, leagueId: e.target.value || undefined })
        }
        disabled={!filters.sportId}
        className="filter-select"
      >
        <option value="">All Leagues</option>
        {leagues?.map((l) => (
          <option key={l.id} value={l.id}>
            {l.name}
          </option>
        ))}
      </select>

      <select
        value={filters.teamId ?? ""}
        onChange={(e) =>
          onChange({ ...filters, teamId: e.target.value || undefined })
        }
        disabled={!filters.leagueId}
        className="filter-select"
      >
        <option value="">All Teams</option>
        {teams?.map((t) => (
          <option key={t.id} value={t.id}>
            {t.name}
          </option>
        ))}
      </select>

      <input
        type="date"
        value={filters.fromDate ?? ""}
        onChange={(e) =>
          onChange({ ...filters, fromDate: e.target.value || undefined })
        }
        className="filter-select"
      />

      <input
        type="date"
        value={filters.toDate ?? ""}
        onChange={(e) =>
          onChange({ ...filters, toDate: e.target.value || undefined })
        }
        className="filter-select"
      />
    </div>
  );
}
