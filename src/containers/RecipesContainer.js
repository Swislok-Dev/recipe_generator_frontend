import React from 'react'
import { connect } from 'react-redux';
import { fetchRecipes  } from '../redux/recipesActions'
import RecipePage from '../components/Recipes/RecipePage'
import CreateRecipe from '../components/Recipes/CreateRecipe'
import { Switch, Route } from 'react-router-dom'


class RecipesContainer extends React.Component {

  componentDidMount() {
    this.props.fetchRecipes()
  }

  handleClick = () => {
    console.log(this.props)
  }
  
    // console.log("RecipesContainer props:", this.props)
  render(){
    return (
      <div>
        {/* <h2>Recipes Container</h2> */}
        <Switch>
          <Route path="/recipes/new" component={ CreateRecipe } />
          <Route path="/recipes/:id" />
          <Route path="/recipes" render={(routerProps) => <RecipePage { ...routerProps } recipes={this.props.recipes} />} />
        </Switch>
        {/* <RecipeSearch /> */}

        {/* <Recipe recipes={this.props.recipes} /> */}
        {/* {this.recipes.map((recipe) => <Recipe key={recipe.id} {...recipe} />)} */}
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return ({ recipes: state.recipes })
}

// const mapDispatchToProps = dispatch => {
//   return {
//     addIngredient: formData => dispatch({ type: 'ADD_INGREDIENT', payload: formData})
//   }
// }

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)