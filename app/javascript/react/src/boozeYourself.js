import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar'
import Home from './containers/Home'

class BoozeYourself extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
    <div>
      <Router>
        <Route path='/' component={NavBar} />
      </Router>

      <Router>
        <Route  path='/' component={Home} />
      </Router>
    </div>

    )
  }

}

export default BoozeYourself
