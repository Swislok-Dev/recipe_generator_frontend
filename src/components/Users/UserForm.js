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
    e.target.value !== "" ? e.target.classList.add("has-val") : e.target.classList.remove("has-val")
  }

  onHandleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state)
    this.setState({
      username: '',
      password: '',
    })
  }

  render() {
    return (
      <div className="background">
        <div className="container">
          <div className="wrap-container">
            <form className="form validate-form" onSubmit={this.onHandleSubmit}>
              <span className="form-title" value="Please log in">Please login</span>
              <div className="wrap-input">
                <input className="input" type="text" name="username" onChange={(event) => this.handleOnChange(event)} />
                <span className="focus-input " data-placeholder="USERNAME"></span>
              </div>

              <div className="wrap-input">
                <input className="input" type="password" name="password" onChange={(event) => this.handleOnChange(event)} />
                <span className="focus-input " data-placeholder="PASSWORD"></span>
              </div>

              <div className="container-form-btn">
                <div className="wrap-form-btn">
                  <input className="form-btn" type="submit" value="Login"/>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}


export default UserForm