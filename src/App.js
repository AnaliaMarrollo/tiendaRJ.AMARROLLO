import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./containers/ItemListContainer/ItemListContainer";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ItemDetailContainer from "./containers/ItemDetailContainer/ItemDetailContainer";


function App() {
  return (    
     <> 
      <Router>
        <NavBar />
      <Switch>
        <Route exact path='/'>
        </Route>
        {/* <Route path='/productos' component={ItemListContainer}/> */}
        <Route path='/productos' component={ItemDetailContainer}/>
        <Route path='/contacto'>
        </Route> 
      </Switch>
      </Router>
            {/* <Footer /> */}
    </>
  );
}

export default App;
