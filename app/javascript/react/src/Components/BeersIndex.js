import React, { Component } from 'react'
import BeersTile from './BeersTile'
import { NavLink, Route, Switch } from 'react-router-dom'
import TertiaryBeersIndex from './TertiaryBeersIndex'
import BeerForm from '../containers/BeerForm'

class BeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={
    }
    this.addNewBeer = this.addNewBeer.bind(this)
  }

  addNewBeer(formPayload) {
    debugger;
    fetch('/api/v1/payloads.json', {
      method: "POST",
      body: JSON.stringify(formPayload),
      credentials: "same-origin",
      header: {"Content-Type": "application/json"}
    })
  }

  render() {
    return(
      <div>
        <Route path='/beers/new-beer' render={props => (<BeerForm addNewBeer={this.addNewBeer} {...props} />)} />
        <Route path='/beers' component={TertiaryBeersIndex} key={2} />
      </div>
    )
  }
}

export default BeersIndex
