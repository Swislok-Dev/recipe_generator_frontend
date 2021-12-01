import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../../redux/recipesActions'

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

  
  onHandleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onHandleSubmit = (e) => {
    e.preventDefault();
    // const { title, ingredients, instructions } = this.props
    this.props.addRecipe(this.state)
    console.log("this.state", this.state)
    console.log("this.props.state:", this.props.recipes)
    this.setState({
      title: "",
      ingredients: "",
      instructions: "",
    })
  }

  showProps = () => {
    console.log("Current allowed props", this.props)
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
        <div>
          <button onClick={this.showState}>Show State</button>
          <button onClick={this.showProps}>Show Props</button><br />
        </div><br />

        <form className="recipe-form" onSubmit={this.onHandleSubmit}>
          

          <label htmlFor="title">Recipe Name</label>
          <input type="text" required name="title" placeholder="Name your recipe" value={this.state.title} onChange={this.onHandleChange} />

          <label htmlFor="ingredients">Ingredients</label>
          <input
          type="text"
          required
          name="ingredients"
          placeholder="Ingredients"
          value={this.state.ingredients}
          onChange={this.onHandleChange}
          />
          
          <label htmlFor="instructions">Instructions</label>
          <textarea
          type="text"
          required
          name="instructions"
          placeholder="Instructions"
          value={this.state.instructions}
          onChange={this.onHandleChange}
          />
          <input type="submit" />
          </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    recipes: state.recipes
  }
}



export default connect(mapStateToProps, { addRecipe })(CreateRecipe)