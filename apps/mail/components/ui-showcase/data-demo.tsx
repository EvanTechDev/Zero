'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Calendar } from '@/components/ui/calendar';
import { ChartContainer, ChartTooltip, ChartTooltipContent, type ChartConfig } from '@/components/ui/chart';
import { Bar, BarChart, CartesianGrid, XAxis } from 'recharts';
import { ShowcaseSection, ShowcaseTile } from './showcase-section';

const chartData = [
  { day: 'Mon', emails: 42 },
  { day: 'Tue', emails: 58 },
  { day: 'Wed', emails: 35 },
  { day: 'Thu', emails: 71 },
  { day: 'Fri', emails: 49 },
];

const chartConfig: ChartConfig = {
  emails: { label: 'Emails', color: 'hsl(var(--chart-1))' },
};

export function DataDemo() {
  return (
    <ShowcaseSection
      id="data"
      title="Data display"
      description="card.tsx · calendar.tsx · chart.tsx"
    >
      <ShowcaseTile label="Card" className="max-w-xs">
        <Card className="w-full">
          <CardHeader>
            <CardTitle>Weekly summary</CardTitle>
            <CardDescription>255 emails processed this week</CardDescription>
          </CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Up 12% from last week.
          </CardContent>
        </Card>
      </ShowcaseTile>

      <ShowcaseTile label="Calendar" className="max-w-xs">
        <Calendar mode="single" className="rounded-md border border-border" />
      </ShowcaseTile>

      <ShowcaseTile label="Chart" className="w-full max-w-xl">
        <ChartContainer config={chartConfig} className="h-48 w-full">
          <BarChart data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis dataKey="day" tickLine={false} axisLine={false} />
            <ChartTooltip content={<ChartTooltipContent />} />
            <Bar dataKey="emails" fill="var(--color-emails)" radius={4} />
          </BarChart>
        </ChartContainer>
      </ShowcaseTile>
    </ShowcaseSection>
  );
}
