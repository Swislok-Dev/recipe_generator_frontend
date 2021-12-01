import React from 'react'
import { connect } from 'react-redux'

class RecipeSearch extends React.Component {

  state = {
    text: "",
  }

  handleChange = e => {
    this.setState({
      text: e.target.value
    })
  }

  handleSubmit = e => {
    e.preventDefault();
    console.log("Searching for", this.state)
    this.props.addIngredient(this.state)
    this.setState({
      text: "",
    })
  }

  render() {
    return (
      <div>
        <h3>Recipes Search</h3>
        <form onSubmit={this.handleSubmit}>
          <input
          type="text"
          placeholder="add ingredients here"
          value={this.state.text}
          onChange={this.handleChange}
          />
          <input type="submit" />
        </form>

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
    addIngredient: formData => dispatch({ type: 'ADD_INGREDIENT', payload: formData })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(RecipeSearch)