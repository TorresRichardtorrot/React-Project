/* eslint-disable react/prop-types */
import './style.css'
import { BsPencilSquare } from 'react-icons/bs'
import { MdDelete } from 'react-icons/md'

function TableProduct ({ header, data }) {
  const imgUrl = 'http://localhost:9080/img/'
  return (
    <table className="table__product">
    <thead className="table__product__header">
      <tr>
        {header.map((item, index) => {
          return <th key={index}>{item}</th>
        })}
      </tr>
    </thead>
    <tbody className="table__product__body">
      {data.map(item => {
        return (
        <tr key={item._id}>
         <td><img src={`${imgUrl}${item.images[0]}`} alt={item.title} /></td>
         <td>{item.title}</td>
         <td>{item.brand}</td>
         <td>${item.price}</td>
         <td>{item.quantity}</td>
         <td className='list__item__btn'>
          <div className='list__iten__btn__box'>
          <button title='Edit'><BsPencilSquare/>editar</button>
          <button title='Delete'><MdDelete/>Eliminar</button>
          </div>
        </td>
      </tr>
        )
      })}

    </tbody>

  </table>
  )
}

export default TableProduct
