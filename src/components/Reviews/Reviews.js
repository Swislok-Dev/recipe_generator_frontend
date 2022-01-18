import { connect } from 'react-redux'
import { useEffect } from 'react'
import { fetchRecipes } from '../../redux/actions'
import Review from '../Reviews/Review'

const Reviews = (props) => {
  const reviews = props.reviews

  useEffect(fetchRecipes, [fetchRecipes])

  return (
  <div className='reviews'>
    <h3>Reviews</h3>
    {reviews && reviews.map(review => <Review {...review} key={review.id} />)}
  </div>
  )
}


export default connect()(Reviews)