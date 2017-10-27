import React from 'react'

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <div className="row">
        <div className="small-2 column">
          <img className="review-profile-pic" src={`${props.avatar}`}></img>
        </div>
        <div className="rating review-tile-user-info small-4 column"><strong>{props.username}</strong><br/>Rating: {props.rating}</div>
        <div className="small-6 column"></div>
      </div>
      <div className="grid-x">
        <div className="review-description">Description: {props.description}</div>
      </div>
    </div>
  )
}

export default ReviewTile
