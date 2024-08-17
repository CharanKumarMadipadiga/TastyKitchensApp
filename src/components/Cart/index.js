import Header from '../Header'
import CartListView from '../CartListView'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'
import EmptyCart from '../EmptyCart'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList} = value
      return cartList.length !== 0 ? (
        <>
          <Header />
          <div className="cart-con">
            <div className="cart-header">
              <span className="cart-item-header">Item</span>
              <span className="cart-quantity-header">Quantity</span>
              <span className="cart-price-header">Price</span>
            </div>
            <CartListView />
          </div>
          <Footer />
        </>
      ) : (
        <>
          <Header />
          <EmptyCart />
        </>
      )
    }}
  </CartContext.Consumer>
)

export default Cart
