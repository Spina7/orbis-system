import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Solicitud from "./pages/AddSolicitud";
import Camiones from "./pages/Camiones";
import Conductores from "./pages/Conductores";
import Clientes from "./pages/Clientes";
import GPS from "./pages/GPS";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/embarque' component={Solicitud} />
          <Route path='/camiones' component={Camiones} />
          <Route path='/conductores' component={Conductores} />
          <Route path='/clientes' component={Clientes} />
          <Route path='/gps' component={GPS} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
