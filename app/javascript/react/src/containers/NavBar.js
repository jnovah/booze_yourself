import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
    <div className="top-bar">
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


    <ul className="breadcrumbs">
      <Router>
      <li><Link to="/">Home</Link></li>
      </Router>
    </ul>
  </div>

  )
}

export default NavBar
