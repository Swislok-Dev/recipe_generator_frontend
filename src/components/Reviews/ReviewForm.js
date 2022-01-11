// import { useState } from 'react'
import React from 'react'

import { connect } from 'react-redux'
import { addReview, fetchRecipes } from '../../redux/actions'

// const ReviewForm = ({ recipeId, props}) => {
  class ReviewForm extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        rating: 5,
        content: '',
      }
    }

    componentDidMount() {
      this.props.fetchRecipes()
    }

    componentDidUpdate(prevProps, prevState) {
      if (this.props === prevProps && this.state !== prevState) {
        this.props.fetchRecipes()
      }
    }

    componentWillUnmount() {
      this.props.fetchRecipes()
    }

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onHandleSubmit = e => {
    e.preventDefault()
    this.props.addReview(this.state, this.props.recipe.id)
    this.setState({
      rating: 5,
      content: '',
    })
  }
  // const [rating, setRating] = useState(5)
  // const [content, setContent] = useState('')

  // const onHandleSubmit = e => {
  //   e.preventDefault()
  //   const newReview = { rating, content }
  //   addReview(newReview, recipeId)
  //   setRating(5)
  //   setContent('')
  // }

  render() {
    return (
    <form className='review-container' onSubmit={this.onHandleSubmit}>
      <h3>Add a review for this recipe</h3>
      <label>
        Rating:
        <input type='number input' name='rating' onChange={this.onHandleChange} value={this.state.rating} />
      </label>

      <label>
        Content:
        <input type='text input' name='content' onChange={this.onHandleChange} value={this.state.content} />
      </label>
      <input type='submit' value='Submit Review' />
    </form>
  )

}
  }

const mapStateToProps = state => ({ recipes: state.recipes })

export default connect(mapStateToProps, { addReview, fetchRecipes})(ReviewForm)