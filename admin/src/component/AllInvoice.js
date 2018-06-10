import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

class Allinvoice extends Component
{
    render()
{
    return(
        (
            <div>
              <Sidebar/>
              <Header/>
              <br/><br/><br/>
              <div style={{marginLeft:"170px"}}>
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
            <div className="container-fluid">
              <form>
                <div className="card" style={{marginTop: 50}}>
                  <div className="card-header">
                    <h4>History Invoice</h4>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table table-striped table-hover">
                        <thead>
                          <tr>
                            <th>Invoice Number</th>
                            <th>ID Invoice</th>
                            <th>Nama Motor</th>
                            <th>Costumer</th>
                            <th>Email</th>                                      
                            <th>tanggal</th>                                      
                            <th>Harga</th>                                      
                            <th>Status</th>                                      
                            <th>Setting</th>                                      
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <th scope="row">1</th>
                            <td>001S</td>
                            <td>Vespa 1962</td>
                            <td>Udin</td>
                            <td>Udinmantap@gmail.com</td>
                            <td>27/03/1999</td>
                            <td>Rp. 15.600.000</td>
                            <td>Lunas</td>
                            <td><a href className="btn-xs btn-info" tabIndex={-1} role="button" aria-disabled="true">Lihat</a>
                              <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>001G</td>
                            <td>BSA 1946</td>
                            <td>Udin</td>
                            <td>Udinmantap@gmail.com</td>
                            <td>27/03/1999</td>
                            <td>Rp. 8.800.000</td>
                            <td>Lunas</td>
                            <td><a href className="btn-xs btn-info" tabIndex={-1} role="button" aria-disabled="true">Lihat</a>
                              <button type="button" data-toggle="modal" ref="#myModal" className="btn-xs btn-danger">Delete</button>
                            </td>
                          </tr>
                          <tr>
                            <th scope="row">3</th>
                            <td>001J</td>
                            <td>Trail Cb</td>
                            <td>Udin</td>
                            <td>Udinmantap@gmail.com</td>
                            <td>27/03/1999</td>
                            <td>Rp. 5.600.000</td>
                            <td>Lunas</td>
                            <td><button type="button" className="btn-xs btn-info" data-toggle="modal" data-target="#exampleModal">
                                Lihat
                              </button>
                              {/* Modal */}
                              <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div className="modal-dialog" role="document">
                                  <div className="modal-content">
                                    <div className="modal-header">
                                      <h5 className="modal-title" id="exampleModalLabel">Invoice</h5>
                                      <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                        <span aria-hidden="true">×</span>
                                      </button>
                                    </div>
                                    <div className="modal-body">
                                      <div className="container">
                                        <div className="row">
                                          <div className="col-md-12">
                                            <div className="invoice-title">
                                              <h1 style={{color: 'brown'}}>Invoice</h1><h3 className="text-right">Order Id # hxs1234567</h3>
                                            </div>
                                            <hr />
                                            <div className="row">
                                              <div className="col-md-6">
                                                <address>
                                                  <strong>Billed To:</strong><br />
                                                  Udin Mantap<br />
                                                  udinmantap@gmail.com
                                                </address>
                                              </div>
                                              <div className="col-md-6 text-right">
                                                <address>
                                                  <strong>Shipped To:</strong><br />
                                                  Gg paliman Pasar Manggis Rt 04/02 kelurahan Guntur<br />
                                                  Setia Budi, Jakarta Selatan<br />
                                                  Indonesia, 727222
                                                </address>
                                              </div>
                                            </div>
                                            <div className="row">
                                              <div className="col-md-6">
                                                <address>
                                                  <strong>Payment Method:</strong><br />
                                                  <br />
                                                </address>
                                              </div>
                                              <div className="col-md-6 text-right">
                                                <address>
                                                  <strong>Order Date:</strong><br />
                                                  March 7th, 2018<br /><br />
                                                </address>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                        <div className="row">
                                          <div className="col-md-12">
                                            <div className="panel panel-default">
                                              <div className="panel-heading">
                                                <h3 className="panel-title"><strong>Order summary</strong></h3>
                                              </div>
                                              <div className="panel-body">
                                                <div className="table-responsive">
                                                  <table className="table table-condensed">
                                                    <thead>
                                                      <tr>
                                                        <td><strong>Jenis Order</strong></td>
                                                        <td className="text-center"><strong>Strength</strong></td>
                                                        <td className="text-center"><strong>Quantity</strong></td>
                                                        <td className="text-right"><strong>Price</strong></td>
                                                      </tr>
                                                    </thead>
                                                    <tbody>
                                                      {/* foreach ($order->lineItems as $line) or some such thing here */}
                                                      <tr>
                                                        <td>Vespa VBB 1962</td>
                                                        <td className="text-center">1 Unit</td>
                                                        <td className="text-center">1 Pasang New wheels</td>
                                                        <td className="text-right">Rp. 12.000.000,00</td>
                                                      </tr>
                                                      <tr>
                                                        <td>Booking Test Rider</td>
                                                        <td className="text-center" />
                                                        <td className="text-center" />
                                                        <td className="text-right" />
                                                      </tr>
                                                      <tr>
                                                        <td className="thick-line" />
                                                        <td className="thick-line" />
                                                        <td className="thick-line text-center"><strong>Subtotal</strong></td>
                                                        <td className="thick-line text-right">Rp. 12.000.000,00</td>
                                                      </tr>
                                                      <tr>
                                                        <td className="no-line" />
                                                        <td className="no-line" />
                                                        <td className="no-line text-center"><strong>Shipping</strong></td>
                                                        <td className="no-line text-right">Rp. 700.000,00</td>
                                                      </tr>
                                                      <tr>
                                                        <td className="no-line" />
                                                        <td className="no-line" />
                                                        <td className="no-line text-center"><strong>Total</strong></td>
                                                        <td className="no-line text-right">Rp. 12.700.000,00</td>
                                                      </tr>
                                                    </tbody>
                                                  </table>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="modal-footer">
                                      <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                    </div>
                                  </div>
                                </div>
                              </div>
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
            <Footer/>
          </div>
          
        )
    );
}
}
export default Allinvoice;