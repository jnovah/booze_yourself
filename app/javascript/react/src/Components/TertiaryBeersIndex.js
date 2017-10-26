import React, { Component } from 'react'
import BeersTile from './BeersTile'
import { NavLink, Route, Switch } from 'react-router-dom'
import BeerShow from '../containers/BeerShow'


class TertiaryBeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={
      beers:[],
      currentUser: "",
      userId: ""
    }
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


  render(){
    let button;
    if (this.state.currentUser) {
      button = <NavLink to='/beers/new-beer' class="button add-beer" key={5}>Add a Beer</NavLink>
    } else {
      button = <a href='/users/sign_in' key={`navbar-${4}`} className=''>Sign in to add a beer!</a>
    }

    let beers = this.state.beers.map(beer =>{
      let path = `/beer/${beer.id}`
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
      <div className="grid-x">
        <div className='index'>
          <div className=' add-beer-text'>Don't see a beer? Feel free to add one!</div>
          <p className="small-2 small-offset-5 add-beer-button">{button}</p>

        <table className='all-beer-table'>
          <thead>
            <tr>
              <th className="beer-table-header">Name</th>
              <th className="beer-table-header">Brewery</th>
              <th className="beer-table-header">Rating</th>
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

export default TertiaryBeersIndex
