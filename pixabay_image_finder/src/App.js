import React, { Component } from 'react';
import NavBar from './components/navbar/Navbar';
import Search from './components/search/Search';
import './App.css';

class App extends Component {
  render() {
    return (
      <>
        <NavBar />
        <Search />
      </>
    );
  }
}

export default App;