import React from 'react';
import PropTypes from 'prop-types';

const navbar = (props) => {
        return (
            <nav className="navbar">
                <h2><i className="fab fa-github"></i>{props.title}</h2>
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        )
}

navbar.defaultProps = {
    title: 'GitHub Finder',
    icon: 'fab fa-github'
};

navbar.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
};

export default navbar
