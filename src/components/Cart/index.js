import Header from '../Header'
import CartListView from '../CartListView'
import Footer from '../Footer'
import './index.css'

const Cart = () => (
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
)

export default Cart
