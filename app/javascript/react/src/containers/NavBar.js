import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
      <div className="top-bar">
        <nav>
          <NavLink to='/'>Booze Yourself</NavLink>
          <NavLink to='/beers'>Beers</NavLink>
          <NavLink to='/breweries'>Breweries</NavLink>
          <a href='/users/sign_in'>Sign In</a>
        </nav>
      </div>


    <ul className="breadcrumbs">
      <li><NavLink to="/">Home</NavLink></li>
    </ul>
  </div>

  )
}

export default NavBar
