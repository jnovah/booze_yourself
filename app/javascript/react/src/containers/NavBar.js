import React, { Component } from 'react';
import { BrowserRouter, NavLink } from 'react-router-dom'

class NavBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      signedIn: false
    }
  }

  componentDidMount() {
    fetch(`/api/v1/members.json`,
    {method: 'GET', redirect: 'follow',
    credentials: "same-origin",
    headers: {"Content-Type": "application/json"}})
    .then(response => response.json())
    .then(body => {
      this.setState({ username: body.username, signedIn: body.signed_in })
    })
  }


  render() {
    let button;
    if (this.state.signedIn) {
      button = <div>Welcome {this.state.username} <a href='/users/sign_out' key={`navbar-${4}`} className='sign-in'>Sign Out</a></div>
    } else {
      button =<a href='/users/sign_in' key={`navbar-${4}`} className='sign-in'>Sign In</a>
    }

    return(
      <div>
        <div className="top-bar">
          <nav>
            <NavLink className='home' to='/' key={`navbar-${1}`}>Booze Yourself</NavLink>
            <NavLink className='beers' to='/beers' key={`navbar-${2}`}>Beers</NavLink>
            {button}
          </nav>
        </div>
    </div>
    )
  }
}

export default NavBar
