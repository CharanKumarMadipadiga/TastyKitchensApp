import './index.css'

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-logo-heading-con">
        <svg
          width="49"
          height="39"
          viewBox="0 0 49 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M41.9608 1.17464C38.7737 0.0472685 35.4484 0.648147 32.5584 2.85489C31.0304 1.44103 28.6045 0.21841 24.7548 0.0246507C19.22 -0.254302 14.0701 1.84488 10.6272 5.78188C8.27322 8.47389 7.04595 11.6703 7.28511 14.4201C6.93013 14.5106 6.57298 14.6176 6.21703 14.7516C2.5265 16.1358 0.20716 19.3254 0.0121048 23.2845C-0.158235 26.7402 1.47586 29.726 4.49352 31.4769C7.36143 33.1393 10.9747 33.4263 14.0931 32.3909C15.0066 32.0871 15.8743 31.6636 16.6725 31.1339C18.152 32.693 19.411 34.3247 20.749 38.3263L20.9288 38.8624L21.3715 38.5304C25.314 35.5735 29.1313 33.4703 32.7157 32.2801C35.7815 31.2623 38.7798 30.8775 41.6288 31.1359L42.4553 31.2105L42.0071 30.4865C40.9412 28.7683 40.0131 24.9263 41.1769 21.6236C41.512 21.5801 41.8457 21.5037 42.1788 21.3934C43.7257 20.88 45.2319 19.6604 46.4475 17.9052C48.439 15.0275 49.2032 11.3381 48.441 8.27586C47.6314 5.02267 45.1471 2.30226 41.9608 1.17464Z"
            fill="white"
          />
          <path
            d="M16.5337 31.2284C16.5337 31.2284 16.414 31.3133 16.1897 31.4729C16.077 31.554 15.9374 31.6546 15.762 31.7558C15.5878 31.8584 15.392 31.9908 15.1548 32.1054C15.037 32.1662 14.9132 32.2301 14.7833 32.2974C14.651 32.3615 14.509 32.4188 14.3622 32.4841C14.0695 32.6204 13.7375 32.7279 13.3821 32.8523C12.6656 33.0815 11.8221 33.2637 10.874 33.3454C9.92658 33.423 8.87087 33.4039 7.75869 33.1886C6.64894 32.9747 5.47158 32.595 4.34559 31.9267C4.0587 31.7707 3.79096 31.5714 3.51182 31.3832C3.24771 31.1716 2.97221 30.9675 2.72312 30.7217C2.21162 30.2485 1.73598 29.7001 1.34417 29.0721C0.952849 28.4469 0.609747 27.761 0.394823 27.0194C0.177718 26.2811 0.0337897 25.5053 0.00737856 24.7185C-0.0500475 23.1536 0.227875 21.6085 0.836058 20.2595C1.4331 18.9072 2.34004 17.7821 3.35311 16.9432C3.86389 16.5286 4.39018 16.1619 4.93706 15.8799C5.07057 15.803 5.20747 15.7349 5.34558 15.6739C5.48297 15.611 5.61745 15.5452 5.75411 15.4871C6.03155 15.3826 6.29929 15.2665 6.57455 15.1888C7.11658 15.0069 7.65886 14.9054 8.17788 14.8229C8.70101 14.7624 9.20428 14.7239 9.68477 14.747C10.6445 14.7764 11.502 14.9604 12.2144 15.2248C12.9285 15.4876 13.4931 15.8307 13.9229 16.1443C14.132 16.3119 14.3213 16.4517 14.4642 16.6014C14.6118 16.7442 14.74 16.8598 14.8267 16.9714C15.0075 17.1827 15.1037 17.2953 15.1037 17.2953C15.1037 17.2953 14.9944 17.1973 14.7889 17.0128C14.6905 16.9158 14.5498 16.8181 14.3898 16.6974C14.235 16.5703 14.0332 16.4572 13.8148 16.3202C13.3666 16.0684 12.794 15.8053 12.0969 15.6291C11.4013 15.452 10.5849 15.3615 9.69228 15.4148C9.24619 15.4329 8.78218 15.51 8.30581 15.604C7.83308 15.7198 7.34362 15.8498 6.85998 16.0526C6.61404 16.1403 6.37756 16.2647 6.13186 16.375C6.01143 16.4361 5.89319 16.5042 5.77252 16.5688C5.65113 16.6316 5.53216 16.7007 5.41585 16.7779C4.93754 17.0611 4.48613 17.4169 4.05119 17.8065C3.19004 18.5961 2.44472 19.6033 1.96083 20.7817C1.46678 21.9528 1.24531 23.2996 1.29353 24.6607C1.35096 26.017 1.72192 27.3064 2.37978 28.3793C2.69744 28.9221 3.08997 29.4056 3.51934 29.8343C3.72651 30.057 3.96227 30.2447 4.18519 30.4425C4.42555 30.6184 4.65332 30.8082 4.90314 30.9595C5.87744 31.6076 6.93049 32.0242 7.94429 32.2962C8.96003 32.5703 9.94767 32.6706 10.8495 32.6779C11.7519 32.6819 12.5723 32.5894 13.2823 32.4424C13.9893 32.2869 14.5953 32.1089 15.0736 31.9147C15.3183 31.8305 15.5233 31.7254 15.707 31.6465C15.8919 31.5689 16.0409 31.4882 16.1618 31.4236C16.4048 31.2962 16.5337 31.2284 16.5337 31.2284Z"
            fill="#452210"
          />
          <path
            d="M48.4443 8.32755C48.1126 7.88173 47.7441 7.43717 47.3321 6.99512C49.3057 12.7325 44.992 19.1288 38.6518 19.4598C33.4483 19.7317 21.6736 24.3877 18.0972 29.68C24.4819 24.6606 30.8705 22.7419 38.955 22.104C39.7277 22.0432 40.4226 22.0301 41.0499 22.0555C41.0904 21.9208 41.1284 21.7854 41.1752 21.6522C41.5103 21.6087 41.8439 21.5323 42.1771 21.422C43.724 20.9086 45.2301 19.689 46.4458 17.9338C48.4322 15.0631 49.1974 11.3852 48.4443 8.32755Z"
            fill="white"
          />
          <path
            d="M41.5335 21.224C41.5335 21.224 41.6498 21.2003 41.8672 21.1561C42.0833 21.1058 42.3998 21.0174 42.7843 20.8533C43.5517 20.5306 44.5858 19.8433 45.5015 18.6586C46.4239 17.4918 47.2274 15.8419 47.5935 13.9053C47.6871 13.4223 47.7486 12.9215 47.775 12.4096C47.8061 11.8979 47.8014 11.3744 47.753 10.8472C47.665 9.78942 47.4174 8.71909 46.9674 7.71763C46.0644 5.69761 44.4812 4.16036 42.8245 3.23077C41.1611 2.27956 39.4095 1.95286 37.9581 2.00589C36.4953 2.06118 35.3366 2.48212 34.577 2.83672C34.1994 3.02444 33.907 3.17925 33.7187 3.30138C33.5271 3.41699 33.4243 3.47856 33.4243 3.47856C33.4243 3.47856 33.5157 3.4004 33.6875 3.25414C33.8563 3.10109 34.1243 2.90105 34.4805 2.65351C35.198 2.18206 36.3402 1.5754 37.8999 1.34093C38.6755 1.22532 39.5466 1.2105 40.4681 1.34419C40.9304 1.40401 41.3995 1.52011 41.879 1.65682C42.3527 1.81188 42.8391 1.98553 43.3125 2.22428C44.2689 2.68065 45.2015 3.33003 46.0411 4.15181C46.8766 4.97711 47.6129 5.98913 48.1349 7.15445C48.4026 7.73246 48.5892 8.34414 48.7326 8.94879C48.8746 9.55168 48.948 10.1596 48.9822 10.7562C49.0181 11.3531 48.9996 11.9409 48.94 12.5096C48.8841 13.0788 48.7869 13.6299 48.6527 14.1557C48.124 16.2651 47.0932 17.968 45.9781 19.1072C44.8679 20.266 43.6796 20.8387 42.848 21.0511C42.4298 21.1609 42.0981 21.1983 41.8747 21.2129C41.6527 21.2202 41.5335 21.224 41.5335 21.224Z"
            fill="#452210"
          />
          <path
            d="M17.1628 31.6836C17.1628 31.6836 17.3125 31.8316 17.596 32.1134C17.8788 32.3973 18.296 32.818 18.7818 33.4199C19.2546 34.0313 19.7605 34.8478 20.2267 35.8586C20.3398 36.1119 20.4479 36.3778 20.5645 36.651C20.6219 36.7879 20.6805 36.9269 20.7401 37.0682C20.7934 37.2114 20.847 37.3569 20.9022 37.5044C20.9274 37.5718 20.9529 37.6399 20.9783 37.7085L21.0311 37.8429C21.0653 37.9286 21.0995 38.0153 21.1339 38.1033C21.1404 38.1772 21.192 38.1091 21.2291 38.0852L21.3449 37.9947C21.4266 37.9314 21.5092 37.8671 21.5926 37.8022C23.789 36.1629 26.537 34.3256 29.9072 32.8587C31.5903 32.1292 33.4318 31.5029 35.4097 31.1049C35.904 31.0061 36.4085 30.9322 36.9168 30.8556C37.1727 30.8287 37.4298 30.8018 37.6876 30.7746L38.0763 30.7357L38.4676 30.7171C38.7293 30.705 38.9919 30.693 39.256 30.6806C39.5204 30.6837 39.7857 30.6867 40.0518 30.6897L40.4494 30.6947L40.4605 30.6937L40.477 30.6912L40.4724 30.6864L40.4714 30.6877L40.3459 30.3751C40.1787 29.9018 40.0232 29.4216 39.9149 28.9288C39.626 27.7303 39.5279 26.5069 39.5723 25.3026C39.6132 24.7008 39.6697 24.1019 39.7998 23.5179C39.8327 23.3721 39.8562 23.2248 39.8965 23.0816L40.0021 22.7079L40.0183 22.6802L39.989 22.6719L39.9784 22.6707L39.8148 22.6782L39.4271 22.6958C39.1691 22.7084 38.9122 22.7207 38.6568 22.733C38.4019 22.7554 38.1487 22.7775 37.8965 22.7996C37.3927 22.8474 36.8916 22.877 36.4005 22.9371C35.9093 22.9999 35.4238 23.0622 34.9438 23.1238C31.1124 23.6689 27.7294 24.6364 25.0141 25.7806C24.844 25.8507 24.6754 25.9196 24.5092 25.988C24.3456 26.0634 24.1847 26.138 24.0253 26.2116C23.7074 26.3607 23.3941 26.4989 23.0961 26.6454C22.5077 26.9573 21.9388 27.2272 21.4358 27.5338C21.1809 27.6815 20.9352 27.824 20.6975 27.9615C20.4671 28.1095 20.2449 28.2518 20.0321 28.3885C19.6001 28.6531 19.2308 28.9336 18.888 29.1718C18.542 29.4055 18.2611 29.6498 18.0038 29.8438C17.7462 30.0378 17.54 30.217 17.374 30.3622C17.0389 30.6502 16.8618 30.8023 16.8618 30.8023C16.8618 30.8023 17.0261 30.6354 17.3365 30.3195C17.4918 30.1599 17.6849 29.9637 17.9277 29.7488C18.1705 29.5344 18.4363 29.2663 18.7671 29.0052C19.0937 28.74 19.4477 28.4292 19.8649 28.1319C20.0709 27.9788 20.2858 27.8192 20.5092 27.6536C20.7401 27.4983 20.9798 27.3372 21.2276 27.1706C21.7188 26.8258 22.2768 26.516 22.8564 26.1621C23.1513 25.9948 23.4607 25.8352 23.7755 25.6648C23.9335 25.5803 24.0934 25.4949 24.2555 25.4084C24.421 25.3293 24.5882 25.2491 24.7575 25.1684C27.459 23.8478 30.8767 22.6928 34.7795 22.01C35.2684 21.9321 35.764 21.8534 36.2636 21.7738C36.7654 21.6984 37.2757 21.6539 37.7901 21.5923C38.0474 21.5637 38.3062 21.535 38.5662 21.5059C38.8274 21.4833 39.0893 21.4692 39.3527 21.4503C39.6881 21.429 40.0246 21.4071 40.3626 21.3855C40.6195 21.3699 40.8775 21.3541 41.1354 21.3385L41.5247 21.3146L41.7203 21.3028L41.769 21.2998L41.7779 21.3104L41.77 21.334L41.7382 21.4282C41.6536 21.6805 41.5683 21.9334 41.4833 22.1869L41.3549 22.5689L41.2291 22.9692L41.1974 23.0698L41.1838 23.1195L41.1589 23.213L41.1085 23.4007C41.0743 23.5259 41.0566 23.6563 41.0292 23.7842C40.9204 24.2959 40.8775 24.8277 40.8443 25.3622C40.8145 26.434 40.9059 27.5385 41.1659 28.6124C41.2621 29.0549 41.4014 29.4804 41.5453 29.8966C41.564 29.9483 41.5858 29.9981 41.6054 30.0489L41.636 30.1248L41.6512 30.1627L41.6844 30.2383L41.8276 30.5653L42.0043 30.8963C42.24 31.3418 42.4743 31.7681 42.7065 32.188C42.1906 32.1483 41.6762 32.1083 41.1642 32.0686C40.9081 32.0488 40.6527 32.0287 40.3978 32.0088L40.0183 31.9998C39.7675 31.9937 39.5182 31.988 39.2694 31.9819C39.0203 31.99 38.7724 31.998 38.5255 32.0058L38.1553 32.0174L37.7877 32.0485C37.543 32.0694 37.2997 32.0905 37.0567 32.1113C36.5737 32.1757 36.093 32.2347 35.6203 32.3184C33.7296 32.6547 31.9423 33.2015 30.2872 33.8499C26.9734 35.1519 24.1852 36.8189 21.9267 38.3121C21.7316 38.4438 21.539 38.5737 21.3488 38.7019C21.2512 38.7675 21.155 38.8326 21.059 38.8972C20.9691 38.9454 20.8467 39.0985 20.8356 38.9052C20.7033 38.4835 20.5746 38.0729 20.4491 37.6736C20.4038 37.5245 20.3592 37.3775 20.3146 37.233C20.265 37.0908 20.2158 36.951 20.1676 36.8133C20.0697 36.5381 19.98 36.2692 19.8846 36.0134C19.4918 34.9956 19.0559 34.1696 18.6357 33.5343C18.2022 32.909 17.8187 32.4554 17.5596 32.149C17.2999 31.8442 17.1628 31.6836 17.1628 31.6836Z"
            fill="#452210"
          />
          <path
            d="M26.4678 1.6156C32.8372 0.723705 39.4839 10.8763 31.0514 17.0236C32.3417 13.4196 36.5629 3.79143 26.4678 1.6156Z"
            fill="white"
          />
          <path
            d="M32.9142 15.3291C32.9142 15.3291 33.0143 15.2052 33.2018 14.972C33.2888 14.8493 33.3942 14.696 33.5137 14.5133C33.622 14.3218 33.7557 14.1087 33.8728 13.8486C34.1182 13.337 34.36 12.6803 34.5149 11.8917C34.6658 11.1056 34.7465 10.186 34.6268 9.19488C34.582 8.6983 34.4613 8.1904 34.3154 7.67522C34.1563 7.16205 33.9358 6.65164 33.6661 6.15078C33.3789 5.65947 33.0397 5.18199 32.637 4.73943C32.2227 4.3097 31.764 3.90057 31.2409 3.55326C30.1977 2.85588 28.9513 2.36482 27.6073 2.06878C26.2596 1.78329 24.8113 1.67598 23.3349 1.71368C20.381 1.77902 17.6144 2.5719 15.3619 3.82367C14.2374 4.45169 13.2284 5.1737 12.3673 5.95275C11.5059 6.73181 10.7809 7.55283 10.1912 8.36129C9.00557 9.97922 8.3889 11.5411 8.13012 12.6524C8.05355 12.9291 8.02423 13.1824 7.97916 13.4C7.95469 13.6197 7.92901 13.8069 7.91665 13.9582C7.90259 14.2618 7.89508 14.4234 7.89508 14.4234C7.89508 14.4234 7.88345 14.2615 7.8614 13.9572C7.85632 13.8039 7.86043 13.6141 7.86092 13.3882C7.88176 13.1648 7.88418 12.9022 7.93264 12.6129C8.07754 11.4526 8.55658 9.7734 9.66221 7.98131C10.2113 7.08666 10.9106 6.16636 11.769 5.28327C12.627 4.40017 13.6564 3.56934 14.8284 2.84256C17.1702 1.38974 20.1479 0.446331 23.2998 0.37898C24.8707 0.338771 26.4125 0.472467 27.8765 0.821535C29.3342 1.18091 30.7095 1.77751 31.8534 2.62291C32.4269 3.0436 32.9285 3.53592 33.3707 4.0516C33.8018 4.58036 34.1546 5.1453 34.441 5.71828C34.7109 6.30056 34.9161 6.88611 35.0511 7.46362C35.1742 8.04314 35.2614 8.60531 35.2689 9.14563C35.3137 10.2242 35.1432 11.1898 34.9091 11.9962C34.6721 12.8052 34.3535 13.4566 34.0477 13.9514C33.9006 14.2035 33.7402 14.406 33.6096 14.5857C33.4681 14.7571 33.3443 14.8981 33.243 15.0099C33.0283 15.2182 32.9142 15.3291 32.9142 15.3291Z"
            fill="#452210"
          />
        </svg>
        <h1 className="footer-heading">Tasty Kitchens </h1>
      </div>
      <p className="footer-text">
        The only thing we are serious about is food. Contact us on
      </p>
      <p className="footer-contact">Contact us on</p>
      <div className="icons-container">
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.4687 4C40.25 4 44 7.75 44 13.5313V34.4687C44 40.25 40.25 44 34.4687 44H13.5313C7.75 44 4 40.25 4 34.4687V13.5313C4 7.75 7.75 4 13.5313 4H34.4687Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.4687 4C40.25 4 44 7.75 44 13.5313V34.4687C44 40.25 40.25 44 34.4687 44H13.5313C7.75 44 4 40.25 4 34.4687V13.5313C4 7.75 7.75 4 13.5313 4H34.4687Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.1905 33.6809L19.8371 26.7817C19.8371 26.7817 20.0038 25.9484 19.5781 25.2045C19.5781 25.2045 18.6301 22.8349 20.5035 20.8259C20.5035 20.8259 22.0381 19.0879 24.0018 20.3972C24.0018 20.3972 25.1218 21.2784 24.6705 22.9484L23.3371 27.1151C23.3371 27.1151 22.5228 30.2817 25.5365 30.5539C25.5365 30.5539 28.7191 30.9825 30.2538 26.6715C31.7885 22.3609 30.0038 19.6151 30.0038 19.6151C30.0038 19.6151 27.7085 15.5853 22.5228 16.4335C17.3371 17.2817 16.6815 22.2289 16.6815 22.2289C16.6815 22.2289 16.2921 25.2755 17.9185 27.4972L17.1398 30.1545C17.1398 30.1545 13.1705 27.6151 13.3371 23.0535C13.3371 23.0535 13.5038 15.4484 21.2825 13.6151C21.2825 13.6151 28.3282 11.8407 32.4987 17.5007C34.832 20.6673 34.6654 24.1151 34.1654 26.6715C33.6654 29.228 31.7768 30.8645 31.7768 30.8645C31.7768 30.8645 26.6705 36.2817 22.2285 31.5009L21.2825 35.1452C21.2825 35.1452 20.1725 39.0937 18.6705 40.115L17.9798 39.9383C17.9798 39.9383 17.6361 35.5399 18.1905 33.6809Z"
            fill="#0F172A"
          />
        </svg>
        <svg
          width="39"
          height="39"
          viewBox="0 0 39 39"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M19.5 9.70162C14.0176 9.70162 9.64881 14.1561 9.64881 19.5528C9.64881 25.0352 14.0176 29.404 19.5 29.404C24.8967 29.404 29.3512 25.0352 29.3512 19.5528C29.3512 14.1561 24.8967 9.70162 19.5 9.70162ZM19.5 25.9775C15.9878 25.9775 13.0753 23.1506 13.0753 19.5528C13.0753 16.0406 15.9022 13.2138 19.5 13.2138C23.0122 13.2138 25.839 16.0406 25.839 19.5528C25.839 23.1506 23.0122 25.9775 19.5 25.9775ZM32.0067 9.35897C32.0067 8.07403 30.9788 7.04608 29.6938 7.04608C28.4089 7.04608 27.3809 8.07403 27.3809 9.35897C27.3809 10.6439 28.4089 11.6719 29.6938 11.6719C30.9788 11.6719 32.0067 10.6439 32.0067 9.35897ZM38.5171 11.6719C38.3457 8.58801 37.6604 5.84681 35.4332 3.61958C33.206 1.39236 30.4648 0.707057 27.3809 0.535732C24.2114 0.364407 14.7029 0.364407 11.5334 0.535732C8.44954 0.707057 5.794 1.39236 3.48112 3.61958C1.25389 5.84681 0.568591 8.58801 0.397266 11.6719C0.225941 14.8414 0.225941 24.3499 0.397266 27.5194C0.568591 30.6033 1.25389 33.2588 3.48112 35.5717C5.794 37.7989 8.44954 38.4842 11.5334 38.6555C14.7029 38.8269 24.2114 38.8269 27.3809 38.6555C30.4648 38.4842 33.206 37.7989 35.4332 35.5717C37.6604 33.2588 38.3457 30.6033 38.5171 27.5194C38.6884 24.3499 38.6884 14.8414 38.5171 11.6719ZM34.4053 30.8603C33.8056 32.5735 32.435 33.8584 30.8074 34.5437C28.2376 35.5717 22.2412 35.3147 19.5 35.3147C16.6731 35.3147 10.6768 35.5717 8.19255 34.5437C6.4793 33.8584 5.19437 32.5735 4.50907 30.8603C3.48112 28.376 3.7381 22.3797 3.7381 19.5528C3.7381 16.8116 3.48112 10.8152 4.50907 8.24536C5.19437 6.61777 6.4793 5.33283 8.19255 4.64753C10.6768 3.61958 16.6731 3.87657 19.5 3.87657C22.2412 3.87657 28.2376 3.61958 30.8074 4.64753C32.435 5.24717 33.72 6.61777 34.4053 8.24536C35.4332 10.8152 35.1762 16.8116 35.1762 19.5528C35.1762 22.3797 35.4332 28.376 34.4053 30.8603Z"
            fill="white"
          />
        </svg>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_13799_11226)">
            <path
              d="M41.0231 13.5435L40.6195 13.8361L40.642 14.3341C40.6592 14.7162 40.6671 15.1014 40.6671 15.4899C40.6671 27.3362 31.6817 40.9233 15.3102 40.9233C11.5982 40.9233 8.07764 40.119 4.90271 38.6795C8.84568 38.3697 12.4608 36.8865 15.3988 34.5769L17.4392 32.9729L14.8443 32.9248C11.7319 32.8671 9.03313 31.0931 7.65655 28.5034C7.7487 28.5059 7.84121 28.5072 7.93409 28.5072C8.86053 28.5072 9.75926 28.3821 10.6138 28.1485L13.9765 27.229L10.6003 26.3604C9.36533 26.0427 7.66014 25.0111 6.25867 23.4915C5.20038 22.344 4.38172 20.9911 4.04773 19.5615C5.01129 19.9046 6.04247 20.1065 7.11529 20.1397L10.3374 20.2395L7.65845 18.4464C5.42578 16.952 3.95832 14.3981 3.95832 11.5037C3.95832 10.4543 4.15233 9.45082 4.50517 8.52586C9.19137 13.7088 15.8398 17.0751 23.2778 17.4505L24.5047 17.5124L24.2251 16.3162C24.0832 15.7088 24.0099 15.0724 24.0099 14.4143C24.0099 9.80859 27.7349 6.07637 32.3228 6.07637C34.7133 6.07637 36.8719 7.08847 38.3901 8.71041L38.7411 9.08536L39.245 8.98568C40.1688 8.80291 41.0692 8.555 41.9411 8.24697C41.8324 8.35394 41.7239 8.45941 41.6165 8.56298C41.4965 8.67877 41.3754 8.79453 41.2563 8.9083C40.8798 9.26812 40.5241 9.60795 40.2909 9.86553C40.2099 9.95499 40.1274 10.0519 40.0564 10.1501C39.9971 10.2322 39.8932 10.3854 39.8357 10.5793C39.7757 10.7817 39.7102 11.2931 40.1616 11.6539C40.4778 11.9066 40.8373 11.883 40.9318 11.8766L40.9555 11.875L40.9792 11.8721C41.8244 11.7708 42.653 11.6162 43.4617 11.411C42.7152 12.1939 41.8983 12.909 41.0231 13.5435ZM41.548 11.2454C41.5478 11.2455 41.5495 11.2427 41.5536 11.2369C41.5502 11.2425 41.5481 11.2454 41.548 11.2454Z"
              fill="white"
              stroke="white"
              strokeWidth="1.85"
            />
          </g>
          <defs>
            <clipPath id="clip0_13799_11226">
              <rect
                width="45.325"
                height="37"
                fill="white"
                transform="translate(1 5)"
              />
            </clipPath>
          </defs>
        </svg>
        <svg
          width="48"
          height="48"
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M34.4687 4C40.25 4 44 7.74994 44 13.5311V34.4683C44 40.2494 40.25 43.9994 34.4687 43.9994H13.5313C7.75 43.9994 4 40.2494 4 34.4683V13.5311C4 7.74994 7.75 4 13.5313 4H34.4687Z"
            fill="white"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M24.9238 43.8018V28.3091H19.8906V22.7379H24.9238V18.6527C24.9238 18.6527 24.5617 10.1611 31.9104 10.1611H37.8548V15.8374H34.1508C34.1508 15.8374 31.4248 15.6895 31.3951 18.5029V22.7379H37.3875L36.5233 28.3091H31.3358V43.9998H24.9238V43.8018Z"
            fill="#0F172A"
          />
        </svg>
      </div>
    </div>
  )
}
