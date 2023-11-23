import { dashboardData } from './data'
import { LineChart } from '../components/LineChart/LineChart'
import { PieChart } from '../components/PieChart/PieChart'
function AdminDashboard () {
  return (
  <>
        <div className='cards__dashboard__container'>

             {
             dashboardData.map(item => {
               return (
                <div key={item.id} className='card__dashboard'>
              <div className='card__dashboard--text'>
              <p>{item.data}</p>
              <h5>{item.titulo}</h5>
              </div>
              {item.icon}
            </div>
               )
             })
             }

        </div>
        <div className='chart__dashboard__container'>
          <div className='chart__dashboard__line'>
            <div className='chart__dashboard__line--box'>
            <LineChart/>
            </div>
          </div>
          <div className='chart__dashboard__pie'>
            <PieChart/>
          </div>
        </div>

        </>
  )
}

export default AdminDashboard
