import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
// import Home from './component/Home';
import Header from './component/Header';
import Footer from './component/Footer';
import Login from './component/Login';
import Dashboard from './component/Dashboard';
import User from './component/User';
// import Producttambah from './component/Producttambah';
// import Productlist from './component/Productlist';
// import Categorylist from './component/Categorylist';
// import Productedit from './component/Productedit';
// import Categoryedit from './component/Categoryedit';
import Invoice from './component/Invoice';

import Listcategory from './component/Listcategory';
import Listproduct from './component/Listproduct';
import Listmember from './component/Listmember';
import Tambahcategory from './component/Tambahcategory';
import Tambahproduct from './component/Tambahproduct';
import Tambahproductcarousel from './component/Tambahproductcarousel';
import TambahdetailLight from './component/TambahdetailLight';
import TambahdetailSadle from './component/TambahdetailSadle';
import TambahdetailGearbox from './component/TambahdetailGearbox';
import TambahdetailShocks from './component/TambahdetailShocks';
import TambahdetailBrakes from './component/TambahdetailBrakes';
import TambahdetailWheels from './component/TambahdetailWheels';
import TambahdetailMesin from './component/TambahdetailMesin';
import TambahdetailDimensi from './component/TambahdetailDimensi';
import TambahdetailRangka from './component/TambahdetailRangka';
import TambahdetailKelistrikan from './component/TambahdetailKelistrikan';

import Editproduct from './component/Editproduct';
import Logout from './component/Logout';
import CheckoutConfirmation from './component/CheckoutConfirmation';
import Datapembayaran from './component/Datapembayaran';
import detailpembayaran from './component/Detailpembayaran';
import Invoicedetail from './component/Invoicedetail';

class App extends Component 
{
    render() 
    {
        return (
                    <div>                        
                        <Route exact path="/" component={Login}/>
                        <Route path="/logout" component={Logout}/>
                        <Route path="/User" component={User}/>                      
                        <Route path="/Dashboard" component={Dashboard}/>
                        <Route path="/listcategory" component={Listcategory}/>
                        <Route path="/listproduct" component={Listproduct}/>
                        <Route path="/editdata" component={Editproduct}/>
                        <Route path="/listmember" component={Listmember}/>
                        <Route path="/tambahcategory" component={Tambahcategory}/>
                        <Route path="/tambahproduct" component={Tambahproduct}/>                        
                        <Route path="/tambahproductcarousel" component={Tambahproductcarousel}/>
                        <Route path="/tambahdetaillight" component={TambahdetailLight}/>
                        <Route path="/tambahdetailsadle" component={TambahdetailSadle}/>
                        <Route path="/tambahdetailgearbox" component={TambahdetailGearbox}/>
                        <Route path="/tambahdetailshocks" component={TambahdetailShocks}/>
                        <Route path="/tambahdetailbrakes" component={TambahdetailBrakes}/>
                        <Route path="/tambahdetailwheels" component={TambahdetailWheels}/>
                        <Route path="/tambahdetailmesin" component={TambahdetailMesin}/>
                        <Route path="/tambahdetaildimensi" component={TambahdetailDimensi}/>
                        <Route path="/tambahdetailrangka" component={TambahdetailRangka}/>
                        <Route path="/tambahdetailkelistrikan" component={TambahdetailKelistrikan}/>                        
                        <Route path="/checkoutkonfirmasi" component={CheckoutConfirmation}/>
                        <Route path="/datapembayaran" component={Datapembayaran}/>
                        <Route path="/detailpembayaran" component={detailpembayaran}/>
                        <Route path="/Invoice" component={Invoice}/>
                        <Route path="/Invoicedetail" component={Invoicedetail}/>                        
                    </div>
                );
    }
}
export default App;