import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import axios from 'axios';
import { getToken,setUserSession } from './Utils/Common';

export default class Login extends Component{
    constructor(){
        super()
        this.state = { email: '', password: '', role : '4', Success: '', Failure: ''}
    }

    handleRedirect = () => {
      const token = getToken();
      if(token){
          return <Redirect to="/dashboard" />
      }
  }
    
    handleChange = e => {
      this.setState({ [e.target.name] : e.target.value });
    }

    handleLogin = e => {
        e.preventDefault();
        const headers = { 'Content-Type': 'application/json' };
        axios.post('https://mean.stagingsdei.com:6047/user/login', this.state, {
            headers: headers
        }).then(response => {
                if(response.data.statusCode === 200){
                  setUserSession(response.data.token); 
                  this.setState({ Success: 'Logged in successfully' });

                }else{
                    this.setState({ Failure: 'Something went wrong, please try again' })
                }
                
            })
            .catch(error => {

            });
    }

    render(){
         return(
           <div>
          { this.handleRedirect() }
                <form onSubmit={this.handleLogin}>
                  <div>
                    <label>Email: </label>
                    <input 
                      type="text"
                      name="email"
                      placeholder="Enter Email Address"
                      value={this.state.email}
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                  </div>
                  <div>
                    <label>Password: </label>
                    <input 
                      type="password"
                      name="password"
                      placeholder="Enter Password"
                      value={this.state.password}
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                  </div>       
                  <div>
                    <p style={{ color: 'green' }}>{ this.state.Success }</p>
                    <p style={{ color: 'red' }}>{ this.state.Failure }</p>
                    <button type="submit">Login</button>
                  </div>
              </form>

</div>        );
    }
}