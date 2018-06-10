import React, { Component } from 'react';
import {Link} from 'react-router-dom';

class Sidebar extends Component {
    render() 
    {
    return (
        <div>
            {/* Side Navbar */}
            <nav className="side-navbar">
            <div className="side-navbar-wrapper">
                {/* Sidebar Header    */}
                <div className="sidenav-header d-flex align-items-center justify-content-center">
                {/* User Info*/}
                <div className="sidenav-header-inner text-center"><img src="img/avatar-1.jpg" alt="person" className="img-fluid rounded-circle" />
                    <h2 className="h5">Rathon Wiro Samudro</h2><span>Web Developer</span>
                </div>
                {/* Small Brand information, appears on minimized sidebar*/}
                <div className="sidenav-header-logo"><a href="index.html" className="brand-small text-center"> <strong>R</strong><strong className="text-primary">moTo</strong></a></div>
                </div>
                {/* Sidebar Navigation Menus*/}
                <div className="main-menu">
                <h5 className="sidenav-heading">Main</h5>
                <ul id="side-main-menu" className="side-menu list-unstyled">                  
                    <li><a href="index.html"> <i className="icon-home" />Home</a></li>
                    <li><a href="#exampledropdownDropdown" aria-expanded="false" data-toggle="collapse"> <i className="icon-list" />Product</a>
                    <ul id="exampledropdownDropdown" className="collapse list-unstyled ">
                        <li><Link to="/allproduct">All Product</Link></li>
                        <li><Link to="addproduct.html">Add Product</Link></li>
                        <li><Link to="editproduct.html">Edit Product</Link></li>
                    </ul>
                    </li>
                    <li><a href="#exampledropdownDropdowncate" aria-expanded="false" data-toggle="collapse"> <i className="icon-check" />Category</a>
                    <ul id="exampledropdownDropdowncate" className="collapse list-unstyled ">
                        <li><Link to="/allcategories">All Categories</Link></li>
                        <li><Link to="/addcategory">Add Category</Link></li>
                        <li><Link to="/editcategory">Edit Categories</Link></li>
                    </ul>
                    </li>
                    <li><a href="#exampledropdownDropdownbill" aria-expanded="false" data-toggle="collapse"> <i className="icon-bill" />Billing</a>
                    <ul id="exampledropdownDropdownbill" className="collapse list-unstyled ">
                        <li><Link to="allinvoice.html">All Invoice</Link></li>
                    </ul>
                    </li>
                    <li><Link to="/login"> <i className="icon-interface-windows" />Login page</Link></li>
                    <li> <a href="#"> <i className="icon-mail" />Demo
                        <div className="badge badge-warning">6 New</div></a></li>
                </ul>
                </div>
                <div className="admin-menu">
                <h5 className="sidenav-heading">Second menu</h5>
                <ul id="side-admin-menu" className="side-menu list-unstyled"> 
                    <li> <a href="#"> <i className="icon-screen"> </i>Demo</a></li>
                    <li> <a href="#"> <i className="icon-flask"> </i>Demo
                        <div className="badge badge-info">Special</div></a></li>
                    <li> <a href> <i className="icon-flask"> </i>Demo</a></li>
                    <li> <a href> <i className="icon-picture"> </i>Demo</a></li>
                </ul>
                </div>
            </div>
            </nav>
        </div>
        
    );
    }
    } export default Sidebar;