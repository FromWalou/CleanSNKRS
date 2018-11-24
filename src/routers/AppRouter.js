import React, { Fragment } from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Home from "../components/Home";
import Register from "../components/Register";
import Login from "../components/Login";
import Logout from "../components/Logout";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Clean from "../components/Clean";
import Recondition from "../components/Recondition";
import Account from "../components/Account";
import Order from "../components/Order";

export class AppRouter extends React.Component {

  state = {
    token: null
  };

  handleSetToken = (token) => {
    this.setState({token});
  }

  setToken = (token) => {
    this.setState({token: ''});
  }

  render() {
    const { token } = this.state;
    console.log(this.state.token);
    return (
      <BrowserRouter>
        <Fragment>
          <Header render={props => <header token={token} {...props}/>}/>
          <Switch>
            <Route path='/' component={Home} exact/>
            <Route path='/register' component={Register}/>
            <Route path='/login' render={props => 
            <Login token={token} onSetToken={this.handleSetToken} {...props}/>}/>
            <Route path='/logout' render={props => <Logout token={token} setToken={this.setToken} {...props}/>}/>
            <Route path='/clean' component={Clean}/>
            <Route path='/account' render={props => <Account token={token} {...props}/>}/>
            <Route path='/recondition' component={Recondition}/>
            <Route path='/order' render={props => <Order token={token} {...props}/>}/>
            <Redirect to="/"/>
          </Switch>
          <Footer/>
        </Fragment>
      </BrowserRouter>
    );
  }
}
