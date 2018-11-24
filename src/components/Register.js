import React, { Component } from 'react';
import axios from 'axios';
import '../css/Register.css'

class Register extends Component {

constructor(){
    super();
    this.state={
      name:'',
      firstname:'',
      email:'',
      password:'',
      adress:'',
      city:'',
      zip:'',
      country:'',
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});

  }
  onSubmit(s){
    s.preventDefault();
    const newUser={
      name:this.state.name,
      firstname:this.state.firstname,
      email:this.state.email,
      password:this.state.password,
      adress:this.state.adress,
      city:this.state.city,
      zip:this.state.zip,
      country:this.state.country
    }

    axios.post('//localhost:8080/api/users/register',newUser)
      .then(res=> console.log(res.data), this.props.history.push('/login'))
      .catch(err=>console.log(err.response.data));
    }

render() {
	return (
		<div id="body" className="jumbotron">
			<h1 className="display-5">INSCRIPTION</h1>
			<br></br>
        	<hr className="my-4"/>
        	<br></br>
			<form onSubmit={this.onSubmit} >
  				<div className="form-row">
    				<div className="form-group col-md-6">
      					<label htmlFor="inputEmail4">Email</label>
      					<input type="email" name="email" className="form-control" id="inputEmail4" placeholder="Email" value={this.state.email} onChange={this.onChange}/>
    				</div>
    			<div className="form-group col-md-6">
      <label htmlFor="inputPassword4">Mot de passe</label>
      <input type="password" name="password" className="form-control" id="inputPassword4" placeholder="Mot de passe" value={this.state.password} onChange={this.onChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputName">Nom</label>
      <input type="name" name="name" className="form-control" id="inputName" placeholder="Nom" value={this.state.name} onChange={this.onChange}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputFirstname">Prénom</label>
      <input type="firstname" name="firstname" className="form-control" id="inputFirstname" placeholder="Prénom" value={this.state.firstname} onChange={this.onChange}/>
    </div>
  </div>
  <div className="form-group">
    <label htmlFor="inputAddress">Addresse</label>
    <input type="text" name="adress" className="form-control" id="inputAddress" placeholder="1234 Avenue Fosch" value={this.state.adress} onChange={this.onChange}/>
  </div>
  <div className="form-row">
    <div className="form-group col-md-6">
      <label htmlFor="inputCity">Ville</label>
      <input type="text" name="city" className="form-control" id="inputCity" value={this.state.city} onChange={this.onChange}/>
    </div>
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Pays</label>
      <select id="inputState" name="country" className="form-control" value={this.state.country} onChange={this.onChange}>
        <option defaultValue>Choisir...</option>
        <option>France</option>
      </select>
    </div>
    <div className="form-group col-md-2">
      <label htmlFor="inputZip">Code Postal</label>
      <input type="text" name="zip" className="form-control" id="inputZip" value={this.state.zip} onChange={this.onChange}/>
    </div>
  </div>
  <br></br>
  <button type="submit" className="btn">Inscription</button>
</form>
		</div>
	);
 };
}

export default Register;