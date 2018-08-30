import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class detailpembayaran extends Component 
{
    state = {
        detaildataPembayaran:[]
    }

    componentDidMount(){
        var kodeINV =this.props.location.state.kodeINV;
        // console.log(id)
        axios.post(`http://localhost:8000/detailpembayaran`,{
            kodeINV:kodeINV
        })
        .then((terimaData)=>{
            console.log(terimaData.data)
            this.setState({
                detaildataPembayaran:terimaData.data
            });
        })
    }
    render() 
    {
        const data =this.state.detaildataPembayaran.map((data, urutan)=>{
            var urut= urutan+1
            var dataStruk =data.data;
            console.log(dataStruk)
            var idOrder=data.id_buktipembayaran;
            var namaOrder=data.deskripsi;
            var posted=data.tgl_upload;
            
            var harga=data.harga_item
            return <tr key={urutan} style={{textAlign: 'center'}} className="success">
                <td>{urut}</td>
                {/* <td>{email}</td>
                <td>{nama}</td>
                <td>{alamat}</td>
                <td>{harga}</td> */}
                {/* <td>{hargaProduk}</td> */}
                {/* <td>{harga}</td> */}
                <td><img src={'http://localhost:8000/filebuktiTransfer/'+dataStruk}  style={{width: 'auto', height: '75px'}} /></td>
                <td>{idOrder}</td>
                
                <td>{namaOrder}</td>
                <td>{posted}</td>
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
                                            <Link to="#" className="navbar-brand" >Billing Detail</Link>
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
                                                                    
                                                                    <th style={{textAlign: 'center'}}>No.pembayaran</th>
                                                                    <th style={{textAlign: 'center'}}>Data Pembayaran</th>
                                                                    <th style={{textAlign: 'center'}}>ID Order</th>
                                                                    <th style={{textAlign: 'center'}}>Deskripsi</th>
                                                                    <th style={{textAlign: 'center'}}>Tanggal Upload</th>
                                                                                                                                       
                                                                </tr>
                                                            </thead>
                                                            <tbody>                                                                                                                         
                                                             {data}
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
export default detailpembayaran;