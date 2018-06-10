import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import Footer from './Footer';

class Addcategory extends Component
{
    render()
{
    return(
        (
        <div style={{marginLeft:'150px'}}>
        <Sidebar/>
        <Header/>
        <br/><br/><br/><br/>
            <div className="container-fluid">
                <div className="row" style={{backgroundColor: 'white'}}>
                    <div className="col-lg-3 ">
                    </div>
                    <div className="col-lg-6">
                    <form>
                        <div className="card" style={{marginTop: 50}}>
                        <h3 className="text-danger">Form Tambah Kategori</h3>
                        <hr />
                        <div className="form-group row">
                            <label className="col-sm-2 form-control-label">ID</label>
                            <div className="col-sm-10">
                            <input type="text" placeholder="ID" className="form-control" />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 form-control-label">Kategori</label>
                            <div className="col-sm-10">
                            <input type="text" placeholder="Kategori" className="form-control" />
                            </div>
                        </div>
                        <div className="input-group">
                            <div className="input-group-prepend">
                            <span className="input-group-text">Deskripsi</span>
                            </div>
                            <textarea className="form-control" aria-label="With textarea" defaultValue={""} />
                        </div><br />
                        <div className="card-header d-flex">
                            <h4 style={{marginLeft: 80}}>Simpan Perubahan</h4>
                        </div>
                        <div className="card-body text-center">
                            <button type="button" data-toggle="modal" data-target="#myModal" className="btn btn-primary">Simpan</button>
                            <a href="editproduct.html" className="btn btn-warning" tabIndex={-1} role="button" aria-disabled="true">Edit</a>
                            <button type="button" data-toggle="modal" ref="#myModal" className="btn btn-danger">Delete</button>
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
                        </div></form>
                    </div>
                    <div className="col-lg-3" />
                </div>
            </div>
            <Footer/>
        </div>
        )
    );
}
}
export default Addcategory;