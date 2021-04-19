import React, { Component } from 'react';

class Dashboard extends Component {

  handleLogout = () => {
    this.props.history.push('/Home');
  }

  handleTable = () => {
    this.props.history.push('/Orders');
  }

  render() {
    let emailID = this.props.match.params.emailID;

    return (
      <div className="Login">
        <h2>Welcome to Aspire System</h2>
        <div className="Login-inner">
          <h3>Welcome {emailID}</h3>
          <div className="text-center">
            <button className="btn btn-primary" onClick={this.handleTable}>WO_ORDER_ACCOUNT_EXECS Table</button>
            <br></br><br></br>
            <button className="btn btn-primary" onClick={this.handleLogout}>Logout</button>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;