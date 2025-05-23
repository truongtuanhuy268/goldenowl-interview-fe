import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function DetailedScores({student}: { student: any }) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Scores</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        {student === null ? (
          <p>Detailed view of search scores here!</p>
        ) : student.error ? (
          <p className="text-red-500">Student not found!</p>
        ) : (
          <div>
            <h2 className="text-lg font-semibold mb-4">Student Details</h2>
            <p className="mb-4"><strong>Student Number:</strong> {student.sbd}</p>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Subject</TableHead>
                  <TableHead className="text-center">Score</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Mathematics</TableCell>
                  <TableCell className="text-center">{student.toan || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Literature</TableCell>
                  <TableCell className="text-center">{student.ngu_van || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Foreign Language</TableCell>
                  <TableCell className="text-center">{student.ngoai_ngu || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Physics</TableCell>
                  <TableCell className="text-center">{student.vat_li || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Chemistry</TableCell>
                  <TableCell className="text-center">{student.hoa_hoc || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Biology</TableCell>
                  <TableCell className="text-center">{student.sinh_hoc || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>History</TableCell>
                  <TableCell className="text-center">{student.lich_su || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Geography</TableCell>
                  <TableCell className="text-center">{student.dia_li || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Civic Education</TableCell>
                  <TableCell className="text-center">{student.gdcd || 'N/A'}</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Foreign Language Code</TableCell>
                  <TableCell className="text-center">{student.ma_ngoai_ngu || 'N/A'}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
