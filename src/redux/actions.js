
const API = 'http://localhost:3000'

export const fetchRecipes = () => {
  return dispatch => {
    fetch(`${API}/recipes`)
    .then(resp => resp.json())
    .then(recipes => {
      dispatch({ type: 'GET_RECIPES', payload: recipes })
    })
  }
}

export const getRecipe = (id) => {
  return dispatch => fetch(`${API}/recipes/${id}`)
  .then(resp => resp.json())
  .then(recipe => dispatch({ type: 'GET_RECIPE', payload: recipe }))
}

export const addRecipe =(recipe) => {
  return dispatch => {
    fetch(`${API}/recipes`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(recipe)
    })
    .then(resp => resp.json())
    .then(recipe => {
      dispatch({ type: 'ADD_RECIPE', payload: recipe })
    })
  }
}

export const addReview = (review, recipeId) => {
  return dispatch => fetch(`${API}/recipes/${recipeId}/reviews`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(review)
  })
  .then(resp => {
    resp.json().then(review => dispatch({ type: 'ADD_REVIEW', payload: review }))
  })
}






