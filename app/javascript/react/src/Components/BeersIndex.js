import React, { Component } from 'react'



class BeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={beers:[
      {beerName: "Bud Light",
      brewery: "Busch",
      rating: 2}, {beerName: "Bud",
      brewery: "Busch",
      rating: 2}]

    }
  }

  render(){
      let beers = this.state.beers.map(beer =>{
        return(
          <tr>
            <td>{beer.beerName}</td>
            <td>{beer.brewery}</td>
            <td>{beer.rating}</td>
          </tr>
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
