import React from 'react'
import { Switch, Link, Redirect, Route, NavLink } from 'react-router-dom'
import BeerShow from '../containers/BeerShow'

const BeersTile = props => {
  return(

    <tr>
      <td className="beer-table-body"><NavLink to={props.path}>{props.beerName}</NavLink></td>
      <td className="beer-table-body"><a target="_blank" href={`${props.brewery.website}`}>{props.brewery.name}</a></td>
      <td className="beer-table-body">{props.rating}</td>
    </tr>

  )
}



export default BeersTile
