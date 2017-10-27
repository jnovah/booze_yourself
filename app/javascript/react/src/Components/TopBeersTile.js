import React from 'react'
import { BrowserRouter, NavLink } from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

const TopBeersTile = props => {

  let beers = props.beers.map(beer => {
    let path = `/beer/${beer.id}`
    return(
      <tr id='tile'>
        <td className="beer-table-body"><NavLink to={path}>{beer.name}</NavLink></td>
      </tr>
    )
  })
  return(
        <div className="grid-x">
          <div className='small-8 cell small-offset-8 search-index'>
          <table className='beer-table-results'>
            <thead>
              <tr className="small-6 cell offset-3 beer-table-results">
                <th>Name</th>
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
export default TopBeersTile
