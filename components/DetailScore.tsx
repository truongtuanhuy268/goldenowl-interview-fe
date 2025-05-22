import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DetailedScores() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Scores</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <p>Detailed view of search scores here!</p>
      </CardContent>
    </Card>
  )
}
