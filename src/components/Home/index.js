import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'
import Loader from 'react-loader-spinner'
import Header from '../Header/index'
import Footer from '../Footer/index'
import Carousel from '../Carousel/index'
import RestaurentItem from '../RestaurentItem/index'

import './index.css'

const sortByOptions = [
  {
    id: 1,
    displayText: 'Highest',
    value: 'Highest',
  },
  {
    id: 2,
    displayText: 'Lowest',
    value: 'Lowest',
  },
]

const apiConstants = {
  pending: 'PENDING',
  success: 'SUCCESS',
}

const offsetAndLimit = {
  offset: 0,
  limit: 9,
}

const Home = () => {
  const [apiStatus, setApiStatus] = useState('')
  const [restaurentsList, setRestaurentsList] = useState([])
  const [offsetAndLimitObj, setOffsetAndLimitObj] = useState(offsetAndLimit)
  const [activePageValue, setActivePage] = useState(1)
  const [activeSortByValue, setSortByValue] = useState(sortByOptions[1].value)

  const getRestaurentsList = async (
    updatedOffsetAndLimit = offsetAndLimitObj,
  ) => {
    setApiStatus(apiConstants.pending)
    console.log('function called')
    console.log(updatedOffsetAndLimit.offset)
    const secretToken = Cookies.get('jwtToken')

    const url = `https://apis.ccbp.in/restaurants-list?offset=${updatedOffsetAndLimit.offset}&limit=${updatedOffsetAndLimit.limit}&sort_by_rating=${activeSortByValue}`

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

      //   console.log(updatedList)

      setApiStatus(apiConstants.success)

      setRestaurentsList(updatedList)
    }
  }

  const loadRestaurentsList = restaurentsCardList =>
    restaurentsCardList.map(restaurent => (
      <RestaurentItem key={restaurent.id} restaurentDetails={restaurent} />
    ))

  const loadSpinner = () => (
    <div className="carousels-loader-container">
      <Loader
        type="TailSpin"
        color="#F7931E"
        height="53.33"
        width="53.33"
        ariaLabel="tail-spin-loading"
      />
    </div>
  )

  const onClickRightBtn = () => {
    setActivePage(activePageValue + 1)
  }

  const onClickLeftBtn = () => {
    setActivePage(activePageValue - 1)
  }

  const onChangeSortBy = event => {
    setSortByValue(event.target.value)
  }

  const getMoreRestaurentsList = () => {
    const updatedActivePageValue = activePageValue === 0 ? 1 : activePageValue
    const offsetValue = (updatedActivePageValue - 1) * offsetAndLimit.limit
    setOffsetAndLimitObj(prevState => {
      const updatedState = {...prevState, offset: offsetValue}
      getRestaurentsList(updatedState)
      return updatedState
    })
  }

  useEffect(() => {
    getMoreRestaurentsList()
  }, [activePageValue, activeSortByValue])

  //   const offsetValue = (activePageValue - 1) * offsetAndLimit.limit
  //   console.log(offsetValue)

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

            <select
              className="dropdown"
              value={activeSortByValue}
              onChange={onChangeSortBy}
            >
              {/* <option className="dropdown-option">Lowest</option>
              <option className="dropdown-option">Highest</option> */}
              {sortByOptions.map(eachOption => (
                <option key={eachOption.id} value={eachOption.value}>
                  {eachOption.displayText}
                </option>
              ))}
            </select>
          </div>
        </div>
        <hr className="hr-line" />
        <ul className="restrents-list">
          {/* {restaurentsList.map(restaurent => (
            <RestaurentItem
              key={restaurent.id}
              restaurentDetails={restaurent}
            />
          ))} */}
          {apiStatus === apiConstants.pending
            ? loadSpinner()
            : loadRestaurentsList(restaurentsList)}
        </ul>
        <div className="pagination-container">
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="left-btn"
            onClick={onClickLeftBtn}
          >
            <g clipPath="url(#clip0_13799_11207)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.8735 10L19 11.1507L14.253 16L19 20.8493L17.8735 22L12.6848 16.6995C12.3043 16.3108 12.3043 15.6892 12.6848 15.3005L17.8735 10Z"
                fill="#334155"
              />
            </g>
            <rect x="0.5" y="0.5" width="31" height="31" stroke="#334155" />
            <defs>
              <clipPath id="clip0_13799_11207">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
          <div className="pagination">
            <p className="pagination-number">
              {activePageValue === 0 ? 1 : activePageValue} of 20
            </p>
          </div>
          <svg
            width="32"
            height="32"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="right-btn"
            onClick={onClickRightBtn}
          >
            <g clipPath="url(#clip0_13799_11208)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M14.1265 22L13 20.8493L17.747 16L13 11.1507L14.1265 10L19.3152 15.3005C19.6957 15.6892 19.6957 16.3108 19.3152 16.6995L14.1265 22Z"
                fill="#334155"
              />
            </g>
            <rect x="0.5" y="0.5" width="31" height="31" stroke="#334155" />
            <defs>
              <clipPath id="clip0_13799_11208">
                <rect width="32" height="32" fill="white" />
              </clipPath>
            </defs>
          </svg>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Home
