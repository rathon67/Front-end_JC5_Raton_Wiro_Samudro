import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

class Allproduct extends Component
{
    render()
{
    return(
        (
            <div>
                <Sidebar/>
                <Header/>
                <br/><br/><br/>
                <div style={{marginLeft:'170px'}}>
                
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
                
                {/* Header Section*/}
                {/* Table Product */}
                <div className="container-fluid">
                    <div className="row" style={{backgroundColor: 'white'}}>
                    <div className="col-lg-12">
                        <form>
                        <div className="card" style={{marginTop: 50}}>
                            <div className="card-header">
                            <h2>Product</h2>
                            <hr />
                            <a className="btn-sm btn-primary" data-toggle="collapse" href role="button" aria-controls="collapseExample">
                                Tambah
                            </a>
                            </div>
                            <div className="card-body">
                            <div className="table-responsive">
                                <table className="table table-striped table-hover">
                                <thead>
                                    <tr>
                                    <th>No.</th>
                                    <th>ID</th>
                                    <th>Kategori Produk</th>
                                    <th>Nama Product</th>
                                    <th>Harga</th>
                                    <th>Tanggal Input</th>
                                    <th>Status</th>
                                    <th>Setting</th>
                                    </tr>
                                    <tr>
                                    <th scope="row">1</th>
                                    <th>001</th>
                                    <td>Scooter</td>
                                    <td>Vespa VBB1962</td>
                                    <td>Rp 23.000.000</td>
                                    <td>26 Agustus 2018</td>
                                    <td>Tersedia/Booking/Terjual</td>
                                    <td><Link to="/editproduct" className="btn-xs btn-warning" tabIndex={0} role="button" aria-disabled="true">Edit</Link>
                                        <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-info">View</button>
                                        <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                    </td>                                  
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                    <th scope="row">1</th>
                                    <th>002</th>
                                    <td>Motorcycle</td>
                                    <td>BSA 1948</td>
                                    <td>Rp 43.000.000</td>
                                    <td>20 Juni 2018</td>
                                    <td>Tersedia/Booking/Terjual</td>
                                    <td><Link to="/editproduct" className="btn-xs btn-warning" tabIndex={0} role="button" aria-disabled="true">Edit</Link>
                                        <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-info">View</button>
                                        <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                    </td>
                                    </tr>
                                    <tr>
                                    <th scope="row">1</th>
                                    <th>003</th>
                                    <td>Custom</td>
                                    <td>Caferacer Honda</td>
                                    <td>Rp 18.000.000</td>
                                    <td>26 Juli 2018</td>
                                    <td>Tersedia/Booking/Terjual</td>
                                    <td><Link to="/editproduct" className="btn-xs btn-warning" tabIndex={" "} role="button" aria-disabled="true">Edit</Link>
                                        <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-info">View</button>
                                        <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                                    </td>
                                    </tr>
                                </tbody>
                                </table>
                            </div>
                            </div>
                        </div>
                        </form>            
                    </div>
                    </div>
                </div>
                </div>
                
                <Footer/>
                </div>


        )
    );
}
}
export default Allproduct;