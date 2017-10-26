import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'

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
          <input className='search-bar' placeholder='Search All Beers'></input>
          <div className="search-button-wrapper">
            <button className='small-2 small-offset-5 search-button'>Search</button>
          </div>
        </div>
       </div>
        <div>
          <div className='small-6 cell top-beer'>
            <TopBeersTile
              beers={this.state.beers}
            />
          </div>
          <div className='small-6 cell new-beer'>
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
