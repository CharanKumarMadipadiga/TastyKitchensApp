import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header'
import FoodItemCart from '../FoodItemCard'

import './index.css'

const apiConstants = {
  pending: 'PENDING',
  success: 'SUCCESS',
}

const RestaurentItemDetails = props => {
  const [restaurentApiStatus, setRestaurentApiStatus] = useState(
    apiConstants.pending,
  )
  const [restaurentDetails, setRestaurentDetails] = useState({})
  const [foodItemsList, setFoodItemsList] = useState([])

  const renderLoadSpinner = () => (
    <div className="restaurent-loader-container">
      <Loader
        type="TailSpin"
        color="#F7931E"
        height="53.33"
        width="53.33"
        ariaLabel="tail-spin-loading"
      />
    </div>
  )

  //   console.log('restaurentDetails', props)

  const getRestaurentItemDetails = async () => {
    const secretToken = Cookies.get('jwtToken')

    const {match} = props
    const {params} = match
    const {id} = params

    console.log(id)

    const url = `https://apis.ccbp.in/restaurants-list/${id}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${secretToken}`,
      },
    }

    const response = await fetch(url, options)

    // console.log(response)

    if (response.ok === true) {
      const data = await response.json()
      //   console.log(data)

      const updatedRestaurentDetails = {
        costForTwo: data.cost_for_two,
        cuisine: data.cuisine,
        id: data.id,
        imageUrl: data.image_url,
        itemsCount: data.items_count,
        location: data.location,
        name: data.name,
        opensAt: data.opens_at,
        rating: data.rating,
        reviewsCount: data.reviews_count,
      }

      const updatedFoodItemsList = data.food_items.map(eachItem => ({
        cost: eachItem.cost,
        foodType: eachItem.food_type,
        id: eachItem.id,
        imageUrl: eachItem.image_url,
        name: eachItem.name,
        rating: eachItem.rating,
      }))

      console.log(updatedRestaurentDetails)
      console.log(updatedFoodItemsList)

      setRestaurentApiStatus(apiConstants.success)
      setRestaurentDetails(updatedRestaurentDetails)
      setFoodItemsList(updatedFoodItemsList)
    } else {
      console.log('restaurent details error')
    }
  }

  const renderRestaurentDetailsTopCard = () => (
    <div className="restaurent-details-con">
      <div className="restaurent-details-card">
        <img
          src={restaurentDetails.imageUrl}
          alt="restaurent"
          className="restaurent-image"
        />
        <div className="restaurent-details-content">
          <h1 className="restaurent-details-name">{restaurentDetails.name}</h1>
          <p className="restaurent-details-cuisine">
            {restaurentDetails.cuisine}
          </p>
          <p className="restaurent-details-location">
            {restaurentDetails.location}
          </p>
          <div className="restaurent-details-rating-amount-con">
            <div className="ratings-review-container">
              <div className="ratings-container">
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
                    d="M6.71496 0.447376L8.22262 3.70505L11.31 4.04092C11.6204 4.08522 11.877 4.31079 11.9666 4.61811C12.0562 4.92544 11.9622 5.258 11.7263 5.46906L9.27132 7.54163L10.0318 11.0232C10.0916 11.3375 9.96705 11.6586 9.71288 11.8453C9.45871 12.032 9.12154 12.0501 8.84971 11.8916L5.99982 10.1194L3.1526 11.8916C2.88076 12.0501 2.54359 12.032 2.28942 11.8453C2.03525 11.6586 1.91067 11.3375 1.97048 11.0232L2.73098 7.54163L0.273356 5.46906C0.0372661 5.25763 -0.0563708 4.92456 0.0338322 4.61706C0.124035 4.30957 0.38145 4.08434 0.6923 4.04092L3.77968 3.70505L5.28735 0.447376C5.42381 0.172316 5.6997 -0.000976562 6.00115 -0.000976562C6.3026 -0.000976563 6.57849 0.172316 6.71496 0.447376Z"
                    fill="white"
                  />
                </svg>
                <p className="ratings-number">{restaurentDetails.rating}</p>
              </div>
              <p className="reviews-count">
                {restaurentDetails.reviewsCount}+ Ratings
              </p>
            </div>
            <div className="vr-line" />
            <div className="ratings-review-container">
              <div className="ratings-container">
                <svg
                  width="38"
                  height="11"
                  viewBox="0 0 38 11"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.43 9.99902L0.91 5.60302V4.56702H1.75C2.24467 4.56702 2.66 4.45969 2.996 4.24502C3.332 4.02102 3.54667 3.71302 3.64 3.32102H0.91V2.28502H3.626C3.542 1.93036 3.36933 1.63636 3.108 1.40302C2.84667 1.16036 2.48267 1.03902 2.016 1.03902H0.91V0.00302279H7.224V1.03902H5.026C5.35267 1.39369 5.558 1.80902 5.642 2.28502H7.224V3.32102H5.67C5.57667 4.01169 5.31067 4.55302 4.872 4.94502C4.43333 5.32769 3.86867 5.58902 3.178 5.72902L5.922 9.99902H3.43ZM15.5057 10.167C14.8617 10.167 14.2783 10.055 13.7557 9.83102C13.233 9.59769 12.813 9.24302 12.4957 8.76702C12.1783 8.29102 12.0103 7.69369 11.9917 6.97502H13.7557C13.765 7.45102 13.919 7.85236 14.2177 8.17902C14.5257 8.49636 14.955 8.65502 15.5057 8.65502C16.0283 8.65502 16.4297 8.51036 16.7097 8.22102C16.9897 7.93169 17.1297 7.56769 17.1297 7.12902C17.1297 6.61569 16.943 6.22836 16.5697 5.96702C16.2057 5.69636 15.7343 5.56102 15.1557 5.56102H14.4277V4.09102H15.1697C15.6457 4.09102 16.0423 3.97902 16.3597 3.75502C16.677 3.53102 16.8357 3.19969 16.8357 2.76102C16.8357 2.39702 16.7143 2.10769 16.4717 1.89302C16.2383 1.66902 15.9117 1.55702 15.4917 1.55702C15.0343 1.55702 14.675 1.69236 14.4137 1.96302C14.1617 2.23369 14.0217 2.56502 13.9937 2.95702H12.2437C12.281 2.05169 12.5937 1.33769 13.1817 0.815023C13.779 0.292357 14.549 0.0310233 15.4917 0.0310233C16.1637 0.0310233 16.7283 0.152356 17.1857 0.395023C17.6523 0.628356 18.0023 0.941023 18.2357 1.33302C18.4783 1.72502 18.5997 2.15902 18.5997 2.63502C18.5997 3.18569 18.4457 3.65236 18.1377 4.03502C17.839 4.40836 17.4657 4.66036 17.0177 4.79102C17.5683 4.90302 18.0163 5.17369 18.3617 5.60302C18.707 6.02302 18.8797 6.55502 18.8797 7.19902C18.8797 7.74036 18.749 8.23502 18.4877 8.68302C18.2263 9.13102 17.8437 9.49036 17.3397 9.76102C16.845 10.0317 16.2337 10.167 15.5057 10.167ZM24.1535 10.167C23.4348 10.167 22.8142 10.041 22.2915 9.78902C21.7782 9.53702 21.3722 9.19169 21.0735 8.75302C20.7842 8.30502 20.6162 7.80102 20.5695 7.24102H22.3195C22.4035 7.64236 22.6088 7.97836 22.9355 8.24902C23.2622 8.51036 23.6682 8.64102 24.1535 8.64102C24.6762 8.64102 25.1008 8.44969 25.4275 8.06702C25.7635 7.68436 25.9315 7.20836 25.9315 6.63902C25.9315 6.05102 25.7635 5.58436 25.4275 5.23902C25.1008 4.89369 24.6855 4.72102 24.1815 4.72102C23.7615 4.72102 23.3975 4.82369 23.0895 5.02902C22.7815 5.23436 22.5622 5.49102 22.4315 5.79902H20.7095L21.5495 0.199023H26.9815V1.76702H22.8935L22.4455 4.03502C22.6508 3.81102 22.9308 3.62902 23.2855 3.48902C23.6402 3.33969 24.0368 3.26502 24.4755 3.26502C25.1755 3.26502 25.7588 3.42369 26.2255 3.74102C26.6922 4.04902 27.0468 4.45969 27.2895 4.97302C27.5322 5.47702 27.6535 6.02769 27.6535 6.62502C27.6535 7.30636 27.5042 7.91302 27.2055 8.44502C26.9162 8.97702 26.5055 9.39702 25.9735 9.70502C25.4508 10.013 24.8442 10.167 24.1535 10.167ZM33.3391 10.167C32.4338 10.167 31.6591 9.95702 31.0151 9.53702C30.3711 9.10769 29.8718 8.51502 29.5171 7.75902C29.1718 6.99369 28.9991 6.10702 28.9991 5.09902C28.9991 4.10036 29.1718 3.21836 29.5171 2.45302C29.8718 1.68769 30.3711 1.09502 31.0151 0.675023C31.6591 0.24569 32.4338 0.0310233 33.3391 0.0310233C34.2445 0.0310233 35.0191 0.24569 35.6631 0.675023C36.3071 1.09502 36.8018 1.68769 37.1471 2.45302C37.5018 3.21836 37.6791 4.10036 37.6791 5.09902C37.6791 6.10702 37.5018 6.99369 37.1471 7.75902C36.8018 8.51502 36.3071 9.10769 35.6631 9.53702C35.0191 9.95702 34.2445 10.167 33.3391 10.167ZM33.3391 8.55702C34.0765 8.55702 34.6785 8.24902 35.1451 7.63302C35.6118 7.01702 35.8451 6.17236 35.8451 5.09902C35.8451 4.02569 35.6118 3.18102 35.1451 2.56502C34.6785 1.94902 34.0765 1.64102 33.3391 1.64102C32.5925 1.64102 31.9858 1.94902 31.5191 2.56502C31.0618 3.18102 30.8331 4.02569 30.8331 5.09902C30.8331 6.17236 31.0618 7.01702 31.5191 7.63302C31.9858 8.24902 32.5925 8.55702 33.3391 8.55702Z"
                    fill="white"
                  />
                </svg>
                <p className="ratings-number">{restaurentDetails.costForTwo}</p>
              </div>
              <p className="reviews-count">Cost for Two</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )

  useEffect(() => {
    getRestaurentItemDetails()
  }, [])

  return (
    <>
      <Header />
      {restaurentApiStatus === apiConstants.pending
        ? renderLoadSpinner()
        : renderRestaurentDetailsTopCard()}

      <ul className="food-items-list">
        {foodItemsList.map(eachItem => (
          <FoodItemCart key={eachItem.id} foodCardDetails={eachItem} />
        ))}
      </ul>
    </>
  )
}

export default RestaurentItemDetails
