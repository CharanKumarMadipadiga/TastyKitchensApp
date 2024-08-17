import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import {Link} from 'react-router-dom'

import CartContext from '../../context/CartContext'

import CartItem from '../CartItem'

import './index.css'

// const cartList = [
//   {
//     id: 1,
//     name: 'chicken noodles',
//     price: 60,
//     imageUrl:
//       'https://thedumplingsisters.wordpress.com/wp-content/uploads/2014/11/tds-noodles-2.jpg',
//   },
//   {
//     id: 2,
//     name: 'chicken fried rice',
//     price: 80,
//     imageUrl:
//       'https://tse4.mm.bing.net/th?id=OIP.EdtFdGsiPMUNRsxXORO6UwHaHa&pid=Api&P=0&h=220',
//   },
//   {
//     id: 3,
//     name: 'chicken biryani',
//     price: 120,
//     imageUrl:
//       'https://tse2.mm.bing.net/th?id=OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7&pid=Api&P=0&h=220',
//   },
// ]

const CartListView = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      const priceList = cartList.map(eachItem => eachItem.cost)
      const price = priceList.reduce(
        (acc, currentValue) => acc + currentValue,
        0,
      )
      return (
        <>
          <ul className="cart-list">
            {cartList.map(cartItem => (
              <CartItem key={cartItem.id} cartDetails={cartItem} />
            ))}
          </ul>
          <hr className="cart-hr-line" />
          <div className="order-total-place-con">
            <h1 className="order-total-heading">Order Total :</h1>
            <div className="total-price-con">
              <FontAwesomeIcon
                icon={faIndianRupeeSign}
                style={{color: '#3E4C59', fontSize: '24px'}}
              />
              <p className="total-price">{price}</p>
            </div>
          </div>
          <Link to="/payment-successful" className="place-order-now-btn">
            <button type="button" className="place-order-now-btn">
              Place Order
            </button>
          </Link>
        </>
      )
    }}
  </CartContext.Consumer>
)

export default CartListView
