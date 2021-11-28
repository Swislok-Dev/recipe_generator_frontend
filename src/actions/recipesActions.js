

const API = 'http://localhost:3000'

export const getRecipes = recipes => {
  return {
    type: 'GET_RECIPES',
    recipes
  }
}

export function fetchRecipes() {
  return dispatch => {
    dispatch({ type: "ADD_RECIPES" })
    return fetch (`${API}/recipes`)
    .then(resp => resp.json())
    .then((recipes) => dispatch({ type: 'GET_RECIPES', recipes}))
  }
}