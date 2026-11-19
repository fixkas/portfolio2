"use client";

import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";

export type ContributionWeek = {
  week: string;
  total: number;
};

const chartConfig = {
  total: {
    label: "Contributions",
    color: "var(--foreground)",
  },
} satisfies ChartConfig;

export function ContributionChart({ data }: { data: ContributionWeek[] }) {
  if (data.length === 0) {
    return (
      <p className="p-4 text-sm text-muted-foreground">
        Contribution data unavailable.
      </p>
    );
  }

  return (
    <ChartContainer
      config={chartConfig}
      className="aspect-auto h-full min-h-48 w-full"
    >
      <LineChart data={data} margin={{ top: 8, right: 8, bottom: 0, left: 0 }}>
        <CartesianGrid vertical={false} strokeDasharray="3 3" />
        <XAxis
          dataKey="week"
          tickLine={false}
          axisLine={false}
          tickMargin={8}
          minTickGap={24}
        />
        <YAxis
          width={32}
          tickLine={false}
          axisLine={false}
          allowDecimals={false}
        />
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent indicator="line" />}
        />
        <Line
          dataKey="total"
          type="linear"
          stroke="var(--color-total)"
          strokeWidth={2}
          dot={false}
          activeDot={{ r: 4 }}
        />
      </LineChart>
    </ChartContainer>
  );
}
