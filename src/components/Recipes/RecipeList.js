import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = props => {

  const { recipes } = props

  const renderRecipes = (
    recipes.map(recipeID =>
      <Link key={recipeID.id} className="card" recipe={recipeID} to={`/recipes/${recipeID.id}`}>
        <p>{recipeID.title}</p>
      </Link> 
    )
  )

  return (
    <div className="display-recipes">
      <h2>Choose a recipe below</h2>
      <div className="cards">
        {renderRecipes}
        </div>
    </div>
  )
}

export default RecipeList