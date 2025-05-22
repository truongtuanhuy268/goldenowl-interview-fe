"use client"

import { Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from "recharts"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer } from "@/components/ui/chart"

// This is your data structure
const rawData = [
  {
    subject: "toan",
    levels: [
      { level: ">=8", count: 198392 },
      { level: "6-8", count: 505836 },
      { level: "4-6", count: 258654 },
      { level: "<4", count: 82731 },
    ],
  },
  {
    subject: "ngu_van",
    levels: [
      { level: ">=8", count: 377879 },
      { level: "6-8", count: 513116 },
      { level: "4-6", count: 141056 },
      { level: "<4", count: 18050 },
    ],
  },
  {
    subject: "ngoai_ngu",
    levels: [
      { level: ">=8", count: 133483 },
      { level: "6-8", count: 219652 },
      { level: "4-6", count: 363532 },
      { level: "<4", count: 196038 },
    ],
  },
  {
    subject: "vat_ly",
    levels: [
      { level: ">=8", count: 0 },
      { level: "6-8", count: 0 },
      { level: "4-6", count: 0 },
      { level: "<4", count: 0 },
    ],
  },
  {
    subject: "hoa_hoc",
    levels: [
      { level: ">=8", count: 93333 },
      { level: "6-8", count: 144959 },
      { level: "4-6", count: 88447 },
      { level: "<4", count: 19779 },
    ],
  },
  {
    subject: "sinh_hoc",
    levels: [
      { level: ">=8", count: 34438 },
      { level: "6-8", count: 182049 },
      { level: "4-6", count: 116263 },
      { level: "<4", count: 9628 },
    ],
  },
  {
    subject: "lich_su",
    levels: [
      { level: ">=8", count: 138533 },
      { level: "6-8", count: 342577 },
      { level: "4-6", count: 200392 },
      { level: "<4", count: 24712 },
    ],
  },
  {
    subject: "dia_li",
    levels: [
      { level: ">=8", count: 218515 },
      { level: "6-8", count: 382087 },
      { level: "4-6", count: 96226 },
      { level: "<4", count: 7854 },
    ],
  },
  {
    subject: "gdcd",
    levels: [
      { level: ">=8", count: 384222 },
      { level: "6-8", count: 181440 },
      { level: "4-6", count: 16886 },
      { level: "<4", count: 1061 },
    ],
  },
]

// Transform the data for the chart
const transformData = (data) => {
  return data.map((item) => {
    const result = {
      subject: formatSubjectName(item.subject),
    }

    // Add each level as a property
    item.levels.forEach((level) => {
      result[level.level] = level.count
    })

    return result
  })
}

// Format subject names for display
const formatSubjectName = (subject) => {
  const nameMap = {
    toan: "Math",
    ngu_van: "Literature",
    ngoai_ngu: "Foreign Lang",
    vat_ly: "Physics",
    hoa_hoc: "Chemistry",
    sinh_hoc: "Biology",
    lich_su: "History",
    dia_li: "Geography",
    gdcd: "Civics",
  }

  return nameMap[subject] || subject
}

// Prepare the chart data
const chartData = transformData(rawData)

// Chart configuration
const chartConfig = {
  ">=8": {
    label: "Excellent (≥8)",
    color: "hsl(var(--chart-1))",
  },
  "6-8": {
    label: "Good (6-8)",
    color: "hsl(var(--chart-2))",
  },
  "4-6": {
    label: "Average (4-6)",
    color: "hsl(var(--chart-3))",
  },
  "<4": {
    label: "Below Average (<4)",
    color: "hsl(var(--chart-4))",
  },
} satisfies ChartConfig

export function StudentPerformanceChart() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Student Performance by Subject</CardTitle>
        <CardDescription>Distribution of student scores across different subjects</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[500px]">
          <ChartContainer config={chartConfig}>
            <BarChart
              data={chartData}
              layout="vertical"
              margin={{ top: 20, right: 30, left: 100, bottom: 5 }}
              barGap={0}
              barCategoryGap="10%"
            >
              <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} />
              <XAxis type="number" />
              <YAxis dataKey="subject" type="category" width={90} tick={{ fontSize: 12 }} />
              <Tooltip
                formatter={(value) => [`${Number(value).toLocaleString()} students`, ""]}
                labelFormatter={(label) => `Subject: ${label}`}
              />
              <Legend />
              <Bar dataKey=">=8" stackId="a" fill="var(--color->=8)" name="Excellent (≥8)" radius={[0, 4, 4, 0]} />
              <Bar dataKey="6-8" stackId="a" fill="var(--color-6-8)" name="Good (6-8)" />
              <Bar dataKey="4-6" stackId="a" fill="var(--color-4-6)" name="Average (4-6)" />
              <Bar dataKey="<4" stackId="a" fill="var(--color-<4)" name="Below Average (<4)" />
            </BarChart>
          </ChartContainer>
        </div>
      </CardContent>
    </Card>
  )
}
