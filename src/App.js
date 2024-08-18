import {useState, useEffect} from 'react'

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
  const [cartList, setCartList] = useState(() => {
    const savedCartList = localStorage.getItem('cartList')
    return savedCartList ? JSON.parse(savedCartList) : []
  })

  const addCartItem = product => {
    const existingItem = cartList.find(eachItem => eachItem.id === product.id)
    if (existingItem) {
      setCartList(prevState =>
        prevState.map(eachItem =>
          eachItem.id === product.id
            ? {...eachItem, quantity: eachItem.quantity + 1}
            : eachItem,
        ),
      )
    } else {
      setCartList(prevState => [...prevState, {...product, quantity: 1}])
    }
  }

  const increaseQuantity = product => {
    setCartList(prevState =>
      prevState.map(eachItem =>
        eachItem.id === product.id
          ? {...eachItem, quantity: eachItem.quantity + 1}
          : eachItem,
      ),
    )
  }

  const decreaseQuantity = product => {
    setCartList(prevState =>
      prevState
        .map(eachItem =>
          eachItem.id === product.id
            ? {...eachItem, quantity: eachItem.quantity - 1}
            : eachItem,
        )
        .filter(eachItem => eachItem.quantity > 0),
    )
  }

  useEffect(() => {
    localStorage.setItem('cartList', JSON.stringify(cartList))
  }, [cartList])

  const deleteCartList = () => {
    setCartList([])
  }

  return (
    <BrowserRouter>
      <CartContext.Provider
        value={{
          cartList,
          addCartItem,
          increaseQuantity,
          decreaseQuantity,
          deleteCartList,
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
