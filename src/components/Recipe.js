import React from 'react'
import { connect } from 'react-redux'

export default class Recipe extends React.Component {
  render() {
    return (
      <div>
        <h1>Recipes should all be here</h1>


      </div>
    )
  }
}

connect()(Recipe)