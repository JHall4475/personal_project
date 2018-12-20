import React, { Component } from 'react';
import './App.css';
import Nav from '../src/component/nav/Nav';
import route from '../src/route';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ToastContainer />
       
       <Nav></Nav>
       {route}
      </div>
    );
  }
}

export default App;
