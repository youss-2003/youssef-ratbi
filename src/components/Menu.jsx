import React from 'react'
import { NavLink } from 'react-router-dom'

function Menu() {
  return <>
  <header>
    <nav className=" navbar-expand-lg navbar-light bg-dark vanbar">
      <ul>
        <li><NavLink to="/" >Accueil</NavLink></li>
        <li><NavLink to="/contacts">Contacts</NavLink></li>
      </ul>
    </nav>
  </header>
  </>
}

export default Menu