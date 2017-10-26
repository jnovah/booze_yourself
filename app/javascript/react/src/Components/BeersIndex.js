import React, { Component } from 'react'
import BeersTile from './BeersTile'
import { NavLink, Route, Switch } from 'react-router-dom'
import BeerForm from '../containers/BeerForm'
import BeerShow from '../containers/BeerShow'


class BeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={
      beers:[],
      currentUser: "",
      userId: ""
    }
    this.addNewBeer = this.addNewBeer.bind(this)
  }

  componentDidMount() {
    fetch(`/api/v1/beers`,
      {credentials: "same-origin",
      headers: {"Content-Type": "application/json"}})
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({ beers: body.beers, currentUser: body.current_user.status, userId: body.current_user.id })
    })
  }

  addNewBeer(formPayload) {
    debugger;
    fetch('/api/v1/payloads.json', {
      method: "POST",
      body: JSON.stringify(formPayload),
      credentials: "same-origin",
      header: {"Content-Type": "application/json"}
    })
    .then(response => {
      return response.json()
    })
    .then(body => {
      this.setState({ beers: [...this.state.beers, body] });
    })
  }

  render(){
    let button;
    if (this.state.currentUser) {
      button = <NavLink to='/beers/new-beer' class="button" key={5}>Add a Beer</NavLink>
    } else {
      button = <a href='/users/sign_in' key={`navbar-${4}`} className=''>Sign in to add a beer!</a>
    }

    let beers = this.state.beers.map(beer =>{
      let path = `/beers/${beer.id}`
      return(
          <BeersTile
            path={path}
            beerName={beer.name}
            brewery={beer.brewery}
            rating={beer.rating}
            id={beer.id}
            key={beer.id}
          />
      )
    })

    return(
      <div>
        <Route path='/beers/new-beer' render={props => (<BeerForm addNewBeer={this.addNewBeer} {...props} />)} />
        {button}
          <div className='index'>
            <h1 className='all'>All Beers</h1>
            <table className='all-beer-table'>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Brewery</th>
                  <th>Rating</th>
                </tr>
              </thead>
              <tbody>

                {beers}

              </tbody>
            </table>
          </div>
      </div>
    )
  }
}

export default BeersIndex
