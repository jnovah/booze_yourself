import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'
<<<<<<< HEAD
import API from 'fetch-api'
=======
import BeersIndex from '../Components/BeersIndex'
import { Route, Switch } from 'react-router-dom';

>>>>>>> 205cb9fb90de3145269090b2bc6a0d3b683e8a9f

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {beers: []
    }
  }

    componentDidMount() {
    // fetch('http://api.brewerydb.com/v2/beers/?key=6e8622bccf5170704fa8452aab7efb48', { method: 'GET', mode: 'no-cors', format: 'json'})
    fetch('https://swapi.co/api/people')
      .then(response => {
        if (response.ok || response.type == 'opaque') {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
              error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => {
        return response.json();
      })
      .then(response => {
        return response.results;
      })
      .then(body => {
        body.forEach((object) => {
          this.setState({ beers: this.state.beers.concat(object) });
        })
      })
      .catch(error => console.error(`Error in fetch: ${error.message}`));
    }

  render(){

    return(

      <div className='row'>
        <div>
          <ul>
            <input type='search' placeholder='Search'></input>
            <button className='button' type='button'>Search</button>
          </ul>
        </div>
        <div>
<<<<<<< HEAD
          <TopBeersTile
            beers={this.state.beers}
          />
        </div>
        <div>
          <NewestBeersTile
            beers={this.state.beers}

          />
=======
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
>>>>>>> 205cb9fb90de3145269090b2bc6a0d3b683e8a9f
        </div>
      </div>
    )
  }
}

export default Home
