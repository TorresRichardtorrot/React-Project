import './style.css'
import { BiSolidPurchaseTag, BiCaretDownSquare } from 'react-icons/bi'
import { FaVenusMars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function Sidebaritem ({ items }) {
  const [open, setOpen] = useState(false)
  return (
    <ul>
    <button className='sidebar--btn' onClick={() => setOpen(!open)}>
          { items.icon === 'Marca' ? <BiSolidPurchaseTag/> : <FaVenusMars/>}
            <h3>{items.title}</h3>
        <BiCaretDownSquare />
    </button>
    <div className={open ? '' : 'hidden'}>
    {
        items.value.map((item, index) => <Link key={index} to={`/tienda/brands/${item}`} ><li className='sidebar--iten'>{item}</li></Link>)
    }
    </div>
</ul>
  )
}

export default Sidebaritem
