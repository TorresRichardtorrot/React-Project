import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js'
import { Line } from 'react-chartjs-2'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top'
    },
    title: {
      display: true,
      text: 'Ventas del mes'
    }
  }
}

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'Agoust', 'Sectenver', 'Octuber', 'Novenber']

export const data = {
  labels,
  datasets: [
    {
      label: 'Ventas',
      data: ['20', '3', '12', '0', '1', '33', '7', '5', '3', '42', '18'],
      borderColor: 'rgb(0, 17, 73)',
      backgroundColor: 'rgb(59, 96, 216)'
    }
  ]
}

export function LineChart () {
  return <Line options={options} data={data} />
}
