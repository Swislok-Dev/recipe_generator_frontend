
export function reducer(state = {recipes: []}, action) {
  switch (action.type) {
    case 'GET_RECIPES':
      return { ...state, recipes: action.payload }
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] }
    case 'GET_RECIPE':
      return { ...state, selectedRecipe: action.payload }
    case 'ADD_REVIEW':
      const selectedRecipe = state.recipes.filter(recipe => recipe.id === action.recipeId)
      return { 
        ...state, selectedRecipe: { ...selectedRecipe, reviews: [action.payload] }
      }
    default:
      return { ...state }
  }
}