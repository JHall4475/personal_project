import React, { Component } from 'react';
import './App.css';
import Nav from '../src/component/nav/Nav';
import route from '../src/route';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './component/header/Header';
import Footer from './component/footer/Footer'


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
        <Header></Header>
        <Nav></Nav>
        <div>{route}</div>
        <Footer></Footer>
       
      </div>
    );
  }
}

export default App;
