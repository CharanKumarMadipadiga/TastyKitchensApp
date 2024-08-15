import Header from '../Header'
import CartListView from '../CartListView'
import './index.css'

const Cart = () => (
  <>
    <Header />
    <div className="cart-con">
      <div className="cart-header">
        <span className="cart-headers">Item</span>
        <span className="cart-headers">Quantity</span>
        <span className="cart-headers">Price</span>
      </div>
      <CartListView />
    </div>
  </>
)

export default Cart
