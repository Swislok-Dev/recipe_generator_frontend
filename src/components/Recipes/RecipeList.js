import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = props => {
  console.log("RecipeList() rendered", props)
  const { recipes } = props

  const renderRecipes = (
    recipes.map(recipe =>
      
        <Link key={recipe.id} className="card" to={`/recipes/${recipe.id}`} >
          <p>{recipe.title}</p>
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