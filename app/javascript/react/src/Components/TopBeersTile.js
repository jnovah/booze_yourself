import React from 'react'

const TopBeersTile = props => {
  return(
    <div>
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
          <tr>
            <td>{props.beerName}</td>
            <td>{props.brewery}</td>
            <td>{props.rating}</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}
export default TopBeersTile
