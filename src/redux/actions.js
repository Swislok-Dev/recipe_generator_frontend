
const API = 'http://localhost:3000'

export const fetchRecipes = () => {
  return dispatch => {
    fetch(`${API}/recipes`)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'GET_RECIPES', payload: recipes }))

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

export const signup = (user) => {
  return dispatch => fetch(`${API}/users`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    }, body: JSON.stringify(user),
  })
  .then(resp => handleResponse(resp, dispatch))
}

export const login = (user) => {
  return dispatch => fetch(`${API}/sessions`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(user),
  })
  .then(resp => handleResponse(resp, dispatch))
}

export const logout = () => {
  return dispatch => {
    localStorage.clear()
    dispatch({ type: 'LOGOUT'})
  }
}

function handleResponse(response, dispatch) {
  if (response.ok) {
    response.json()
    .then(resp => {
      localStorage.token = resp.token
      dispatch({ type: 'GET_USER', payload: resp.user})
    })
  } else {
    response.json()
    .then(resp => alert(resp.errors))
  }
}




