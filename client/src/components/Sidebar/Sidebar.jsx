import './style.css'
import data from './data.json'
import Sidebaritem from './Sidebaritem'

export default function Sidebar () {
  return (
        <nav>
           {
            data.map((items, index) => <Sidebaritem key={index} items={items}/>)
           }
        </nav>
  )
}
