import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class TambahdetailSadle extends Component {
    state= {        
        gambar:'',
        descsadle:'',
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

    onchange =(e) => {
        switch(e.target.name){
            case'gambarsadle':
            this.setState({
                gambar:e.target.files[0],
            });
            break;
        }
    }

    value =(e) => {
        this.setState({
           
            descsadle:e.descsadle.value,
            
        })
        
    }
    tambahData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('id_motor',this.state.id_motor);
        formData.append('file',this.state.gambar);
        formData.append('descsadle',this.state.descsadle);        
        axios.post('http://localhost:8000/tambahdatasadle/', formData)
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
                                                    <h3 className="title">Tambah Data Detail Sadle Jok</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container">
                                                    <form className="form-horizontal" onSubmit={this.tambahData} encType="multipart/form-data">
                                                        <fieldset> 
                                                        <div className="form-group">
                                                                <label className="col-lg-2 control-label">ID Motor</label>
                                                                <div className="col-md-1">
                                                                    <input ref="idmotor" type="text" className="form-control" value={this.state.id_motor} disabled/>
                                                                </div>
                                                            </div>
                                                            
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Gambar Sadle Jok</label>
                                                                <div className="col-lg-8">
                                                                    <input name="gambarsadle" onChange={this.onchange} type="file" className="form-control"  placeholder="input gambar sadle"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                    <label htmlFor="description" className="col-sm-2 control-label">Edit Deskripsi Sadle Jok</label>
                                                                    <div className="col-sm-8">
                                                                        <input ref="descsadle" type='text' style={{height:250}} placeholder="Edit Deskripsi" className="form-control" />
                                                                    </div>
                                                            </div>                                                                                                   
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                                                                    <Link to="/tambahdetailGearbox" className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Detail Gearbox</Link>
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
export default TambahdetailSadle;