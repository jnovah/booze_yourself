import React, { Component } from 'react'
import BeersTile from './BeersTile'


class BeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={beers:[
      {beerName: "Bud Light",
      brewery: "Busch",
      rating: 2, id: 1}, {beerName: "Bud",
      brewery: "Busch",
      rating: 2, id: 2}]

    }
  }

  render(){

      let beers = this.state.beers.map(beer =>{
        return(
          <BeersTile
            beerName={beer.beerName}
            brewery={beer.brewery}
            rating={beer.rating}
            id={beer.id}
            key={beer.id}
          />

        )

      })
    return(
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


    )
  }


}














export default BeersIndex
