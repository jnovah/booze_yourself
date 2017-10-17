import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
      <Router>
        <Link to='/'>Booze Yourself</Link>
      </Router>
      <Router>
        <Link to='/beers'>Beers</Link>
      </Router>
      <Router>
        <Link to='/breweries'>Breweries</Link>
      </Router>
      <a href='/users/sign_in'>Sign In</a>
    </div>

  )
}

export default NavBar
