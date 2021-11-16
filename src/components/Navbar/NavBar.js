import React from "react";
import "../Navbar/NavBar.scss";

function NavBar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
           B A K E R Y
          </a>
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
              <a className="nav-link active rounded" aria-current="page" href="#">
                Inicio
              </a>
              <a className="nav-link" href="#">
                Productos
              </a>
              <a className="nav-link" href="#">
                Contacto
              </a>
              <a className="nav-link" href="#">
                Carrito
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default NavBar;
