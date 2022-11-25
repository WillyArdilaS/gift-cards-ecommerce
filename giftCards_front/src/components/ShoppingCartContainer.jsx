import React from 'react'
import { useCartContext } from '../context/CartContext'
import 'boxicons'
import Header from './Header'
import ShoppingCartItem from './ShoppingCartItem'

const ShoppingCartContainer = () => {
   const { cart, totalPrice } = useCartContext()

   if (cart.length === 0) {
      return (
         <>
            <Header />
            <div className="bg-blue-500 text-white text-lg font-bold px-10 py-5 mt-12 flex items-center justify-center" role="alert" >
               <svg className="fill-current w-4 h-4 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M12.432 0c1.34 0 2.01.912 2.01 1.957 0 1.305-1.164 2.512-2.679 2.512-1.269 0-2.009-.75-1.974-1.99C9.789 1.436 10.67 0 12.432 0zM8.309 20c-1.058 0-1.833-.652-1.093-3.524l1.214-5.092c.211-.814.246-1.141 0-1.141-.317 0-1.689.562-2.502 1.117l-.528-.88c2.572-2.186 5.531-3.467 6.801-3.467 1.057 0 1.233 1.273.705 3.23l-1.391 5.352c-.246.945-.141 1.271.106 1.271.317 0 1.357-.392 2.379-1.207l.6.814C12.098 19.02 9.365 20 8.309 20z" /></svg>
               <p>No has agregado ningún producto a tu carrito.</p>
            </div>
         </>
      )
   }
   return (

      <>
         <Header />


         <table className="max-w-screen-2xl overflow-x-auto mt-8 ml-5 mr-5">
            <thead >
               <tr className="bg-blue-500 text-center border-double">
                  <th
                     className="w-1/6
                     min-w-[160px] text-lg font-medium text-white px-3 py-4"
                  >

                  </th>
                  <th
                     className="w-1/6
                     min-w-[160px] text-lg font-medium text-white px-3 py-4"
                  >
                     Nombre
                  </th>
                  <th
                     className="w-1/6
                     min-w-[160px] text-lg font-medium text-white px-3 py-4"
                  >
                     Código de canjeo
                  </th>
                  <th
                     className="w-1/6
                     min-w-[160px] text-lg font-medium text-white px-3 py-4"
                  >
                     Categoria
                  </th>
                  <th
                     className="w-1/6
                     min-w-[160px] text-lg font-medium text-white px-3 py-4"
                  >
                     Precio
                  </th>
                  <th
                     className="
                           w-1/6
                           min-w-[160px]
                           text-lg
                           font-semibold
                           text-white
                           py-4
                           lg:py-7
                           px-3
                           lg:px-4
                           border-l border-transparent
                           "
                  >

                  </th>
               </tr>
            </thead>
            <tbody>
               {
                  cart.map(card => <ShoppingCartItem key={card.id} card={card} />)
               }


               <tr className="border-b text-right">
                  <td colspan="4"
                     className="text-lg font-medium text-white px-3 py-4"
                  >
                     Total : ${totalPrice()}
                  </td>
                  
               </tr>
            </tbody>


         </table>
         <div classNme="flex flex-col justify-center items-center fixed">
            <button type="button" className="absolute text-white bg-[#050708] font-medium rounded-lg text-sm px-5 py-2.5 mx-96 text-center inline-flex items-center dark:focus:ring-[#050708]/50 dark:hover:bg-green-700">
            <img className="mr-3"src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAATtJREFUSEvFle1RwzAQRN9WQAnQAVABpAKgg5QQKsCpAEpIB6QDTAfQAekgHSxzjOzBxh9CJIP+eEaS9+n2pDtx5KEj6zMLsF0BN8AF8AZsJa1zDzYJsF0DVwNitaRFDmQUYHsFPAI7YCmptn0NbIBT4F7S0xxkChB2nAOLEG+EEuQl7JJ0mQ2YsGNOo1kftK2NwLZzlcb2SfrhyL8COt6XRjcawVC4JZBZQGHy24TnAIqS3ziQDWh+sL0HTnp27SSdxVxzG38NaB5cqk0PPcBaUmX7FniOtRJAFLm7dMoogMsE2YR4mm9rVwkgNKqxStqPrBQQkDhlgF7TqaMAhmXxbccQ4CNVya9N35J6sFsUCQovo4IeHjD2Sm13Ist8ze+SogNmtcxOZBmAaFArSdssQIbg5JbZpv9XwCecbbIZmgwnPAAAAABJRU5ErkJggg=="/>
                  Realizar compra
            </button>
         </div>
        
         



      </>
   )
}

export default ShoppingCartContainer