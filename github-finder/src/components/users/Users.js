import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'

const Users = (props) => {
    if ( props.loading ) {
        return (
        <div className="spinner">
            <Spinner />
        </div>
        )
    } else {
        return (
            <div className="gridstyle">
                {props.users.map( user => (
                    <UserItem key={user.id} user={user} />
                ))}
            </div>
        )
    }
}

export default Users
