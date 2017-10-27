import React from 'react'

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <div className="grid-x">
        <div className="small-2 cell">
          <img className="review-profile-pic" src={`${props.avatar}`}></img>
        </div>
        <div className="rating review-tile-user-info small-4 cell"><strong>{props.username}</strong><br/>Rating: {props.rating}</div>
        <div className="small-6 cell"></div>
      </div>
      <div className="grid-x">
        <div className="review-description">Description: {props.description}</div>
      </div>
    </div>
  )
}

export default ReviewTile
