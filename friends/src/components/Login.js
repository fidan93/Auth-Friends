import React from 'react';
import axios from 'axios';

class Login extends React.Component {
 
    state = {
            username: '',
            password: ''
    }

    handleChange = (e) => {
     this.setState({...this.state,[e.target.name]:e.target.value})
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios
        .post('http://localhost:5000/api/login',this.state)
        .then(res =>{
            localStorage.setItem('token', res.data.payload)
            this.props.history.push('/protected');
        })
        .catch(err=>{
            console.log(err)
        })
    }

 render(){
    return(
        <form onSubmit = {this.handleSubmit}>
          <label>
              Username:
            <input 
                type = 'text' 
                name = "username"
                value = {this.state.username}
                onChange = {this.handleChange} 
             />
          </label>
          <br/>   
          <label>
              Password:
            <input 
                type = 'password' 
                name = "password"
                value = {this.state.password}
                onChange = {this.handleChange} 
             />
          </label>
          <br/>
          <button>Log in</button>
        </form>
    )
 }
}

export default Login