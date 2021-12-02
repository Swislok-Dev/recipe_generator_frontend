import React from 'react'
import RecipeSearch from './RecipeSearch'
import RecipeList from './RecipeList'
import { Switch, Route } from 'react-router-dom'
// import { connect } from 'react-redux'


// class Recipe extends React.Component {
  const RecipePage = (props) => {
  const  {recipes, match}  = props
  
  const showProps = () => {
    console.log("Recipes from Recipe.props:", (props))
  }

  // const recipeList = (
  //   recipes.map(recipe => 
  //     <li key={recipe.id}>{recipe.title}</li>)
  // )


  return (
    <div>
      <RecipeSearch />
      <h1>Recipes should all be here</h1>
      <RecipeList recipes={recipes} />
      <Switch>
      <Route exact path={match.url} render={() => <h3>Choose a recipe to view more</h3>} />
      <Route path={`${match.url}/:recipeID`} render={(routerProps) => <RecipeList { ...routerProps } recipes={recipes} /> } />
      </Switch>
      <button onClick={showProps}>Show PropS</button>
      <ul>
        
        {/* {recipeList} */}
        

      </ul>
      

    </div>
  )
}

export default RecipePage