import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer'; 

class Invoicedetail extends Component 
{
    state ={
        detailInv:[]
    }
    componentDidMount(){
        app.get(`http://localhost:8000/`)
        .then((ambilData)=>(
            this.setState({
                detailInv:ambilData.data
            })
        ))
    }
    render() 
    {
        const detailINV=this.state.detailInv.map((datanya, index)=>{
            var urut= index+1
            var nama=l
            var email=l
            var tanggal=l
            var kodeINV=l

        })
        return (
        <div>
                        <div className="wrapper">
                            <Header/>
                            <div className="main-panel">
                                <nav className="navbar navbar-default">
                                    <div className="container-fluid">
                                        <div className="navbar-header">
                                            <button type="button" className="navbar-toggle">
                                                <span className="sr-only">Toggle navigation</span>
                                                <span className="icon-bar bar1" />
                                                <span className="icon-bar bar2" />
                                                <span className="icon-bar bar3" />
                                            </button>
                                            <Link to="#" className="navbar-brand" >Dashboard</Link>
                                        </div>
                                        <div className="collapse navbar-collapse">
                                            <ul className="nav navbar-nav navbar-right">
                                                <li>
                                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                        <i className="ti-panel" />
                                                        <p>Stats</p>
                                                    </Link>
                                                </li>
                                                <li className="dropdown">
                                                    <Link to="#" className="dropdown-toggle" data-toggle="dropdown">
                                                        <i className="ti-bell" />
                                                        <p className="notification">5</p>
                                                        <p>Notifications</p>
                                                        <b className="caret" />
                                                    </Link>
                                                    <ul className="dropdown-menu">
                                                        <li><Link to="#">Notification 1</Link></li>
                                                        <li><Link to="#">Notification 2</Link></li>
                                                        <li><Link to="#">Notification 3</Link></li>
                                                        <li><Link to="#">Notification 4</Link></li>
                                                        <li><Link to="#">Another notification</Link></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <Link to="#">
                                                        <i className="ti-settings" />
                                                        <p>Settings</p>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                                <div className="container">
                                
                                    <div className="row">
                                    <div className="col-md-11">
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
                                    <div className="col-md-11">
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
                                
                                <Footer/>
                            </div>
                        </div>
                        </div>
            
        );
    }
}
export default Invoicedetail;