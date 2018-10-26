import React, { Component } from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/sidebar';
import Content from './components/maincontent';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div>
      <Header/>
      <Sidebar/>
      <Content/>
      <Footer/>
      </div>
    );
  }
}

export default App;
