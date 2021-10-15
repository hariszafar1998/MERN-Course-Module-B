import React, { Component } from 'react';
import PropTypes from 'prop-types';

class navbar extends Component {
    static defaultProps = {
        title: 'GitHub Finder',
        icon: 'fab fa-github'
    };

    static propTypes = {
        title: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired
    };
    render() {
        return (
            <nav className="navbar">
                <h2><i className="fab fa-github"></i>{this.props.title}</h2>
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        )
    }
}

export default navbar
