"use client";

import { Bar, BarChart, Pie, PieChart, ResponsiveContainer, Cell, XAxis, YAxis, Tooltip as RechartsTooltip } from "recharts";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  ChartLegend,
  ChartLegendContent,
} from "@/components/ui/chart";
import { socialCategoryData, diversityPieData } from "@/lib/data";

const pieChartConfig = {
  value: {
    label: "Students",
  },
  Urban: {
    label: "Urban",
    color: "hsl(var(--chart-1))",
  },
  Rural: {
    label: "Rural",
    color: "hsl(var(--chart-2))",
  },
};

export function RepresentationPieChart() {
  return (
    <ChartContainer config={pieChartConfig} className="mx-auto aspect-square h-[200px]">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel />}
        />
        <Pie
          data={diversityPieData}
          dataKey="value"
          nameKey="name"
          innerRadius={60}
          strokeWidth={5}
        >
            {diversityPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} />
            ))}
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="name" />}
          className="-translate-y-2 flex-wrap gap-2 [&>*]:basis-1/4 [&>*]:justify-center"
        />
      </PieChart>
    </ChartContainer>
  );
}

const barChartConfig = {
    count: {
        label: "Count",
        color: "hsl(var(--chart-1))",
    },
};

export function SocialCategoryBarChart() {
  return (
    <ChartContainer config={barChartConfig} className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={socialCategoryData} layout="vertical" margin={{ left: 10, right: 10 }}>
            <XAxis type="number" hide />
            <YAxis 
                dataKey="category"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 12 }}
                width={80}
            />
            <RechartsTooltip cursor={false} content={<ChartTooltipContent hideLabel />} />
            <Bar dataKey="count" radius={5} fill="hsl(var(--chart-2))" />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
