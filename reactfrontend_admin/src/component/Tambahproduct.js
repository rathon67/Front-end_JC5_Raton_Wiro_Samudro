import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Tambahproduct extends Component {
    state= {
        
        gambar:'',
        namamotor:'',
        desc:'',
        harga:'',
        tahunpembuatan:'',
        pembuat:'',
        datajenis: [],
        jenismotor:'',

        hasil:true
    }

    componentDidMount() {
        axios.get('http://localhost:8000/getdataJenisMotor')
        .then((ambilData) => {
            console.log(ambilData)
            this.setState({
                datajenis:ambilData.data,                
            })
        })
        
    }
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
            tahunpembuatan:e.tahunpembuatan.value,
            pembuat:e.namapembuat.value,
            jenismotor:this.jenismotor.value
        })
        
    }
    tambahData = (e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('file',this.state.gambar);
        formData.append('namamotor',this.state.namamotor);
        formData.append('desc',this.state.desc);
        formData.append('harga',this.state.harga);
        formData.append('tahunpembuatan',this.state.tahunpembuatan);
        formData.append('pembuat',this.state.pembuat);        
        formData.append('jenismotor',this.state.jenismotor);
        axios.post('http://localhost:8000/tambahData/', formData);
    }
    render(){
        //login cookies
        if (cookies.get('adminID') === undefined)
        {
            return <Redirect to='/'/>
        }
        //akhir cookies
        const hasil = this.state.datajenis.map((jenisMotor, index)=>{
            var urutan = index +1;
            var jenismotorID=jenisMotor.id_jenis;
            var jenismotorName=jenisMotor.nama_jenis;
            return <option key={index} value={jenismotorID}>{jenismotorName}</option>

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
                                                    <h3 className="title">Tambah Data Motor</h3><p></p>
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
                                                                <label className="col-lg-2 control-label">Jenis Motor</label>
                                                                <div className="col-lg-8">
                                                                    <select ref={select=>this.jenismotor=select} name="jenismotor" className="form-control" >
                                                                        {hasil}
                                                                    </select>
                                                                    
                                                                </div>
                                                            </div>   
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
                                                                    <label htmlFor="description" className="col-sm-2 control-label">Deskripsi</label>
                                                                    <div className="col-sm-8">
                                                                        <textarea ref="descproduk" style={{height:250}} placeholder="Deskripsi" className="form-control" />
                                                                    </div>
                                                                </div>
                                                            <div className="form-group">
                                                                <label  className="col-lg-2 control-label">Harga</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="hargaproduk" type="number" className="form-control" id="inputEmail" placeholder="Rp." />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label  className="col-lg-2 control-label">Tahun Pembuatan</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="tahunpembuatan" type="number" className="form-control"  placeholder="1940s - 2018" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Pembuat</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="namapembuat" type="text" className="form-control" id="inputNama" placeholder="Builder" />
                                                                </div>
                                                            </div>
                                                                                                                 
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                                                                    <Link to='/tambahproductcarousel' className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Carousel</Link>
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
export default Tambahproduct;