import React, { Component } from 'react'

class useritem extends Component {

    state = {
        id: '1',
        login: 'mojombo',
        avatar_url: 'https://avatars.githubusercontent.com/u/1?v=4',
        html_url: 'https://github.com/mojombo'
    };

    render() {
        const { login, avatar_url, html_url } = this.state;
        return (
            <div className="card">
                <img src={avatar_url} alt="Profile" className="gh-profile-image"/>
                <h3>{login}</h3>
                <a className="gh-profile-opening-btn" href={html_url}>Profile</a>
            </div>
        )
    }
}

export default useritem
