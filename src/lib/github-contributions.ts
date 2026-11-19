import type { ContributionWeek } from "@/components/contribution-chart";

const API_URL =
  "https://github-contributions-api.jogruber.de/v4/fixkas?y=last";

type ApiDay = { date: string; count: number };

type ApiResponse = { contributions: ApiDay[] };

const weekFormatter = new Intl.DateTimeFormat("en-CA", {
  day: "2-digit",
  month: "short",
  timeZone: "UTC",
});

function toWeeks(days: ApiDay[]): ContributionWeek[] {
  const weeks: ContributionWeek[] = [];

  for (let i = 0; i < days.length; i += 7) {
    const chunk = days.slice(i, i + 7);
    const total = chunk.reduce((sum, day) => sum + day.count, 0);
    const start = new Date(`${chunk[0].date}T00:00:00Z`);

    weeks.push({
      week: weekFormatter.format(start),
      total,
    });
  }

  return weeks;
}

export async function getGithubContributions(): Promise<ContributionWeek[]> {
  try {
    const response = await fetch(API_URL, {
      next: { revalidate: 3600 },
    });

    if (!response.ok) {
      return [];
    }

    const data = (await response.json()) as ApiResponse;
    return toWeeks(data.contributions);
  } catch {
    return [];
  }
}
