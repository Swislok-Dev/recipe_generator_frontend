import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = ({ recipes }) => {
  const renderRecipes = Object.keys(recipes).map((recipeID) => (
    <div className="recipe-card">
      <Link key={recipeID} to={`/recipes/${recipeID}`}>
        {recipes[recipeID].title}
      </Link>
    </div>
  ))

  // const renderRecipes = (
  //   recipes.map(recipe =>
  //     <Link key={recipe.id} {...recipe} to={`/recipes/${recipe.id}`} >
  //       <li>{recipe.title}</li>
  //     </Link>)
  // )

  return (
    <div>
      {renderRecipes}
    </div>
  )
}

export default RecipeList