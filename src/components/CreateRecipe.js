import React from 'react'
import { connect } from 'react-redux'

class CreateRecipe extends React.Component {

  state = {
    title: "",
    ingredients: "",
    instructions: "",
  }

  // addIngredient = () => {
  //   let { ingredients, input } = this.state;
  //   ingredients.push(input);
  // }

  // saveIngredient = (e) => {

  //   this.setState({ [e.target.name]: e.target.value })
  // }

  showProps = () => {
    console.log("Current allowed props", this.props)
  }

  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    // const { title, ingredients, instructions } = this.props
    console.log("Submitted state", this.state)
    console.log("this.props.state:", this.props.state)
    this.setState({
      title: "",
      ingredients: "",
      instructions: "",
    })
  }

  showState = () => {
    console.log("Button clicked to show state:", this.state)
  }

  addIngredientButton = document.getElementById("addIngredientBtn")

  // ingredientsList = () => {
  //   this.props.ingredients.map((items, idx) => {
  //     return <li key={idx}>{items}</li>
  //   })
  // }

  render() {
    return (
      <div >
        <h1>Create Recipe Page</h1>
        <form className="recipe-form" onSubmit={this.onHandleSubmit}>
          <label htmlFor="title">Recipe Name</label>
          <input type="text" name="title" placeholder="Name your recipe" value={this.state.title} onChange={this.onHandleChange} />

          <label htmlFor="ingredients">Ingredients</label>
          <input
          type="text"
          name="ingredients"
          placeholder="ingredients"
          value={this.state.ingredients}
          onChange={this.onHandleChange}
          // onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />
          {/* <button id="addIngredientBtn" onClick={this.addIngredient}>Add Ingredient</button> */}
          
          <label htmlFor="instructions">Instructions</label>
          <textarea
          type="text"
          name="instructions"
          placeholder="instructions"
          value={this.state.instructions}
          onChange={this.onHandleChange}
          />
          <input type="submit" />
          </form>
          <button onClick={this.showState}>Show State</button>
          <button onClick={this.showProps}>Show Props</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps)(CreateRecipe)