import React, { Component } from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import NavBar from "./Componentes/navbar";
import Login from "./Componentes/login";
import Registro from "./Componentes/registro";
import PanelAdm from "./Componentes/paneladmin";
import PanelUser from "./Componentes/paneluser";
import PanelColum from "./Componentes/panelcolum";
import 'bootstrap/dist/css/bootstrap.min.css';

function GoLogin() {
  return (
    <div className='container'>
    <Login/>
  </div>
  );
}
function GoWelcome() {
  return (
    <div className='container'>
      <h1>BIENVENIDO</h1>
  </div>
  );
}
function GoRegistro() {
  return (
    <div className='container'>
      <Registro/>
  </div>
  );
}
function GoCrudsAdm() {
  return (
    <div className='container'>
      <PanelAdm/>
  </div>
  );
}
function GoPaneUser() {
  return (
    <div className='container'>
      <PanelUser/>
  </div>
  );
}
function GoPaneColum({match }) {
  return (
    <div className='container'>
      <PanelColum/>
  </div>
  );
}
class App extends Component{
  render(){
    return(
      <Router>
        <div className='App'>
          <NavBar/>
        </div>
        <Route path="/" exact component={GoWelcome} />
        <Route path="/login" exact component={GoLogin} />
        <Route path="/registro" exact component={GoRegistro} />
        <Route path="/administrador" exact component={GoCrudsAdm} />
        <Route path="/inicio" exact component={GoPaneUser} />
        <Route path="/Colum" exact component={GoPaneColum} />
      </Router>
    )
  }
}
export default App;
