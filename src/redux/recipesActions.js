

const API = 'http://localhost:3000'



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

export const fetchRecipes = () => {
  return dispatch => {
    fetch(`${API}/recipes`)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'GET_RECIPES', recipes: recipes}))
    // .then(recipes => dispatch({ type: 'GET_RECIPES', payload: recipes.map(recipe => ({...recipe}))}))
  }
}