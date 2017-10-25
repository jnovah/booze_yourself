import React, { Component } from 'react'
import NewestBeersTile from '../Components/NewestBeersTile'
import TopBeersTile from '../Components/TopBeersTile'
import BeersIndex from '../Components/BeersIndex'
import { Route, Switch } from 'react-router-dom';


class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {beers:[
      {beerName: "Bud Light",
      brewery: "Busch",
      rating: 2, id: 1}, {beerName: "Bud",
      brewery: "Busch",
      rating: 2, id: 2}],
      buttonToggle: false,
      secondButtonToggle: false
    }
    this.handleButtonToggle=this.handleButtonToggle.bind(this)
    this.handleSecondButtonToggle=this.handleSecondButtonToggle.bind(this)


  }


  handleButtonToggle(){
    if(this.state.buttonToggle){
      this.setState({ buttonToggle: false})
    } else {
      //fetch
      this.setState({ buttonToggle: true })
    }
  }

   handleSecondButtonToggle(){
     if(this.state.secondButtonToggle){
       this.setState({ secondButtonToggle: false })
     } else {
       //fetch
       this.setState({ secondButtonToggle: true })
     }
   }


  render(){
  let clicked=''
  if (this.state.buttonToggle){
    clicked='clicked'
  }
 let secondClicked =''
  if(this.state.secondButtonToggle){
    secondClicked='clicked'
  }

    return(

      <div className='grid-x'>
       <div className='header-image' >
        <div className="small-4 small-offset-4 cell">
          <input className='search-bar' placeholder='Search All Beers'></input>
          <span className='search-button-wrapper'>
            <button onClick={this.handleButtonToggle} className={`${clicked} small-5 small-offset-1 search-button top-twenty`}>Top Twenty Beers</button>
          </span>
          <span className="search-button-wrapper">
            <button onClick={this.handleSecondButtonToggle} className={`${secondClicked} small-5 search-button`}>Newest Beers</button>
          </span>
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
