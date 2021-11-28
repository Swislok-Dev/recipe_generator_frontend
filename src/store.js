import { combineReducers, createStore, applyMiddleware, } from 'redux'
import manageRecipes from './reducers/manageRecipes'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  manageRecipes,
})


export default createStore(
  reducers,
  applyMiddleware(thunk),
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)
