import {useState} from 'react'
import Cookies from 'js-cookie'
import {withRouter, Link} from 'react-router-dom'
import './index.css'

const Header = props => {
  //   console.log(props)
  const [hamburger, setHamburger] = useState(false)

  const onClickHamburger = () => {
    setHamburger(prevState => !prevState)
  }

  const onClickCloseButton = () => {
    setHamburger(prevState => !prevState)
  }

  const onClickLogoutButton = () => {
    const {history} = props
    Cookies.remove('jwtToken')
    history.replace('/login')
  }

  const onClickLogo = () => {
    const {history} = props
    history.replace('/')
  }

  const loadHamburgerItems = () => (
    <div className="mobile-nav-container">
      <ul className="mobile-nav-list">
        <li className="home-mobile-nav-item">Home</li>
        <li className="cart-mobile-nav-item">Cart</li>
        <button type="button" className="logout-mobile-btn">
          Logout
        </button>
      </ul>
      <button
        className="close-btn"
        type="button"
        aria-label="Close navigation"
        onClick={onClickCloseButton}
      >
        <div className="close-icon-con" />
      </button>
    </div>
  )
  return (
    <>
      <nav className="navbar">
        <div className="nav-logo-container">
          <Link to="/">
            <svg
              width="53"
              height="43"
              viewBox="0 0 53 43"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="nav-logo"
              alt="website logo"
            >
              <path
                d="M43.9618 3.17464C40.7747 2.04727 37.4493 2.64815 34.5594 4.85489C33.0314 3.44103 30.6055 2.21841 26.7557 2.02465C21.221 1.7457 16.0711 3.84488 12.6282 7.78188C10.2742 10.4739 9.04693 13.6703 9.28608 16.4201C8.93111 16.5106 8.57395 16.6176 8.21801 16.7516C4.52747 18.1358 2.20814 21.3254 2.01308 25.2845C1.84274 28.7403 3.47684 31.7261 6.4945 33.4769C9.36241 35.1393 12.9757 35.4263 16.0941 34.3909C17.0076 34.0871 17.8753 33.6636 18.6734 33.1339C20.1529 34.693 21.412 36.3247 22.75 40.3263L22.9297 40.8624L23.3724 40.5304C27.315 37.5735 31.1322 35.4703 34.7166 34.2801C37.7825 33.2623 40.7808 32.8775 43.6298 33.1359L44.4563 33.2105L44.008 32.4865C42.9421 30.7683 42.0141 26.9263 43.1779 23.6236C43.513 23.5801 43.8467 23.5037 44.1798 23.3934C45.7267 22.88 47.2329 21.6604 48.4485 19.9053C50.44 17.0275 51.2042 13.3381 50.4419 10.2759C49.6324 7.02267 47.148 4.30226 43.9618 3.17464Z"
                fill="#F7931E"
              />
              <path
                d="M18.5337 33.2284C18.5337 33.2284 18.414 33.3133 18.1897 33.4729C18.077 33.554 17.9374 33.6546 17.762 33.7558C17.5878 33.8584 17.392 33.9908 17.1548 34.1054C17.037 34.1662 16.9132 34.2301 16.7833 34.2974C16.651 34.3615 16.509 34.4188 16.3622 34.4841C16.0695 34.6204 15.7375 34.7279 15.3821 34.8523C14.6656 35.0815 13.8221 35.2637 12.874 35.3454C11.9266 35.423 10.8709 35.4039 9.75869 35.1886C8.64894 34.9747 7.47158 34.595 6.34559 33.9267C6.0587 33.7707 5.79096 33.5714 5.51182 33.3832C5.24771 33.1716 4.97221 32.9675 4.72312 32.7217C4.21162 32.2485 3.73598 31.7001 3.34417 31.0721C2.95285 30.4469 2.60975 29.761 2.39482 29.0194C2.17772 28.2811 2.03379 27.5053 2.00738 26.7185C1.94995 25.1536 2.22787 23.6085 2.83606 22.2595C3.4331 20.9072 4.34004 19.7821 5.35311 18.9432C5.86389 18.5286 6.39018 18.1619 6.93706 17.8799C7.07057 17.803 7.20747 17.7349 7.34558 17.6739C7.48297 17.611 7.61745 17.5452 7.75411 17.4871C8.03155 17.3826 8.29929 17.2665 8.57455 17.1888C9.11658 17.0069 9.65886 16.9054 10.1779 16.8229C10.701 16.7624 11.2043 16.7239 11.6848 16.747C12.6445 16.7764 13.502 16.9604 14.2144 17.2248C14.9285 17.4876 15.4931 17.8307 15.9229 18.1443C16.132 18.3119 16.3213 18.4517 16.4642 18.6014C16.6118 18.7442 16.74 18.8598 16.8267 18.9714C17.0075 19.1827 17.1037 19.2953 17.1037 19.2953C17.1037 19.2953 16.9944 19.1973 16.7889 19.0128C16.6905 18.9158 16.5498 18.8181 16.3898 18.6974C16.235 18.5703 16.0332 18.4572 15.8148 18.3202C15.3666 18.0684 14.794 17.8053 14.0969 17.6291C13.4012 17.452 12.5849 17.3615 11.6923 17.4148C11.2462 17.4329 10.7822 17.51 10.3058 17.604C9.83308 17.7198 9.34362 17.8498 8.85998 18.0526C8.61404 18.1403 8.37756 18.2647 8.13186 18.375C8.01143 18.4361 7.89319 18.5042 7.77252 18.5688C7.65113 18.6316 7.53216 18.7007 7.41585 18.7779C6.93754 19.0611 6.48613 19.4169 6.05119 19.8065C5.19004 20.5961 4.44472 21.6033 3.96083 22.7817C3.46678 23.9528 3.24531 25.2996 3.29353 26.6607C3.35096 28.017 3.72192 29.3064 4.37978 30.3793C4.69744 30.9221 5.08997 31.4056 5.51934 31.8343C5.72651 32.057 5.96227 32.2447 6.18519 32.4425C6.42555 32.6184 6.65332 32.8082 6.90313 32.9595C7.87744 33.6076 8.93049 34.0242 9.94429 34.2962C10.96 34.5703 11.9477 34.6706 12.8495 34.6779C13.7519 34.6819 14.5723 34.5894 15.2823 34.4424C15.9893 34.2869 16.5953 34.1089 17.0736 33.9147C17.3183 33.8305 17.5233 33.7254 17.707 33.6465C17.8919 33.5689 18.0409 33.4882 18.1618 33.4236C18.4048 33.2962 18.5337 33.2284 18.5337 33.2284Z"
                fill="#452210"
              />
              <path
                d="M50.4438 10.3276C50.1121 9.88173 49.7436 9.43717 49.3317 8.99512C51.3052 14.7325 46.9915 21.1288 40.6513 21.4598C35.4479 21.7317 23.6731 26.3877 20.0967 31.68C26.4814 26.6606 32.87 24.7419 40.9545 24.104C41.7272 24.0432 42.4221 24.0301 43.0494 24.0555C43.0899 23.9208 43.1279 23.7854 43.1747 23.6522C43.5098 23.6087 43.8435 23.5323 44.1766 23.422C45.7235 22.9086 47.2297 21.689 48.4453 19.9338C50.4317 17.0631 51.1969 13.3852 50.4438 10.3276Z"
                fill="white"
              />
              <path
                d="M43.533 23.224C43.533 23.224 43.6493 23.2003 43.8667 23.1561C44.0828 23.1058 44.3993 23.0174 44.7838 22.8533C45.5512 22.5306 46.5853 21.8433 47.501 20.6586C48.4235 19.4918 49.2269 17.8419 49.5931 15.9053C49.6866 15.4223 49.7481 14.9215 49.7745 14.4096C49.8056 13.8979 49.801 13.3744 49.7525 12.8472C49.6645 11.7894 49.4169 10.7191 48.9669 9.71763C48.0639 7.69761 46.4807 6.16036 44.824 5.23077C43.1606 4.27956 41.409 3.95286 39.9576 4.00589C38.4948 4.06118 37.3361 4.48212 36.5765 4.83672C36.199 5.02444 35.9065 5.17925 35.7182 5.30138C35.5266 5.41699 35.4238 5.47856 35.4238 5.47856C35.4238 5.47856 35.5152 5.4004 35.687 5.25414C35.8559 5.10109 36.1238 4.90105 36.48 4.65351C37.1975 4.18206 38.3397 3.5754 39.8994 3.34093C40.675 3.22532 41.5461 3.2105 42.4676 3.34419C42.9299 3.40401 43.399 3.52011 43.8786 3.65682C44.3523 3.81188 44.8386 3.98553 45.312 4.22428C46.2684 4.68065 47.201 5.33003 48.0406 6.15181C48.8761 6.97711 49.6124 7.98913 50.1344 9.15445C50.4021 9.73246 50.5887 10.3441 50.7321 10.9488C50.8741 11.5517 50.9475 12.1596 50.9817 12.7562C51.0176 13.3531 50.9991 13.9409 50.9395 14.5096C50.8836 15.0788 50.7864 15.6299 50.6522 16.1557C50.1235 18.2651 49.0927 19.968 47.9776 21.1072C46.8674 22.266 45.6791 22.8387 44.8475 23.0511C44.4293 23.1609 44.0976 23.1983 43.8742 23.2129C43.6522 23.2202 43.533 23.224 43.533 23.224Z"
                fill="#452210"
              />
              <path
                d="M19.1623 33.6836C19.1623 33.6836 19.312 33.8316 19.5955 34.1134C19.8783 34.3973 20.2955 34.818 20.7813 35.4199C21.2541 36.0313 21.76 36.8478 22.2262 37.8586C22.3394 38.1119 22.4474 38.3778 22.564 38.651C22.6214 38.788 22.68 38.9269 22.7396 39.0682C22.793 39.2114 22.8465 39.3569 22.9018 39.5044C22.9269 39.5718 22.9524 39.6399 22.9778 39.7085L23.0307 39.8429C23.0648 39.9286 23.099 40.0153 23.1334 40.1033C23.1399 40.1772 23.1915 40.1091 23.2286 40.0852L23.3444 39.9947C23.4261 39.9314 23.5087 39.8671 23.5921 39.8022C25.7886 38.1629 28.5365 36.3256 31.9067 34.8587C33.5898 34.1292 35.4313 33.5029 37.4092 33.1049C37.9035 33.0061 38.408 32.9322 38.9164 32.8556C39.1722 32.8287 39.4293 32.8018 39.6871 32.7746L40.0758 32.7357L40.4671 32.7171C40.7288 32.705 40.9914 32.693 41.2556 32.6806C41.5199 32.6837 41.7852 32.6867 42.0513 32.6897L42.4489 32.6947L42.4601 32.6937L42.4765 32.6912L42.4719 32.6864L42.471 32.6877L42.3454 32.3751C42.1783 31.9018 42.0227 31.4216 41.9144 30.9288C41.6256 29.7303 41.5274 28.5069 41.5718 27.3026C41.6127 26.7008 41.6692 26.1019 41.7993 25.5179C41.8322 25.3721 41.8557 25.2248 41.896 25.0816L42.0016 24.7079L42.0178 24.6802L41.9885 24.6719L41.9779 24.6707L41.8143 24.6782L41.4266 24.6958C41.1686 24.7084 40.9117 24.7207 40.6563 24.733C40.4014 24.7554 40.1482 24.7775 39.896 24.7996C39.3922 24.8474 38.8912 24.877 38.4 24.9371C37.9089 24.9999 37.4233 25.0622 36.9433 25.1238C33.112 25.6689 29.7289 26.6364 27.0136 27.7806C26.8436 27.8507 26.6749 27.9196 26.5087 27.988C26.3451 28.0634 26.1842 28.138 26.0248 28.2116C25.7069 28.3607 25.3936 28.4989 25.0956 28.6454C24.5073 28.9573 23.9383 29.2272 23.4353 29.5338C23.1804 29.6815 22.9347 29.824 22.697 29.9615C22.4666 30.1095 22.2444 30.2518 22.0316 30.3885C21.5996 30.6531 21.2303 30.9336 20.8875 31.1718C20.5415 31.4055 20.2606 31.6498 20.0033 31.8438C19.7457 32.0378 19.5395 32.217 19.3736 32.3622C19.0385 32.6502 18.8613 32.8023 18.8613 32.8023C18.8613 32.8023 19.0256 32.6354 19.336 32.3195C19.4913 32.1599 19.6844 31.9637 19.9272 31.7488C20.17 31.5344 20.4358 31.2663 20.7666 31.0052C21.0932 30.74 21.4472 30.4292 21.8644 30.1319C22.0704 29.9788 22.2853 29.8193 22.5087 29.6536C22.7396 29.4983 22.9793 29.3372 23.2272 29.1706C23.7183 28.8258 24.2763 28.516 24.8559 28.1621C25.1508 27.9948 25.4602 27.8352 25.775 27.6648C25.933 27.5803 26.0929 27.4949 26.255 27.4084C26.4205 27.3293 26.5877 27.2491 26.7571 27.1684C29.4585 25.8478 32.8762 24.6928 36.779 24.01C37.268 23.9321 37.7635 23.8534 38.2631 23.7738C38.7649 23.6984 39.2752 23.6539 39.7896 23.5923C40.0469 23.5637 40.3057 23.535 40.5657 23.5059C40.8269 23.4833 41.0889 23.4692 41.3522 23.4503C41.6876 23.429 42.0241 23.4071 42.3622 23.3855C42.619 23.3699 42.8771 23.3541 43.1349 23.3385L43.5243 23.3146L43.7198 23.3028L43.7685 23.2998L43.7775 23.3104L43.7695 23.334L43.7377 23.4282C43.6532 23.6805 43.5679 23.9334 43.4828 24.1869L43.3544 24.5689L43.2286 24.9692L43.1969 25.0698L43.1833 25.1195L43.1584 25.213L43.108 25.4007C43.0738 25.5259 43.0561 25.6563 43.0287 25.7842C42.9199 26.2959 42.8771 26.8277 42.8439 27.3622C42.8141 28.434 42.9054 29.5385 43.1654 30.6124C43.2616 31.0549 43.4009 31.4804 43.5448 31.8966C43.5635 31.9483 43.5853 31.9981 43.6049 32.0489L43.6355 32.1248L43.6507 32.1627L43.6839 32.2383L43.8271 32.5653L44.0038 32.8963C44.2395 33.3418 44.4738 33.7681 44.706 34.188C44.1901 34.1483 43.6757 34.1083 43.1637 34.0686C42.9076 34.0488 42.6522 34.0287 42.3973 34.0088L42.0178 33.9998C41.7671 33.9937 41.5177 33.988 41.2689 33.9819C41.0198 33.99 40.7719 33.998 40.525 34.0058L40.1548 34.0174L39.7872 34.0485C39.5425 34.0694 39.2992 34.0905 39.0562 34.1113C38.5733 34.1757 38.0925 34.2347 37.6198 34.3184C35.7291 34.6547 33.9419 35.2015 32.2867 35.8499C28.9729 37.1519 26.1847 38.8189 23.9262 40.3121C23.7312 40.4438 23.5385 40.5737 23.3483 40.7019C23.2507 40.7675 23.1545 40.8326 23.0585 40.8972C22.9686 40.9454 22.8463 41.0985 22.8351 40.9052C22.7028 40.4835 22.5742 40.0729 22.4486 39.6736C22.4033 39.5245 22.3587 39.3775 22.3142 39.233C22.2645 39.0908 22.2153 38.951 22.1671 38.8133C22.0692 38.5381 21.9795 38.2692 21.8841 38.0134C21.4913 36.9956 21.0554 36.1696 20.6352 35.5343C20.2018 34.909 19.8182 34.4554 19.5592 34.149C19.2994 33.8442 19.1623 33.6836 19.1623 33.6836Z"
                fill="#452210"
              />
              <path
                d="M28.4668 3.6156C34.8362 2.72371 41.4829 12.8763 33.0505 19.0236C34.3407 15.4196 38.5619 5.79143 28.4668 3.6156Z"
                fill="white"
              />
              <path
                d="M34.9147 17.3291C34.9147 17.3291 35.0148 17.2052 35.2023 16.972C35.2893 16.8493 35.3947 16.696 35.5142 16.5133C35.6225 16.3218 35.7562 16.1087 35.8732 15.8486C36.1187 15.337 36.3605 14.6803 36.5154 13.8917C36.6663 13.1056 36.747 12.186 36.6273 11.1949C36.5825 10.6983 36.4618 10.1904 36.3159 9.67522C36.1567 9.16205 35.9362 8.65164 35.6666 8.15078C35.3794 7.65947 35.0402 7.18199 34.6375 6.73943C34.2232 6.3097 33.7645 5.90057 33.2413 5.55326C32.1982 4.85588 30.9518 4.36482 29.6077 4.06878C28.26 3.78329 26.8118 3.67598 25.3354 3.71368C22.3815 3.77902 19.6149 4.5719 17.3624 5.82367C16.2379 6.45169 15.2289 7.1737 14.3678 7.95275C13.5064 8.73181 12.7814 9.55283 12.1916 10.3613C11.0061 11.9792 10.3894 13.5411 10.1306 14.6524C10.054 14.9291 10.0247 15.1824 9.97965 15.4C9.95518 15.6197 9.92949 15.8069 9.91714 15.9582C9.90308 16.2618 9.89557 16.4234 9.89557 16.4234C9.89557 16.4234 9.88394 16.2615 9.86189 15.9572C9.8568 15.8039 9.86092 15.6141 9.86141 15.3882C9.88225 15.1648 9.88467 14.9022 9.93313 14.6129C10.078 13.4526 10.5571 11.7734 11.6627 9.98131C12.2118 9.08666 12.911 8.16636 13.7695 7.28327C14.6275 6.40017 15.6568 5.56934 16.8289 4.84256C19.1707 3.38974 22.1484 2.44633 25.3003 2.37898C26.8712 2.33877 28.4129 2.47247 29.8769 2.82153C31.3346 3.18091 32.71 3.77751 33.8539 4.62291C34.4274 5.0436 34.929 5.53592 35.3712 6.0516C35.8023 6.58036 36.155 7.1453 36.4414 7.71828C36.7114 8.30056 36.9166 8.88611 37.0516 9.46362C37.1747 10.0431 37.2619 10.6053 37.2694 11.1456C37.3142 12.2242 37.1436 13.1898 36.9096 13.9962C36.6726 14.8052 36.354 15.4566 36.0482 15.9514C35.9011 16.2035 35.7407 16.406 35.6101 16.5857C35.4686 16.7571 35.3448 16.8981 35.2435 17.0099C35.0288 17.2182 34.9147 17.3291 34.9147 17.3291Z"
                fill="#452210"
              />
            </svg>
          </Link>
        </div>
        <div className="navbar-items-con">
          <Link to="/">
            <svg
              width="169"
              height="24"
              viewBox="0 0 169 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="logo-feature"
              onClick={onClickLogo}
            >
              <path
                d="M2.512 18L5.032 3.624H0.136L0.568 1.2H13.456L13.048 3.624H8.104L5.584 18H2.512ZM15.0042 18.288C13.6602 18.288 12.6762 17.984 12.0522 17.376C11.4282 16.752 11.1162 16.008 11.1162 15.144C11.1162 13.864 11.6522 12.848 12.7242 12.096C13.7962 11.344 15.2282 10.968 17.0202 10.968H20.0442L20.0922 10.68C20.1082 10.584 20.1162 10.488 20.1162 10.392C20.1322 10.28 20.1402 10.184 20.1402 10.104C20.1402 9.496 19.9482 9.048 19.5642 8.76C19.1802 8.456 18.6922 8.304 18.1002 8.304C17.4762 8.304 16.9002 8.456 16.3722 8.76C15.8602 9.048 15.4922 9.48 15.2682 10.056H12.2682C12.5082 9.192 12.9242 8.44 13.5162 7.8C14.1242 7.16 14.8602 6.672 15.7242 6.336C16.5882 5.984 17.5242 5.808 18.5322 5.808C20.0042 5.808 21.1562 6.136 21.9882 6.792C22.8362 7.448 23.2602 8.392 23.2602 9.624C23.2602 9.784 23.2522 9.96 23.2362 10.152C23.2202 10.328 23.1962 10.504 23.1642 10.68L21.8682 18H19.1322L19.2522 16.152C18.7882 16.76 18.2042 17.272 17.5002 17.688C16.8122 18.088 15.9802 18.288 15.0042 18.288ZM16.1322 15.888C17.0122 15.888 17.7402 15.6 18.3162 15.024C18.9082 14.448 19.3402 13.736 19.6122 12.888H17.0202C16.2202 12.888 15.5882 13.048 15.1242 13.368C14.6602 13.688 14.4282 14.128 14.4282 14.688C14.4282 15.088 14.5802 15.392 14.8842 15.6C15.2042 15.792 15.6202 15.888 16.1322 15.888ZM29.8169 18.288C28.7289 18.288 27.8009 18.104 27.0329 17.736C26.2809 17.368 25.7129 16.864 25.3289 16.224C24.9449 15.584 24.7849 14.856 24.8489 14.04H27.9209C27.9049 14.6 28.0889 15.056 28.4729 15.408C28.8569 15.76 29.4329 15.936 30.2009 15.936C30.8729 15.936 31.3929 15.792 31.7609 15.504C32.1449 15.216 32.3369 14.848 32.3369 14.4C32.3369 14 32.1369 13.712 31.7369 13.536C31.3369 13.344 30.8249 13.176 30.2009 13.032C29.5449 12.872 28.9049 12.664 28.2809 12.408C27.6569 12.152 27.1369 11.816 26.7209 11.4C26.3209 10.984 26.1209 10.448 26.1209 9.792C26.1209 9.024 26.3449 8.344 26.7929 7.752C27.2569 7.144 27.8889 6.672 28.6889 6.336C29.4889 5.984 30.4089 5.808 31.4489 5.808C32.8569 5.808 33.9689 6.144 34.7849 6.816C35.6009 7.488 35.9929 8.4 35.9609 9.552H33.0089C32.9929 9.136 32.8089 8.8 32.4569 8.544C32.1209 8.288 31.6729 8.16 31.1129 8.16C30.5369 8.16 30.0649 8.288 29.6969 8.544C29.3449 8.784 29.1689 9.088 29.1689 9.456C29.1689 9.808 29.3769 10.08 29.7929 10.272C30.2249 10.448 30.7849 10.616 31.4729 10.776C32.2249 10.952 32.8969 11.168 33.4889 11.424C34.0969 11.68 34.5769 12.016 34.9289 12.432C35.2969 12.832 35.4809 13.36 35.4809 14.016C35.4809 14.88 35.2329 15.632 34.7369 16.272C34.2409 16.912 33.5609 17.408 32.6969 17.76C31.8489 18.112 30.8889 18.288 29.8169 18.288ZM42.3348 18C41.2468 18 40.3748 17.776 39.7188 17.328C39.0788 16.88 38.7588 16.104 38.7588 15C38.7588 14.648 38.7988 14.256 38.8788 13.824L39.7908 8.664H37.8708L38.3268 6.096H40.2467L41.1588 2.904H43.8948L43.3188 6.096H46.5588L46.0788 8.664H42.8867L41.9508 13.848C41.9188 14.008 41.9028 14.168 41.9028 14.328C41.9028 14.712 42.0068 14.984 42.2148 15.144C42.4388 15.304 42.7988 15.384 43.2948 15.384H44.9268L44.4468 18H42.3348ZM47.6414 23.28L51.4574 17.208H50.7374L48.0734 6.096H51.3614L53.2814 14.472L58.2254 6.096H61.4894L50.8814 23.28H47.6414ZM67.6 18L70.552 1.2H73.624L72.448 7.992L79.84 1.2H83.632L76.264 7.872L80.848 18H77.2L73.72 10.152L71.728 11.976L70.672 18H67.6ZM87.4591 4.32C86.8991 4.32 86.4351 4.152 86.0671 3.816C85.7151 3.464 85.5391 3.032 85.5391 2.52C85.5391 2.008 85.7151 1.584 86.0671 1.248C86.4351 0.895999 86.8991 0.719999 87.4591 0.719999C88.0191 0.719999 88.4751 0.895999 88.8271 1.248C89.1951 1.584 89.3791 2.008 89.3791 2.52C89.3791 3.032 89.1951 3.464 88.8271 3.816C88.4751 4.152 88.0191 4.32 87.4591 4.32ZM83.1871 18L85.2751 6.096H88.3471L86.2591 18H83.1871ZM94.6238 18C93.5358 18 92.6638 17.776 92.0078 17.328C91.3678 16.88 91.0478 16.104 91.0478 15C91.0478 14.648 91.0878 14.256 91.1678 13.824L92.0798 8.664H90.1598L90.6158 6.096H92.5358L93.4478 2.904H96.1838L95.6078 6.096H98.8478L98.3678 8.664H95.1758L94.2398 13.848C94.2078 14.008 94.1918 14.168 94.1918 14.328C94.1918 14.712 94.2958 14.984 94.5038 15.144C94.7278 15.304 95.0878 15.384 95.5838 15.384H97.2158L96.7358 18H94.6238ZM104.764 18.288C103.708 18.288 102.788 18.08 102.004 17.664C101.22 17.232 100.612 16.632 100.18 15.864C99.764 15.096 99.556 14.2 99.556 13.176C99.556 12.152 99.74 11.192 100.108 10.296C100.476 9.4 100.996 8.616 101.668 7.944C102.34 7.272 103.124 6.752 104.02 6.384C104.916 6 105.892 5.808 106.948 5.808C108.484 5.808 109.708 6.216 110.62 7.032C111.548 7.848 112.012 8.976 112.012 10.416H108.772C108.772 9.776 108.556 9.288 108.124 8.952C107.692 8.6 107.148 8.424 106.492 8.424C105.804 8.424 105.172 8.624 104.596 9.024C104.02 9.408 103.564 9.936 103.228 10.608C102.892 11.28 102.724 12.04 102.724 12.888C102.724 13.736 102.956 14.416 103.42 14.928C103.884 15.424 104.484 15.672 105.22 15.672C105.876 15.672 106.476 15.504 107.02 15.168C107.58 14.816 107.98 14.32 108.22 13.68H111.436C111.1 14.608 110.604 15.416 109.948 16.104C109.292 16.792 108.516 17.328 107.62 17.712C106.74 18.096 105.788 18.288 104.764 18.288ZM113.372 18L116.396 0.719999H119.468L118.22 7.92C118.716 7.28 119.332 6.768 120.068 6.384C120.82 6 121.644 5.808 122.54 5.808C124.012 5.808 125.068 6.272 125.708 7.2C126.364 8.128 126.54 9.488 126.236 11.28L125.036 18H121.964L123.116 11.568C123.292 10.544 123.22 9.76 122.9 9.216C122.58 8.672 121.972 8.4 121.076 8.4C120.228 8.4 119.476 8.704 118.82 9.312C118.164 9.92 117.732 10.768 117.524 11.856V11.832L116.444 18H113.372ZM133.709 18.288C132.125 18.288 130.861 17.832 129.917 16.92C128.989 16.008 128.525 14.776 128.525 13.224C128.525 12.216 128.701 11.264 129.053 10.368C129.405 9.472 129.909 8.688 130.565 8.016C131.221 7.328 131.997 6.792 132.893 6.408C133.805 6.008 134.805 5.808 135.893 5.808C136.949 5.808 137.853 6.016 138.605 6.432C139.357 6.832 139.933 7.392 140.333 8.112C140.749 8.816 140.957 9.624 140.957 10.536C140.957 10.92 140.917 11.32 140.837 11.736C140.773 12.136 140.693 12.488 140.597 12.792H131.549C131.549 12.92 131.549 13.056 131.549 13.2C131.549 14 131.789 14.632 132.269 15.096C132.749 15.544 133.373 15.768 134.141 15.768C134.749 15.768 135.285 15.632 135.749 15.36C136.229 15.072 136.621 14.704 136.925 14.256H140.045C139.677 15.024 139.173 15.712 138.533 16.32C137.909 16.928 137.181 17.408 136.349 17.76C135.533 18.112 134.653 18.288 133.709 18.288ZM135.485 8.304C134.749 8.304 134.053 8.52 133.397 8.952C132.741 9.368 132.261 10.008 131.957 10.872H137.885C137.901 10.744 137.909 10.656 137.909 10.608C137.925 9.904 137.709 9.344 137.261 8.928C136.813 8.512 136.221 8.304 135.485 8.304ZM142.294 18L144.382 6.096H147.094L147.022 8.064C147.518 7.376 148.142 6.832 148.894 6.432C149.646 6.016 150.486 5.808 151.414 5.808C152.646 5.808 153.598 6.152 154.27 6.84C154.958 7.512 155.302 8.488 155.302 9.768C155.302 10.216 155.254 10.72 155.158 11.28L153.958 18H150.886L152.038 11.568C152.054 11.376 152.07 11.2 152.086 11.04C152.118 10.864 152.134 10.704 152.134 10.56C152.134 9.12 151.422 8.4 149.998 8.4C149.15 8.4 148.398 8.704 147.742 9.312C147.086 9.904 146.662 10.72 146.47 11.76L145.366 18H142.294ZM161.911 18.288C160.823 18.288 159.895 18.104 159.127 17.736C158.375 17.368 157.807 16.864 157.423 16.224C157.039 15.584 156.879 14.856 156.943 14.04H160.015C159.999 14.6 160.183 15.056 160.567 15.408C160.951 15.76 161.527 15.936 162.295 15.936C162.967 15.936 163.487 15.792 163.855 15.504C164.239 15.216 164.431 14.848 164.431 14.4C164.431 14 164.231 13.712 163.831 13.536C163.431 13.344 162.919 13.176 162.295 13.032C161.639 12.872 160.999 12.664 160.375 12.408C159.751 12.152 159.231 11.816 158.815 11.4C158.415 10.984 158.215 10.448 158.215 9.792C158.215 9.024 158.439 8.344 158.887 7.752C159.351 7.144 159.983 6.672 160.783 6.336C161.583 5.984 162.503 5.808 163.543 5.808C164.951 5.808 166.063 6.144 166.879 6.816C167.695 7.488 168.087 8.4 168.055 9.552H165.103C165.087 9.136 164.903 8.8 164.551 8.544C164.215 8.288 163.767 8.16 163.207 8.16C162.631 8.16 162.159 8.288 161.791 8.544C161.439 8.784 161.263 9.088 161.263 9.456C161.263 9.808 161.471 10.08 161.887 10.272C162.319 10.448 162.879 10.616 163.567 10.776C164.319 10.952 164.991 11.168 165.583 11.424C166.191 11.68 166.671 12.016 167.023 12.432C167.391 12.832 167.575 13.36 167.575 14.016C167.575 14.88 167.327 15.632 166.831 16.272C166.335 16.912 165.655 17.408 164.791 17.76C163.943 18.112 162.983 18.288 161.911 18.288Z"
                fill="#F7931E"
              />
            </svg>
          </Link>
          <ul className="nav-items">
            <Link to="/" className="home-link">
              <li>Home</li>
            </Link>
            <Link to="/cart" className="cart-link">
              <li>Cart</li>
            </Link>
          </ul>
        </div>
        <button
          type="button"
          className="logout-btn"
          onClick={onClickLogoutButton}
        >
          Logout
        </button>
        <div className="hamburger-con">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            onClick={onClickHamburger}
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id=" menu">
              <path
                id="Icon"
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3.94849 6H20.0515C20.5735 6 21.0005 6.427 21.0005 6.949V7.051C21.0005 7.573 20.5735 8 20.0515 8H3.94849C3.42649 8 3.00049 7.573 3.00049 7.051V6.949C3.00049 6.427 3.42649 6 3.94849 6ZM20.0515 11H3.94849C3.42649 11 3.00049 11.427 3.00049 11.949V12.051C3.00049 12.573 3.42649 13 3.94849 13H20.0515C20.5735 13 21.0005 12.573 21.0005 12.051V11.949C21.0005 11.427 20.5735 11 20.0515 11ZM20.0515 16H3.94849C3.42649 16 3.00049 16.427 3.00049 16.949V17.051C3.00049 17.573 3.42649 18 3.94849 18H20.0515C20.5735 18 21.0005 17.573 21.0005 17.051V16.949C21.0005 16.427 20.5735 16 20.0515 16Z"
                fill="#183B56"
              />
            </g>
          </svg>
        </div>
      </nav>
      {hamburger && loadHamburgerItems()}
    </>
  )
}

export default withRouter(Header)
