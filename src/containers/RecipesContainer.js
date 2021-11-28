import React from 'react'
import { connect } from 'react-redux';
import RecipeSearch from '../components/RecipeSearch'
import { fetchRecipes  } from '../actions/recipesActions'


class RecipesContainer extends  React.Component {
  state = {
    loading: false,
    recipes: [],
  }

  componentDidMount() {
    // this.fetchRecipes()
    this.props.fetchRecipes()
    
  }

  

  render() {
    console.log(this.props.state)
    return (
      <div>
        <h2>Recipes Container</h2>
        <RecipeSearch />
        

      </div>
    )
  }
}

const mapStateToProps = ({ recipes }) => ({ recipes })

// const mapDispatchToProps = dispatch => {
//   return {
//     addIngredient: formData => dispatch({ type: 'ADD_INGREDIENT', payload: formData})
//   }
// }

export default connect(mapStateToProps, { fetchRecipes })(RecipesContainer)