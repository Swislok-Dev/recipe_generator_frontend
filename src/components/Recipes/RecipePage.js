import React from 'react'
import RecipeSearch from './RecipeSearch'
import RecipeList from './RecipeList'
import RecipeShow from './RecipeShow'
import { Route } from 'react-router-dom'


  const RecipePage = ({ match, recipes}) => {

  return (
    <div>
      <RecipeSearch />
      <h1>Recipes should all be here</h1>
      <Route path={match.url} render={() => <h3>Choose a recipe to view more</h3>} />
      <Route path={`${match.url}/:id`} render={(routerProps) => <RecipeShow { ...routerProps } recipes={recipes} /> } />
      <RecipeList recipes={recipes} />
    </div>
  )

}

export default RecipePage