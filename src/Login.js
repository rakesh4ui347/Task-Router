import React, { Component } from 'react'
import {BrowserRouter,Route} from 'react-router-dom';
import { Redirect ,browserHistory } from 'react-router'; 
import EmployeeListPage from './EmployeeListPage';
class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             username:'',
             password:'',
             redirect: false
        }
        this.handleUsernameChange = this.handleUsernameChange.bind(this);
        this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleUsernameChange(event){

        this.setState({
            username:event.target.value
        })
    }
     
    handlePasswordChange(event) {
        this.setState({
          password:event.target.value
        })

    }
    
    handleSubmit(event) {
      event.preventDefault();
      fetch('/login.json')
        .then(response =>  response.json())
        .then(resData => {
          var username=resData.username;
          var password=resData.password
          if(username === this.state.username && password === this.state.password){
            console.log('success');
            this.setState({
              redirect: true
            })
          }else{
            alert('Please enter valid username and Password');
          }
        })
    }
     
     
    render() {
      if (this.state.redirect) {
        return <Redirect to="./EmployeeListPage" />;
      }
        return (
          <form onSubmit={this.handleSubmit}>
            <div>
                <label>UserName</label>
                <input type="text" 
                value={this.state.username} 
                onChange={this.handleUsernameChange}/>
            </div>
            <div>
                <label>Password</label>
                <input type="password" value={this.state.password} onChange={this.handlePasswordChange}/>
            </div>
            
            
            <input type="submit" value="Submit" />
        </form>
      
        )
    }
}

export default Login;
