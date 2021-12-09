import React from 'react'
import { useHistory } from 'react-router-dom'

const RecipeShow = ( props ) => {
  const { match, recipes  } = props
  console.log("RecipeShow props:", props)

  const history = useHistory();
  const handleClick = () => {
    history.push("/recipes")
  }
  const recipe = recipes.filter(recipe => recipe.id === Number(match.params.id))[0]
  console.log(recipe)
  return (
    

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
  )
}

export default RecipeShow