import { MatchItem } from "@/api/matches";

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function groupMatchesByDate(matches: MatchItem[]) {
  const today = startOfDay(new Date());
  const tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);

  const groups: Record<"Today" | "Tomorrow" | "Upcoming", MatchItem[]> = {
    Today: [],
    Tomorrow: [],
    Upcoming: [],
  };

  matches.forEach((m) => {
    const d = startOfDay(new Date(m.startTime));
    if (+d === +today) groups.Today.push(m);
    else if (+d === +tomorrow) groups.Tomorrow.push(m);
    else if (+d > +tomorrow) groups.Upcoming.push(m);
  });

  return groups;
}
