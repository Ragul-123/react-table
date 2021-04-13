import React from 'react';
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";

import Login from "./Login";
import Dashboard from "./Dashboard";
import Register from "./Register";
import Orders from "./Orders";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <Router>
        <div className="App">
            <Switch>
              <Route exact path='/' component={Login} />  
              <Route path='/Login' component={Login} />  
              <Route path='/Register' component={Register} /> 
              <Route path='/Dashboard/:emailID' component={Dashboard} />
              <Route path='/Orders' component={Orders} />
            </Switch>
        </div>
    </Router>
  );
}

export default App;