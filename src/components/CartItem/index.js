import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'

import './index.css'

const CartItem = props => {
  const {cartDetails} = props
  console.log('cart details', cartDetails)
  const {id, name, imageUrl, cost, quantity} = cartDetails

  const renderAddQuantityButtons = () => (
    <div className="cart-main-quantity-con">
      <div className="cart-quantity-con">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          cursor="pointer"
          // onClick={onClickMinus}
        >
          <rect
            x="0.375"
            y="0.375"
            width="17.25"
            height="17.25"
            rx="1.875"
            stroke="#475569"
            strokeWidth="0.75"
          />
          <rect
            x="6.00002"
            y="8.625"
            width="6"
            height="0.75"
            rx="0.375"
            fill="#3E4C59"
          />
        </svg>

        <p className="active-count">{quantity}</p>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          cursor="pointer"
          // onClick={onClickPlus}
        >
          <rect
            x="0.375"
            y="0.375"
            width="17.25"
            height="17.25"
            rx="1.875"
            stroke="#475569"
            strokeWidth="0.75"
          />
          <path
            d="M11.25 9.375H9.375V11.25C9.375 11.4563 9.20625 11.625 9 11.625C8.79375 11.625 8.625 11.4563 8.625 11.25V9.375H6.75C6.54375 9.375 6.375 9.20625 6.375 9C6.375 8.79375 6.54375 8.625 6.75 8.625H8.625V6.75C8.625 6.54375 8.79375 6.375 9 6.375C9.20625 6.375 9.375 6.54375 9.375 6.75V8.625H11.25C11.4563 8.625 11.625 8.79375 11.625 9C11.625 9.20625 11.4563 9.375 11.25 9.375Z"
            fill="#475569"
          />
        </svg>
      </div>
    </div>
  )

  return (
    <>
      <li className="cart-item-con" key={id}>
        <div className="item-con">
          <img src={imageUrl} alt="cart-item" className="item-img" />
          <p className="item-name">{name}</p>
        </div>
        {renderAddQuantityButtons()}
        <div className="cart-cost-con">
          <FontAwesomeIcon
            icon={faIndianRupeeSign}
            style={{color: '#FFA412', fontSize: '16px'}}
          />
          <p className="cart-cost">{cost}.00</p>
        </div>
      </li>
    </>
  )
}

export default CartItem
