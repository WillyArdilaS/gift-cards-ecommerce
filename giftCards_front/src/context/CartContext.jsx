import React, { useState,useContext } from 'react'
import Swal from 'sweetalert2'
const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider= ({children}) => {

    const [cart, setCart] = useState([])

    
    const addCard = (item,quantity)=>{
        if (isInCart(item.id_tarjeta)){
            Swal.fire({
                icon: 'info',
                title: 'Ya agregaste este producto a tu carrito',
                text: '¡Puedes mirar más opciones!',
            })
        } else{
            setCart([...cart,{...item, quantity}])
            Swal.fire({
                icon: 'success',
                title: 'Producto agregado a tu carrito',
                text: '¡Sigue comprando!',
                
            })
        }
        
    }
    
    const clearCart = () =>setCart([])

    const isInCart = (id) => {
        return cart.find(card => card.id_tarjeta === id) ? true : false
    }

    const removeCard = (id) =>{
        Swal.fire({
            icon: 'info',
            title: 'Producto removido de tu carrito',
            text: '¡Puedes mirar más opciones!',
        })
        setCart(cart.filter(card=>card.id_tarjeta !== id))
        
    }

    const totalPrice=()=>{
        let total = cart.reduce((pre,act) => pre + act.precio,0)
        return total
    }

    
    let totalProducts = cart.length
    
    
    return (
        <CartContext.Provider value={{
            clearCart,
            isInCart,
            removeCard,
            addCard,
            totalPrice,
            totalProducts,
            cart
        }}>
            {children}
        </ CartContext.Provider>
    )
}

export default CartProvider
