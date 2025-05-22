import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function DetailedScores({student}: { student: any }) {
  console.log('Student received: ', student)

  return (
    <Card>
      <CardHeader>
        <CardTitle>Detailed Scores</CardTitle>
      </CardHeader>
      <CardContent className="overflow-x-auto">
        <p>Detailed view of search scores here!</p>
        {student !== null ? (<div>
          <h2 className="text-lg font-semibold">Student Details</h2>
          <p><strong>SBD:</strong> {student.sbd}</p>
          <p><strong>Scores:</strong></p>
          <ul>
            <li>Toan: {student.toan || 'không có'}</li>
            <li>Ngữ Văn: {student.ngu_van || 'không có'}</li>
            <li>Ngoại ngữ: {student.ngoai_ngu || 'không có'}</li>
            <li>Vật lý: {student.vat_li || 'không có'}</li>
            <li>Hóa học: {student.hoa_hoc || 'không có'}</li>
            <li>Sinh học: {student.sinh_hoc || 'không có'}</li>
            <li>Lịch sử: {student.lich_su || 'không có'}</li>
            <li>Địa lý: {student.dia_li || 'không có'}</li>
            <li>GDCD: {student.gdcd || 'không có'}</li>
            <li>Mã ngoại ngữ: {student.ma_ngoai_ngu || 'không có'}</li>
          </ul>
          </div>) : (
            <p className="text-red-500">Student not found!</p>
          )}
      </CardContent>
    </Card>
  )
}
