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
      <div className='flex item-center justify-center p-5 bg-red-200'>
        <table className='table-auto bg-white rounded-t-xl'>
          <thead>
            <tr>
              <th>Employee</th>
              <th>Dept</th>
              <th>Status</th>
              <th>Check-in</th>
              <th>Mode</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Dhruvitkumar</td>
              <td>IT</td>
              <td>Present</td>
              <td>09:27</td>
              <td>Offline</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  )
}

export default Dashboard
