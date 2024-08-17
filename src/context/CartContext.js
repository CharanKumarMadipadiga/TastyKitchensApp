import React from 'react'

const CartContext = React.createContext({
  cartList: [],
  addCartItem: () => {},
  deleteCartList: () => {},
  increaseQuantity: () => {},
  decreaseQuantity: () => {},
})

export default CartContext
