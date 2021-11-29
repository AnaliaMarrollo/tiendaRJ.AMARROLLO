import React from "react";
import "../Navbar/NavBar.scss";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom"

function NavBar() {


  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink to={"/"} className="navbar-brand" id="brand" >
           B A K E R Y
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav justify-content-end">
              <NavLink to={"/"} className="nav-link rounded" id="home">
                Inicio
              </NavLink>
              <NavLink to={"/productos"} className="nav-link" id="productos">
                Productos
              </NavLink>
              <NavLink to={"/category/tortasytartas"} className="nav-link" id="productos">
                Tortas & Tartas
              </NavLink>
              <NavLink to={"/category/budines"} className="nav-link" id="productos">
                Budines
              </NavLink>
              <NavLink to={"/category/cookies"} className="nav-link" id="productos">
                Cookies
              </NavLink>
              <NavLink to={"/category/especiales"} className="nav-link" id="productos">
                Especiales ♡
              </NavLink>
              <NavLink  to={"/contacto"}className="nav-link" id="contacto">
                Contacto
              </NavLink>
              <NavLink  to={"/cart"}className="nav-link rounded">
                <CartWidget />
              </NavLink>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
