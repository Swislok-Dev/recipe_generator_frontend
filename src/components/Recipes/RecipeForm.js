import React, { useState,  } from 'react'
import { useHistory } from 'react-router-dom'
import { connect, useDispatch } from 'react-redux'
import { addRecipe } from '../../redux/actions'


const RecipeForm = () => {

  const dispatch = useDispatch();
  const history = useHistory()

  const [inputs, setInputs] = useState({})

  const handleChange = (e) => {
    setInputs(values => ({...values, [e.target.name]: e.target.value,}))
    e.target.value !== "" ? e.target.classList.add("has-val") : e.target.classList.remove("has-val")

  }

  const { name, ingredients, instructions } = inputs

  const handleSubmit = (e) => {
    e.preventDefault()
    dispatch(addRecipe(inputs))
    history.push('/recipes/')
  }


    return (
      <div className="background">
        <div className="container">
          <div className="wrap-container">
            <form className="form validate-form" onSubmit={handleSubmit}>
              <span className="form-title">Create Recipe Page</span>

              <div className="wrap-input validate-input " data-validate="Title is required">
                <input className="input"  type="text" required name="name"  value={name} onChange={handleChange} />
                <span className="focus-input" data-placeholder="RECIPE NAME"></span>
              </div>

              <div className="wrap-input validate-input " data-validate="Ingredients are required">
                <input className="input" type="text" required name="ingredients" value={ingredients} onChange={handleChange} />

                <span className="focus-input " data-placeholder="INGREDIENTS"></span>
              </div>

              <div className="wrap-input validate-input " data-validate="Instructions are required">
                <textarea className="input" type="text" required name="instructions" value={instructions} onChange={handleChange} />

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


const mapStateToProps = state => ({ 
  recipes: state.recipes ,

})


export default connect(mapStateToProps, { addRecipe })(RecipeForm)