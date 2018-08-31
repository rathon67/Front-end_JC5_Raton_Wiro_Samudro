import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import axios from 'axios';
// import Cookies from 'universal-cookie';

// const Cookies = new Cookies();

class CheckoutConfirmation extends Component 
{
    state = {
        dataCheckout:[],
        idUser:''        
    }

    componentDidMount(){
        axios.get(`http://localhost:8000/getDataCheckout`)
        .then((terimaData)=>{
            console.log(terimaData)
            this.setState({
                dataCheckout:terimaData.data,
               
            });
        })
    }

    updateStatusLunas =(e) =>{
        var idUser =this.state.idUser
        // console.log(idUser)    
        // console.log(e)
        axios.post('http://localhost:8000/updateStatusLunas',{
        kodeCheckout : e,
        idUser:idUser
        })
        // axios.get('http://localhost:8000/listproduct')        
        .then((ambilData) =>{
            console.log(ambilData);
            this.setState({
                idcheckout:ambilData.data,
                iduser:ambilData.data
            });            
        })     
        // window.location.reload()
    }
    updateStatusAngsur =(e) =>{
         
        // console.log(e)
        axios.post('http://localhost:8000/updateStatusAngsur',{
            kodeCheckout : e,
        
        })

        // axios.get('http://localhost:8000/listproduct')        
        .then((ambilData) =>{
            // console.log(ambilData.data);
            // this.setState({dataProduk:ambilData.data});
            
        })       
        window.location.reload()
    }
    updateStatusGagal =(e) =>{
            
        // console.log(e)
        axios.post('http://localhost:8000/updateStatusGagal',{
            kodeCheckout : e
        
        })
        
        // axios.get('http://localhost:8000/listproduct')        
        .then((ambilData) =>{
            // console.log(ambilData.data);
         
        })       
        window.location.reload()
    }
    render() 
    {
        const data =this.state.dataCheckout.map((data, urutan)=>{
            var urut= urutan+1
            var idCheckout =data.id_checkout;
            var idCart=data.id_cart;
            var idUser =data.id_user;
            // console.log(idUser)
            var email=data.email;
            var kodeINV=data.kode_checkout;
            var nama=data.nama;
            var alamat=data.alamat;
            var kota=data.kota;
            var pos=data.pos;
            var phone=data.phone;
            var order=data.order_time;
            var kodeCheckout=data.kode_checkout;        
            /**merubah harga ke Rp */
            var harga=data.harga_item;            
            harga =harga+harga*0.1+1200000;
            var	number_string = harga.toString(),
                sisa 	= number_string.length % 3,
                rupiah 	= number_string.substr(0, sisa),
                ribuan 	= number_string.substr(sisa).match(/\d{3}/g);
                    
            if (ribuan) {
                var separator = sisa ? '.' : '';
                rupiah += separator + ribuan.join('.');
            }
            var hargaRP= rupiah
            /**akhir */
            var status=data.status;

            // var gantiStatus='';
            //     if(status === 1){
            //          gantiStatus ='Belum Check'
            //     }else if(status ===1){
            //         gantiStatus ='Lunas'
            //     }else if(status ===2){
            //         gantiStatus='Angsur'
            //     }else if(status ===3){
            //         gantiStatus='Gagal'
            //     }
            
            return <tr key={urutan} style={{textAlign: 'center'}} className="success">
                <td>{urut}</td>
                <td>{kodeINV}</td>
                <td>{email}</td>
                <td>{nama}</td>
                <td>{alamat}</td>
                <td>Rp.{hargaRP}</td>
                {/* <td>{hargaProduk}</td> */}
                {/* <td>{harga}</td> */}
                <td><Link to={{pathname:'/detailpembayaran', state:{kodeINV: kodeINV}}}>Lihat </Link></td>
                <td>{status}</td>
                
                <td>
                    {/* <Link onClick={()=>{this.Tombolpicture(dataID);}} className="btn btn-warning fa fa-pencil" to="/editdata/"></Link> &nbsp; */}
                        <button type="button" onClick={()=>this.updateStatusLunas(kodeCheckout)} className="btn btn-success btn-xs"><i className="fa ti-check"></i></button>&nbsp;
                        <button type="button" onClick={()=>this.updateStatusAngsur(kodeCheckout)} className="btn btn-warning btn-xs" ><i className="fa fa-minus"></i></button>&nbsp;
                        <button type="button" onClick={()=>this.updateStatusGagal(kodeCheckout)} className="btn btn-danger btn-xs" ><i className="fa fa-close"></i></button>&nbsp;
                        
                    </td>
                </tr>
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
                                            <Link to="#" className="navbar-brand" >Page Checkout Data</Link>
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
                                                        {/* <h3 className="title" style={{fontSize: '30px'}}>Add Category</h3><p></p> */}
                                                        {/* <button className="btn btn-success" ><Link to="/tambahcategory" style={{color:"black"}}><i className="fa fa-plus"></i>Tambah Category</Link></button> &nbsp; */}
                                                        <img src="assets/img/faces/3.png" style={{borderRadius: 12, height: 24, width: 24}}/> &nbsp;
                                                        <span className="headercos">Menggunakan Akun Admin Sebagai <Link to="">Nama</Link><p /></span>
                                                            {/* <div className="headercos">Menggunakan Akun Admin Sebagai <Link to="user.html">Okki </Link><p /></div> */}
                                                            {/* di atas ini yang original */}
                                                    </div>
                                                    <div className="content table-responsive table-full-width">
                                                        <table className="table table-hover">
                                                            <thead>
                                                                <tr style={{background: '#6D8C70', fontFamily:'monospace'}}>
                                                                    
                                                                    <th style={{textAlign: 'center'}}>No.Checkout</th>
                                                                    <th style={{textAlign: 'center'}}>Kode Checkout</th>
                                                                    <th style={{textAlign: 'center'}}>Email</th>
                                                                    <th style={{textAlign: 'center'}}>Nama</th>
                                                                    <th style={{textAlign: 'center'}}>Alamat</th>
                                                                    <th style={{textAlign: 'center'}}>Total Harga</th>
                                                                    <th style={{textAlign: 'center'}}>Bukti Transfer</th>                                                                    
                                                                    <th style={{textAlign: 'center'}}>Status</th>
                                                                    <th style={{textAlign: 'center'}}>Action</th>                                                                    
                                                                </tr>
                                                            </thead>
                                                            <tbody>                                                                                                                         
                                                              {data}
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
export default CheckoutConfirmation;