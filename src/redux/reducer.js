const initialRecipe = {
  title: "",
  ingredients: "",
  instructions: "",
  reviews: [],
}

// const recipe = {
//   title: '',
//   ingredients: '',
//   instructions: '',
//   reviews: [],
// }


const initialUser = {
  username: '',
  password: '',
}

// const initialState = {
//   recipes: [],
//   currentRecipe: initialRecipe,
//   user: initialUser,
// }

export function reducer(state = {recipes: []}, action) {
  switch (action.type) {
    case 'GET_RECIPES':
      return { ...state, recipes: action.payload }
    case 'ADD_RECIPE':
      return { ...state, recipes: [...state.recipes, action.payload] }
    case 'GET_RECIPE':
      return { ...state, currentRecipe: action.payload }
    case 'CLEAR_RECIPE':
      return { ...state, currentRecipe: initialRecipe }
    case 'GET_USER':
      return { ...state, user: action.payload }
    case 'ADD_REVIEW':
      // return {
      //   ...state,
      //   reviews: {
      //     ...state.recipes.map(
      //     (recipe, i) => i === action.payload.recipe_Id ? { ...recipe, reviews: [action.payload]} : recipe 
      //   )}
      // }

      const selectedRecipe = state.recipes.filter(recipe => recipe.id === action.payload.recipeId)
      return { 
        ...state,
        selectedRecipe: { ...selectedRecipe, reviews: [action.payload]}
      }



      // console.log("ADD_REVIEW", action.payload)

      // const recipe = recipes.filter(recipe => recipe.id === Number(match.params.id))[0]
      // let recipes = state.recipes
      
      // let recipe = recipes.filter(recipe => recipe.id === action.payload.recipeId)
      // console.log("recipe", recipe)
      // let review = (recipe) ? action.payload : state
      // let recipes = state.recipes.map(recipe => {
      //   if (recipe.id === action.payload.recipeId) {
      //     console.log("passed")

      //     return {...state, recipes: action.payload}
      //   } else {
      //     console.log("failed")
      //     return recipe
      //   }
      // })

      // return { ...state, recipe: { ...state.recipes, reviews: [review]}}

      // return { ...state, recipe: { ...recipe, reviews: [action.payload, ...recipes.reviews]}}
      // return { ...state, recipes: [...state.recipes, review]}
      // return { ...state, currentRecipe: { ...state.currentRecipe, reviews: [action.payload, ...state.currentRecipe.reviews] } }
      // return { ...state, recipes: [...state.recipes, action.payload] }

    case 'LOGOUT':
      return { ...state, user: initialUser }
    default:
      return { ...state }
  }
}