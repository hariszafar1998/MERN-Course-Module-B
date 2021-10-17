import React from 'react';
import PropTypes from 'prop-types';

const UserItem = ({ user: { login, avatar_url, html_url } }) => {
        return (
            <div className="card">
                <img src={avatar_url} alt="Profile" className="gh-profile-image"/>
                <h3>{login}</h3>
                <a className="gh-profile-opening-btn" href={html_url} target="_blank" rel="noreferrer">Profile</a>
            </div>
        )
};

UserItem.propTypes = {
    user: PropTypes.object.isRequired
};

export default UserItem
