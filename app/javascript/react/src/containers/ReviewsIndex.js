import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ReviewTile from '../Components/ReviewTile'

const ReviewsIndex = props => {
  let reviews = props.reviews.map(review => {
    return(
      <ReviewTile
        key={props.beerId}
        // avatar={props.avatar}
        // username={props.username}
        description={review.description}
        rating={review.rating}
      />
    )
  })
  return(
    <div>
      {reviews}
    </div>
  )
}

export default ReviewsIndex
