"use client";

import { useState } from "react";
import MatchesFilters from "@/features/matches/components/MatchesFilter";
import MatchesList from "@/features/matches/components/MatchesList";

export type MatchFilters = {
  sportId?: string;
  leagueId?: string;
  teamId?: string;
  fromDate?: string;
  toDate?: string;
};

export default function MatchesPage() {
  const [filters, setFilters] = useState<MatchFilters>({});

  return (
    <section className="space-y-8">
      <h1 className="text-2xl font-semibold">Matches</h1>

      <MatchesFilters filters={filters} onChange={setFilters} />

      <MatchesList filters={filters} />
    </section>
  );
}
