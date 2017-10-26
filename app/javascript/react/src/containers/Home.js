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

      <div className='grid-x'>
       <div className='header-image' >
        <div className="small-4 small-offset-4 cell">
          <div className='search-bar'>
            <input onChange={this.handleChange} value={this.state.search_value} type='search' placeholder='Search All Beers' />
            <div className="search-button-wrapper">
            <button onClick={this.handleSubmit} className='small-2 small-offset-5 search-button button'>Search</button>
          </div>
          </div>
        </div>
       </div>
        <div>
          <div className='small-6 cell top-beer'>
            <TopBeersTile
              beers={this.state.beers}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default Home
