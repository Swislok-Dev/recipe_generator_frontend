
export function manageRecipes(state = {}, action) {
  switch (action.type) {
    
    case 'GET_RECIPES':
      return { ...state, recipes: action.recipes} 

    case 'ADD_RECIPE':
      return { ...state, recipes: action.payload}
      
    default:
      return state;
  }
}