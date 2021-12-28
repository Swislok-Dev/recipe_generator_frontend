import React from 'react'
import { connect } from 'react-redux';
import { fetchRecipes  } from '../redux/recipesActions'
import CreateRecipe from '../components/Recipes/CreateRecipe'
import { Switch, Route } from 'react-router-dom'
import RecipeShow from '../components/Recipes/RecipeShow'
import RecipeList from '../components/Recipes/RecipeList'


class RecipesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
    console.log("fetchRecipes() called")
  }
  
  render(){
    return (
      <div className="centered">
        <Switch>
          <Route path="/recipes/new" component={ CreateRecipe } />
          <Route path="/recipes/:id" render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes} /> }/>
          <Route path="/recipes" render={(routerProps) => <RecipeList { ...routerProps } recipes={this.props.recipes} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({ recipes: state.recipes })
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)