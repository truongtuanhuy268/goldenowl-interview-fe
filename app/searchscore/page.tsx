'use client'
import React, { useState } from 'react'
import UserRegistration from '../../components/UserRegistration'
import DetailedScores from '../../components/DetailScore'

const SearchScore = () => {

  const [student, setStudent] = useState(null)

  const handleSbdSubmit = async (newSbd: string) => {
    console.log('SBD submitted:', newSbd)
    const data = await fetch(`http://localhost:3001/students/${newSbd}`)
    const student = await data.json()
    console.log('Student data:', student)
    if (!student.error) setStudent(student)
    else setStudent(null)
  }

  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
      <UserRegistration handleSbdSubmit={handleSbdSubmit} />
      <DetailedScores student={student} />
    </div>
  )
}

export default SearchScore