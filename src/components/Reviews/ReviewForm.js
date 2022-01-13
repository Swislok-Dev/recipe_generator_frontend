// import { useState } from 'react'
import React, { useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { addReview, fetchRecipes } from '../../redux/actions'

const ReviewForm = ({ recipe, fetchRecipes, addReview, recipes, props}) => {
  // class ReviewForm extends React.Component {
    //   constructor(props) {
      //     super(props)
      //     this.state = {
        //       rating: 5,
        //       content: '',
        //     }
        //   }

  const [rating, setRating] = useState(5)
  const [content, setContent] = useState('')
  
  const onHandleSubmit = e => {
    e.preventDefault()
    const newReview = { rating, content }
    addReview(newReview, recipe.id)
    setRating(5)
    setContent('')
  }

  useEffect(fetchRecipes, [fetchRecipes, rating, content, ])


  //   componentDidMount() {
  //     this.props.fetchRecipes()
  //   }

  //   componentDidUpdate(prevProps, prevState) {
  //     if (this.props === prevProps && this.state !== prevState) {
  //       this.props.fetchRecipes()
  //     }
  //   }

  //   componentWillUnmount() {
  //     this.props.fetchRecipes()
  //   }

  // onHandleChange = e => {
  //   this.setState({
  //     [e.target.name]: e.target.value
  //   })
  // }

  // onHandleSubmit = e => {
  //   e.preventDefault()
  //   this.props.addReview(this.state, this.props.recipe.id)
  //   this.setState({
  //     rating: 5,
  //     content: '',
  //   })
  // }


  // render() {
    return (
    <form className='review-container' onSubmit={onHandleSubmit}>
      <h3>Add a review for this recipe</h3>
      <label>
        Rating:
        <input type='number input' name='rating' onChange={(e) => setRating(e.target.value)} value={rating} />
      </label>

      <label>
        Content:
        <input type='text input' name='content' onChange={(e) => setContent(e.target.value)} value={content} />
      </label>
      <input type='submit' value='Submit Review' />
    </form>
  )

}
  // }

const mapStateToProps = state => ({ recipes: state.recipes })

export default connect(mapStateToProps, { addReview, fetchRecipes})(ReviewForm)