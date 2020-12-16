import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Login from './components/Login'
import FriendList from './components/FriendList'
import PrivateRoute from './components/PrivateRoute';


function App() {


  return (
    <Router>
    <div className="App">
       <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
         
          <li>
            <Link to="/protected">Protected Page</Link>
          </li>
        </ul>
        <Switch>
        {/* <Route exact path="/protected" component={FriendList} />  */}

        <PrivateRoute exact path="/protected" component={FriendList} />
         <Route path='/login' component={Login} />

        </Switch>
    </div>
    </Router>
  );
}

export default App;
