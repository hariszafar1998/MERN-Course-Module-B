import React, { Component } from 'react';
import Navbar from './components/layouts/navbar';
import Users from './components/users/Users';
import axios from 'axios';
import './App.css';
import Search from './components/users/Search';
import Alert from './components/layouts/Alert';

class App extends Component {
  state = {
    users: [],
    loading: false,
    alert: null,
    alertVisible: false
  };

  searchUsers = async (text) => {
    this.setState({ loading: true });
    const res = await axios.get(`https://api.github.com/search/users?q=${text}&client-id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client=secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`)
    this.setState({ users: res.data.items, loading: false });
  };

  eraseData = () => {
    this.setState({ users: [], loading: false });
  };

  setAlert = (message) => {
    this.setState({ alert: {message} });
    setTimeout(() => this.setState( {alert: null} ), 5000);
  };

  removedNotification = () => {
    this.setState({alert: null});
  };

  render() {
    const { users, loading } = this.state;
    return (
      <div>
        <Navbar title='GitHub Finder' />
        <Alert alert={this.state.alert}
        removedNotification={this.removedNotification}/>
        <Search searchUsers={this.searchUsers} 
                eraseData={this.eraseData} 
                showClear={users.length > 0 ? true : false}
                setAlert={this.setAlert}/>
        <div className="container">
          <Users loading={loading} users={users} />
        </div>
      </div>
    );
  }
};

export default App;