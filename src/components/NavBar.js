import { NavLink } from 'react-router-dom'

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white",
  borderRadius: 50,
};

const activeLink = {
  background: "green", borderWidth: "1px", borderStyle: "solid"
}

const NavBar = (props) =>{
  return (
    <div>
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
      <NavLink to='/second_home' exact style={link} activeStyle={activeLink}>Second Home</NavLink>
    </div>
  )
}


export default NavBar