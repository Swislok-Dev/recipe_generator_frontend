
const Review = ({rating, content}) => {
  return <div className='review-container'>
    <p>Rating: {rating}</p>
    <p>Review: {content}</p>
  </div>

}

export default Review