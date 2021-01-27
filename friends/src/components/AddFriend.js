import React from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';

class AddFriend extends React.Component {

    state = {
        name: '',
        age: '',
        email: ''
    }
handleChange = (e) => {
    this.setState({...this.state,[e.target.name]:e.target.value })
}

submit = (e) => {
    e.preventDefault();
    axiosWithAuth()
    .post('/friends',this.state)
    .then(res => {
    this.props.history.push('/protected')
    })
    .catch(err =>{
        console.log(err)
    })
}
    render(){
        return(
            <form onSubmit = {this.submit}>
              <label>
                  Enter friends name:
                <input 
                 type ="text"
                 name = "name"
                 value = {this.state.name}
                 onChange = {this.handleChange}
                 />
              </label>
<br/>
              <label>
                  Enter friends age:
                <input 
                 type ="text"
                 name = "age"
                 value = {this.state.age}
                 onChange = {this.handleChange}
                 />
              </label>
<br/>
              <label>
                  Enter friends email:
                <input 
                 type ="text"
                 name = "email"
                 value = {this.state.email}
                 onChange = {this.handleChange}
                 />
              </label>
              <br/>
              <button>Add a friend</button>
            </form>
        )
    }
}

export default AddFriend;