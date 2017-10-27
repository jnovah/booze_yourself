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
    fetch(`/api/v1/payloads.json`, {
      method: "POST",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(formPayLoad)
    })
    .then(response => {
      return response.json();
    })
    .then(body => {
      if(body.beer) {
        this.setState( { newestBeer: body.beer })
      }
    })
  }

  render() {
    return(
      <div>
        <Route path='/beers/new-beer' render={props => (<BeerForm addNewBeer={this.addNewBeer} {...props} />)} />
        <Route path='/beers' component={TertiaryBeersIndex} />
      </div>
    )
  }
}

export default BeersIndex
