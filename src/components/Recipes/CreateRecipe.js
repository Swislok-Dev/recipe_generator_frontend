import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../../redux/recipesActions'

class CreateRecipe extends React.Component {

  state = {
    title: "",
    ingredients: "",
    instructions: "",
  }

  onHandleChange = e => {
    
    this.setState({
      [e.target.name]: e.target.value
    })
  }
  
  onHandleSubmit = (e) => {
    e.preventDefault();
    this.props.addRecipe(this.state)
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
  
  
  render() {
    return (
      <div className="background">
        <div>
          {/* <button onClick={this.showState}>Show State</button>
          <button onClick={this.showProps}>Show Props</button><br /> */}
        </div><br />

        <div className="container">
          <div className="wrap-container">
            <form className="form-title validate-form" onSubmit={this.onHandleSubmit}>
              <span className="form-title">Create Recipe Page</span>

              <div className="wrap-input validate-input " data-validate="Title is required">
                <label htmlFor="title">Recipe Name</label>
                <input className="input " type="text" required name="title"  value={this.state.title} onChange={this.onHandleChange} />
                <span className="focus-input" data-placeholder="RECIPE TITLE"></span>
              </div>

              <div className="wrap-input validate-input " data-validate="Ingredients are required">
                <label htmlFor="ingredients">Ingredients</label>
                <input className="input" type="text" required name="ingredients" value={this.state.ingredients} onChange={this.onHandleChange} />
                <span className="focus-input " data-placeholder="INGREDIENTS"></span>
              </div>

              <div className="wrap-input validate-input " data-validate="Instructions are required">
                <label htmlFor="instructions">Instructions</label>
                <textarea className="input" type="text" required name="instructions" value={this.state.instructions} onChange={this.onHandleChange} />
                <span className="focus-input " data-placeholder="INSTRUCTIONS"></span>
              </div>
              <div className="container-form-btn">
                <div className="wrap-form-btn" type="submit">
                  <div className="form-bgbtn">
                    <input className="form-btn" type="submit" value="Submit your recipe" />
                  </div>
                </div>
              </div>
            </form>
          </div>

        </div>

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