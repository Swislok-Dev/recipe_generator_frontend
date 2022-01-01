import React from 'react'
import { connect } from 'react-redux'
import { addRecipe } from '../../redux/actions'

class CreateRecipe extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      ingredients: "",
      instructions: "",
    }
  }

  onHandleChange = e => {    
    this.setState({
      [e.target.name]: e.target.value,
    })

    e.target.value !== "" ? e.target.classList.add("has-val") : e.target.classList.remove("has-val")
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
  
  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="wrap-container">
            <form className="form validate-form" onSubmit={this.onHandleSubmit}>
              <span className="form-title">Create Recipe Page</span>

              <div className="wrap-input validate-input " data-validate="Title is required">
                <input className="input"  type="text" required name="title"  value={this.state.title} onChange={this.onHandleChange} />
                <span className="focus-input" data-placeholder="RECIPE TITLE"></span>
              </div>

              <div className="wrap-input validate-input " data-validate="Ingredients are required">
                <input className="input" type="text" required name="ingredients" value={this.state.ingredients} onChange={this.onHandleChange} />
                <span className="focus-input " data-placeholder="INGREDIENTS"></span>
              </div>

              <div className="wrap-input validate-input " data-validate="Instructions are required">
                <textarea className="input" type="text" required name="instructions" value={this.state.instructions} onChange={this.onHandleChange} />
                <span className="focus-input " data-placeholder="INSTRUCTIONS"></span>
              </div>
              <div className="container-form-btn">
                <div className="wrap-form-btn" type="submit">
                    <input className="form-btn" type="submit" value="Submit your recipe" />
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