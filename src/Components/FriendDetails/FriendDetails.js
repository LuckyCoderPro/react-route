import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetails = () => {
    const friend = useLoaderData();
    const { name, phone, email, website } = friend;
    return (
        <div>
            <h1>{name}</h1>
            <p>Call : {phone}</p>
            <p>email : {email}</p>
            <span>web : {website}</span>
        </div>
    );
};

export default FriendDetails;