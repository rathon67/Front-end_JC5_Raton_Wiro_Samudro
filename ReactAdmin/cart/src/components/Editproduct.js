import React, { Component } from 'react';
import {Link,Route} from 'react-router-dom';
import axios from 'axios';

class EditProduct extends Component {
    state ={
        id:'',
        gambarproduk:'',
        namaproduk:'',
        descproduk:'',
        hargaproduk: '',
        namapembuat:'',
        statusproduk:''

    }
    //fungsi didmount adalah untuk memunculkan data yang mengandung id yang di tuju di database
    componentDidMount(){
        var id =this.props.location.state.dataID;
        axios.get('http://localhost:8000/editdata/'+id)
        //.then adalah untuk bersiap menerima respin dari server backend di atas
        .then((hasilDariDB)=>{
            console.log(hasilDariDB);
            this.setState({
                id  :hasilDariDB.data[0].id_motor,
                gambarproduk :hasilDariDB.data[0].gambar,
                namaproduk :hasilDariDB.data[0].nama_motor,
                descproduk:hasilDariDB.data[0].desc_product,
                hargaproduk :hasilDariDB.data[0].harga,
                namapembuat :hasilDariDB.data[0].pembuat,
                status :hasilDariDB.data[0].status,
            })
        });
    }
    
    //di bagian input file(jika terjadi perubahan ma akan dijalankan fungsi "onchange")
    onchange =(e)=>{
        switch(e.target.name){
            case'gambarproduk':
            this.setState({
                foto:e.target.files[0],
            });
            break
        }
    }
    value = (e) =>{
    this.setState({
        id: e.idproduk.value,
        // gambarproduk:e.gambarproduk,
        namaproduk :e.namaproduk.value,
        descproduk:e.descproduk.value,
        harga: e.hargaproduk.value,
        namapembuat:e.namapembuat.value,
        status:e.statusproduk.value
        })
    }

    // updateData =(e) =>{
    //     axios.post('http://localhost:8000/ubahData/',{
    //         id: e.idproduk.value,
    //         // gambarproduk:e.gambarproduk,
    //         namaproduk :e.namaproduk.value,
    //         descproduk:e.descproduk.value,
    //         harga: e.hargaproduk.value,
    //         namapembuat:e.namapembuat.value,
    //         status:e.statusproduk.value
    //     });
    // }

    //supaya tidak terjadi pengulangan submit 2kali (prevent default)
    updateData =(e) =>{
        e.preventDefault();
        let formData = new FormData();
        formData.append('id', this.state.id);
        formData.append('file', this.state.gambarproduk);       
        formData.append('namaproduk', this.state.namaproduk);
        formData.append('descproduk', this.state.descproduk);
        formData.append('harga', this.state.hargaproduk);
        formData.append('pembuat', this.state.namapembuat);
        formData.append('status', this.state.status);
    }
  render() {
    //   console.log(this.props.match.params.value)
    return (
      <div>
        <form className="form-horizontal" onSubmit={this.updateData} encType="multitype/form-data">
            <fieldset>
                <legend>EDIT PRODUCT</legend>
                {/* untuk mengambil id database */}
                <input type="text" ref ='idproduk' defaultValue={this.state.id}/>
                {/*  */}
                <div className="form-group">
                <label className="col-lg-2 control-label">GambarProduct</label>
                <div className="col-lg-8">
                    <input name="gambarproduk" onChange={this.onchange} type="file" className="form-control" id="inputGambar" defaultValue={this.state.gambarproduk}/>
                </div>
                </div>
                
                <div className="form-group">
                <label className="col-lg-2 control-label">Nama Product</label>
                <div className="col-lg-8">
                    <input ref="namaproduk" type="text" className="form-control" id="inputNama" defaultValue={this.state.namaproduk} placeholder="Input Nama Product" />
                </div>
                </div>
                <div className="form-group">
                <label  className="col-lg-2 control-label">Desc Product</label>
                <div className="col-lg-8">
                    <textarea ref="descproduk" type="text"  id="inputText" value={this.state.descproduk} placeholder="input keterangan Produk" />
                </div> 
                </div>
                <div className="form-group">
                <label  className="col-lg-2 control-label">Harga</label>
                <div className="col-lg-8">
                    <input ref="hargaproduk" type="text" className="form-control" id="inputharga" defaultValue={this.state.hargaproduk} placeholder="Input Harga" />
                </div>
                </div>
                <div className="form-group">
                <label className="col-lg-2 control-label">Pembuat</label>
                <div className="col-lg-8">
                    <input ref="namapembuat" type="text" className="form-control" id="inputNama" defaultValue={this.state.namapembuat} placeholder="Input Nama Pembuat" />
                </div>
                </div>
                <div className="form-group">
                <label className="col-lg-2 control-label">Status</label>
                <div className="col-lg-8">
                    <select ref="statusproduk" className="form-control" id="exampleSelect2" defaultValue={this.state.statusproduk} >
                    <option defaultValue="Tersedia" ref="tersedia">Tersedia</option>
                    <option defaultValue="Booking" ref="booking">Booking</option>
                    <option defaultValue="Terjual" ref="terjual">Terjual</option>
                    </select>
                    
                </div>
                </div>
                               
                
                
                <div className="form-group">
                <div className="col-lg-10 col-lg-offset-2">
                    <button type="reset" className="btn btn-default">Cancel</button>
                    <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary">Submit</button>
                    {/* <button type="submit" onClick={() => this.updateData(this.refs)} className="btn btn-primary">Submit</button> */}
                </div>
                </div>
            </fieldset>
            </form>

      </div>
    )
  }
}

export default EditProduct;