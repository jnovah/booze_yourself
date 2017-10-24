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

      <div className='grid-x'>
       <div className='header-image' >
        <div className="small-4 small-offset-4 cell">
          <input className='search-bar' placeholder='Search All Beers'></input>
          <div className="search-button-wrapper">
            <button className='small-2 small-offset-5 search-button'>Search</button>
          </div>
        </div>
       </div>
        <div>
          <div className='small-6 cell top-beer'>
            <TopBeersTile
              beers={this.state.beers}
            />
          </div>
          <div className='small-6 cell new-beer'>
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
