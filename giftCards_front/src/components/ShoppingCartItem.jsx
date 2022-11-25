import { useCartContext } from '../context/CartContext';

const ShoppingCartItem = ({ card }) => {
    const {removeCard} = useCartContext();

    return (
        <tr className="ml-5 mr-5">
            <td
                className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-l border-[#E8E8E8]
                           "
            >
                <img src={card.ruta_imagen} alt=""  className='rounded-2xl object-cover'/>
            </td>
            <td
                className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
            >
                {card.nombre}
            </td>
            <td
                className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
            >
                XXXX-XXXX-XXXXX
            </td>
            <td
                className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-[#E8E8E8]
                           "
            >
                {card.categoria}
            </td>
            <td
                className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-[#F3F6FF]
                           border-b border-[#E8E8E8]
                           "
            >
                ${card.precio}
            </td>
            <td
                className="
                           text-center text-dark
                           font-medium
                           text-base
                           py-5
                           px-2
                           bg-white
                           border-b border-r border-[#E8E8E8]
                           "
            >
                <button className="bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
                onClick={()=>removeCard(card.id)}>
                    Remover
                </button>
            </td>
        </tr>
    )
}

export default ShoppingCartItem;