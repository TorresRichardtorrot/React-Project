import { MdWeb, MdDashboard, MdOutlineInventory2, MdOutlineAssignment } from 'react-icons/md'
import { FaRegEdit } from 'react-icons/fa'
import { CiViewList } from 'react-icons/ci'
import { FaDollarSign } from 'react-icons/fa6'
export const data = [
  {
    id: '1',
    title: 'Dashboard',
    icon: <MdDashboard />,
    view: 'dashboard'
  },
  {
    id: '2',
    title: 'Productos',
    icon: <MdOutlineInventory2 />,
    view: 'product'
  },
  {
    id: '3',
    title: 'Inventario',
    icon: <MdOutlineAssignment />,
    view: 'inventory'
  },
  {
    id: '4',
    title: 'Crear Producto',
    icon: <FaRegEdit />,
    view: 'create'
  },
  {
    id: '5',
    title: 'Ir a web',
    icon: <MdWeb />,
    view: 'web'
  }
]

export const dashboardData = [
  {
    id: 1,
    titulo: 'Inventario',
    data: 1200,
    icon: <CiViewList/>
  },
  {
    id: 2,
    titulo: 'ingresos',
    data: `$${0}`,
    icon: <FaDollarSign/>
  },
  {
    id: 3,
    titulo: 'Inventario',
    data: 1200,
    icon: <CiViewList/>
  },
  {
    id: 4,
    titulo: 'Inventario',
    data: 1200,
    icon: <CiViewList/>
  }
]
