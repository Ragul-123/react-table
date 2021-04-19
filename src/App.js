import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./components/Home";
import Dashboard from "./components/Dashboard";
import Register from "./components/Register";
import Orders from "./components/Orders";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/Home' component={Home} />
            <Route path='/Register' component={Register} />
            <Route path='/Dashboard/:emailID' component={Dashboard} />
            <Route path='/Orders' component={Orders} />

          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;