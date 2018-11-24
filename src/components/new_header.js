import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import '../css/Home.css'
import '../css/Header.css'

class Header extends Component {
  
  handleLogout() {
    let tkn = window.localStorage.getItem('token');
    console.log("handleLogout=>" + tkn);
    window.localStorage.setItem('token', null);
    console.log("Deconnected");
  };

  render() {

  let tkn = window.localStorage.getItem('token');
  console.log("Rend=>" + tkn);
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
            <li style={{display: 'none'}}><NavLink className="a" to='/Account'>Mon Compte </NavLink></li>
            <li><button type="submit" className="btn" onClick={this.handleLogout}>Déconnexion</button></li>
          </ul>
          </div>
        </nav>
      </div>
		);
  };
 }
export default Header;