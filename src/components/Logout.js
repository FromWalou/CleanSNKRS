import React, { Component } from 'react';

class Logout extends Component {
	constructor (){
		super();
		
	}

	componentDidMount() {
		let tkn = window.localStorage.getItem('token'); // Récupération du token depuis le local storage
    	if (tkn !== null) {
      		tkn = localStorage.setItem('token', null);
      		this.props.setToken(tkn);
      		console.log("Logout=>" + this.props.token);
      		this.props.history.push('/');
    	}
	}
	
	render (){
		return (<h1>Déconnexion en cours</h1>)
	};
}

 export default Logout;