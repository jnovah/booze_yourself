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
    let beers = this.state.beers.map(beer => {


    return(

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
      // </div>
    )
  })
    return(
      
       <div>
         <div>
           <ul>
             <input type='search' placeholder='Search'></input>
             <button className='button' type='button'>Search</button>
           </ul>
         </div>
        <div>
          {beers}
        </div>
      </div>
    )
  }
}

export default Home
