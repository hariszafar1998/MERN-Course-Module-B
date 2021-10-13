import React, { Component } from 'react';
import Navbar from './components/layouts/navbar';
import './App.css';

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        {/* <h1>Hello World!</h1> */}
      </div>
    );
  }
};

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World!</h1>
//     </div>
//   );
// }

export default App;
