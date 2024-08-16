import {useState} from 'react'

import {BrowserRouter, Route, Switch} from 'react-router-dom'

import CartContext from './context/CartContext'

import LoginRoute from './components/LoginRoute/index'
import Home from './components/Home/index'
import Cart from './components/Cart/index'
import RestaurentItemDetails from './components/RestaurentItemDetails'
import './App.css'

const App = () => {
  const [cartList, setCartList] = useState([])

  const addCartItem = product => {
    console.log('callback list called')
    console.log('cartList', cartList)
    const addingItemId = product.id
    const cartItem = cartList.find(eachItem => eachItem.id === addingItemId)
    // console.log(addingItemId)
    // console.log('cartIdsist', cartIdsList)
    if (cartItem) {
      setCartList(prevState =>
        prevState.map(eachItem =>
          eachItem.id === addingItemId
            ? {...eachItem, quantity: eachItem.quantity + 1}
            : eachItem,
        ),
      )
    } else {
      setCartList(prevState => [...prevState, product])
    }
  }

  const deleteCartItem = () => {}

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
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
        </Switch>
      </CartContext.Provider>
    </BrowserRouter>
  )
}

export default App
