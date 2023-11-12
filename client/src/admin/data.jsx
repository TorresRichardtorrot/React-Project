import { MdWeb, MdDashboard, MdOutlineInventory2, MdOutlineAssignment } from 'react-icons/md'

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
    title: 'Ir a web',
    icon: <MdWeb />,
    view: 'web'
  }
]
