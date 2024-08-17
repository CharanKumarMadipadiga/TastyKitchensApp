import {Link} from 'react-router-dom'

import './index.css'

const NotFound = () => (
  <>
    <div className="not-found-con">
      <div className="notfound-img-con" />
      <p className="page-not-found-text">Page Not Found</p>
      <div className="description-con">
        <p className="not-found-description">
          We are sorry, the page you requested could not be found. Please go
          back to the homepage
        </p>
      </div>
      <Link to="/">
        <button className="home-page-btn" type="button">
          Home Page
        </button>
      </Link>
    </div>
  </>
)

export default NotFound
