import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

class Allcategories extends Component
{
    render()
{
    return(
        (
        <div>
            <Sidebar/>
            <Header/>
            <br/><br/><br/>
            <div style={{marginLeft:"160px"}}>
            
            {/* Counts Section */}
            <section className="dashboard-counts section-padding">
                <div className="container-fluid">
                <div className="row">
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-user" /></div>
                        <div className="name"><strong className="text-uppercase">New Clients</strong><span>Last 7 days</span>
                        <div className="count-number">25</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-padnote" /></div>
                        <div className="name"><strong className="text-uppercase">Work Orders</strong><span>Last 5 days</span>
                        <div className="count-number">400</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-check" /></div>
                        <div className="name"><strong className="text-uppercase">New Quotes</strong><span>Last 2 months</span>
                        <div className="count-number">342</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-bill" /></div>
                        <div className="name"><strong className="text-uppercase">New Invoices</strong><span>Last 2 days</span>
                        <div className="count-number">123</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-list" /></div>
                        <div className="name"><strong className="text-uppercase">New Product</strong><span>Last 3 months</span>
                        <div className="count-number">92</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-list-1" /></div>
                        <div className="name"><strong className="text-uppercase">New Cates</strong><span>Last 7 days</span>
                        <div className="count-number">70</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            </div>
            <div className="container-fluid">
                <div className="row" style={{backgroundColor: 'white'}}>
                <div className="col-lg-2 " />
                <div className="col-lg-8">
                    <form>
                    <div className="card" style={{marginTop: 50}}>
                        <div className="card-header">
                        <h4>All Categories</h4>
                        </div>
                        <div className="card-body">
                        <div className="table-responsive">
                            <table className="table table-striped table-hover">
                            <thead>
                                <tr>
                                <th>ID</th>
                                <th>Nama Kategori</th>
                                <th>Deskripsi</th>
                                <th>Setting</th>                                      
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                <th scope="row">1</th>
                                <td>Scooter</td>
                                <td>GudangLama</td>
                                <td><Link to="/editcategory" className="btn-xs btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                                    <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                </td>
                                </tr>
                                <tr>
                                <th scope="row">2</th>
                                <td>Motorcycle</td>
                                <td>Thornton</td>
                                <td><Link to="/editcategory" className="btn-xs btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                                    <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button></td>
                                </tr>
                                <tr>
                                <th scope="row">3</th>
                                <td>Costum</td>
                                <td>Elders</td>
                                <td><Link to="/editcategory" className="btn-xs btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                                    <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button></td>
                                </tr>
                            </tbody>
                            </table>
                        </div>
                        </div>
                    </div>
                    </form>            
                </div>
                <div className="col-lg-2" />
                </div>
                </div>
           <br/><br/><br/><br/>
            <Footer/>            
        </div>
        )
    );
}
}
export default Allcategories;