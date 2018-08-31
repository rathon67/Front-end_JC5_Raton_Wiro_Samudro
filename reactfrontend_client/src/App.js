import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Cookies from 'universal-cookie';

import Header from './component/Header';
import HeaderLogin from './component/HeaderLogin';
import Footer1 from './component/Footer1';
import Konten from './component/Konten';
import DetailProduct from './component/Detailproduct';
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
    const cookies = new Cookies()
    let cookieid =cookies.get('userID')
    let Navigation =(!cookieid) ? <Header/> :  <HeaderLogin/>

    return (
      <div>
        {Navigation} 
        <Route exact path="/" component={Konten}/>
        <Route exact path="/konten" component={Konten}/>
        <Route path="/logout" component={Logout}/>
        <Route path="/detail" component={DetailProduct}/>
        <Route path ="/cart" component={Cart}/>
        <Route path ="/editprofile" component={Editprofile}/> 
        <Route path ="/profile" component={Profile}/> 
        <Route path ="/invoice" component={Invoice}/> 
        <Route path ="/invoicehistory" component={Invoicehistory}/> 
        <Route path ="/listproduct" component={Listproduct}/> 
        <Route path ="/login" component={Login}/> 
        <Route path ="/register" component={Register}/>      
        <Route path ="/checkout" component={Checkout}/>
        <Footer1/>
      </div>
    );
  }
}

export default App;

