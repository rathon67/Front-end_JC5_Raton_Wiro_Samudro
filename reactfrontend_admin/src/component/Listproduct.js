import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Listproduct extends Component 
{
        state = {
            dataProduk:[],            
        }
        /**
         * 
         * inti dari state adalah variable. STATE di gunakan karena apabila nilainya berubah, maka component akan merender ulang
         * */
        /** PROPS adalah data yang di lembar dari PARENT(component) KE CHILD (component). bersifat satu arah dari (atas ke bawah) */
        /** Redux digunakan untuk sebuah variabel yang global dan bisa di panggil oleh semua component jika ingin mengakses */
        componentDidMount =() => {
            axios.get('http://localhost:8000/listproduct')        
                .then((ambilData) =>{
                    console.log(ambilData.data);
                    this.setState({
                        dataProduk:ambilData.data
                    });
                })
            
        }

        hapus =(e) =>{
            
            // console.log(e)
            axios.post('http://localhost:8000/hapusdata',{
            id : e
            });

            axios.get('http://localhost:8000/listproduct')        
            .then((ambilData) =>{
                // console.log(ambilData.data);
                this.setState({dataProduk:ambilData.data});
            })       

        }
    render() 
      
    {   
        //cookies
        if (cookies.get('adminID') === undefined)
        {
            return <Redirect to='/'/>
        }
        //akhir cookies condition
         
                const daftarProduk= this.state.dataProduk.map((isi, urutan )=>{
                var urut = urutan+1;
                var dataID = isi.id_motor;
                var dataGambar = isi.gambar;
                var namaProduk= isi.nama_motor;
                var descProduk= isi.desc_product;
                var hargaProduk = isi.harga;
                var namaPembuat = isi.pembuat;
                var status = isi.status;
                var post = isi.posted;
                return <tr key={urutan} style={{textAlign: 'center'}} className="success">
                <td>{urut}</td>
                <td>{dataGambar}</td>
                <td>{namaProduk}</td>
                <td>{descProduk}</td>
                <td>{hargaProduk}</td>
                <td>{namaPembuat}</td>
                <td>{status}</td>
                <td>{post}</td>
                    <td>
                    <Link onClick={()=>{this.Tombolpicture(dataID);}} className="btn btn-warning fa fa-pencil" to="/editdata/"></Link> &nbsp;
                        <Link to ={{pathname:'/editdata', state:{dataID: dataID}}} className="btn btn-warning btn-xs"><i className="fa fa-edit"></i>Edit</Link>
                        <button className="btn btn-danger btn-xs" onClick={() => this.hapus(dataID)}><i className="fa fa-remove"></i>Hapus</button>
                        
                    </td>
                </tr>
                }
            );
        
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
                                                        <h3 className="title" style={{fontSize: '30px'}}>Add Product</h3><p></p>
                                                        <button><Link to="/tambahproduct"><i className="fa fa-plus"></i>Tambah Product</Link></button> &nbsp;
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama</Link><p /></span>
                                                            {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                            {/* di atas ini yang original */}
                                                    </div>
                                                    <div className="content table-responsive table-full-width">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr style={{background: '#6D8C70', fontFamily:'monospace'}}>
                                                                    <th style={{textAlign: 'center'}}>No.</th>
                                                                    <th style={{textAlign: 'center'}}>Gambar</th>
                                                                    <th style={{textAlign: 'center'}}>Nama Motor</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Deskripsi</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Harga</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Pembuat</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Status</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Posted</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Aksi</th>                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>                                                                                                                         
                                                               {daftarProduk}
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
export default Listproduct;