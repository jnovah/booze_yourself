class ReviewsController < ApplicationController


def edit
  current_user
  params[:upvote, :review_id]
   review= Review.find(id: params[:review_id])
   review.upvote + params[:upvote]


end

end
