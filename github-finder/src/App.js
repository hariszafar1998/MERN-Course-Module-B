import React, { Component } from 'react';
import Navbar from './components/layouts/navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
import Search from './components/users/Search';

class App extends Component {
  state = {
    users: [],
    loading: false
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client=secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  };

  eraseData = () => {
    this.setState({ users: [], loading: false });
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar title='GitHub Finder' />
        <Search searchUsers={this.searchUsers} 
                eraseData={this.eraseData} 
                showClear={users.length > 0 ? true : false}/>
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
};

export default App;