import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Listcategory extends Component 
{
    state = {
        dataMember:[],
    }
componentDidMount =() => {
    axios.get('http://localhost:8000/listmember')
    .then((ambilData) =>{
        console.log(ambilData.data);
        this.setState({
            dataMember:ambilData.data
        });
    })
}   
    render() {
                const daftarMember =this.state.dataMember.map((isi, urutan) => {
                    var urut = urutan +1;
                    var memberID = isi.id_user;
                    var namaDepan =isi.nama_depan;
                    var namaBel =isi.nama_belakang;
                    var email =isi.email;
                    var alamat =isi.alamat_lengkap;
                    var country =isi.alamat_negara;
                    var pos =isi.kodepos;
                    var password =isi.password;
                    var phone =isi.no_telp;
                    var ttl =isi.ttl;
                    return <tr key={urutan} className="success">
                    <td>{urut}</td>

                    <td>{namaDepan}</td>
                    <td>{namaBel}</td>
                    <td>{email}</td>
                    <td>{alamat}</td>
                    <td>{country}</td>
                    <td>{pos}</td>
                    <td>{password}</td>
                    <td>{phone}</td>
                    <td>{ttl}</td>
                    <td>
                    <Link to ={{pathname:"/editdatamember/", state:{memberID: memberID}}}  className="btn btn-warning btn-xs"><i className="fa fa-edit"></i>Edit</Link>&nbsp;
                        <button className=" btn btn-danger btn-xs" onClick={()=> this.hapusData(memberID)}><i className="fa fa-remove"></i>Delete</button>
                    </td>
                    </tr>
    });
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
                                <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-md-12">
                                                <div className="card card-plain">
                                                     <div className="headercos">
                                                        <h3 className="title" style={{fontSize: '30px'}}>Data Member Client</h3><p></p>
                                                        &nbsp;
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama</Link><p /></span>                                                           
                                                    </div>
                                                    <div className="content table-responsive table-full-width">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr style={{background: '#6D8C70', fontFamily:'monospace'}}>
                                                                    <th style={{textAlign: 'center'}}>Nomor</th>
                                                                    <th style={{textAlign: 'center'}}>Nama Depan</th> 
                                                                    <th style={{textAlign: 'center'}}>Nama Belakang</th> 
                                                                    <th style={{textAlign: 'center'}}>Email</th>
                                                                    <th style={{textAlign: 'center'}}>Alamat Lengkap</th>
                                                                    <th style={{textAlign: 'center'}}>Alamat Negara</th>
                                                                    <th style={{textAlign: 'center'}}>Kode Pos</th>
                                                                    <th style={{textAlign: 'center'}}>Password</th>
                                                                    <th style={{textAlign: 'center'}}>Phone Number</th>
                                                                    <th style={{textAlign: 'center'}}>Tanggal Lahir</th>
                                                                    <th style={{textAlign: 'center'}}>Aksi</th>                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>                                                                                                                         
                                                               {daftarMember}
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
export default Listcategory;