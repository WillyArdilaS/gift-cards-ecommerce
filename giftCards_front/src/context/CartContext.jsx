import React, { useState,useContext } from 'react'

const CartContext = React.createContext([])
export const useCartContext = () => useContext(CartContext)

const CartProvider= ({children}) => {

    const [cart, setCart] = useState([])

    
    const addCard = (item,quantity)=>{
        if (isInCart(item.id)){
            setCart(cart.map(card=>{
                return card.id===item.id ? {...item,quantity:item.quantity+quantity}:item
            }))
        } else{
            setCart([...cart,{...item, quantity}])
        }
        
    }
    console.log('carrito: ', cart)
    const clearCart = () =>setCart([])

    const isInCart = (id) => {
        return cart.find(card => card.id === id) ? true : false
    }

    const removeCard = (id) =>{
        setCart(cart.filter(card=>card.id !== id))
    }

    const totalPrice=()=>{
        return cart.reduce((before,after) => before + after.precio,0)
    }

    let totalProducts = cart.length
    console.log("cantidad",totalProducts)
    
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