import React from 'react';
import {useAuth0} from '@auth0/auth0-react'
function Profile(props) {
    const {user} = useAuth0();
    console.log(user, 'user')
    return (
        <div>
            {JSON.stringify(user)}
        </div>
    );
}

export default Profile;