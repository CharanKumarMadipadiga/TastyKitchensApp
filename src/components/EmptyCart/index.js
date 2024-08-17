import {Link} from 'react-router-dom'

import './index.css'

const EmptyCart = () => (
  <div className="empty-cart-con">
    <div className="empty-cart-img" />
    <p className="empty-cart-text">No Orders Yet!</p>
    <p className="empty-cart-description">
      Your cart is empty. Add something from the menu.
    </p>
    <Link to="/">
      <button className="order-now-btn" type="button">
        Order Now
      </button>
    </Link>
  </div>
)

export default EmptyCart
