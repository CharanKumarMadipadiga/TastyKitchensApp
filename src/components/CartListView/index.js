import CartItem from '../CartItem'

import './index.css'

const cartList = [
  {
    id: 1,
    name: 'chicken noodles',
    price: 60,
    imageUrl:
      'https://thedumplingsisters.wordpress.com/wp-content/uploads/2014/11/tds-noodles-2.jpg',
  },
  {
    id: 2,
    name: 'chicken fried rice',
    price: 80,
    imageUrl:
      'https://tse4.mm.bing.net/th?id=OIP.EdtFdGsiPMUNRsxXORO6UwHaHa&pid=Api&P=0&h=220',
  },
  {
    id: 3,
    name: 'chicken biryani',
    price: 120,
    imageUrl:
      'https://tse2.mm.bing.net/th?id=OIP.Q4f5lR46RdwAqe9hXJ7dlAHaF7&pid=Api&P=0&h=220',
  },
]

const CartListView = () => (
  <ul className="cart-list">
    {cartList.map(cartItem => (
      <CartItem key={cartItem.id} cartDetails={cartItem} />
    ))}
  </ul>
)

export default CartListView
