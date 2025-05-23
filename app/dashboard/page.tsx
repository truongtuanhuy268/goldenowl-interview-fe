// import { ScoreChart } from "../../components/Chart"
// import { StudentPerformanceChart } from "../../components/TestChart"

import TopTable from "../../components/TopTable"

const Dashboard = () => {
    return (
        <>
        <div className="mt-8 mb-4 w-full flex flex-col items-center">
        <div className="max-w-3xl w-full px-4 md:px-6 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-3 dark:text-white">Top 10 Students in block A</h2>
          <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base">
            Below is the list of the top 10 students who achieved the highest scores in the 2024 Vietnamese National High School Exam. 
            These exceptional students have demonstrated outstanding academic performance across all subjects.
          </p>
        </div>
      </div>
      <TopTable/>
        </>
    )
}
export default Dashboard