import Header from '../Header/index'
import Carousel from '../Carousel/index'
import './index.css'

const Home = () => (
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
            <option>Lowest</option>
            <option>Highest</option>
          </select>
        </div>
      </div>
    </div>
  </>
)

export default Home
