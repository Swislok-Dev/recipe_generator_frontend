
export function recipesReducer(state = {recipes: []}, action) {
  switch (action.type) {
    
    case 'GET_RECIPES':
      return {  recipes: action.payload} 

    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] }
      
    default:
      return state;
  }
}