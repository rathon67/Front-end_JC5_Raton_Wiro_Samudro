import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Tambahproduct1 extends Component {
    state= {
        
        gambar:'',
        namamotor:'',
        desc:'',
        harga:'',
        pembuat:'',
        status:'',

        hasil:true
    }
    // tambahData = (e) => {
    //     axios.post(`http://localhost:8000/tambahData`,{
    //         inputSatu: e.gambarproduk.value,
    //         inputDua: e.namaproduk.value,
    //         inputTiga: e.descproduk.value,
    //         inputEmpat: e.hargaproduk.value,
    //         inputLima: e.namapembuat.value,
    //         inputEnam: e.statusproduk.value,
    //         inputTujuh: e.booking.value,
    //         inputDelapan: e.terjual.value
    //     })
    // }

    onchange =(e) => {
        switch(e.target.name){
            case'gambarproduk':
            this.setState({
                gambar:e.target.files[0],
            });
            break;
        }
    }

    value =(e) => {
        this.setState({
           
            namamotor:e.namaproduk.value,
            desc:e.descproduk.value,
            harga:e.hargaproduk.value,
            pembuat:e.namapembuat.value,
            status:e.statusproduk.value
        })
        
    }
    tambahData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',this.state.gambar);
        formData.append('namamotor',this.state.namamotor);
        formData.append('desc',this.state.desc);
        formData.append('harga',this.state.harga);
        formData.append('pembuat',this.state.pembuat);
        formData.append('status',this.state.status);
        axios.post('http://localhost:8000/tambahData/', formData);
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
                                                <div className="card">
                                                    <div className="headercos">
                                                    <h3 className="title">Tambah Data Motor</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                               <div className="row">
                                                    <div className="col-md-10">
                                                        <div className="container">
                                                        <div className="stepwizard">
                                                            <div className="stepwizard-row setup-panel">
                                                            <div className="stepwizard-step">
                                                                <a href="#step-1" type="button" className="btn btn-primary btn-circle">1</a>
                                                                <p>Data Motor</p>
                                                            </div>
                                                            <div className="stepwizard-step">
                                                                <a href="#step-2" type="button" className="btn btn-default btn-circle" disabled="disabled">2</a>
                                                                <p>Data Carousel Pada Detail Motor</p>
                                                            </div>
                                                            <div className="stepwizard-step">
                                                                <a href="#step-3" type="button" className="btn btn-default btn-circle" disabled="disabled">3</a>
                                                                <p>Data Detail </p>
                                                            </div>
                                                            </div>
                                                        </div>
                                                        <form role="form">
                                                            <div className="row setup-content" id="step-1">
                                                            <div className="col-xs-10">
                                                                <div className="col-md-10">
                                                                <h3> Data Motor</h3>
                                                                <div className="container">
                                                                    <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                                                                        <fieldset> 
                                                                            <input type="hidden" className="form-control" ref="idproduk" />
                                                                            
                                                                            <div className="form-group">
                                                                                <label className="col-lg-2 control-label">GambarProduct</label>
                                                                                <div className="col-lg-8">
                                                                                    <input name="gambarproduk" onChange={this.onchange} type="file" className="form-control" id="inputGambar" placeholder="input nama product"/>
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label className="col-lg-2 control-label">Nama Product</label>
                                                                                <div className="col-lg-8">
                                                                                    <input ref="namaproduk" type="text" className="form-control" id="inputNama" placeholder="Input Nama Product" />
                                                                                </div>
                                                                                </div>
                                                                                <div className="form-group">
                                                                                    <label htmlFor="description" className="col-sm-2 control-label">Edit Deskripsi Iklan</label>
                                                                                    <div className="col-sm-8">
                                                                                        <textarea ref="descproduk" style={{height:250}} placeholder="Edit Deskripsi" className="form-control" />
                                                                                    </div>
                                                                                </div>
                                                                            <div className="form-group">
                                                                                <label  className="col-lg-2 control-label">Harga</label>
                                                                                <div className="col-lg-8">
                                                                                    <input ref="hargaproduk" type="number" className="form-control" id="inputEmail" placeholder="Input Harga" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label className="col-lg-2 control-label">Pembuat</label>
                                                                                <div className="col-lg-8">
                                                                                    <input ref="namapembuat" type="text" className="form-control" id="inputNama" placeholder="Input Nama Pembuat" />
                                                                                </div>
                                                                            </div>
                                                                            <div className="form-group">
                                                                                <label className="col-lg-2 control-label">Status</label>
                                                                                <div className="col-lg-8">
                                                                                    <select ref="statusproduk" className="form-control" id="exampleSelect2">
                                                                                    <option defaultValue="Tersedia" ref="tersedia">Tersedia</option>
                                                                                    <option defaultValue="Booking" ref="booking">Booking</option>
                                                                                    <option defaultValue="Terjual" ref="terjual">Terjual</option>
                                                                                    </select>
                                                                                    
                                                                                </div>
                                                                            </div>                                                      
                                                                            
                                                                            <div className="form-group">
                                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                                    <button type="submit" onClick={() => this.tambahData(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                                                                                    <Link to="/tambahproductcarousel" className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Carousel</Link>
                                                                                    {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                                                                                </div>
                                                                            </div>
                                                                        </fieldset>   
                                                                    </form>
                                                                </div>
                                                                <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                                                                </div>
                                                            </div>
                                                            </div>
                                                            <div className="row setup-content" id="step-2">
                                                                <div className="col-xs-10">
                                                                    <div className="col-md-10">
                                                                    <h3> Data Carousel Pada Detail Motor</h3>
                                                                    <div className="form-group">
                                                                        <label className="control-label">Company Name</label>
                                                                        <input maxLength={200} type="text" required="required" className="form-control" placeholder="Enter Company Name" />
                                                                    </div>
                                                                    <div className="form-group">
                                                                        <label className="control-label">Company Address</label>
                                                                        <input maxLength={200} type="text" required="required" className="form-control" placeholder="Enter Company Address" />
                                                                    </div>
                                                                    <button className="btn btn-primary nextBtn btn-lg pull-right" type="button">Next</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row setup-content" id="step-3">
                                                                <div className="col-xs-10">
                                                                    <div className="col-md-10">
                                                                    <h3> Step 3</h3>
                                                                    <button className="btn btn-success btn-lg pull-right" type="submit">Finish!</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </form>
                                                    </div>    
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
export default Tambahproduct1;