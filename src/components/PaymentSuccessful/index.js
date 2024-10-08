import {Link} from 'react-router-dom'

import Header from '../Header'

import './index.css'

const PaymentSuccessful = () => (
  <>
    <Header />
    <div className="payment-con">
      <div className="payment-card-con">
        <svg
          width="80"
          height="80"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M39.9998 72.001C57.673 72.001 71.9998 57.6742 71.9998 40.001C71.9998 22.3279 57.673 8.00098 39.9998 8.00098C22.3266 8.00098 7.99976 22.3279 7.99976 40.001C7.99976 57.6742 22.3266 72.001 39.9998 72.001ZM54.8282 34.8294C56.3902 33.2673 56.3902 30.7347 54.8282 29.1725C53.2662 27.6105 50.7334 27.6105 49.1714 29.1725L35.9998 42.3442L30.8282 37.1725C29.2661 35.6105 26.7334 35.6105 25.1713 37.1725C23.6092 38.7347 23.6092 41.2674 25.1713 42.8294L33.1713 50.8294C34.7334 52.3914 37.2661 52.3914 38.8282 50.8294L54.8282 34.8294Z"
            fill="#22C55E"
          />
        </svg>
        <p className="payment-successful-text">Payment Successful</p>
        <div className="payment-description-con">
          <p className="payment-description">
            Thank you for ordering Your payment is successfully completed.
          </p>
        </div>
        <Link to="/">
          <button className="go-to-home-btn" type="button">
            Go To Home Page
          </button>
        </Link>
      </div>
    </div>
  </>
)

export default PaymentSuccessful
