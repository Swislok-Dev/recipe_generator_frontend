import React from 'react'
import { connect } from 'react-redux'

class CreateRecipe extends React.Component {

  state = {
    ingredients: [],
    instructions: "",
  }

  // addIngredient = () => {
  //   let { ingredients, input } = this.state;
  //   ingredients.push(input);
  // }

  // saveIngredient = (e) => {
  //   let input = e.target.name
  //   this.setState({ input: e.target.value })
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
    console.log("Submitted state", this.state)
    this.props.addIngredient(this.state.ingredients)
    this.setState({
      ingredients: [],
      instructions: "",
    })
  }

  showState = () => {
    console.log("Button clicked to show state:", this.state)
  }

  ingredientsList = () => {
    this.state.ingredients.map((items, idx) => {
      return <li key={idx}>{items}</li>
    })
  }
  render() {
    return (
      <div>
        <h1>Create Recipe Page</h1>
        <form onSubmit={this.onHandleSubmit}>
          <input
          type="text"
          name="ingredients"
          placeholder="ingredients"
          value={this.state.ingredients}
          onChange={this.onHandleChange}
          onKeyPress={(e) => { e.key === 'Enter' && e.preventDefault(); }}
          />
          <button onClick={this.addIngredient}>Add Ingredient</button>
          {/* <ol>
            {this.ingredientsList}
          </ol> */}
          <input
          type="textArea"
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
    ingredients: state.ingredients
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addIngredient: formData => dispatch({ type: 'ADD_INGREDIENT', payload: formData})
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateRecipe)