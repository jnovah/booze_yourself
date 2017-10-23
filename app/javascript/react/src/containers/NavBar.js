import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
      <div className="top-bar">
        <nav>
          <NavLink className='home' to='/' key={`navbar-${1}`}>Booze Yourself</NavLink>
          <NavLink className='beers' to='/beers' key={`navbar-${2}`}>Beers</NavLink>
          <NavLink className='breweries' to='/breweries' key={`navbar-${3}`}>Breweries</NavLink>
          <a href='/users/sign_in' key={`navbar-${4}`} className='sign-in'>Sign In</a>
        </nav>
      </div>


    <ul className="breadcrumbs">
      <li><NavLink to="/" key={`navbar-${5}`}>Home</NavLink></li>
    </ul>
  </div>

  )
}

export default NavBar
