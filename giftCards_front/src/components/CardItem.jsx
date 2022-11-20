import React from 'react'
import 'boxicons'
import { useCartContext } from '../context/CartContext'

const CardItem = ({ info }) => {
    const { addCard } = useCartContext()
    const onAdd = () => {
        alert("Tarjeta agregada al carrito")
        addCard(info, 1)
    }
    return (
        <article className="mt-12 mx-auto">
            <button id={info.categoria}>
                <img src={info.ruta_imagen} alt="Imagen de la tarjeta" id="giftCardImage"
                    className="w-56 h-36 rounded-2xl object-cover  hover:scale-105" />
            </button>
            <h2 className="mt-2 text-lg text-center text-slate-200"> {info.nombre} </h2>
            <h3 className="mt-2 text-lg text-center text-slate-200"> ${info.precio} </h3>

            <button type="button" className="text-white bg-[#050708] font-medium rounded-lg text-sm px-5 py-2.5 mr-6 ml-6 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-[#050708]/30" onClick={onAdd}>
            <svg aria-hidden="true" class="mr-2 -ml-1 w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z"></path></svg>
                Agregar al carrito
            </button>
            


        </article>

    )
}

export default CardItem