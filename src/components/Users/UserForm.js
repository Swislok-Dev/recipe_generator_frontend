import React from 'react'

class UserForm extends React.Component {

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
      <div className="container">
      <div className="wrap-container">
        <h3>Please Login</h3>
        <form className="form validate-form" onSubmit={(event) =>this.handleOnSubmit(event)}>
          <span className="form-title" value="Please log in">Please login</span>
          <div className="wrap-input">
            {/* <label htmlFor="username" value="username">Username: </label> */}
            <input className="input" type="text" name="username" onChange={(event) => this.handleOnChange(event)} />
            <span className="focus-input " data-placeholder="USERNAME"></span>
          </div>

          <div className="wrap-input">
            {/* <label htmlFor="password" value="password">Password: </label> */}
            <input className="input" type="password" name="password" onChange={(event) => this.handleOnChange(event)} />
            <span className="focus-input " data-placeholder="PASSWORD"></span>
          </div>

          <div className="container-form-btn">
            <div className="wrap-form-btn">
              <div >
                <input className="form-btn" type="submit" value="Login"/>
              </div>
            </div>
          </div>
        </form>
      </div>
      </div>
    )
  }
}


export default UserForm