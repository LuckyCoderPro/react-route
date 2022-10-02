import React from 'react';
import { Link } from 'react-router-dom';

const Friend = ({ friend }) => {
    const { id, name, email, username } = friend;
    return (
        <div className='bg-light border rounded m-3 p-3'>
            <h4>{name}</h4>
            <p>{email}</p>
            <p><small>UserName : <Link to={`/friend/${id}`}>{username}</Link></small></p>
        </div>
    );
};

export default Friend;