

const API = 'http://localhost:3000'



// export const fetchRecipes = () => {
//   return dispatch => fetch(`${API}/recipes`)
//     .then(resp => resp.json())
//     .then(recipes => dispatch({
//       type: "GET_RECIPES",
//       payload: recipes.map(recipe => ({recipe}))
//     }))
//     .catch((error) => console.log("Error caught during fetch:", error))
  
// }

export const fetchRecipes = () => {
  return dispatch => {
    fetch(`${API}/recipes`)
    .then(resp => resp.json())
    .then(recipes => dispatch({ type: 'GET_RECIPES', recipes: recipes}))
    // .then(recipes => dispatch({ type: 'GET_RECIPES', payload: recipes.map(recipe => ({...recipe}))}))
  }
}