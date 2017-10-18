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
<<<<<<< HEAD:app/javascript/react/src/boozeYourself.js
    <div>
      <Router>
        <Route path='/' component={NavBar} />
      </Router>

      <Router>
        <Route  path='/' component={Home} />
=======
      <Router>
        <Route path='/' component={NavBar} />
>>>>>>> 0f801766cfc0dad0609813a525a98cfe8ac088a5:app/javascript/react/src/BoozeYourself.js
      </Router>
    </div>

    )
  }

}

export default BoozeYourself
