"use client"

// import { TrendingUp } from "lucide-react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

const chartData = [
    {
        "subject": "toan",
        ">8": 198392,
        "6-8": 505836,
        "4-6": 258654,
        "<4": 82731
    },
    {
        "subject": "ngu_van",
        ">8": 377879,
        "6-8": 513116,
        "4-6": 141056,
        "<4": 18050
    },
    {
        "subject": "ngoai_ngu",
        ">8": 133483,
        "6-8": 219652,
        "4-6": 363532,
        "<4": 196038
    },
    {
        "subject": "vat_li",
        ">8": 0,
        "6-8": 0,
        "4-6": 0,
        "<4": 0
    },
    {
        "subject": "hoa_hoc",
        ">8": 93333,
        "6-8": 144959,
        "4-6": 88447,
        "<4": 19779
    },
    {
        "subject": "sinh_hoc",
        ">8": 34438,
        "6-8": 182049,
        "4-6": 116263,
        "<4": 9628
    },
    {
        "subject": "lich_su",
        ">8": 138533,
        "6-8": 342577,
        "4-6": 200392,
        "<4": 24712
    },
    {
        "subject": "dia_li",
        ">8": 218515,
        "6-8": 382087,
        "4-6": 96226,
        "<4": 7854
    },
    {
        "subject": "gdcd",
        ">8": 384222,
        "6-8": 181440,
        "4-6": 16886,
        "<4": 1061
    }
]

const chartConfig = {
    ">8": {
        label: ">=8",
        color: "hsl(var(--chart-1))",
    },
    "6-8": {
        label: "6-8",
        color: "hsl(var(--chart-2))",
    },
    "4-6": {
        label: "4-6",
        color: "hsl(var(--chart-3))",
    },
    "<4": {
        label: "<4",
        color: "hsl(var(--chart-4))",
    },
} satisfies ChartConfig

const subjectFormatter = (subject: string) => {
  const subjectMap: { [key: string]: string } = {
    "toan": "Math",
    "ngu_van": "Lit",
    "ngoai_ngu": "Lang",
    "vat_li": "Phys",
    "hoa_hoc": "Chem",
    "sinh_hoc": "Bio",
    "lich_su": "Hist",
    "dia_li": "Geo",
    "gdcd": "Civ"
  }
  return subjectMap[subject] || subject
}

export function ScoreChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex justify-center">Student Score</CardTitle>
        <CardDescription className="flex justify-center">2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="subject"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={subjectFormatter}
            />
            <ChartTooltip 
              cursor={false} 
              content={<ChartTooltipContent indicator="dashed" />}
              labelFormatter={subjectFormatter}
            />
            <Bar dataKey=">8" fill="#2ecc71" radius={4} />
            <Bar dataKey="6-8" fill="#3498db" radius={4} />
            <Bar dataKey="4-6" fill="#f1c40f" radius={4} />
            <Bar dataKey="<4" fill="#e74c3c" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-center gap-2 text-sm">
        {/* <div className="flex gap-2 font-medium leading-none">
          Trending up by 5.2% this month <TrendingUp className="h-4 w-4" />
        </div> */}
        <div className="leading-none text-muted-foreground"> Showing score distribution for the 2024 Vietnamese National High School Exam</div>
      </CardFooter>
    </Card>
  )
}
