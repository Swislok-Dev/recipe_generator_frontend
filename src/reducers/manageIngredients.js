export default function manageIngredients(state = {
  ingredients: [],
}, action) {
  switch (action.type) {
    case 'ADD_INGREDIENT':
      // change this later
      // return { ingredients: state.ingredients.concat(action.payload.text) };
      return { ingredients: [...state.ingredients, action.payload.text] }

    default:
      return state;
  }
}