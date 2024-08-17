import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartItem: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default CartContext
