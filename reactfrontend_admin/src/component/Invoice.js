import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Invoice extends Component 
{
    state={
        dataInvoice:[],
        idINV:''
    }

    componentDidMount(){
        axios.get('http://localhost:8000/getdataInvoice')
        .then((ambilData)=>{
            console.log(ambilData)
            this.setState({
                dataInvoice:ambilData.data,
                idINV:ambilData.data.idINV
            })
            
        })
    }
    render() 
    {
        const dataInv = this.state.dataInvoice.map((item, index)=>{
            var urut =index+1;
            var idINV=item.id_invoice
            var namaCos=item.nama
            var Email=item.email
            var Tanggal=item.tgl_buat
            var Harga=item.harga
            var status=item.status
            var gantiStatus='';
                if(status === 0){
                     gantiStatus ='Belum Check'
                }else if(status ===1){
                    gantiStatus ='Lunas'
                }else if(status ===2){
                    gantiStatus='Angsur'
                }else if(status ===3){
                    gantiStatus='Gagal'
                }
            return <tr key={index} style={{textAlign: 'center'}} className="success">
                <td>{urut}</td>
                <td>{idINV}</td>
                <td>{namaCos}</td>
                <td>{Email}</td>
                <td>{Tanggal}</td>
                <td>{Harga}</td>
                <td>{status}</td>
                    <td>
                    {/* <Link onClick={()=>{this.Tombolpicture(dataID);}} className="btn btn-warning fa fa-pencil" to="/editdata/"></Link> &nbsp; */}
                        {/* <Link to ={{pathname:'/editdata', state:{dataID: dataID}}} className="btn btn-warning btn-xs"><i className="fa fa-edit"></i></Link> */}
                        <Link to={{pathname:"/Invoicedetail", state:{idINV:idINV}}} className="btn btn-info btn-sm" >Lihat</Link>
                        
                    </td>
                </tr>
            
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
                                            <Link to="#" className="navbar-brand" >Invoice Page</Link>
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
                                
                                 <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card card-plain">
                                                <div className="headercos">
                                                        {/* <h3 className="title" style={{fontSize: '30px'}}>Add Category</h3><p></p> */}
                                                        {/* <button className="btn btn-success" ><Link to="/tambahcategory" style={{color:"black"}}><i className="fa fa-plus"></i>Tambah Category</Link></button> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama</Link><p /></span>
                                                            {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                            {/* di atas ini yang original */}
                                                    </div>
                                                    <div className="content table-responsive table-full-width">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr style={{background: '#6D8C70', fontFamily:'monospace'}}>
                                                                    
                                                                    <th style={{textAlign: 'center'}}>No. Invoice</th>
                                                                    <th style={{textAlign: 'center'}}>ID Invoice</th>
                                                                    <th style={{textAlign: 'center'}}>Costumer</th>
                                                                    <th style={{textAlign: 'center'}}>Email</th>
                                                                    <th style={{textAlign: 'center'}}>Tanggal</th>
                                                                    <th style={{textAlign: 'center'}}>Harga</th>
                                                                    <th style={{textAlign: 'center'}}>Status</th>
                                                                    <th style={{textAlign: 'center'}}>Detail</th>                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>                                                                                                                         
                                                              {dataInv}
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
export default Invoice;