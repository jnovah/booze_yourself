import React, { Component } from 'react'
import { Route } from 'react-router-dom'
import TertiaryBeersIndex from './TertiaryBeersIndex'
import BeerForm from '../containers/BeerForm'

class BeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={
    }
    this.addNewBeer = this.addNewBeer.bind(this)
  }

  addNewBeer(formPayLoad) {
    fetch(`/api/v1/payloads`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPayLoad)
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
