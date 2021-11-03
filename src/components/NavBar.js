import React from 'react'
// import { StyledLink } from '../styles'
// import { NavLink } from 'react-bootstrap'
import { useLocation, NavLink } from 'react-router-dom'
import './NavBar.css'

const NavBar = (props) => {

  const chooseMealHandler = (e) => {
    alert('Please pick which meal type you want to spin for on the Homepage!')
  }

  const chooseFoodHandler = (e) => {
    alert('Please pick which meal type you want to spin for on the Homepage & then Spin the Wheel to get your random meal!')
  }

  const location = useLocation()

  const { pathname } = location

  const splitLocation = pathname.split('/')

  return (
    <div className="main">
        <p className={splitLocation[1] === "" ? "active" : ""}>
        <NavLink exact to="/" className="link" activeClassName="active-link" >
          Home
        </NavLink>
        </p>
        <p className={splitLocation[1] === "wheel" ? "active" : ""}>
        <NavLink
          exact
          to="/wheel"
          className="link"
          activeClassName="active-link"
          onClick={chooseMealHandler}
        >
          Spin It!
        </NavLink>
        </p>
        <p className={splitLocation[1] === "make" ? "active" : ""}>
        <NavLink
          exact
          to="/make"
          className="link"
          activeClassName="active-link"
          onClick={chooseFoodHandler}
        >
          Get It!
        </NavLink>
        </p>
    </div>
  )
}

export default NavBar
