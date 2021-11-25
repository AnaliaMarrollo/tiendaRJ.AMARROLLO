import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";

function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting="¡Hola! Muy pronto publicaremos nuestros productos" />

    </div>
  );
}

export default App;
