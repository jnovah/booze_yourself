import React, { Component } from 'react'
import BeersTile from './BeersTile'
import { Route, Switch } from 'react-router-dom'
import BeerShow from '../containers/BeerShow'


class BeersIndex extends Component {
  constructor(props){
    super(props)
    this.state={beers:[
      {beerName: "Bud Light",
      brewery: "Busch",
      rating: 2, id: 1}, {beerName: "Bud",
      brewery: "Busch",
      rating: 2, id: 2}]
    }
  }

  componentDidMount() {
    fetch('/api/v1/beers')
    .then(response => response.json())
    .then(body => {
      this.setState({ beers: body.beers })
    })
  }

  render(){
      let beers = this.state.beers.map(beer =>{
        let path = `/beers/${beer.id}`
        return(
          <BeersTile
            path={path}
            beerName={beer.name}
            brewery={beer.brewery}
            rating={beer.rating}
            id={beer.id}
            key={beer.id}
          />
        )
      })

    return(
      <Switch>
        <Route path="/beers/:id" component={BeerShow} key={3} />
        <div className='index'>
          <h1 className='all'>All Beers</h1>
          <table className='all-beer-table'>
            <thead>
              <tr>
                <th>Name</th>
                <th>Brewery</th>
                <th>Rating</th>
              </tr>
            </thead>
            <tbody>
              {beers}
            </tbody>
          </table>
        </div>
      </Switch>
    )
  }
}

export default BeersIndex
