import { NavLink } from 'react-router-dom'

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "red",
  textDecoration: "none",
  color: "white",
  borderRadius: 50,
};

const activeLink = {
  background: "darkred",
  border: "2px solid white",
}

const NavBar = () =>{
  return (
    <nav className="navbar">
      <NavLink to='/' exact style={link} activeStyle={activeLink} >Home</NavLink>
      <NavLink to="/recipes" exact style={link} activeStyle={activeLink}>Recipes</NavLink>
      <NavLink to='/recipes/new' exact style={link} activeStyle={activeLink}>Create Recipe</NavLink>
      {/* <NavLink to="/login" exact style={link} activeStyle={activeLink}>Login</NavLink> */}
    </nav>
  )
}


export default NavBar