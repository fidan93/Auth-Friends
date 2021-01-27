
import React,{useState} from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import {useParams,useHistory} from 'react-router-dom';

const UpdateFriend = () => {
 const [values,setValues] = useState({name:'',age:'',email:""})
 const {id} = useParams();
 const history = useHistory();
 const handleChange = (e) => {
     setValues({...values,[e.target.name]:e.target.value})
 }

 const submit = (e) => {
     e.preventDefault()
     console.log(id)
     axiosWithAuth()
     .put(`/friends/${id}`,values)
     .then(res => {
       history.push('/protected')  
     })
     .catch(err => {
         console.log(err)
     })
    
 }
    return (
       
        <form onSubmit = {submit}>
              <label>
                  Update friend's name:
                <input 
                 type ="text"
                 name = "name"
                 value = {values.name}
                 onChange = {handleChange}
                 />
              </label>
<br/>
              <label>
                 Update friend's age:
                <input 
                 type ="text"
                 name = "age"
                 value = {values.age}
                 onChange = {handleChange}
                 />
              </label>
<br/>
              <label>
                  Update friend's email:
                <input 
                 type ="text"
                 name = "email"
                 value = {values.email}
                 onChange = {handleChange}
                 />
              </label>
              <br/>
              <button>Update</button>
            </form>
    )
}

export default UpdateFriend;