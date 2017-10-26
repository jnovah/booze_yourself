import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';




class TopBeersTile extends Component {
  constructor(props){
    super(props)
  }

  render(){

      let beers = this.props.beers.map(beer => {
        return(
          <tr id='tile'>
            <td>{beer.beerName}</td>
            <td>{beer.brewery}</td>
            <td>{beer.rating}</td>
          </tr>
        )
      })
      return(
        <div>
        <h4 className='top-beer-text'>BEERS</h4>
        <div className="new-table">
          <table className="table-header">
            <thead className='table-header'>
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
      </div>
      )
  }
}
export default TopBeersTile
