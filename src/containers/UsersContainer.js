import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import UserForm from '../components/Users/UserForm'
import { connect } from 'react-redux'

class UsersContainer extends React.Component {
  
  
  componentDidMount() {
    console.log("Users Container tried to mount the loginStatus()", this.props)
  }
  

  



  render() {
    return (
      <div>
        <BrowserRouter>
          <Switch>
            <Route exact path="/login" render={() => <UserForm />} />
            {/* <Route path='/signup' component={SignupForm} /> */}
          </Switch>
        </BrowserRouter>
      </div>
    )
  }
}


export default connect()(UsersContainer)

