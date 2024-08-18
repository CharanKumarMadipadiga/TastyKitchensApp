import {useState, useContext} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'
import CartContext from '../../context/CartContext'
import './index.css'

const FoodItemCard = props => {
  const {foodCardDetails} = props
  const {id, cost, imageUrl, name, rating} = foodCardDetails
  const [isAddBtnClicked, setAddBtn] = useState(false)
  const [quantity, setQuantity] = useState(1)

  const {addCartItem, increaseQuantity, decreaseQuantity} = useContext(
    CartContext,
  )

  const onClickAddToCart = () => {
    setAddBtn(true)
    addCartItem({...foodCardDetails, quantity: 1})
  }

  const onClickMinus = () => {
    if (quantity > 1) {
      setQuantity(prevState => prevState - 1)
      decreaseQuantity({...foodCardDetails, quantity: quantity - 1})
    }
  }

  const onClickPlus = () => {
    setQuantity(prevState => prevState + 1)
    increaseQuantity({...foodCardDetails, quantity: quantity + 1})
  }

  const renderAddQuantityButtons = () => (
    <div className="quantity-con">
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        onClick={onClickMinus}
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
        onClick={onClickPlus}
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
    <li className="food-item-card" key={id} data-testid="foodItem">
      <img src={imageUrl} alt="food item" className="food-item-img" />
      <div className="food-item-content-con">
        <h1 className="food-item-name">{name}</h1>
        <div className="cost-con">
          <FontAwesomeIcon icon={faIndianRupeeSign} />
          <p className="food-item-cost">{cost}.00</p>
        </div>
        <div className="food-item-rating-con">
          <svg
            width="12"
            height="12"
            viewBox="0 0 12 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M6.71496 0.448353L8.22262 3.70603L11.31 4.0419C11.6204 4.08619 11.877 4.31177 11.9666 4.61909C12.0562 4.92642 11.9622 5.25897 11.7263 5.47004L9.27132 7.5426L10.0318 11.0242C10.0916 11.3385 9.96705 11.6596 9.71288 11.8463C9.45871 12.033 9.12154 12.0511 8.84971 11.8925L5.99982 10.1203L3.1526 11.8925C2.88076 12.0511 2.54359 12.033 2.28942 11.8463C2.03525 11.6596 1.91067 11.3385 1.97048 11.0242L2.73098 7.5426L0.273356 5.47004C0.0372661 5.2586 -0.0563708 4.92553 0.0338322 4.61804C0.124035 4.31055 0.381747 4.0848 0.692253 4.0419L3.77964 3.70603L5.28731 0.448353C5.41941 0.17136 5.69494 0 5.99982 0C6.3047 0 6.58023 0.17136 6.71496 0.448353Z"
              fill="#FFCC00"
            />
          </svg>
          <p className="food-item-rating">{rating}</p>
        </div>
        {isAddBtnClicked ? (
          renderAddQuantityButtons()
        ) : (
          <svg
            width="58"
            height="32"
            viewBox="0 0 58 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="Add-btn"
            onClick={onClickAddToCart}
          >
            <rect
              x="1"
              y="1"
              width="56"
              height="30"
              rx="7"
              stroke="#FFA412"
              strokeWidth="2"
            />
            <path
              d="M17.696 20L18.4972 17.6903H21.9062L22.7031 20H24.1009L20.9602 11.2727H19.4389L16.2983 20H17.696ZM18.8807 16.5824L20.1676 12.858H20.2358L21.5227 16.5824H18.8807ZM28.1864 20C30.8455 20 32.3839 18.3509 32.3839 15.6236C32.3839 12.9091 30.8455 11.2727 28.2759 11.2727H25.3612V20H28.1864ZM26.6779 18.8494V12.4233H28.195C30.104 12.4233 31.0884 13.5653 31.0884 15.6236C31.0884 17.6903 30.104 18.8494 28.114 18.8494H26.6779ZM36.8466 20C39.5057 20 41.044 18.3509 41.044 15.6236C41.044 12.9091 39.5057 11.2727 36.9361 11.2727H34.0213V20H36.8466ZM35.3381 18.8494V12.4233H36.8551C38.7642 12.4233 39.7486 13.5653 39.7486 15.6236C39.7486 17.6903 38.7642 18.8494 36.7741 18.8494H35.3381Z"
              fill="#FFA412"
            />
          </svg>
        )}
      </div>
    </li>
  )
}

export default FoodItemCard
