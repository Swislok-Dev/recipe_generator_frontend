import React from 'react'

class UserForms extends React.Component {

  state = {
    username: '',
    password: '',
  }

  handleOnChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleOnSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      username: '',
      password: '',
    })
    e.target.reset()
  }

  render() {
    return (
      <div className="form">
        <h3>Please Login</h3>
        <form className="login-form" onSubmit={(event) =>this.handleOnSubmit(event)}>

          <label htmlFor="username" value="username">Username: </label>
          <input type="text" name="username" onChange={(event) => this.handleOnChange(event)} />
          
          <label htmlFor="password" value="password">Password: </label>
          <input type="password" name="password" onChange={(event) => this.handleOnChange(event)} /><br />

          <input type="submit" value="Login"/>
        </form>
      </div>
    )
  }
}


export default UserForms