import React from 'react'

const ReviewTile = props => {
  return(
    <div>
      <div className="row">
        <div className="small-1 column">
          <img src={`${props.avatar}`}></img>
        </div>
        <div className="small-3 column">{props.username}</div>
        <div className="small-6 column"></div>
        <div className="rating small-2 column">Rating: {props.rating}</div>
      </div>
      <div className="row">
        <div className="description">Description: {props.description}</div>
      </div>
    </div>
  )
}

export default ReviewTile
