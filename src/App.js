// import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SecondHome from './components/SecondHome'
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
          <RecipesContainer />
        <Switch>
          <Route path="/second_home" render={() => <SecondHome />} />
          <Route path="/" render={() => <Home />} />
        </Switch>
      </div>
    );
  }
}

export default (App);
