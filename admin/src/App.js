import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Konten from './component/Konten';
import Addcategory from './component/Addcategory';
import Addproduct from './component/Addproduct';
import Allcategories from './component/Allcategories';
import AllInvoice from './component/AllInvoice';
import Allproduct from './component/AllProduct';
import EditCategory from './component/EditCategory';
import EditProduct from './component/EditProduct';
import Login from './component/Login';

import Register from './component/Register';



class App extends Component {
  render() {
    return (
      <div>
        
      
        <Route exact path="/login" component={Login}/>
        <Route path ="/register" component={Register}/>
        <Route path="/index" component={Konten}/>
        
        
        <Route path="/addcategory" component={Addcategory}/>
        <Route path="/addproduct" component={Addproduct}/>
        <Route path="/allcategories" component={Allcategories}/>
        <Route path="/allinvoice" component={AllInvoice}/>
        <Route path="/allproduct" component={Allproduct}/>
        <Route path="/editcategory" component={EditCategory}/>
        <Route path="/editproduct" component={EditProduct}/>
        
     

      </div>
    );
  }
}

export default App;
