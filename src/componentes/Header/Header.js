import React, { Component } from "react";
import "./style.css";
import {NavLink} from "react-router-dom";

function Header() {
  
  return (
    <header className="headerPrincipal">
      <ul className="menu">
        <li>
          <NavLink className="headerMenu" exact to="/drinks/buscarDrink">
            Drinks
          </NavLink>
        </li>
        <li>
          <NavLink className="headerMenu" exact to="/sobre">
            Sobre Nós
          </NavLink>
        </li>
        <li>
          <NavLink className="headerprincipal" exact to="/">
            Bons Drinks
          </NavLink>
        </li>
        <li>
          <NavLink className="headerMenu" exact to="/Nosso-Time">
            Nosso Time
          </NavLink>
        </li>
        <li>
          <NavLink className="headerMenu" exact to="/contato">
            Contato
          </NavLink>
        </li>
      </ul>
    </header>
  );
}

export default Header;
