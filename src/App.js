import {useState} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CartContext from './context/CartContext'

import LoginRoute from './components/LoginRoute/index'
import Home from './components/Home/index'
import Cart from './components/Cart/index'
import RestaurentItemDetails from './components/RestaurentItemDetails'
import PaymentSuccessful from './components/PaymentSuccessful'
import NotFound from './components/NotFound'
import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    console.log('callback list called')
    console.log('cartList', cartList)
    const addingItemId = product.id
    console.log('adding item', addingItemId)
    setCartList(prevState => [...prevState, product])
  }

  const increaseQuantity = product => {
    const addingItemId = product.id
    const cartItem = cartList.find(eachItem => eachItem.id === addingItemId)
    if (cartItem) {
      setCartList(prevState =>
        prevState.map(eachItem =>
          eachItem.id === addingItemId
            ? {...eachItem, quantity: eachItem.quantity + 1}
            : eachItem,
        ),
      )
    }
  }

  const decreaseQuantity = product => {
    const addingItemId = product.id
    const cartItem = cartList.find(eachItem => eachItem.id === addingItemId)
    if (cartItem) {
      setCartList(prevState =>
        prevState.map(eachItem =>
          eachItem.id === addingItemId
            ? {...eachItem, quantity: eachItem.quantity - 1}
            : eachItem,
        ),
      )
    }
  }

  const deleteCartItem = () => {}

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          increaseQuantity,
          decreaseQuantity,
          deleteCartItem,
        }}
      >
        <Switch>
          <Route exact path="/login" component={LoginRoute} />
          <Route exact path="/" component={Home} />
          <Route exact path="/cart" component={Cart} />
          <Route
            path="/restaurants-list/:id"
            component={RestaurentItemDetails}
          />
          <Route
            exact
            path="/payment-successful"
            component={PaymentSuccessful}
          />
          <Route component={NotFound} />
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
