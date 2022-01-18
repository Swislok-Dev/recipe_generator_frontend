// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { connect } from 'react-redux'
import { fetchRecipes } from './redux/actions'
import { Route, Switch } from 'react-router-dom'
import UsersContainer from './containers/UsersContainer'
import RecipesContainer from './containers/RecipesContainer'



class App extends Component {
  componentDidMount() {
    fetchRecipes()
  }
  
  render () {
    return (
      <div className="App">
          <h1>Recipe Generator</h1>
          <NavBar />
        <Switch>
          <Route path="/recipes" render={() => <RecipesContainer /> } />
          <Route path="/login" render={() =><UsersContainer /> } />
          <Route exact path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default connect(null, { fetchRecipes })(App)