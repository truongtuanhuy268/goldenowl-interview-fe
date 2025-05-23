"use client"

import React, { useEffect, useState } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

interface Top10 {
  sbd: string
  toan: number
  vat_li: number
  hoa_hoc: number
  tong_diem_khoi_a: number
}

const TopTable = () => {
  const [top10Data, setTop10Data] = useState<Top10[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchTop10 = async () => {
      try {
        const backendUrl = process.env.NEXT_PUBLIC_BACKEND_URL
        if (!backendUrl) {
          throw new Error('Backend URL is not configured')
        }
        
        const response = await fetch(`${backendUrl}/reports/top-10`)
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setTop10Data(data)
      } catch (error) {
        console.error('Error fetching top 10:', error)
        setError(error instanceof Error ? error.message : 'Failed to fetch data')
      } finally {
        setIsLoading(false)
      }
    }

    fetchTop10()
  }, [])

  if (isLoading) {
    return <div className="text-center py-4">Loading...</div>
  }

  if (error) {
    return <div className="text-center py-4 text-red-500">Error: {error}</div>
  }

  return (
    <Table>
      <TableCaption>A list of top 10 students in block A.</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="lg:w-[100px]">StudentID</TableHead>
          <TableHead className='text-center'>Math</TableHead>
          <TableHead className='text-center'>Physic</TableHead>
          <TableHead className='text-center'>Chemistry</TableHead>
          <TableHead className='text-center'>Total</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {top10Data.map((student) => (
          <TableRow key={student.sbd}>
            <TableCell className="font-medium">{student.sbd}</TableCell>
            <TableCell className='text-center'>{student.toan}</TableCell>
            <TableCell className='text-center'>{student.vat_li}</TableCell>
            <TableCell className='text-center'>{student.hoa_hoc}</TableCell>
            <TableCell className='text-center'>{student.tong_diem_khoi_a}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  )
}

export default TopTable