import React, { Component } from 'react';
import './App.css';
import Nav from '../src/component/nav/Nav';
import route from '../src/route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


class App extends Component {
  render() {
    return (
      <div className="App">
      <ToastContainer 
      position="top-right"
      autoClose={2500}
      hideProgressBar={false}
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnVisibilityChange={false}
      pauseOnFocusLoss={false}
      draggable
      pauseOnHover={false}
      />
       <Nav></Nav>
       {route}
      </div>
    );
  }
}

export default App;
