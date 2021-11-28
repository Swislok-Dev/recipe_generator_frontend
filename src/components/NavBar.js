import { NavLink } from 'react-router-dom'

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  borderRadius: 50,
  // position: "relative",
  // right: "5%"
};

// const floatRight = {
//   ...link, position: "relative", left: "50%"
// }

const activeLink = {
  background: "green", borderWidth: "1px", borderStyle: "solid"
}

const NavBar = (props) =>{
  return (
    <div>
      <NavLink
      to="/login"
      exact
      style={link}
      activeStyle={activeLink}
      >
        Login</NavLink>
      <NavLink
      to='/'
      exact
      style={link}
      activeStyle={
        activeLink
      }
      >
        Home
      </NavLink>
      <NavLink to="/recipes" exact style={link} activeStyle={activeLink}>Recipes</NavLink>
      <NavLink to='/create_recipe' exact style={link} activeStyle={activeLink}>Create Recipe</NavLink>
    </div>
  )
}


export default NavBar