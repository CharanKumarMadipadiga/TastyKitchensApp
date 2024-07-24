import {BrowserRouter, Route, Switch} from 'react-router-dom'

import LoginRoute from './components/LoginRoute/index'
import Home from './components/Home/index'

import './App.css'

// const sortByOptions = [
//   {
//     id: 0,
//     displayText: 'Highest',
//     value: 'Highest',
//   },
//   {
//     id: 2,
//     displayText: 'Lowest',
//     value: 'Lowest',
//   },
// ]

const App = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/login" component={LoginRoute} />
      <Route exact path="/" component={Home} />
    </Switch>
  </BrowserRouter>
)

export default App
