import React, { Component } from 'react'
import { NavLink, Switch, Route, Redirect } from 'react-router-dom'
import ReviewsIndex from './ReviewsIndex'
import ReviewForm from './ReviewForm'

class BeerShow extends Component {
  constructor(props){
    super(props)
    this.state = {
      beerName: "Bud Light",
      brewery: "Busch",
      rating: 2,
      id: 1,
      style: "lager",
      ABV: "4.5%",
      availability: "year round",
      breweryLink: "http://www.budlight.com/",
      reviews: []
    }
    this.addNewReview = this.addNewReview.bind(this)
  }

  addNewReview(formPayLoad) {
    this.setState({ reviews: [...this.state.reviews, formPayLoad] });
    <Redirect to={`/beers/${this.state.id}`} />
    debugger
  }

  render(){
    return(
      <div className="grid-x">
        <div className="large-12 medium-10 small-6 cell">
          <h1 className="beer-header">
            <div id="beer-name">{this.state.beerName}</div>
            <div id="brewery"> | {this.state.brewery}</div>
            <div id="rating">Rating: {this.state.rating}</div>
          </h1>
            <div className="horizontal-line"></div>
        </div>
        <div className="cell">
          <div className="beer-information"><h3 className="beer-info">Beer Info</h3>
            <div>
              <div className="brewed-by">Brewed By:</div>
              <a target="_blank" href={this.state.breweryLink}>{this.state.brewery}</a>
            </div>
              <div className="ABV">ABV:</div>
              <div className="ABV%">{this.state.ABV}</div>
              <div className="availability">Availability:</div>
              <div className="availability-text">{this.state.availability}</div>
              <div className="style">Style:</div>
              <div className="style-text"> {this.state.style}</div>
          </div>
          <div className="horizontal-line"></div>
        </div>
        <div className="review-box"><span className="review-box-text">Reviews and Ratings</span>
        <Switch>
          <Route path={`/beers/${this.state.id}/new-review`} render={props => (<ReviewForm addNewReview={this.addNewReview} {...props} />)} />
          <NavLink to={`/beers/${this.state.id}/new-review`} class="button">Add Review</NavLink>
        </Switch>
        <ReviewsIndex reviews={this.state.reviews} beerId={this.state.id}/>
        </div>
      </div>
    )
  }
}
export default BeerShow
