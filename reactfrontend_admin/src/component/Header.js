import React, { Component } from 'react';
import {Link, Route } from 'react-router-dom';

class Header extends Component 
{
	render() 
	{
		return (
                    <div>
                        <div className="sidebar" data-background-color="white" data-active-color="danger">
                            <div className="sidebar-wrapper">
                                <div className="logo">
                                    <Link to="/" style={{fontFamily:"Fantasy",fontSize:"25px"}} className="simple-text">rustymoTo Corp</Link>
                                </div>
                                <ul className="nav">
                                    <li className="active">
                                        <Link to="./Dashboard">
                                            <i className="ti-panel" />
                                            <p>Dashboard</p>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link to="./User">
                                            <i className="ti-user" />
                                            <p>Admin Profile</p>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link to="./listmember">
                                            <i className="ti-user" />
                                            <p>List Member Client</p>
                                        </Link>
                                    </li>
                                    <li className="active">
                                        <Link to="./listcategory">
                                            <i className="ti-list" />
                                            <p>List Category</p>
                                        </Link>
                                    </li>
                                    <li  className="active">
                                        <Link to="./listproduct">
                                            <i className="ti-view-list-alt" />
                                            <p>Products</p>
                                        </Link>
                                    </li>
                                    <li  className="active">
                                        <Link to="./Invoice">
                                            <i className="ti-pencil-alt2" />
                                            <p>Invoice</p>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                );
	}
}
export default Header;