import React from 'react'
import { NavLink } from 'react-router-dom'

const BeersTile = props => {

  return(
    <tr>
      <td><NavLink to={props.path}>{props.beerName}</NavLink></td>
      <td><a target="_blank" href={`${props.brewery.website}`}>{props.brewery.name}</a></td>
      <td>{props.rating}</td>
    </tr>
  )
}



export default BeersTile
