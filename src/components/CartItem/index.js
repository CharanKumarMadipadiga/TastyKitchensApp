import './index.css'

const CartItem = props => {
  const {cartDetails} = props
  const {name, imageUrl, price} = cartDetails

  return (
    <li className="cart-item-con">
      <img src={imageUrl} alt="cart-item" className="cart-img" />
      <p>{name}</p>
      <p>{price}</p>
    </li>
  )
}

export default CartItem
