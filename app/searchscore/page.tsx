'use client'
import React, { useState } from 'react'
import UserRegistration from '../../components/UserRegistration'
import DetailedScores from '../../components/DetailScore'

const SearchScore = () => {

  const [student, setStudent] = useState(null)

  const handleSbdSubmit = async (newSbd: string) => {
    console.log('SBD submitted:', newSbd)
    const data = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/students/${newSbd}`)
    const student = await data.json()
    console.log('Student data:', student)
    setStudent(student) 
  }

  return (
    <div className="space-y-4 md:space-y-6 max-w-4xl mx-auto">
      <UserRegistration handleSbdSubmit={handleSbdSubmit} />
      <DetailedScores student={student} />
    </div>
  )
}

export default SearchScore