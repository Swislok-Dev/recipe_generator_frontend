import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// import SignupForm from '../components/Users/signupForm'
import UserForm from '../components/Users/UserForm'
import { loginStatus } from '../redux/usersActions'

class UsersContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoggedIn: false,
      user: {}
    }
  }
  
  componentDidMount() {
    // loginStatus() 
    console.log("Users Container tried to mount the loginStatus()", )
  }
  

  handleLogin = (data) => {
    this.setState({
      isLoggedIn: true,
      user: data.user
    })
  }

  handleLogout = () => {
    this.setState({
      isLoggedIn: false,
      user: {}
    })
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

export default UsersContainer

