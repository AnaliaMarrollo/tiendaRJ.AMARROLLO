import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import ItemCounterContainer from "./containers/ItemCounterContainer/ItemCounterContainer";


function App() {
  return (
    <div className="App">
      <NavBar />

      <ItemListContainer greeting="¡Hola! Muy pronto publicaremos nuestros productos" />

      <ItemCounterContainer minQuantity={1} stock={15}/>

    </div>
  );
}

export default App;
