import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class TambahdetailRangka extends Component {
    state ={
        id_motor:''
    }
    componentDidMount(){
        axios.get(`http://localhost:8000/getIdMotor`)
        .then((ambilData)=>{
            this.setState({
                id_motor:ambilData.data[0].id_motor
            })
        })
    }
    tambahData = (e) => {

        axios.post(`http://localhost:8000/tambahdatarangka`,{
            id_motor:e.idmotor.value,
            inputSatu: e.typerangka.value,
            inputDua: e.suspensidepan.value,
            inputTiga: e.suspensibelakang.value,
            inputEmpat: e.remdepan.value,
            inputLima: e.rembelakang.value,            
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
                                                    <h3 className="title">Tambah Data Detail Rangka</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container">
                                                    <form className="form-horizontal" >
                                                        <fieldset> 
                                                        <div className="form-group">
                                                                <label className="col-lg-2 control-label">ID Motor</label>
                                                                <div className="col-md-1">
                                                                    <input ref="idmotor" type="text" className="form-control" value={this.state.id_motor} disabled/>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Type Rangka</label>
                                                            <div className="col-lg-8">
                                                                <input ref="typerangka"  type="text" className="form-control" id="inputGambar" placeholder="input data type rangka"/>
                                                            </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Suspensi Depan</label>
                                                            <div className="col-lg-8">
                                                                <input ref="suspensidepan"  type="text" className="form-control" id="inputGambar" placeholder="input  data Suspensi Depan"/>
                                                            </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Suspensi Belakang</label>
                                                            <div className="col-lg-8">
                                                                <input ref="suspensibelakang"  type="text" className="form-control" id="inputGambar" placeholder="input data Suspensi Belakang"/>
                                                            </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Rem Depan</label>
                                                            <div className="col-lg-8">
                                                                <input ref="remdepan"  type="text" className="form-control" id="inputGambar" placeholder="input data Rem Depan"/>
                                                            </div>
                                                            </div>
                                                            <div className="form-group">
                                                            <label className="col-lg-2 control-label">Rem Belakang</label>
                                                            <div className="col-lg-8">
                                                                <input ref="rembelakang"  type="text" className="form-control" id="inputGambar" placeholder="input data Rem belakang"/>
                                                            </div>
                                                            </div>                                                                                          
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="button" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                                                                    <Link to="/tambahdetailkelistrikan" className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Detail Kelistrikan</Link>
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
export default TambahdetailRangka;