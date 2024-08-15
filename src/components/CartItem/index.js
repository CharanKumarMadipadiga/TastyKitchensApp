import './index.css'

const CartItem = props => {
  const {cartDetails} = props
  console.log('cart details', cartDetails)
  const {id, name, imageUrl, cost, quantity} = cartDetails

  return (
    <li className="cart-item-con" key={id}>
      <img src={imageUrl} alt="cart-item" className="cart-img" />
      <p>{quantity}</p>
      <p>{cost}</p>
    </li>
  )
}

export default CartItem
