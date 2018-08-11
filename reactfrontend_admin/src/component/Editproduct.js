import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Editproduct extends Component {
    state = {
        
        dataIDMotor:'',
        jenis:'',
        gambarproduk:'',
        namaproduk:'',
        descproduk:'',
        hargaproduk: '',
        namapembuat:'',
        statusproduk:'',
        datajenis:[]

    }
    //fungsi didmount adalah untuk memunculkan data yang mengandung id yang di tuju di database
    componentDidMount(){
        var id =this.props.location.state.dataID;
        axios.get('http://localhost:8000/editdata/'+id)
        //.then adalah untuk bersiap menerima respin dari server backend di atas
        .then(
            (hasilAmbil)=>{
            console.log(hasilAmbil);
            this.setState({
                dataIDMotor :hasilAmbil.data[0].id_motor,
                jenis :hasilAmbil.data[0].id_jenis,
                gambarproduk :hasilAmbil.data[0].gambar,
                namaproduk :hasilAmbil.data[0].nama_motor,
                descproduk:hasilAmbil.data[0].desc_product,
                hargaproduk :hasilAmbil.data[0].harga,
                namapembuat :hasilAmbil.data[0].pembuat,
                status :hasilAmbil.data[0].status,
            })
        });
        axios.get('http://localhost:8000/getdata')
        .then((ambilData) => {
            this.setState({
                datajenis:ambilData.data
                // status:status.data
            })
        });
    }

    
    
    //di bagian input file(jika terjadi perubahan ma akan dijalankan fungsi "onchange")
    onchange =(e)=>{
        switch(e.target.name){
            case'gambarproduk':
            this.setState({
                gambarproduk:e.target.files[0],
            });
            // case'jenismotor':
            // this.setState({
            //     jenis:e.target.textarea
            // })
            break
        }
    }
    value = (e) =>{
    this.setState({
        id: e.idproduk.value,
        
        namaproduk :e.namaproduk.value,
        descproduk:e.descproduk.value,
        hargaproduk: e.hargaproduk.value,
        namapembuat:e.namapembuat.value,
        statusproduk:e.statusproduk.value
        })
    }

    //supaya tidak terjadi pengulangan submit 2kali (prevent default)
    updateData =(e) =>{
        
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', this.state.id);
        // formData.append('jenis', this.state.jenismotor);
        formData.append('file', this.state.gambarproduk);       
        formData.append('namaproduk', this.state.namaproduk);
        formData.append('descproduk', this.state.descproduk);
        formData.append('hargaproduk', this.state.hargaproduk);
        formData.append('namapembuat', this.state.namapembuat);
        formData.append('statusproduk', this.state.statusproduk);
        axios.post('http://localhost:8000/ubahData', formData);

    }
    render(){
        //Cookies login
        if (cookies.get('adminID') === undefined)
        {
            return <Redirect to='/'/>
        }
        //akhir cookies login

        const hasil = this.state.datajenis.map((jenisMotor, index)=>{
            var urutan = index +1;
            var jenismotorID=jenisMotor.id_jenis;
            var jenismotorName=jenisMotor.nama_jenis;
            return <option key={index} value={jenismotorID}>{jenismotorName}</option>
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
                                                    <h3 className="title">Edit Data Motor</h3><p></p>
                                                        {/* <input type="submit" defaultValue="Entri Baru" /> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama </Link><p /></span>
                                                        {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                        {/* di atas ini yang original */}
                                                    </div>
                                                </div>

                                                {/* Konten */}
                                                <div className="container">
                                                    <form className="form-horizontal" onSubmit={this.updateData} encType="multipart/form-data">
                                                        <fieldset>
                                                             {/*untuk mengambil ID Motor  */}
                                                             <input type="hidden" className="form-control" ref="idproduk" Value={this.state.dataIDMotor}/>
                                                        
                                                            {/* untuk mengambil ID motor */}
                                                            {/* <div className="form-group">
                                                                <label className="col-lg-2 control-label">Jenis Motor</label>
                                                                <div className="col-lg-8">
                                                                    <select  ref={select=>this.jenismotor=select} name="jenismotor" onChange={this.onchange} Value={this.state.jenis} className="form-control" >
                                                                        {hasil}
                                                                    </select>                                                                    
                                                                </div>
                                                            </div>  */}
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">GambarProduct</label>
                                                                <div className="col-lg-8">
                                                                    <input name="gambarproduk" onChange={this.onchange} type="file"  className="form-control" id="inputGambar" Value={this.state.gambarproduk} placeholder="input nama product"/>
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Nama Product</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="namaproduk" type="text" className="form-control" id="inputNama" Value={this.state.namaproduk} placeholder="Input Nama Product" />
                                                                </div>
                                                                </div>
                                                                <div className="form-group">
                                                                    <label htmlFor="description" className="col-sm-2 control-label">Edit Deskripsi</label>
                                                                    <div className="col-sm-8">
                                                                        <textarea ref="descproduk" style={{height:250}} placeholder="Edit Deskripsi" className="form-control" />
                                                                    </div>
                                                                </div>
                                                            <div className="form-group">
                                                                <label  className="col-lg-2 control-label">Harga</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="hargaproduk" type="number" className="form-control" id="inputharga" Value={this.state.hargaproduk} placeholder="Input Harga" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Pembuat</label>
                                                                <div className="col-lg-8">
                                                                    <input ref="namapembuat" type="text" className="form-control" id="inputNama" Value={this.state.namapembuat} placeholder="Input Nama Pembuat" />
                                                                </div>
                                                            </div>
                                                            <div className="form-group">
                                                                <label className="col-lg-2 control-label">Status</label>
                                                                <div className="col-lg-8">
                                                                    <select ref="statusproduk" className="form-control" id="exampleSelect2" Value={this.state.statusproduk}>
                                                                    <option defaultValue="Tersedia" ref="tersedia">Tersedia</option>
                                                                    {/* <option defaultValue="Booking" ref="booking">Booking</option>
                                                                    <option defaultValue="Terjual" ref="terjual">Terjual</option> */}
                                                                    </select>
                                                                    
                                                                </div>
                                                            </div>                                                      
                                                            
                                                            <div className="form-group">
                                                                <div className="col-lg-10 col-lg-offset-2">
                                                                    <button type="reset" className="btn btn-warning"><i className="fa fa-remove"></i> Cancel</button>&nbsp;
                                                                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-success"><i className="fa fa-paper-plane"></i> Submit</button>&nbsp;
                                                                    {/* <Link to="/tambahproductcarousel" className="btn btn-primary" ><i className="fa fa-arrow-right"></i>Tambah Carousel</Link> */}
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
export default Editproduct;