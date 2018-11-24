import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css'
import '../css/Header.css'

class Header extends Component {

  constructor(){
    super();
  }

  componentDidMount(){
  }

  render(){
  let tkn = this.props.token;
  console.log(this.props.token);
  //let tkn = null;

  if (tkn !== null){
     return (
      <div>
        <nav className="navbar navbar-inverse">
          <div className="container-fluid">
            <div className="navbar-header">
              <NavLink className="navbar-brand" to='/'>CLEANSNKRS</NavLink>
            </div>
            <ul className="nav justify-content-end">
              <li><NavLink className="a" to='/Order'>Commandes </NavLink></li>
              <li><NavLink className="a" to='/Account'>Mon Compte </NavLink></li>
              <li><NavLink className="a" to='/Logout'>Déconnexion</NavLink></li>
            </ul>
            </div>
          </nav>
        </div>
        );
  }
  else {
      return (
    <div>
    <nav className="navbar navbar-inverse">
        <div className="container-fluid">
          <div className="navbar-header">
            <NavLink className="navbar-brand" to='/'>CLEANSNKRS</NavLink>
          </div>
          <ul className="nav justify-content-end">
            <li><NavLink className="a" to='/Register'>Inscription</NavLink></li>
            <li><NavLink className="a" to='/Login'>Connexion</NavLink></li>
          </ul>
          </div>
        </nav>
      </div>
    );
  }
}
 };

 export default Header;