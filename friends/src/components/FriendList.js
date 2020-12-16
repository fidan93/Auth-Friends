import React from 'react';
import axiosAuth from '../utils/axiosAuth'

class FriendList extends React.Component{

    state = {
        friends: []
    };

componentDidMount(){
    this.getData();
}

   getData = () => {
   
    axiosAuth()
    .get('/friends')
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
        console.log(err)
    })
   } 

    render(){
        return(
            <div>hello</div>
        )
    }

}

export default FriendList;
