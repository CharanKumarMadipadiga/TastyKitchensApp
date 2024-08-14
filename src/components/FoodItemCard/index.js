import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faIndianRupeeSign} from '@fortawesome/free-solid-svg-icons'

import './index.css'

const FoodItemCard = props => {
  const {foodCardDetails} = props
  const {id, cost, imageUrl, name, rating} = foodCardDetails

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
              d="M6.71496 0.448353L8.22262 3.70603L11.31 4.0419C11.6204 4.08619 11.877 4.31177 11.9666 4.61909C12.0562 4.92642 11.9622 5.25897 11.7263 5.47004L9.27132 7.5426L10.0318 11.0242C10.0916 11.3385 9.96705 11.6596 9.71288 11.8463C9.45871 12.033 9.12154 12.0511 8.84971 11.8925L5.99982 10.1203L3.1526 11.8925C2.88076 12.0511 2.54359 12.033 2.28942 11.8463C2.03525 11.6596 1.91067 11.3385 1.97048 11.0242L2.73098 7.5426L0.273356 5.47004C0.0372661 5.2586 -0.0563708 4.92553 0.0338322 4.61804C0.124035 4.31055 0.38145 4.08532 0.6923 4.0419L3.77968 3.70603L5.28735 0.448353C5.42381 0.173292 5.6997 0 6.00115 0C6.3026 0 6.57849 0.173292 6.71496 0.448353Z"
              fill="#FFCC00"
            />
          </svg>
          <p className="food-item-rating">{rating}</p>
        </div>
        <svg
          width="58"
          height="32"
          viewBox="0 0 58 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="Add-btn"
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
      </div>
    </li>
  )
}

export default FoodItemCard
