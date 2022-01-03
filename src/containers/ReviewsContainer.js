import React from 'react'
import ReviewForm from '../components/Reviews/ReviewForm'
import Reviews from '../components/Reviews/Reviews'


class ReviewsContainer extends React.Component {
  

  render() {
    // console.log("fetchRecipes", fetchRecipes())
    return (

      <div>
        <ReviewForm  recipe={this.props.recipe} />
        <Reviews reviews={this.props.recipe && this.props.recipe.reviews} />
      </div>
    )
  }
}

export default ReviewsContainer