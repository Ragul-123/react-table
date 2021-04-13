import React, { Component } from 'react';

class Dashboard extends Component {
        
  // handle click event of logout button
  handleLogout = () => {    
    this.props.history.push('/login');
  }

  render(){
   let emailID = this.props.match.params.emailID;
  
  return (
    <div className="Login">
            <h2>Welcome to Aspire System</h2>
            <div className="Login-inner">
                <h3>Welcome {emailID}</h3>
                <div className = "text-center">
                    <button className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
                </div>
            </div>
    </div>
  );
 }
}

export default Dashboard;