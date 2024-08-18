import {useState, useEffect, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/CartContext'
import './index.css'

const CartItem = props => {
  const {cartDetails} = props
  const {id, name, imageUrl, cost, quantity} = cartDetails
  const [itemQuantity, setItemQuantity] = useState(quantity)

  const {increaseQuantity, decreaseQuantity} = useContext(CartContext)

  useEffect(() => {
    setItemQuantity(quantity)
  }, [quantity])

  const onClickPlusQuantity = () => {
    const newQuantity = itemQuantity + 1
    setItemQuantity(newQuantity)
    increaseQuantity({id, quantity: newQuantity})
  }

  const onClickMinusQuantity = () => {
    if (itemQuantity > 1) {
      const newQuantity = itemQuantity - 1
      setItemQuantity(newQuantity)
      decreaseQuantity({id, quantity: newQuantity})
    }
  }

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
          onClick={onClickMinusQuantity}
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
        <p className="active-count-desktop">{itemQuantity}</p>
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          cursor="pointer"
          onClick={onClickPlusQuantity}
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

  const renderAddQuantityButtonsMobile = () => (
    <div className="cart-quantity-con-mobile">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        onClick={onClickMinusQuantity}
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

      <p className="active-count-mobile">{itemQuantity}</p>
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        onClick={onClickPlusQuantity}
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
  )

  return (
    <>
      <li className="cart-item-desktop-con" key={id}>
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
          <p className="cart-cost-desktop">{cost * itemQuantity}.00</p>
        </div>
      </li>
      <li className="cart-item-mobile-con">
        <img src={imageUrl} alt="cart-item" className="item-mobile-img" />
        <div className="cart-mobile-content-con">
          <p className="item-mobile-name">{name}</p>
          {renderAddQuantityButtonsMobile()}
          <div className="cart-mobile-cost-con">
            <FontAwesomeIcon
              icon={faIndianRupeeSign}
              style={{color: '#FFA412', fontSize: '16px'}}
            />
            <p className="cart-cost-mobile">{cost * itemQuantity}.00</p>
          </div>
        </div>
      </li>
    </>
  )
}

export default CartItem
