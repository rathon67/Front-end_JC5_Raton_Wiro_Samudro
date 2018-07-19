import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';

class Tambahproduct extends Component {
    tambahData = (e) => {
        axios.post(`http://localhost:8000/tambahData`,{
            inputSatu: e.gambarproduk.value,
            inputDua: e.namaproduk.value,
            inputTiga: e.descproduk.value,
            inputEmpat: e.hargaproduk.value,
            inputLima: e.namapembuat.value,
            inputEnam: e.statusproduk.value,
            inputTujuh: e.booking.value,
            inputDelapan: e.terjual.value
        })
    }
  render() {
    return (
      <div>
        <form className="form-horizontal" >
            <fieldset>
                <legend>TAMBAH PRODUCT</legend>
                <div className="form-group">
                <label className="col-lg-2 control-label">GambarProduct</label>
                <div className="col-lg-8">
                    <input ref="gambarproduk" type="text" className="form-control" id="inputGambar" placeholder="input nama product"/>
                </div>
                </div>
                <div className="form-group">
                <label className="col-lg-2 control-label">Nama Product</label>
                <div className="col-lg-8">
                    <input ref="namaproduk" type="text" className="form-control" id="inputNama" placeholder="Input Nama Product" />
                </div>
                </div>
                <div className="form-group">
                <label  className="col-lg-2 control-label">Desc Product</label>
                <div className="col-lg-8">
                    <textarea ref="descproduk" type="text"  id="inputEmail" placeholder="input keterangan Produk" />
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
                    <button type="reset" className="btn btn-default">Cancel</button>
                    <button type="button" onClick={() => this.tambahData(this.refs)} className="btn btn-primary">Submit</button>
                </div>
                </div>
            </fieldset>
            </form>

      </div>
    )
  }
}

export default Tambahproduct;