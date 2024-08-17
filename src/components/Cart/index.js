import Header from '../Header'
import CartListView from '../CartListView'
import Footer from '../Footer'
import CartContext from '../../context/CartContext'
import EmptyCart from '../EmptyCart'
import './index.css'

const Cart = () => (
  <CartContext.Consumer>
    {value => {
      const {cartList, deleteCartList} = value
      const onClickRemoveAllItems = () => {
        deleteCartList()
      }
      return cartList.length !== 0 ? (
        <>
          <Header />
          <div className="remove-container">
            <button
              className="remove-all-items-btn"
              type="button"
              onClick={onClickRemoveAllItems}
            >
              Remove All
            </button>
          </div>
          <div className="cart-desktop-con">
            <div className="cart-desktop-header">
              <span className="cart-item-desktop-header">Item</span>
              <span className="cart-quantity-desktop-header">Quantity</span>
              <span className="cart-price-desktop-header">Price</span>
            </div>
            <CartListView />
          </div>
          <div className="cart-mobile-con">
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
