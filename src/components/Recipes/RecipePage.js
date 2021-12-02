import React from 'react'
import RecipeSearch from './RecipeSearch'
// import { connect } from 'react-redux'

// const recipesList = this.props.recipes

// class Recipe extends React.Component {
  const RecipePage = (props) => {
  const  {recipes, match}  = props
  
  const showProps = () => {
    console.log("Recipes from Recipe.props:", (props))
  }

  const recipeList = (
    recipes.map(recipe => 
      <li key={recipe.id}>{recipe.title}</li>)
  )


  return (
    <div>
      <RecipeSearch />
      <h1>Recipes should all be here</h1>
      <button onClick={showProps}>Show PropS</button>
      <ul>
        
        {recipeList}
        

      </ul>
      

    </div>
  )
}

export default RecipePage