import React from 'react'
import { Link } from 'react-router-dom'

const BeersTile = props => {
  let path = `/beer/${props.id}`

  return(
    <tr>
      <td><Link to={path}>{props.beerName}</Link></td>
      <td>{props.brewery}</td>
      <td>{props.rating}</td>
    </tr>
  )
}



export default BeersTile
