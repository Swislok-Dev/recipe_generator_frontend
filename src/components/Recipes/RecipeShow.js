import React from 'react'
import { useHistory } from 'react-router-dom'
// import ReviewForm from '../Reviews/ReviewForm'
// import Reviews from '../Reviews/Reviews'
import { getRecipe } from '../../redux/actions' 
import { connect } from 'react-redux'
import ReviewsContainer from '../../containers/ReviewsContainer'



const RecipeShow = ( props ) => {
  const {match, recipes } = props

  
  

  const history = useHistory();

  const handleClick = () => {
    history.push("/recipes")
  }


  const recipe = recipes.filter(recipe => recipe.id === Number(match.params.id))[0]
  // const recipe =  getRecipe(match.params.id)

  const ingredientList = () => {
    return (recipe["ingredients"].split(", ").map(item =>
      <li>{item}</li>))
  }

  const instructionList = () => {
    return (recipe['instructions'].split('.').map(item =>
      <li>{item}</li>)
    )
  }

  return (
    <>
      <div className='container'>
        <div className='wrap-container'>
          <div className='recipe'>
            { recipe ? (
              <>
                <h2>Recipe Name</h2>
                <p>{`${recipe.title}`}</p>
                
                <h3>Ingredients</h3>
                {ingredientList()}

                <h3>Instructions</h3>
                {instructionList()}
              </>
            ) : (<h2>This item does not exist</h2>)}<br />
            <button onClick={handleClick}>Go Back</button>
          </div>
        </div>
      </div>
      <ReviewsContainer recipe={recipe}/>
      {/* <ReviewForm recipe={recipe}/>
      <Reviews recipe={recipe} /> */}
              
            {/* {reviews()}         */}
    </>
  )

}

const mapStateToProps = state => {
  return { ...state.currentRecipe }
}



export default connect(mapStateToProps, {getRecipe})(RecipeShow)