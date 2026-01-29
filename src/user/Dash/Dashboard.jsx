import React from 'react'
import Card from '../../components/Dashboard/Card'
import Charts from '../../components/Charts/Charts'
import BarCharts from '../../components/Charts/BarCharts'
import AreaChartSimple from '../../components/Charts/AreaChartSimple'
import PieChartSimple from '../../components/Charts/PieChartSimple'
// import Sidebar from '../../components/Sidebar'

const Dashboard = () => {
  return (
    <div className='relative h-[100%] w-full bg-gray- 100 flex flex-col items-center justify-strat gap-3'>
      <div className='flex gap-3 items-center justify-center h-auto p-3 w-[100%] flex-wrap relative'>
        <Card name="Doremon" designation="Full Stack" working_amount={990} place="Anand" profile_img="https://tse3.mm.bing.net/th/id/OIP.l6Tazzl91xEUYhTgSFRJdQHaIE?pid=Api&P=0&h=180" />
        <Card name="Shinchan" designation="Full Stack" working_amount={220} place="Ahmedabad" profile_img="https://tse2.mm.bing.net/th/id/OIP.iWSy3w_G6ETCXwO8s2VBzgHaFv?pid=Api&P=0&h=180" />
        <Card name="Jiyaan" designation="Full Stack" working_amount={200} place="Bhavnagar" profile_img="https://vignette.wikia.nocookie.net/doraemon/images/4/45/Jaian_2005_ID.png/revision/latest?cb=20181215062535&path-prefix=en" />
      </div>
      <div className=' flex gap-5 items-center justify-center  w-full flex-wrap relative p-1'>

        <BarCharts />
        <AreaChartSimple />
        <PieChartSimple av={20} ap={20} ar={20} />

      </div>
      <div className="flex items-center justify-center p-5">
        <div className="w-full max-w-4xl bg-white rounded-xl shadow-lg overflow-hidden">
          <div className="px-6 py-4 border-b">
            <h2 className="text-xl font-semibold text-gray-800">
              Employee Attendance
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full table-auto text-left">
              <thead className="bg-gray-100 text-gray-700 uppercase text-sm">
                <tr>
                  <th className="px-6 py-3">Employee</th>
                  <th className="px-6 py-3">Dept</th>
                  <th className="px-6 py-3">Status</th>
                  <th className="px-6 py-3">Check-in</th>
                  <th className="px-6 py-3">Mode</th>
                </tr>
              </thead>

              <tbody className="divide-y">
                <tr className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 font-medium text-gray-900">
                    Dhruvitkumar
                  </td>
                  <td className="px-6 py-4 text-gray-700">IT</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm rounded-full bg-green-100 text-green-700 font-medium">
                      Present
                    </span>
                  </td>
                  <td className="px-6 py-4 text-gray-700">09:27 AM</td>
                  <td className="px-6 py-4">
                    <span className="px-3 py-1 text-sm rounded-md bg-blue-100 text-blue-700">
                      Offline
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
