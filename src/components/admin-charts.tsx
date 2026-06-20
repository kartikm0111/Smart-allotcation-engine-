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
    <ChartContainer config={pieChartConfig} className="mx-auto aspect-square h-[220px]">
      <PieChart>
        <ChartTooltip
          cursor={false}
          content={<ChartTooltipContent hideLabel className="backdrop-blur-md bg-background/90 border-primary/20 shadow-xl rounded-xl" />}
        />
        <Pie
          data={diversityPieData}
          dataKey="value"
          nameKey="name"
          innerRadius={70}
          outerRadius={95}
          strokeWidth={4}
          stroke="hsl(var(--background))"
          paddingAngle={2}
        >
            {diversityPieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={entry.fill} className="drop-shadow-sm hover:opacity-80 transition-opacity outline-none" />
            ))}
        </Pie>
        <ChartLegend
          content={<ChartLegendContent nameKey="name" />}
          className="translate-y-4 flex-wrap gap-4 [&>*]:basis-1/4 [&>*]:justify-center text-sm font-medium"
        />
      </PieChart>
    </ChartContainer>
  );
}

const barChartConfig = {
    count: {
        label: "Count",
        color: "hsl(var(--chart-2))",
    },
};

export function SocialCategoryBarChart() {
  return (
    <ChartContainer config={barChartConfig} className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart data={socialCategoryData} layout="vertical" margin={{ left: 10, right: 30, top: 10, bottom: 10 }}>
            <XAxis type="number" hide />
            <YAxis 
                dataKey="category"
                type="category"
                tickLine={false}
                axisLine={false}
                tick={{ fill: 'hsl(var(--foreground))', fontSize: 13, fontWeight: 500 }}
                width={70}
            />
            <RechartsTooltip 
              cursor={{fill: 'hsl(var(--muted))', opacity: 0.4, radius: 4}} 
              content={<ChartTooltipContent hideLabel className="backdrop-blur-md bg-background/90 border-primary/20 shadow-xl rounded-xl" />} 
            />
            <Bar 
              dataKey="count" 
              radius={[0, 6, 6, 0]} 
              fill="hsl(var(--chart-3))" 
              barSize={24}
              className="drop-shadow-sm hover:opacity-80 transition-opacity"
            />
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
