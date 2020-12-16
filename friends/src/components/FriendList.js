import React from 'react';
import {axiosAuth} from '../utils/axiosAuth'

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
        console.log( res);

        this.setState({
          friends: res.data
        });
      })
      .catch((err)=>{
        console.log(err);
      })
  };

    render(){
        return(
         <div>
             {this.state.friends.map(friend => {
                 return(
                     <div key={friend.id}>
                         <h3>{friend.name}</h3>
                         <p>Age:{friend.age}</p>
                         <p>email:{friend.email}</p>
                     </div>
                 )
             })}

         </div>
        )
    }

}

export default FriendList;
