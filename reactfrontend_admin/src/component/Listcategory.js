import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Listcategory extends Component 
{
    state ={
        dataCategory:[]
    }

    componentDidMount =() =>{
        axios.get('http://localhost:8000/listcategory')
        .then((ambilData) =>{
            console.log(ambilData.data);
            this.setState({
                dataCategory:ambilData.data
            });
        })
    }

    hapusData= (e) =>{
        axios.post('http://localhost:8000/hapusdataCat',{
         id : e
        });

        axios.get('http://localhost:8000/listcategory')        
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
        //cookies end
        const daftarCategory = this.state.dataCategory.map((isi, urutan)=>{
            var urut= urutan +1;
            var categoryID = isi.id_kategori;
            var namacategory =isi.nama_kategori;
            return <tr key={urutan}  style={{textAlign: 'center'}} className="success">
            <td>{urut}</td>
            <td>{namacategory}</td>
            <td>
            <Link to ={{pathname:"/editdatacat/", state:{categoryID: categoryID}}}  className="btn btn-warning btn-xs"><i className="fa fa-edit"></i>Edit</Link>&nbsp;
                  <button className=" btn btn-danger btn-xs" onClick={()=> this.hapusData(categoryID)}><i className="fa fa-remove"></i>Hapus</button>
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
                                            <Link to="#" className="navbar-brand" >Data Category</Link>
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
                                                <div className="card card-plain">
                                                <div className="headercos">
                                                        <h3 className="title" style={{fontSize: '30px'}}>Add Category</h3><p></p>
                                                        <button className="btn btn-success" ><Link to="/tambahcategory" style={{color:"black"}}><i className="fa fa-plus"></i>Tambah Category</Link></button> &nbsp;
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
                                                                    <th style={{textAlign: 'center'}}>Nama Invoice</th>
                                                                    <th style={{textAlign: 'center'}}>Aksi</th>                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>                                                                                                                         
                                                               {daftarCategory}
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