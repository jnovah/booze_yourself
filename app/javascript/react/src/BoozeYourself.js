import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import BeersIndex from './Components/BeersIndex'
import BeerShow from './containers/BeerShow'

class BoozeYourself extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
    <div>
      <main>
        <NavBar />
        <Switch>
          <Route path='/' exact component={Home} key={1} />
          <Route path='/beers' component={BeersIndex} key={2} />
          <Route path='/beers/:id' component={BeerShow} key={3} />
        </Switch>
      </main>
    </div>
    )
  }
}

export default BoozeYourself
