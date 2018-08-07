import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class Editprofile extends Component
{
    render()
{
     //Cookies login
     if (cookies.get('userID') === undefined)
     {
         return <Redirect to='/'/>
     }
     //akhir cookies login
    return(
        (
        <div>
                                                        
                            <br />
                            <form>
                                <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                    <div className="panel panel-default">
                                        <div className="panel-body">
                                        <div className="row">
                                            <div className="col-md-12 lead">
                                            <h2 style={{textAlign: 'center'}}>Welcome Riders! Costume your Profile Here!</h2><br />
                                            <hr />
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-4 text-center">
                                            <div className="text-center">
                                                <img src="icon/caferacer.icon.jpg" className="rounded" alt="..." />
                                            </div>
                                            <br /> 
                                            <span className="btn btn-link btn-file">Edit avatar <input type="file" id="upload-img" /></span>
                                            <div className="form-group">
                                                <label htmlFor="user_last_name">Tentang</label>
                                                <input type="text" className="form-control" id="tentang_user" />
                                                <div className="form-group">
                                                <label htmlFor="user_last_name">Hobi</label>
                                                <input type="text" className="form-control" id="hobi_user" />
                                                </div>
                                                <div className="form-group">
                                                <label htmlFor="user_last_name">Impian</label>
                                                <input type="text" className="form-control" id="impian_user" />
                                                </div>
                                            </div>
                                            </div>
                                            <div className="col-md-8">
                                            <div className="form-group">
                                                <label htmlFor="user_last_name">Last name</label>
                                                <input type="text" className="form-control" id="user_last_name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_first_name">First name</label>
                                                <input type="text" className="form-control" id="user_first_name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Email</label>
                                                <input type="email" className="form-control" id="email_name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Alamat Kota</label>
                                                <input type="text" className="form-control" id="address_city" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Negara</label>
                                                <input type="text" className="form-control" id="country_name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Kode Zip</label>
                                                <input type="number" className="form-control" id="zipkode" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Phone Number</label>
                                                <input type="number" className="form-control" id="phone_number" />
                                            </div><div className="form-group">
                                                <label htmlFor="user_middle_name">Tanggal Lahir</label>
                                                <input type="date" className="form-control" id="date_birth" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Password</label>
                                                <input type="password" className="form-control" id="password_name" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="user_middle_name">Confirm Password</label>
                                                <input type="password" className="form-control" id="password_confirm" />
                                            </div>
                                            <div className="radio">
                                                <label className="radio-inline">
                                                <input type="radio" defaultValue="male" defaultChecked="checked" name="user[gender]" id="user_gender_male" />Pria
                                                </label>
                                                <label className="radio-inline">
                                                <input type="radio" defaultValue="female" name="user[gender]" id="user_gender_female" />Wanita
                                                </label>
                                            </div>
                                            <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#delete-user-modal">
                                                Delete user
                                            </button>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-12">
                                            <hr />
                                            <button className="btn btn-primary pull-right"><i className="glyphicon glyphicon-floppy-disk" /> Save</button>
                                            </div>
                                        </div>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                                </div>
                                <div id="delete-user-modal" className="modal fade">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                    <div className="modal-body">
                                        <p>Are you sure you want to delete account?</p>
                                    </div>
                                    <div className="modal-footer">
                                        <button type="button" className="btn btn-default" data-dismiss="modal">Cancel</button>
                                        <button type="button" className="btn btn-danger">Delete</button>
                                    </div>
                                    </div>{/* /.modal-content */}
                                </div>{/* /.modal-dialog */}
                                </div>{/* /.modal */}
                            </form>
                            <br /><br />                          

         
        </div>
        )
    );
}
}
export default Editprofile;