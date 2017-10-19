import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {beers:[
      {beerName: "Bud Light",
      brewery: "Busch",
      rating: 2}, {beerName: "Bud",
      brewery: "Busch",
      rating: 2}]
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
        <div>
          <TopBeersTile
            beers={this.state.beers}
          />
        </div>
        <div>
          <NewestBeersTile
            beers={this.state.beers}
          />
        </div>
      </div>
    )
  }
}

export default Home
