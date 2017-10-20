import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'
import BeersIndex from '../Components/BeersIndex'
import { Route, Switch } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {beers:[
      {beerName: "Bud Light",
      brewery: "Busch",
      rating: 2, id: 1}, {beerName: "Bud",
      brewery: "Busch",
      rating: 2, id: 2}]
    }


  }
  render(){

    return(

      <div className='row'>
        <div className="search-bar">
          <ul>
            <input type='search' placeholder='Search'></input>
            <button className='button' id="search-button" type='button'>Search</button>
          </ul>
        </div>
        <div>
          <div className='small-6 columns top-beer'>
            <TopBeersTile
              beers={this.state.beers}
            />
          </div>
          <div className='small-6 columns new-beer'>
            <NewestBeersTile
              beers={this.state.beers}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
