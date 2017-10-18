import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beerName: "Bud Light",
      brewery: "Busch",
      rating: 2

    }
  }
  render(){
    return(
      <div>
        <div>
          <ul>
            <input type='search' placeholder='Search'></input>
            <button className='button' type='button'>Search</button>
          </ul>
        </div>

        <div className='top-beers'>
          <TopBeersTile
          beerName={this.state.beerName}
          brewery={this.state.brewery}
          rating={this.state.rating}
          />
          <NewestBeersTile
          beerName={this.state.beerName}
          brewery={this.state.brewery}
          rating={this.state.rating}
          />
        </div>
      </div>
    )
  }
}

export default Home
