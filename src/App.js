// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import { Route, Switch } from 'react-router-dom'
import UsersContainer from './containers/UsersContainer'
import RecipesContainer from './containers/RecipesContainer'


class App extends Component {
  render () {
    return (
      <div className="App">
          <h1>Recipe Generator</h1>
          <NavBar />
          <RecipesContainer />
          <UsersContainer />
        <Switch>
          <Route path="/login" />
          <Route path="/recipes/new" />
          <Route path="/recipes" />
          <Route path="/" component={ Home } />
        </Switch>
      </div>
    );
  }
}

export default (App);
