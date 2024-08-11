import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute/index'
import Home from './components/Home/index'
import Cart from './components/Cart/index'
import './App.css'

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <Route exact path="/" component={Home} />
      <Route exact path="/cart" component={Cart} />
    </Switch>
  </BrowserRouter>
)

export default App
