import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, NavLink } from 'react-router-dom';

import Login from './Login';
import Dashboard from './Dashboard';
import Register from './Register';

import PrivateRoute from './Utils/PrivateRoute';
import PublicRoute from './Utils/PublicRoute';

class App extends Component {
  render(){
    return(
    <div className="App">
      <BrowserRouter>
        <div>
          <div className="header">
            <NavLink activeClassName="active" to="/dashboard">Dashboard</NavLink>
            <NavLink exact activeClassName="active" to="/">Register</NavLink>
            <NavLink activeClassName="active" to="/login">Login</NavLink>
          </div>
          <div className="content">
            <Switch>
              <PublicRoute exact path="/" component={Register} />
              <PublicRoute path="/login" component={Login} />
              <PrivateRoute path="/dashboard" component={Dashboard} />
            </Switch>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
    }
}

export default App;