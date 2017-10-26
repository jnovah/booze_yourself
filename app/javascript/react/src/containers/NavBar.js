import React from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
      <div className="top-bar">
        <nav>
          <NavLink className='home' to='/' key={`navbar-${1}`}>Booze Yourself</NavLink>
          <NavLink className='beers' to='/beers' key={`navbar-${2}`}>Beers</NavLink>
          <a href='/users/sign_in' key={`navbar-${4}`} className='sign-in'>Sign In</a>
        </nav>
      </div>
  </div>

  )
}

export default NavBar
