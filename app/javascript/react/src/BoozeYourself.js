import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom';
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
      <main>
        <NavBar />
        <Switch>
          <Route  path='/' exact component={Home} key={1}/>
        </Switch>
      </main>
    </div>
    )
  }
}

export default BoozeYourself
