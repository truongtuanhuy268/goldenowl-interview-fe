"use client"

// import { TrendingUp } from "lucide-react"
import { useEffect, useState } from "react"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { type ChartConfig, ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"

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
  const [chartData, setChartData] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchChartData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/reports`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setChartData(data)
      } catch (error) {
        console.error('Error fetching chart data:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchChartData()
  }, [])

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>
  }

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
