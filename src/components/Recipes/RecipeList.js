import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({ recipes }) => {
  const renderRecipes = Object.keys(recipes).map((recipeID) => (
    <li><Link key={recipeID} to={`/recipes/${recipeID}`}>
      {recipes[recipeID].title}
    </Link></li>
  ))

  // const recipeList = (
  //   recipes.map(recipe => 
  //     <li key={recipe.id}>{recipe.title}</li>)
  // )

  console.log("RecipeList props", recipes)
  return (
    <div>
      {renderRecipes}
      {/* {recipeList} */}
    </div>
  )
}

export default RecipeList