import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom';
import NavBar from './containers/NavBar'

class BoozeYourself extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  render(){
    return(
      <Router>
        <Route path='/' component={NavBar} />
      </Router>

    )
  }

}

export default BoozeYourself
