import React from 'react'
import { BrowserRouter, Link } from 'react-router-dom'


const TopBeersTile = props => {
  debugger
  let path = `/beer/${props.id}`
  let beers = props.beers.map(beer => {
    return(
        <tr>
          <td><Link to={path}>{beer.beerName}</Link></td>
          <td>{beer.brewery}</td>
          <td>{beer.rating}</td>
        </tr>
    )
  })
  return(
    <div className="top-table">
      Top 20 Beers
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
export default TopBeersTile
