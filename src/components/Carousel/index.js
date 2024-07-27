import {useState, useEffect} from 'react'
import Slider from 'react-slick'
import Loader from 'react-loader-spinner'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Cookies from 'js-cookie'

import './index.css'

const apiConstants = {
  pending: 'PENDING',
  success: 'SUCCESS',
}

const Carousel = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
  }

  const [apiStatus, setApiStatus] = useState(apiConstants.pending)
  const [carouselsArray, setCarousels] = useState([])

  const getCarouselOffers = async () => {
    const secretToken = Cookies.get('jwtToken')

    const url = 'https://apis.ccbp.in/restaurants-list/offers'

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

      const carouselsList = data.offers

      const updatedData = carouselsList.map(carousel => ({
        id: carousel.id,
        imageUrl: carousel.image_url,
      }))

      console.log(updatedData)

      setApiStatus(apiConstants.success)

      setCarousels(updatedData)
    }
  }

  useEffect(() => {
    getCarouselOffers()
  }, [])

  const loadSpinner = () => (
    <div className="carousels-loader-container">
      <Loader type="ThreeDots" color="#0b69ff" height="50" width="50" />
    </div>
  )

  const loadCarousels = () => (
    <div className="slide-container">
      <Slider {...settings}>
        {carouselsArray.map(carousel => (
          <div key={carousel.id}>
            <img
              src={carousel.imageUrl}
              alt="carousel"
              className="carousel-img"
            />
          </div>
        ))}
      </Slider>
    </div>
  )

  return (
    <>{apiStatus === apiConstants.pending ? loadSpinner() : loadCarousels()}</>
  )
}

export default Carousel
