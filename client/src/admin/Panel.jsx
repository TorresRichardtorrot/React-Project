/* eslint-disable react/prop-types */
import { data } from './data'
import { FaUserNinja } from 'react-icons/fa'
import { RiLogoutBoxLine } from 'react-icons/ri'
import { LuSettings } from 'react-icons/lu'

import { useAuth } from '../hook/auth'

function Panel ({ setPage, page }) {
  const { user, logout } = useAuth()
  return (
        <>
            <div className="sidebar__title">
            <FaUserNinja/>
            <h3> {user.username}</h3>
            </div>

        <nav className="sidebar__container__list">
        <ul className='sidebar__list'>
            {data.map(item => (
                <li key={item.id} className={page === item.view ? 'sidebar__list--item list__active' : 'sidebar__list--item'}>
                <button onClick={() => setPage(item.view)}>
                 { item.icon} <span>{item.title}</span>
                </button>
              </li>
            ))}

        </ul>

        <ul className='sidebar__list list__two'>
        <hr />
        <li className="sidebar__list--item">
                <button >
                 <LuSettings/><span>Configuracion</span>
                </button>
            </li>
            <li className="sidebar__list--item">
                <button onClick={() => logout()}>
                 <RiLogoutBoxLine/> <span>Logout</span>
                </button>
            </li>
        </ul>
        </nav>

        </>
  )
}

export default Panel
