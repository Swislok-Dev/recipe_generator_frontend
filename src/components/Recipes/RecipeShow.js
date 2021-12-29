import React from 'react'
import { useHistory } from 'react-router-dom'

const RecipeShow = ( props ) => {
  const {match, recipes } = props
  console.log("RecipeShow props:", props)


  const history = useHistory();

  const handleClick = () => {
    history.push("/recipes")
  }
  const recipe = recipes.filter(recipe => recipe.id === Number(match.params.id))[0]

  console.log("RecipeShow >> const recipe", recipe ? recipe : undefined)
  
  return recipe ? (
    
    <div className="recipe">
      <h2>
        {`${recipe.title}`}<br />
      </h2>

      <h3>
        {`${recipe.ingredients}`}<br />
      </h3>

      <h4>
        {`${recipe.instructions}`}<br />
      </h4>
      
      <button onClick={handleClick}>Go Back</button>

    </div>
  ) : (
    <div className="recipe">
      <h2>This item does not exist</h2>
    </div>
  )
}

export default RecipeShow