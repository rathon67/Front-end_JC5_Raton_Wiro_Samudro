import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';

class Tambahproductcarousel extends Component {
    state= {
        
        gambar1:'',
        gambar2:'',
        gambar3:'',
        judulcarou:'',
        desccarou:'',
        

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
            case'carousel':
            this.setState({
                gambar1:e.target.files[0],
                gambar2:e.target.files[0],
                gambar3:e.target.files[0]          
            });
            break;
            default:
        }
    }

    value =(e) => {
        this.setState({
           
            judulcarou:e.judulcarou.value,
            desccarou:e.desccarou.value,
            
        })
        
    }
    tambahData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file1',this.state.gambar1);
        formData.append('file2',this.state.gambar2);
        formData.append('file3',this.state.gambar3);
        formData.append('judulcarou',this.state.judulcarou);
        formData.append('desccarou',this.state.desccarou);
      
        axios.post('http://localhost:8000/tambahdataproductcarou/', formData)
        .then((hasil)=> {
            var respon=hasil.data;
            if(respon === 1){
                this.setState({
                    status:true
                })
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
                                                    <h3 className="title">Tambah Data Carousel Pada Detail Motor</h3><p></p>
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
                                                            <input type="hidden" className="form-control" ref="idproduk" />
                                                            
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">JUDUL MOTOR</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="judulcarou" type="text" className="form-control" id="inputNama" placeholder="Input Judul" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                    <label htmlFor="description" className="col-sm-2 control-label">Tambah Deskripsi Carousel</label>
                                                                    <div className="col-sm-8">
                                                                        <textarea ref="desccarou" style={{height:250}} placeholder="Tambah Deskripsi" className="form-control" />
                                                                    </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">GambarProduct</label>
                                                                <div className="col-lg-8">
                                                                    <input name="carou1" onChange={this.onchange} type="file" className="form-control"  placeholder="input nama product"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">GambarProduct</label>
                                                                <div className="col-lg-8">
                                                                    <input name="carou2" onChange={this.onchange} type="file" className="form-control"  placeholder="input nama product"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">GambarProduct</label>
                                                                <div className="col-lg-8">
                                                                    <input name="carou3" onChange={this.onchange} type="file" className="form-control"  placeholder="input nama product"/>
                                                                </div>
                                                            </div>                                                
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                                                                    <Link to="/tambahdetaillight" className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Detail Light</Link>
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
export default Tambahproductcarousel;