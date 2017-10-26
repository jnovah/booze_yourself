import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Home from './containers/Home'
import BeerShow from './containers/BeerShow'
import BeersIndex from './Components/BeersIndex'

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
          <Route path='/beer/:id' component = {BeerShow} />
          <Route path='/beers' component={BeersIndex} key={2} />
          <Route exact path='/' component={Home} key={1}></Route>
        </Switch>
      </main>
    </div>
    )
  }
}

export default BoozeYourself
