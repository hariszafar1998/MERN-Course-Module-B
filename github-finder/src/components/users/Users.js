import React from 'react'
import UserItem from './UserItem'
import Spinner from '../layouts/Spinner'
import PropTypes from 'prop-types'

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

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users
