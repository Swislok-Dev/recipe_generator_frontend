import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = props => {
  console.log("RecipeList() rendered", props)
  const { recipes } = props

  const renderRecipes = (
    recipes.map(recipe =>
      <Link key={recipe.id}  to={`/recipes/${recipe.id}`} >
        <li>{recipe.title}</li>
      </Link>)
  )

  return (
    <div>
      {renderRecipes}
    </div>
  )
}

export default RecipeList