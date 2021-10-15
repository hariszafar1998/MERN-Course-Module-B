import React, { Component } from 'react';
import Navbar from './components/layouts/navbar';
import UserItem from './components/users/UserItem';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar title='GitHub Finder' />
        <UserItem />
      </div>
    );
  }
};

export default App;