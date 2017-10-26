import React from 'react'

const ReviewTile = props => {
  return(
    <div className="review-tile">
      <div className="grid-x">
        <div className="small-1 cell">
          <img src={`${props.avatar}`}></img>
        </div>
        <div className="small-3 cell">{props.username}</div>
        <div className="small-6 cell"></div>
        <div className="rating small-2 cell">Rating: {props.rating}</div>
      </div>
      <div className="grid-x">
        <div className="description">Description: {props.description}</div>
      </div>
    </div>
  )
}

export default ReviewTile
