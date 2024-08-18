import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'
import {useContext} from 'react'
import CartContext from '../../context/CartContext'
import CartItem from '../CartItem'
import './index.css'

const CartListView = () => {
  const {cartList} = useContext(CartContext)

  const totalPrice = cartList.reduce(
    (total, item) => total + item.cost * item.quantity,
    0,
  )

  return (
    <>
      <ul className="cart-desktop-list">
        {cartList.map(cartItem => (
          <CartItem key={cartItem.id} cartDetails={cartItem} />
        ))}
      </ul>
      <ul className="cart-mobile-list">
        {cartList.map(cartItem => (
          <CartItem key={cartItem.id} cartDetails={cartItem} />
        ))}
      </ul>
      <hr className="cart-hr-line" />
      <div className="order-total-place-con">
        <h1 className="order-total-heading">Order Total :</h1>
        <div className="total-price-con">
          <FontAwesomeIcon icon={faIndianRupeeSign} className="rupee-symbol" />
          <p className="total-price">{totalPrice}.00</p>
        </div>
      </div>
      <Link to="/payment-successful" className="place-btn">
        <button type="button" className="place-order-now-btn">
          Place Order
        </button>
      </Link>
    </>
  )
}

export default CartListView
