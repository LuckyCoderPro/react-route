import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Friend from '../FRIEND/Friend';

const Friends = () => {
    const friends = useLoaderData();
    return (
        <div>
            <p>I have so many friend, YAY</p>
            {
                friends.map(friend => <Friend key={friend.id} friend={friend}></Friend>)
            }
        </div>
    );
};

export default Friends;