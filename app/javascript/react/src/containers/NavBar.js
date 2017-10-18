import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
// import BackButton from './BackButton'

const NavBar = props => {
  return(
    <div>
      <Router>
        <Link to='/'>Booze Yourself</Link>
      </Router>
    </div>

  )
}

export default NavBar
