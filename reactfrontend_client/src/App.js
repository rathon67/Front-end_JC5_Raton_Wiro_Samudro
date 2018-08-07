import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Header from './component/Header';
import Footer1 from './component/Footer1';
import Konten from './component/Konten';
import CetailProduct from './component/Cetailproduct';
import Cart from './component/Cart';
import Editprofile from './component/Editprofile';
import Invoice from './component/Invoice';
import Invoicehistory from './component/Invoicehistory';
import Listproduct from './component/Listproduct';
import Login from './component/Login';
import Register from './component/Register';
import Profile from './component/Profile';
import Checkout from './component/Checkout';
import Logout from './component/Logout';



class App extends Component {
  render() {
    return (
      <div>
        <Header/> 
        <Route exact path="/" component={Login}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/cetail" component={CetailProduct}/>
        <Route path ="/cart" component={Cart}/>
        <Route path ="/editprofile" component={Editprofile}/> 
        <Route path ="/profile" component={Profile}/> 
        <Route path ="/invoice" component={Invoice}/> 
        <Route path ="/invoicehistory" component={Invoicehistory}/> 
        <Route path ="/listproduct" component={Listproduct}/> 
        <Route path ="/konten" component={Konten}/> 
        <Route path ="/register" component={Register}/>
      
        <Route path ="/checkout" component={Checkout}/> 
     

        <Footer1/>
      </div>
    );
  }
}

export default App;

