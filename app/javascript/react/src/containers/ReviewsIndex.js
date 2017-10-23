import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ReviewTile from '../Components/ReviewTile'

const ReviewsIndex = props => {
  let reviews = props.reviews.map(review => {
    <ReviewTile
      key={`review-key${props.id}`}
      avatar={props.avatar}
      username={props.username}
      description={props.description}
      rating={props.rating}
    />
  })


  return(
    <div>
      {reviews}
    </div>
  )
}

export default ReviewsIndex
