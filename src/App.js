import React, { Component } from 'react';
import './App.css';
import Nav from '../src/component/nav/Nav';
import route from '../src/route';


class App extends Component {
  render() {
    return (
      <div className="App">
       <Nav></Nav>
       {route}
      </div>
    );
  }
}

export default App;
