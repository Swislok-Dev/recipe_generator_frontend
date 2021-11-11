import React from 'react'
import { connect } from 'react-redux';
import RecipeSearch from '../components/RecipeSearch'

class RecipesContainer extends React.Component {
  render() {
    return (
      <div>
        <h2>Recipes Container</h2>
        <RecipeSearch />
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    ingredients: state.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: formData => dispatch({ type: 'ADD_INGREDIENT', payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipesContainer)