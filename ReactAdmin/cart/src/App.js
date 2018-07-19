import React, { Component } from 'react';
import {Route} from 'react-router-dom';
import Navbar from './components/Navbar';
import Listproduct from './components/Listproduct';
import Editproduct from './components/Editproduct';
import Tambahproduct from './components/Tambahproduct';
import Login from './components/Login';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar/>
        <Route exact path="/" component={Login}></Route>
        <Route path="/listproduct" component={Listproduct}></Route>
        <Route path="/editdata" component={Editproduct}></Route>
        <Route path="/tambahproduk" component={Tambahproduct}></Route>
      </div>
    );
  }
}

export default App;
