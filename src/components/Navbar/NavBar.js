import React, {useContext} from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import CartWidget from "../CartWidget/CartWidget";
import CustomButton from "../../components/CustomButton/CustomButton"

//Styles
import "./NavBar.scss";



function NavBar() {

  const { carrito } = useContext(CartContext);
  const {logged, logout, user} = useContext(AuthContext);

  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <NavLink exact to={"/"} activeClassName={"activeLinkBrand"} className="navbar-brand" id="brand" >
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
              <NavLink exact to={"/"}  activeClassName={"activeLink"} className="nav-link" id="home">
                Inicio
              </NavLink>
              <NavLink exact to={"/nuestrosProductos"}  activeClassName={"activeLink"} className="nav-link" id="productos">
                Nuestros Productos
              </NavLink>
              <NavLink exact to={"/category/tortas"}  activeClassName={"activeLink"} className="nav-link" id="tortas">
                Tortas & Tartas
              </NavLink>
              <NavLink exact to={"/category/budines"}  activeClassName={"activeLink"} className="nav-link" id="budines">
                Budines
              </NavLink>
              <NavLink exact to={"/category/cookies"}  activeClassName={"activeLink"} className="nav-link" id="cookies">
                Cookies
              </NavLink>
              <NavLink exact to={"/takeaway"}  activeClassName={"activeLink"} className="nav-link" id="takeaway">
                Take Away ♡
              </NavLink>
              <NavLink  exact to={"/contacto"}  activeClassName={"activeLink"} className="nav-link" id="contacto">
                Contacto
              </NavLink>
              {carrito.length === 0
                ?
                <div className="no-cart">
                </div>
                :
                <NavLink exact to={"/cart"} activeClassName={"activeLinkCart"} className="nav-link rounded">
                  <CartWidget />
                </NavLink>
              }
              {logged ?
                <>
                  <span>Bienvenidx, {user.email}</span>
                  <CustomButton textButton={"Cerrar Sesión"} className="btn btn-primary mx-3" onClick={logout}/>
                </>
                :
                <>
                  <NavLink exact to={"/signin"} activeClassName={"activeLink"} className="nav-link" id="signup">Iniciar Sesión

                  </NavLink>
                  <NavLink exact to={"/signup"} activeClassName={"activeLink"} className="nav-link" id="signup">Registrarme

                  </NavLink>
                </>}
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
