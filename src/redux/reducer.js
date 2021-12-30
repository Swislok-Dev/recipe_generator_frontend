const initialRecipe = {
  title: "",
  ingredients: "",
  instructions: "",
}

const initialUser = {
  username: '',
  password: '',
}

const initialState = {
  recipes: [],
  currentRecipe: initialRecipe,
  user: initialUser,
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case 'GET_RECIPES':
      return { ...state, recipes: action.payload }
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] }
    case 'GET_RECIPE':
      return { ...state, currentRecipe: action.payload }
    case 'GET_USER':
      return { ...state, user: action.payload }
    case 'ADD_REVIEW':
      return { ...state, currentRecipe: { ...state.currentRecipe, reviews: [action.payload, ...state.currentRecipe.reviews] } }
    case 'LOGOUT':
      return { ...state, user: initialUser }
    default:
      return { ...state }
  }
}