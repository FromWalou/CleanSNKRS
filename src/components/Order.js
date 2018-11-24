import React, { Component } from 'react';
import axios from 'axios';
import '../css/Register.css'

class Order extends Component {

constructor(){
    super();
    this.state={
      brand:'',
      modele:'',
      stylecode:'',
      color:'',
      state:'',
      rate:'',
      service:'',
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
    let tkn = window.localStorage.getItem('token');
    const newOrder={
      brand:this.state.brand,
      modele:this.state.modele,
      stylecode:this.state.stylecode,
      color:this.state.color,
      state:this.state.state,
      rate:this.state.rate,
      service:this.state.service
    }

    axios.post('//localhost:8080/api/order/new',newOrder, {
        headers: {'Authorization': 'Bearer ' + tkn}})
      .then(res=> console.log(res.data), this.props.history.push('/order'))
      .catch(err=>console.log(err.response.data));
    }

render() {
	return (
		<div id="body" className="jumbotron">
			<h1 className="display-5">COMMANDES</h1>
			<br></br>
        	<hr className="my-4"/>
        	<br></br>
			<form onSubmit={this.onSubmit} >
  				<div className="form-row">
          <div className="form-group col-md-6">
      <label htmlFor="inputmodele4">Marque</label>
      <input type="brand" name="brand" className="form-control" id="inputbrand4" placeholder="Marque" value={this.state.brand} onChange={this.onChange}/>
    </div>
    			<div className="form-group col-md-6">
      <label htmlFor="inputmodele4">Modèle</label>
      <input type="modele" name="modele" className="form-control" id="inputmodele4" placeholder="Modèle" value={this.state.modele} onChange={this.onChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group ccol-md-6">
      <label htmlFor="inputStyleode">Stylecode</label>
      <input type="stylecode" name="stylecode" className="form-control" id="inputStylecode" placeholder="Stylecode" value={this.state.stylecode} onChange={this.onChange}/>
    </div>
    <div className="form-group col-md-6">
      <label htmlFor="inputColor">Couleur</label>
      <input type="text" name="color" className="form-control" id="inputColor" placeholder="Couleur" value={this.state.color} onChange={this.onChange}/>
    </div>
  </div>
  <div className="form-row">
    <div className="form-group col-md-4">
      <label htmlFor="inputState">Service</label>
      <select id="inputService" name="service" className="form-control" value={this.state.service} onChange={this.onChange}>
        <option defaultValue>Service...</option>
        <option>NETTOYAGE STANDARD</option>
        <option>NETTOYAGE PREMIUM</option>
        <option>RENNOVATION DÉJAUNISSEMENT SEMELLE</option>
        <option>RECOLORATION D’ORIGINE MATIÈRES STANDARD</option>
        <option>RECOLORATION D’ORIGINE MATIÈRES PREMIUM</option>
        <option>MIDSOLE REPAINT MATIÈRES STANDARD</option>
        <option>MIDSOLE REPAINT MATIÈRES PREMIUM</option>
      </select>
    </div>
  </div>
  <br></br>
  <button type="submit" className="btn">Commander</button>
</form>
		</div>
	);
 };
}

export default Order;