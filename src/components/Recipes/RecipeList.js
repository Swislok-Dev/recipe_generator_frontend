import React from 'react'
import { Link } from 'react-router-dom'

const RecipeList = props => {
  console.log("RecipeList() rendered", props)
  const { recipes } = props

  const renderRecipes = (
    recipes.map(recipe =>
      <div className="cards">
        <Link key={recipe.id} className="card" to={`/recipes/${recipe.id}`} >
          <p className="card-item">{recipe.title}</p><br/>
        </Link>
      </div>)
  )

  return (
    <div className="centered">
      <h2>Choose a recipe below</h2>
      {renderRecipes}
    </div>
  )
}

export default RecipeList