import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'
import BeersIndex from '../Components/BeersIndex'
import { Route, Switch } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      beers:[],
      search_value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.postFetch = this.postFetch.bind(this);
  }

  postFetch(formPayload) {
    fetch('/api/v1/beers', {
      method: 'POST',
      headers: {"Content-Type": 'application/json'},
      body: JSON.stringify(formPayload)
    })
    .then(response => response.json())
    .then(body => {
      this.setState({ beers: body })
    })
  }

  handleChange(event) {
    let value = event.target.value
    this.setState( { search_value: value })
    if (this.state.search_value.length > 1) {
      let formPayload = { search_value: this.state.search_value }
      this.postFetch(formPayload)
    }
  }

  handleSubmit(event) {
    event.preventDefault()
    let formPayload = { search_value: this.state.search_value }
    this.postFetch(formPayload)
  }

  render(){

    return(

      <div className='row'>
        <div className="search-bar">
          <ul>
            <input onChange={this.handleChange} value={this.state.search_value} type='search' placeholder='Search'></input>
            <button onClick={this.handleSubmit} className='button' id="search-button" type='button'>Search</button>
          </ul>
        </div>
        <div>
          <div className='small-6 columns top-beer'>
            <TopBeersTile
              beers={this.state.beers}
            />
          </div>
          <div className='small-6 columns new-beer'>
            <NewestBeersTile
              beers={this.state.beers}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
