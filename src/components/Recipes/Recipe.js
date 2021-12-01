import React from 'react'
// import { connect } from 'react-redux'

class Recipe extends React.Component {
  // const Recipe = (props) => {
  // console.log("Recipe props:", props.recipes)
  
  render() {
    // const recipeList = () => {
    //   return props.recipes.map((recipe) => <li key={recipe.id}  >{recipe.title}</li>)
    // }

    const recipeList = () => {
      return(
        this.props.recipes.map((recipe) => 
          <div className="recipe-card">
            <li key={recipe.id} {...recipe}>{recipe.title}</li>
          </div>
        )
      ) 
    }

    const showProps = () => {
      console.log("Recipes from Recipe.props:", this.props.recipes)
    }
    return (
      <div>
        <h1>Recipes should all be here</h1>
        <button onClick={showProps}>Show propS</button>
        {/* {recipeList()} */}
        {recipeList}
        

      </div>
    )
  }
}


// const mapStateToProps = state => {
//   return { recipes: state.recipes }
// }

export default Recipe