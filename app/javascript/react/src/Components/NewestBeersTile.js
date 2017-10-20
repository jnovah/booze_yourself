import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'


const NewestBeersTile = props => {


  let beers = props.beers.map(beer => {
    return(
      <tr>
        <td>{beer.beerName}</td>
        <td>{beer.brewery}</td>
        <td>{beer.rating}</td>
      </tr>
    )
  })
  return(
    <div className="new-table">
      Newest Beers
      <table>
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
export default NewestBeersTile
