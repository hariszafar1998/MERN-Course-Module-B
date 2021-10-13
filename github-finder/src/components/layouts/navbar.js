import React, { Component } from 'react'

export class navbar extends Component {
    render() {
        return (
            <nav className="navbar">
                <h2><i className="fab fa-github"></i>GitHub Finder</h2>
                <ul className="navbar-links">
                    <li>Home</li>
                    <li>About</li>
                </ul>
            </nav>
        )
    }
}

export default navbar
