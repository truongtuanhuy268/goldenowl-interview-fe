import React from 'react'
import { ScoreChart } from '../../components/Chart'

const Reports = () => {
  return (
    <>
      <div className="w-full flex flex-col items-center mb-8">
        <div className="max-w-3xl w-full px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">Score Distribution Analysis</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Statistics of student scores across subjects, categorized into four levels: Excellent (≥8 points), Good (6-8 points), 
            Average (4-6 points), and Below Average (&lt;4 points).
          </p>
        </div>
      </div>
      <ScoreChart/>
    </>
  )
}

export default Reports