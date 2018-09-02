import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class TambahdetailKelistrikan extends Component {
    state ={
        id_motor:'',
       
    }
    componentDidMount(){
        axios.get(`http://localhost:8000/getIdMotor`)
        .then((ambilData)=>{
            this.setState({
                
                id_motor:ambilData.data[0].id_motor,
                
            })
        })
    }
    tambahData = (e) => {
        axios.post(`http://localhost:8000/tambahdatakelistrikan`,{
            id_motor:e.idmotor.value,
            sistemPengapian: e.sistempengapian.value,
            battery: e.battery.value,
            typeBusy: e.typebusy.value            
        })
        .then((ambilData)=>{
            var notife= ambilData.data
            if(notife==1){
                alert("data berhasil di input")
            }        
        })
    }
    render(){
        
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
                                                    <Link to="#" className="navbar-brand">Dashboard</Link>
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
                                                        <Link to="/logout">
                                                                <i className="ti-hand-point-right" />
                                                                <p>Logout</p>
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
                                                <div className="card">
                                                    <div className="headercos">
                                                    <h3 className="title">Tambah Data Detail Kelistrikan</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container">
                                                    <form className="form-horizontal">
                                                        <fieldset> 
                                                        <div className="form-group">
                                                                <label className="col-lg-2 control-label">ID Motor</label>
                                                                <div className="col-md-1">
                                                                    <input ref="idmotor" type="text" className="form-control" value={this.state.id_motor} disabled/>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Sistem Pengapian</label>
                                                            <div className="col-lg-8">
                                                                <input ref="sistempengapian"  type="text" className="form-control"  placeholder="input data Sistem pengapian"/>
                                                            </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">battery</label>
                                                            <div className="col-lg-8">
                                                                <input ref="battery"  type="text" className="form-control"  placeholder="input  data Battery"/>
                                                            </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Type Busy</label>
                                                            <div className="col-lg-8">
                                                                <input ref="typebusy"  type="text" className="form-control"  placeholder="input data type Busy"/>
                                                            </div>
                                                            </div>                                                                                        
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><Link to="/dashboard"><i className="fa fa-paper-plane"></i> Submit</Link></button>&nbsp;
                                                                    {/* <Link to="/tambahdetailkelistrikan" className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Detail Kelistrikan</Link> */}
                                                                    {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                                                                </div>
                                                            </div>
                                                        </fieldset>   
                                                    </form>
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
export default TambahdetailKelistrikan;