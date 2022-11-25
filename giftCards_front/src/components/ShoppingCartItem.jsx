import React from 'react'
import { useCartContext } from '../context/CartContext'

const ShoppingCartItem = ({ card }) => {
    const {removeCard} = useCartContext()
    return (
        <tr className="border-b text-center rounded-2xl">
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                <img src={card.ruta_imagen} alt=""  className='rounded-2xl object-cover h-35 w-90 '/>
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                {card.nombre}
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                XXXX-XXXX-XXXXX
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                {card.categoria}
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                ${card.precio}
            </td>
            <td
                className="text-lg font-medium text-white px-3 py-4"
            >
                <button className="bg-red-500 hover:bg-red-700 hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                onClick={()=>removeCard(card.id)}>
                    Remover
                </button>
            </td>
        </tr>
    )
}

export default ShoppingCartItem