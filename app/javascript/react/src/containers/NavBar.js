import React from 'react';
import { BrowserRouter as Router, Link, Switch } from 'react-router-dom'

const NavBar = props => {
  return(
    <div>
    <div className="top-bar">
      <Router>
        <Link to='/'>Booze Yourself</Link>
      </Router>
<<<<<<< HEAD
      <Switch>
        <Link to='/beers'>Beers</Link>
      </Switch>
      <Router>
        <Link to='/breweries'>Breweries</Link>
      </Router>
      <a href='/users/sign_in'>Sign In</a>
=======
>>>>>>> 0f801766cfc0dad0609813a525a98cfe8ac088a5
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
