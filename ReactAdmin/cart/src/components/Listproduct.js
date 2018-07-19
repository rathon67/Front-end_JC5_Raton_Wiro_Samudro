import React, { Component } from 'react';
import axios from 'axios';
import {Link,Router} from 'react-router-dom';
import {connect} from 'react-redux';

function mapStateToProps(state){
    return{
        login:state.hasil_login
    };
}

class Listproduct extends Component {
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
  render() 
  //map untuk menampung hasil
  {
      {/*untuk mengecek hasil login */}
        console.log(this.props.login)
    //tidak kaitan dengan yg atas 
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
        return <tr key={urutan} className="info">
        <td>{urut}</td>
        <td>{dataGambar}</td>
        <td>{namaProduk}</td>
        <td>{descProduk}</td>
        <td>{hargaProduk}</td>
        <td>{namaPembuat}</td>
        <td>{status}</td>
        <td>{post}</td>
            <td>
                <Link to ={{pathname:"/editdata/", state:{dataID: dataID}}}  className="btn btn-success btn-sm">Edit</Link>&nbsp;
                <button className=" btn btn-danger btn-sm">Delete</button>
            </td>
        </tr>
      }
    );
    return (
      <div className="container">
        <div className="col-md-10 col-md-offset-1">
        <table className="table table-striped table-hover table-bordered">
                <thead>
                    <tr className="danger">
                    <th>Nomor</th> 
                    <th>gambar</th> 
                    <th>Nama Motor</th>
                    <th>Deskripsi Motor</th>
                    <th>Harga</th>
                    <th>Pembuat</th>
                    <th>Status</th>
                    <th>Posted</th>
                    <th>Aksi</th>
                    </tr>
                </thead>
                <tbody>
                 {daftarProduk}  
                {/* <tr className="info">
                    <td>1</td>
                    <td>Column content</td>
                    <td>Column content</td>
                        <td>
                            <button className="btn btn-warning btn-sm">Tambah</button>
                        </td>
                    </tr> */}
                    
                </tbody>
                </table>
        </div>         
        
      </div>
    )
  }
}
export default connect(mapStateToProps)(Listproduct);