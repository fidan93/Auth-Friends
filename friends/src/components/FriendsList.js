import React,{useEffect,useState} from 'react';
import {axiosWithAuth} from '../utils/axiosWithAuth';
import Friend from './Friend';

const FriendsList = () => {
 const [friends,setFriends] = useState([]);

    useEffect(()=>{
     axiosWithAuth()
     .get('/friends')
     .then(res => {
         setFriends(res.data)
     })
     .catch(err=>{
         console.log(err)
     })
    },[])

    return(
    <div>
   {friends.map(friend => {
       return <Friend friend={friend}  key = {friend.id} setFriends={setFriends}/>
   })}
   
    </div>)
}

export default FriendsList;