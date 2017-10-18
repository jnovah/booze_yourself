import React, { Component } from 'react'

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
            <button class='button' type='button'>Search</button>
          </ul>
        </div>

        <div className='top-beers'>
          <Beers
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
