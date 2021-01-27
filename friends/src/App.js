
import './App.css';
import Login from './components/Login';
import FriendsList from './components/FriendsList'
import {BrowserRouter as Router,Route,Link,Switch} from "react-router-dom";
import PrivateRoute from './utils/PrivateRoute';
import AddFriend from './components/AddFriend';
import UpdateFriend from './components/UpdateFriend'

function App() {

  return (
    <div className="App">
       <Router>
      <Link to ="/login">Login</Link>
      {/* <Link  onClick = {logout}> Log out </Link> */}
     {localStorage.getItem('token') && <Link  to ="/add_friend"> Add friend </Link>} 
     {localStorage.getItem('token') && <Link  to ="/protected"> All friends </Link>} 

      <Switch>
        <PrivateRoute exact path = "/protected" component ={FriendsList} />
        <PrivateRoute path = "/add_friend" component = {AddFriend} />
        <PrivateRoute path = "/friends/:id"  component = {UpdateFriend}/>
        <Route to = "/login" component={Login} />
      </Switch>
      </Router>
    
    </div>
  );
}

export default App;
