import React from 'react';
import {useHistory} from "react-router-dom";
import { axiosWithAuth } from '../utils/axiosWithAuth';

const Friend = (props) => {
    const {name,age,email} = props.friend;
    const history = useHistory();

    const deleteFriend = (e) => {
     axiosWithAuth()
     .delete(`/friends/${props.friend.id}`)
     .then(res => {
         console.log(res)
         props.setFriends(res.data)
     })
     .catch(err => {
         console.log(err)
     })
    }

    return(
        <div >
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>email: {email}</p>
            <button onClick={()=>{history.push(`/friends/${props.friend.id}`)}}>Update friend's data</button>
            <button onClick = {deleteFriend}>Delete friend's data</button>
        </div>
    )

}

export default Friend;