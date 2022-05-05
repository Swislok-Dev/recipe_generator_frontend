import { useState } from 'react'

import { Link } from 'react-router-dom'

const RecipeList = props => {

  const { recipes } = props
  const [filterRecipes, setFilterRecipes] = useState([]) 


  const searchRecipes = (event) => {
    const search = event.target.value.toLowerCase()
    console.log("Search:", search)
    const filterRecipes = recipes.filter(recipe => {
      const foundRecipes = recipe.name.toLowerCase().includes(search)
      return foundRecipes
    })
    setFilterRecipes(filterRecipes)

  }
  

  const renderRecipes = () => {
    const showRecipes = (filterRecipes.length === 0) ? recipes : filterRecipes
    return  showRecipes.map(recipe =>
      <Link key={recipe.id} className="card"  to={`/recipes/${recipe.id}`}>
        <p>{recipe.name}</p>
      </Link> 
    )
  }

  return (
    <div className="display-recipes">
      <h2>Choose a recipe below</h2>
      <input type="text" placeholder="search" onChange={searchRecipes}/>
      <div className="cards">
        {renderRecipes()}
        </div>
    </div>
  )
}

export default RecipeList