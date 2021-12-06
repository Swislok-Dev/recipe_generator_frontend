import React from 'react'
import { useHistory } from 'react-router-dom'

const RecipeShow = ( props ) => {
  const { match, recipes  } = props
  console.log("RecipeShow props:", props)

  const history = useHistory();
  const handleClick = () => {
    history.push("/recipes")
  }
  
  return (
    <div className="recipe">
      <h3>{recipes[match.params.id].title}</h3><br />
      <button onClick={handleClick}>Go Back</button>

    </div>
  )
}

export default RecipeShow