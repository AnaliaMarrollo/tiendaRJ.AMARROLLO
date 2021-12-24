import React, { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";
import { AuthContext } from "../../context/AuthContext";
import CartWidget from "../CartWidget/CartWidget";
import CustomButton from "../../components/CustomButton/CustomButton";
import { Link, NavLink } from "react-router-dom";
import { Container, Nav, Navbar, NavbarBrand } from "react-bootstrap";

//Styles
import "./NavBar.scss";

function NavBar() {
  const { carrito } = useContext(CartContext);
  const { logged, logout, user } = useContext(AuthContext);
  return (
    <>
      <Navbar
        sticky="top"
        collapseOnSelect
        bg="light"
        variant="light"
        expand="lg"
      >
        <Container fluid className="nav-container">
          <Navbar.Brand
            eventKey="1"
            as={Link}
            exact
            to="/"
            className="navbar-brand"
            id="brand"
          >
            B A K E R Y
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse className="center">
            <Nav className="me-auto text-align-center">
              <Nav.Link
                eventKey="2"
                as={Link}
                exact
                to="/"
                activeClassName={"activeLink"}
                className="nav-link"
                id="home"
              >
                Inicio
              </Nav.Link>

              <Nav.Link eventKey="3" as={Link} exact to="/nuestrosProductos"
              activeClassName={"activeLink"}
                className="nav-link"
                id="nuestros-productos">
                Nuestros Productos
              </Nav.Link>

              <Nav.Link
                eventKey="4"
                as={Link}
                exact
                to="/category/tortas"
                activeClassName={"activeLink"}
                className="nav-link"
                id="tortas"
              >
                Tortas & Tartas
              </Nav.Link>

              <Nav.Link
                eventKey="5"
                as={Link}
                exact
                to="/category/cookies"
                activeClassName={"activeLink"}
                className="nav-link rounded"
                id="cookies"
              >
                Cookies
              </Nav.Link>

              <Nav.Link
                eventKey="6"
                as={Link}
                exact
                to="/category/especiales"
                activeClassName={"activeLink"}
                className="nav-link rounded"
                id="edicion-limitada"
              >
                Edición Limitada
              </Nav.Link>

              <Nav.Link
                eventKey="7"
                as={Link}
                exact
                to="/contacto"
                activeClassName={"activeLink"}
                className="nav-link rounded"
                id="contacto"
              >
                Contacto
              </Nav.Link>

              {carrito.length === 0 ? (
                <div className="no-cart"></div>
              ) : (
                <Nav.Link
                  eventKey="8"
                  as={Link}
                  exact
                    to="/cart"
                    activeClassName={"activeLink"}
                  className="nav-link nav-cart rounded"
                  id="cart"
                >
                  <CartWidget />
                </Nav.Link>
              )}

              {logged ? (
                <>
                  <div className="no-cart"></div>
                </>
              ) : (
                <>
                  <Nav.Link
                    eventKey="9"
                    as={Link}
                    exact
                      to="/login"
                      activeClassName={"activeLink"}
                    className="nav-link rounded"
                    id="login"
                  >
                    Mi cuenta
                  </Nav.Link>
                </>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {logged && (
        <>
          <div className="nav-link nav-user">
            ¡Hola!, {user.email}
            <CustomButton
              textButton={"Cerrar Sesión"}
              onClick={logout}
              className={"btn-logout"}
            />
          </div>
        </>
      )}
    </>
  );
}

export default NavBar;
