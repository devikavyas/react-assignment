import React, { Component } from 'react';
import axios from 'axios';

export default class Register extends Component{
    constructor(){
        super()
        this.state = { firstname: '', lastname: '', email: '', password: '', phone:'', role : '4', Success: '', Failure: '' }
    }

    handleChange = e => {
      this.setState({ [e.target.name] : e.target.value });
    }
    handleRegister = e => {
        e.preventDefault();
        const headers = { 'Content-Type': 'application/json' };
        axios.post('https://mean.stagingsdei.com:6047/user/register', this.state, {
            headers: headers
        }).then(response => {
                if(response.data.statusCode === 200){
                  this.setState({ Success: 'Your account has been created successfully, please login' })
                }else{
                  this.setState({ Failure: 'Something went wrong, please try again' })
                }
            })
            .catch(error => {
                
            });
    }

    render(){
        return(
                <form onSubmit={this.handleRegister}>
                  <div>
                    <label>First Name: </label>
                    <input 
                      type="text"
                      name="firstname"
                      placeholder="Enter First Name"
                      value={this.state.firstname}
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                  </div>
                  <div>
                    <label>Last Name: </label>
                    <input 
                      type="text"
                      name="lastname"
                      placeholder="Enter Last Name"
                      value={this.state.lastname}
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                  </div>
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
                    <label>Phone: </label>
                    <input 
                      type="text"
                      name="phone"
                      placeholder="Enter Phone Number"
                      value={this.state.phone}
                      onChange={this.handleChange.bind(this)}
                      required
                    />
                  </div>
                            
                  <div>
                    <p style={{ color: 'green' }}>{ this.state.Success }</p>
                    <p style={{ color: 'red' }}>{ this.state.Failure }</p>
                    <button type="submit">Register</button>
                  </div>
              </form>
        );
    }
}

