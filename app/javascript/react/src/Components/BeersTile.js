import React from 'react'
import { Switch, Link, Redirect, Route, NavLink } from 'react-router-dom'
import BeerShow from '../containers/BeerShow'

const BeersTile = props => {
  return(

    <tr>
      <Switch>
        <Route path={props.path} component={BeerShow} />

      </Switch>
        <td><NavLink to={props.path}>{props.beerName}</NavLink></td>
        <td><a target="_blank" href={`${props.brewery.website}`}>{props.brewery.name}</a></td>
        <td>{props.rating}</td>
    </tr>

  )
}



export default BeersTile
