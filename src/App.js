import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import NavBar from "./components/Navbar/NavBar";
import HomePage from "./components/HomePage/HomePage"
import ContactPage from "./components/ContactPage/ContactPage";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import Error404 from "./containers/Error404/Error404";
import CartView from "./components/CartView/CartView";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <NavBar />

        <Switch>          
          <Route exact path="/" component={HomePage} />
          <Route exact path="/nuestrosProductos" component={ItemListContainer}/>
          <Route exact path="/category/:categoryId" component={ItemListContainer}/>
          <Route exact path="/item/:id" component={ItemDetailContainer}/>
          <Route exact path="/takeaway" />
          <Route exact path="/contacto" component={ContactPage}/>
          <Route exact path="/cart" component={CartView}/>
          <Route path='*' component={Error404}/>
        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
