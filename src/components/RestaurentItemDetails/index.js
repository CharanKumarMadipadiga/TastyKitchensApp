import {useState, useEffect} from 'react'
import Cookies from 'js-cookie'

import Header from '../Header'

import './index.css'

const apiConstants = {
  pending: 'PENDING',
  success: 'SUCCESS',
}

const RestaurentItemDetails = props => {
  const [apiStatus, setApiStatus] = useState(apiConstants.pending)
  const [restaurentDetails, setRestaurentDetails] = useState({})
  const [foodItemsList, setFoodItemsList] = useState([])

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

      setApiStatus(apiConstants.success)
      setRestaurentDetails(updatedRestaurentDetails)
      setFoodItemsList(updatedFoodItemsList)
    } else {
      console.log('restaurent details error')
    }
  }

  useEffect(() => {
    getRestaurentItemDetails()
  }, [])

  return (
    <>
      <Header />
    </>
  )
}

export default RestaurentItemDetails
