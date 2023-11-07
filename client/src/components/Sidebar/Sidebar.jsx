import './style.css'
import data from './data.json'
import Sidebaritem from './Sidebaritem'

export default function Sidebar () {
  return (
        <nav className='sideBar__container'>
           {
            data.map((items, index) => <Sidebaritem key={index} items={items}/>)
           }
        </nav>
  )
}
