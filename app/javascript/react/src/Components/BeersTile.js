import React from 'react'
import { NavLink } from 'react-router-dom'

const BeersTile = props => {
  let path = `/beers/${props.id}`

  return(
    <tr>
      <td><NavLink to={path}>{props.beerName}</NavLink></td>
      <td>{props.brewery}</td>
      <td>{props.rating}</td>
    </tr>
  )
}



export default BeersTile
