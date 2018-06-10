import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';


class Editproduct extends Component {
    render() 
    {
    return (
        <div>
            <Sidebar/>
            <Header/>
            <br/><br/><br/>    
            <div style={{marginLeft:"170px"}}>
            {/* Counts Section */}
            <section className="dashboard-counts section-padding">
                <div className="container-fluid">
                <div className="row">
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-user" /></div>
                        <div className="name"><strong className="text-uppercase">New Clients</strong><span>Last 7 days</span>
                        <div className="count-number">25</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-padnote" /></div>
                        <div className="name"><strong className="text-uppercase">Work Orders</strong><span>Last 5 days</span>
                        <div className="count-number">400</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-check" /></div>
                        <div className="name"><strong className="text-uppercase">New Quotes</strong><span>Last 2 months</span>
                        <div className="count-number">342</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-bill" /></div>
                        <div className="name"><strong className="text-uppercase">New Invoices</strong><span>Last 2 days</span>
                        <div className="count-number">123</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-list" /></div>
                        <div className="name"><strong className="text-uppercase">New Product</strong><span>Last 3 months</span>
                        <div className="count-number">92</div>
                        </div>
                    </div>
                    </div>
                    {/* Count item widget*/}
                    <div className="col-xl-2 col-md-4 col-6">
                    <div className="wrapper count-title d-flex">
                        <div className="icon"><i className="icon-list-1" /></div>
                        <div className="name"><strong className="text-uppercase">New Cates</strong><span>Last 7 days</span>
                        <div className="count-number">70</div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </section>
            {/* Form Add Product*/}
            <div className="container-fluid">
                <div className="row">
                <div className="col-sm-6">
                    <form className="form-horizontal">
                    <h3 className="text-danger">Form Card Product</h3>
                    <hr />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input-" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">Nama Produk</label>
                        <div className="col-sm-10">
                        <input type="text" placeholder="Nama Produk" className="form-control" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="form-group">
                        <div className="input-group">
                        <div className="input-group-prepend"><span className="input-group-text">Rp.</span></div>
                        <input type="text" className="form-control" />
                        <div className="input-group-append"><span className="input-group-text">.00</span></div>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">Rebuild Oleh</label>
                        <div className="col-sm-10">
                        <input type="text" placeholder="builder" className="form-control" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2" htmlFor="exampleFormControlSelect1">Pilih Kategori</label>
                        <select className="form-control col-sm-9" id="exampleFormControlSelect1">
                        <option>Scooter</option>
                        <option>Motorcycle</option>
                        <option>Custom</option>
                        </select>
                    </div>
                    <h3 className="text-danger">Form Detail Product (Careosel @detailproduct) </h3>
                    <hr />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input-" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="form-group row">
                        <label className="col-sm-2 form-control-label">Judul Motor</label>
                        <div className="col-sm-10">
                        <input type="text" placeholder="Judul Motor" className="form-control" />
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="card">
                        <div className="card-header d-flex align-items-center">
                        <h3 className="text-danger">Form Input data Kelistrikan</h3>
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Sistem Pengapian</label>
                            <input id="inlineFormInput" type="text" placeholder="Sistem Pengapian" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInputGroup" className="sr-only">Batery</label>
                            <input id="inlineFormInputGroup" type="text" placeholder="Batery" className="mr-3 form-control form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Tipe Busy</label>
                            <input id="inlineFormInput" type="text" placeholder="Tipe Busy" className="mr-3 form-control" />
                        </div>                          
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-header d-flex align-items-center">
                        <h3 className="text-danger">Form Input Mesin</h3>
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Type Mesin</label>
                            <input id="inlineFormInput" type="text" placeholder="Type Mesin" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInputGroup" className="sr-only">Susunan Cilinder</label>
                            <input id="inlineFormInputGroup" type="text" placeholder="Susunan Cilinder" className="mr-3 form-control form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Diameter x Langkah</label>
                            <input id="inlineFormInput" type="text" placeholder="Diameter x Langkah" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Volume Cilinder</label>
                            <input id="inlineFormInput" type="text" placeholder="Volume Cilinder" className="mr-3 form-control" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Sistem Starter</label>
                            <input id="inlineFormInput" type="text" placeholder="Sistem Starter" className="mr-3 form-control" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Sistem Pelumasan</label>
                            <input id="inlineFormInput" type="text" placeholder="Sistem Pelumasan" className="mr-3 form-control" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Kapasitas Oli Mesin</label>
                            <input id="inlineFormInput" type="text" placeholder="Kapasitas Oli Mesin" className="mr-3 form-control" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Sistem Bahan Bakar</label>
                            <input id="inlineFormInput" type="text" placeholder="Sistem Bahan Bakar" className="mr-3 form-control" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Tipe Kopling</label>
                            <input id="inlineFormInput" type="text" placeholder="Tipe Kopling" className="mr-3 form-control" />
                        </div> 
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Tipe Transmisi</label>
                            <input id="inlineFormInput" type="text" placeholder="Tipe Transmisi" className="mr-3 form-control" />
                        </div>                         
                        </div>
                    </div>
                    </form>            
                </div>
                <div className="col-md-6">
                    <h3 className="text-danger">Detail Part Motor</h3>
                    <hr />
                    <form>
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    <div className="input-group mb-3">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Upload Image</span>
                        </div>
                        <div className="custom-file">
                        <input type="file" className="custom-file-input" id="inputGroupFile01" />
                        <label className="custom-file-label" htmlFor="inputGroupFile01">Choose file</label>
                        </div>
                    </div>
                    <div className="input-group">
                        <div className="input-group-prepend">
                        <span className="input-group-text">Deskripsi</span>
                        </div>
                        <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                    </div><br />
                    {/* form input Dimensi */}
                    <div className="card">
                        <div className="card-header d-flex align-items-center">
                        <h3 className="text-danger">Form Input data Dimensi</h3>
                        </div>
                        <div className="card-body">
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">P X L X T (Length x Width x Height)</label>
                            <input id="inlineFormInput" type="text" placeholder="P X L X T (Length x Width x Height)" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInputGroup" className="sr-only">Jarak Sumbu Roda</label>
                            <input id="inlineFormInputGroup" type="text" placeholder="Jarak Sumbu Roda" className="mr-3 form-control form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Jarak terendah Ke tanah</label>
                            <input id="inlineFormInput" type="text" placeholder="Jarak terendah Ke tanah" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Tinggi Tempat Duduk</label>
                            <input id="inlineFormInput" type="text" placeholder="Tinggi Tempat Duduk" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Berat Isi</label>
                            <input id="inlineFormInput" type="text" placeholder="Berat Isi" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Kapasitas Tangki</label>
                            <input id="inlineFormInput" type="text" placeholder="Kapasitas Tangki" className="mr-3 form-control" />
                        </div>  
                        <h3 className="text-danger">Form Input data Rangka</h3>
                        <hr />
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Tipe Rangka</label>
                            <input id="inlineFormInput" type="text" placeholder="Tipe Rangka" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Suspensi Depan</label>
                            <input id="inlineFormInput" type="text" placeholder="Suspensi Depan" className="mr-3 form-control" />
                        </div>
                        <div className="form-group">
                            <label htmlFor="inlineFormInput" className="sr-only">Suspensi Belakang</label>
                            <input id="inlineFormInput" type="text" placeholder="Suspensi Belakang" className="mr-3 form-control" />
                        </div>
                        </div>
                    </div>
                    </form>
                </div>
                </div>
            </div><br />
            <div className="row">
                <div className="col-md-4" />
                <div className="col-md-4">
                <div className="card text-center">
                    <div className="card-header d-flex align-items-center">
                    <h4>Simpan Perubahan</h4>
                    </div>
                    <div className="card-body text-center">
                    <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-primary">Simpan</button>
                    <Link to="/editproduct" className="btn btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</Link>
                    <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Delete
                    </a>
                    {/* Modal*/}
                    <div id="myModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" className="modal fade text-left">
                        <div role="document" className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                            <h5 id="exampleModalLabel" className="modal-title">Simpan Semua Input Form</h5>
                            <button type="button" data-dismiss="modal" aria-label="Close" className="close"><span aria-hidden="true">×</span></button>
                            </div>
                            <div className="modal-body">
                            <p>Apakah Anda Yakin Ingin Menyimpanya?</p>
                            </div>
                            <div className="modal-footer">
                            <button type="button" data-dismiss="modal" className="btn btn-secondary">Close</button>
                            <button type="button" className="btn btn-primary">Save changes</button>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="col-md-4" />
            </div>
            {/* Statistics Section*/}
            <section className="statistics">
                <div className="container-fluid">
                <div className="row d-flex">
                    <div className="col-lg-4">
                    {/* Income*/}
                    </div>
                    <div className="col-lg-4">
                    {/* Monthly Usage*/}
                    </div>
                    <div className="col-lg-4">
                    {/* User Actibity*/}
                    </div>
                </div>
                </div>
            </section>
          
           
            
            </div>
            <Footer/>
            </div>

   
    );
}
} 
export default Editproduct;