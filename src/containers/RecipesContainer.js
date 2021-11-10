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

export default connect(mapStateToProps)(RecipesContainer)