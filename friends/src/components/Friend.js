import React from 'react';

const Friend = (props) => {
    const {name,age,email} = props.friend
    return(
        <div>
            <p>name: {name}</p>
            <p>age: {age}</p>
            <p>email: {email}</p>
        </div>
    )

}

export default Friend;