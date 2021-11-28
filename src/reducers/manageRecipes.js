
export default function manageRecipes(state = { recipes: [], loading: false }, action) {
  switch (action.type) {
    case 'ADD_RECIPE':
      return { ...state, recipes: action.recipes}

    case 'GET_RECIPES':
      return { recipes: action.recipes }

    default:
      return state;
  }
}