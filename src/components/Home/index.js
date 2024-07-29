import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header/index'
import Carousel from '../Carousel/index'
import RestaurentItem from '../RestaurentItem/index'

import './index.css'

const apiConstants = {
  pending: 'PENDING',
  success: 'SUCCESS',
}

const offsetAndLimit = {
  offset: 0,
  limit: 9,
}

const Home = () => {
  const [apiStatus, setApiStatus] = useState(apiConstants.pending)
  const [restaurentsList, setRestaurentsList] = useState([])
  const [offsetAndLimitObj, setOffsetAndLimitObj] = useState(offsetAndLimit)

  const getRestaurentsList = async () => {
    const secretToken = Cookies.get('jwtToken')

    const url = `https://apis.ccbp.in/restaurants-list?offset=${offsetAndLimit.offset}&limit=${offsetAndLimit.limit}`

    const options = {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${secretToken}`,
      },
    }

    const response = await fetch(url, options)

    if (response.ok === true) {
      const data = await response.json()

      //   console.log(data)

      const restaurentsArray = data.restaurants
      //   console.log(restaurentsArray)

      const updatedList = restaurentsArray.map(restaurent => ({
        costForTwo: restaurent.cost_for_two,
        cuisine: restaurent.cuisine,
        groupByTime: restaurent.group_by_time,
        hasOnlineDelivery: restaurent.has_online_delivery,
        hasTableBooking: restaurent.has_table_booking,
        id: restaurent.id,
        imageUrl: restaurent.image_url,
        isDeliveringNow: restaurent.is_delivering_now,
        location: restaurent.location,
        menuType: restaurent.menu_type,
        name: restaurent.name,
        opensAt: restaurent.opens_at,
        userRating: restaurent.user_rating,
      }))

      console.log(updatedList)

      setApiStatus(apiConstants.success)

      setRestaurentsList(updatedList)
    }
  }

  useEffect(() => {
    getRestaurentsList()
  }, [])

  return (
    <>
      <Header />
      <Carousel />
      <div className="popular-restaurent-con">
        <div className="heading-dropdown-con">
          <div>
            <h1 className="popular-restuarent-heading">Popular Restaurents</h1>
            <p className="restaurent-caption">
              Select Your favourite restaurant special dish and make your day
              happy...
            </p>
          </div>
          <div className="filter-container">
            <svg
              width="18"
              height="12"
              viewBox="0 0 18 12"
              fill="none"
              className="filter-icon"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect x="0" y="0" width="24" height="24" fill="#475569" />
            </svg>

            <select className="dropdown">
              <option className="dropdown-option">Lowest</option>
              <option className="dropdown-option">Highest</option>
            </select>
          </div>
        </div>
        <hr className="hr-line" />
        <ul className="restrents-list">
          {restaurentsList.map(restaurent => (
            <RestaurentItem
              key={restaurent.id}
              restaurentDetails={restaurent}
            />
          ))}
        </ul>
      </div>
    </>
  )
}

export default Home
