import React, { Component } from 'react'
import { BrowserRouter, Link } from 'react-router-dom'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';

class TopBeersTile extends Component {
  constructor(props){
    super(props)
  }

  render(){
    return(
      <div className="top-table">
        Top 20 Beers
        <BootstrapTable className="table-responsive" ref='table' data={ this.props.beers } >
              <TableHeaderColumn  className="table-header" dataField='beerName' isKey={ true } dataSort={ true }>Beer</TableHeaderColumn>
              <TableHeaderColumn className="table-header" dataField='brewery' dataSort={ true }>Brewery</TableHeaderColumn>
              <TableHeaderColumn className="table-header" dataField='rating'>Rating</TableHeaderColumn>
          </BootstrapTable>
      </div>
    )
  }
}
export default TopBeersTile
