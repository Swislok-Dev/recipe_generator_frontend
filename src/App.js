// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import UserForms from './components/Users/UserForms'
import CreateRecipe from './components/CreateRecipe'
import { Route, Switch } from 'react-router-dom'
import RecipesContainer from './containers/RecipesContainer'
// import { connect } from 'react-redux'
// 

class App extends Component {


  render () {
    return (
      <div className="App">
          <h1>Home page</h1>
          <NavBar />
        <Switch>
          <Route path="/login" render={() => <UserForms /> } />
          <Route path="/recipes" render={() => <RecipesContainer />} />
          <Route path="/create_recipe" render={() => <CreateRecipe />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default (App);
