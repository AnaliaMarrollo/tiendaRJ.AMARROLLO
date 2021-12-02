import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "./components/CartWidget/CartWidget";
import Error404 from "./containers/Error404/Error404";

function App() {
  return (
    <>
      <BrowserRouter>
        
        <NavBar />

        <Switch>
          
          <Route exact path="/">
            <ItemListContainer />
          </Route>

          <Route exact path="/category/:categoryId">
            <ItemListContainer />
          </Route>

          <Route exact path="/item/:id">
            <ItemDetailContainer />
          </Route>

          <Route exact path="/takeaway" />

          <Route exact path="/contacto" />

          <Route path='*'>
            <Error404 />
          </Route>

        </Switch>

      </BrowserRouter>
    </>
  );
}

export default App;
