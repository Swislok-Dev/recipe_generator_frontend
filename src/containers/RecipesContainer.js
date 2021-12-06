import React from 'react'
import { connect } from 'react-redux';
import { fetchRecipes  } from '../redux/recipesActions'
import RecipePage from '../components/Recipes/RecipePage'
import CreateRecipe from '../components/Recipes/CreateRecipe'
import { Switch, Route } from 'react-router-dom'
import RecipeShow from '../components/Recipes/RecipeShow'


class RecipesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  render(){
    return (
      <div>
        <Switch>
          <Route path="/recipes/new" component={ CreateRecipe } />
          <Route path="/recipes/:id" render={(routerProps) => <RecipeShow {...routerProps} recipes={this.props.recipes} /> }/>
          <Route path="/recipes" render={(routerProps) => <RecipePage { ...routerProps } recipes={this.props.recipes} />} />
        </Switch>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({ recipes: state.recipes })
}

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)