import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Invoicedetail extends Component 
{
    state ={
        detailInv:[],
        dataInvoiceproduct:[],

        namaProduct:'',
        jmlpro:'',
        namaCos:'',
        email:'',
        harga:'',
        tanggal:'',
        kota:'',
        pos:'',
        phone:'',
        alamat:'',
        kodeINV:''
    }
    componentDidMount(){
        var invID = this.props.location.state.idINV;
        console.log(invID)
        axios.get(`http://localhost:8000/getdataInvoiceDetail/`+invID)
        .then((ambilData)=>{
            console.log(ambilData)
            this.setState({
            //     detailInv:ambilData.data,

                    namaProduct:ambilData.data[0].nama_product,
                    jmlpro:ambilData.data[0].jumlah_product,
                    namaCos:ambilData.data[0].nama,
                    email:ambilData.data[0].email,
                    harga:ambilData.data[0].harga,
                    tanggal:ambilData.data[0].tgl_buat,
                    kota :ambilData.data[0].kota,
                    pos :ambilData.data[0].pos,
                    phone:ambilData.data[0].phone,
                    alamat:ambilData.data[0].alamat,
                    kodeINV:ambilData.data[0].belum,

                    hargaSum:ambilData.data[0].harga,
                
            })
        })
        
        // axios.get(`http://localhost:8000/getdataCheckoutonDetailInvoice/`+invID)
        // .then((ambilData)=>{
        //     this.setState({
        //         dataInvoiceproduct:ambilData.data
        //     })
        // })
    }
    render() 
    {
        // const detailINV=this.state.detailInv.map((datanya, index)=>{
        //     var urut= index+1
        //     var namaProduct=datanya.nama_product
        //     var jmlpro=datanya.jumlah_product
        //     var namaCos=datanya.nama
        //     var email=datanya.email
        //     var harga=datanya.harga
        //     var tanggal=datanya.tgl_buat
        //     var kota =datanya.kota
        //     var pos =datanya.pos
        //     var phone=datanya.phone
        //     var kodeINV=datanya.belum
        //     var
        //     return
        // })
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
                                            <Link to="#" className="navbar-brand" >Data Detail Invoice</Link>
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
                                            {this.state.namaCos}<br />
                                            {this.state.email}
                                            </address>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <address>
                                            <strong>Shipped To:</strong><br />
                                            {this.state.alamat}<br />
                                            Setia Budi, {this.state.kota}<br />
                                            Indonesia, {this.state.pos}
                                            </address>
                                        </div>
                                        </div>
                                        <div className="row">
                                        <div className="col-md-6">
                                            <address>
                                            <strong>Payment Method:</strong><br />
                                            Transfer<br />
                                            </address>
                                        </div>
                                        <div className="col-md-6 text-right">
                                            <address>
                                            <strong>Order Date:</strong><br />
                                            {this.state.tanggal}<br /><br />
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
                                                    <td>{this.state.namaProduct}</td>
                                                    <td className="text-center">1 Unit</td>
                                                    <td className="text-center"></td>
                                                    <td className="text-right">Rp. {this.state.harga},00</td>
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
                                                    <td className="thick-line text-right">Rp. {this.state.harga},00</td>
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
                                    <Link to ='#'  className="btn btn-success btn-xs pull-center"><i className="fa fa-edit"></i>Konfirmasi Dan Cetak ke Client</Link>&nbsp;
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