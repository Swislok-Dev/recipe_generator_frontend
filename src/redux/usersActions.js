
const API = 'http://localhost:3000'


export const loginStatus = () => {
  fetch(`${API}/logged_in`)
  .then(resp => {
    if (resp.data.logged_in) {
      this.handleLogin(resp)
    } else {
      this.handleLogout()
    }
  })
  .catch(error => console.log('api errors:', error))
}

export const fetchUsers = () => {
  console.log("fetchUsers() called")
  return dispatch => {
    fetch(`${API}/users`)
    .then(resp => resp.json())
    // .then(recipes => dispatch({ type: 'GET_RECIPES', payload: recipes}))
    .then(users => dispatch({ type: 'GET_USERS', payload: users.map(user => ({...user}))}))
  }
}

export const addUser =(user) => {
  return dispatch => {
    fetch(`${API}/users`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify(user)
    })
    .then(resp => resp.json())
    .then(user => {
      dispatch({ type: 'ADD_USER', payload: user })
    })
  }
}
