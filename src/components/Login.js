import React, { Component } from 'react';
import axios from 'axios';
import '../css/Register.css'

class Login extends Component {

constructor(){
    super();
    this.state={
      email:'',
      password:'',
      errors:{}
    }
    this.onChange=this.onChange.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
  }

  componentDidMount() {
  }

  onChange(event){
    this.setState({[event.target.name]: event.target.value});
  }

  onSubmit(s){
    s.preventDefault();
    const newUser={
      email:this.state.email,
      password:this.state.password
    }

    axios.post('//localhost:8080/api/users/login/',newUser)
      .then(res => {
        window.localStorage.setItem('token', res.data.token); // Stockage du token dans le local storage
        this.props.onSetToken(res.data.token);
        this.props.history.push('/account');
      })
      .catch(err=>this.props.history.push('/login'));
    }

render() {
    let tkn = window.localStorage.getItem('token');
    console.log("Login=>" + tkn);
  return (
    <div id="body" className="jumbotron">
      <h1 className="display-5">CONNEXION</h1>
      <br></br>
          <hr className="my-4"/>
          <br></br>
      <form onSubmit={this.onSubmit}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Adresse mail</label>
    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="exemple@exemle.fr" value={this.state.email} onChange={this.onChange}/>
    <small id="emailHelp" className="form-text text-muted">Nous ne partagerons pas votre adresse mail.</small>
  </div>
  <div className="form-group">
    <label htmlFor="exampleInputPassword1">Mot de passe</label>
    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Mot de passe" value={this.state.password} onChange={this.onChange}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" htmlFor="exampleCheck1">Se souvenir de moi</label>
  </div>
  <br></br>
  <button type="submit" className="btn">Connexion</button>
</form>
    </div>
    );
 };
}
 export default Login;
