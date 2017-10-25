import React from 'react'
import { NavLink, Route, Switch } from 'react-router-dom'
import ReviewTile from '../Components/ReviewTile'

const ReviewsIndex = props => {
  let reviews = props.reviews.map(review => {
    if (review.avatar.url === null ) {
      review.avatar.url = ''
    }
    return(
      <ReviewTile
        key={review.beer_id}
        avatar={review.avatar.url}
        username={review.username}
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
