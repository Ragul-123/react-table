import React, { Component } from 'react';
import axios from 'axios';

class Register extends Component {
  constructor(props) {
    super(props);

    this.state = {
      email: '',
      password: '',
      loginStatus:'',
      isLoggedIn:''  
    };
  };
  
  handleInputChange = event => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };
  
   // handle click event of back button
  handleLogin = () => {
      this.props.history.push('/login');
  }

  handleSubmit = event => {
    event.preventDefault()

    const registerUrl = 'http://localhost/api/login/register';

    const { email,password } = this.state;

    const employee = {
        email,
        password
    };

    axios.post(registerUrl,employee)
    .then(response =>{
     console.log(response.data);
     
      if(response.data.Status === "Error"){
        this.setState(
          { loginStatus : response.data.Message,
            isLoggedIn:false });
      }
      else{
        this.setState(
          { loginStatus : response.data.Message,
            isLoggedIn:true });
      }
    });
  };

  render() {
    let {isLoggedIn} = this.state;

    const renderAuthButton = () => {
      if (!isLoggedIn) {
        return  <div> <h5>{this.state.loginStatus}</h5> </div>; }

      else{
        return  <div> <h5>{this.state.loginStatus}</h5>  </div>; }
    }

    return (
        <div className="Login">
            <h2>Welcome to Aspire System</h2>
            <div className="Login-inner">
                <form onSubmit={this.handleSubmit}>            
                     <h3>Register</h3>
    
                    <div className="form-group">
                        <label>Email address</label>
                        <input 
                        type="email" 
                        className="form-control" 
                        name="email"
                        placeholder="Email"
                        autoComplete="email"
                        onChange={this.handleInputChange}
                       required/>
                    </div>
    
                    <div className="form-group">
                        <label>Password</label>
                        <input 
                         type="password"
                         className="form-control"
                         name="password"
                         placeholder="Password"
                         autoComplete="current-password"
                         onChange={this.handleInputChange}
                         required />
                    </div>
                    
                    <div className = "text-center">
                        <button type="submit" className="btn btn-primary" >Create</button>
                    </div>

                    {renderAuthButton()}
                 
                </form> 
                <div>
                    <button className="btn btn-primary" onClick={this.handleLogin}>Back to Login Page</button> 
                </div> 
            </div>
        </div>
      );
  }
}

export default Register;