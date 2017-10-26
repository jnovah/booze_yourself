import React from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import BeerShow from './containers/BeerShow'
import BeersIndex from './Components/BeersIndex'

const BoozeYourself = props => {
  return(
    <div>
      <main>
        <NavBar />
        <Switch>
          <Route path='/beer/:id' component = {BeerShow} />
          <Route path='/beers' component={BeersIndex} />
          <Route exact path='/' component={Home} />
        </Switch>
      </main>
    </div>
  )
}

export default BoozeYourself
