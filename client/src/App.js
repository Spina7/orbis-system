import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Solicitud from './pages/AddSolicitud';
import Factura from './pages/Factura';

function App() {
  return (
    <>
    <Router>
    <Navbar/>
      <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/embarque' component={Solicitud} />
          <Route path='/factura' component={Factura} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
