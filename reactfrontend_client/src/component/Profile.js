import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';

const cookies = new Cookies()
class Profile extends Component
{
    render()
{
   //Cookies login
   if (cookies.get('userID') === undefined)
   {
       return <Redirect to='/login'/>
   }
   //akhir cookies login
    return(
        (
          <div>
            <br/>
            <div className="content">
                                    <div className="container-fluid">
                                        <div className="row">
                                            <div className="col-lg-4 col-md-5">
                                                <div className="card card-user">
                                                    {/* <div className="image">
                                                        <img src="/icon/helmet_icon.jpg" alt="..." />
                                                    </div> */}
                                                    <div className="content">
                                                    <div className="text-center">
                                                        <img className="rounded-circle border-white text-center" src="/icon/cilinder_icon.jpg" alt="..." />
                                                        <h4 className="title">Udin Mantap<br />
                                                            <Link to="www.google.com" ><small>@kebisuanlaut</small></Link>
                                                        </h4>
                                                    </div>
                                                        <p className="text-center">
                                                            "Learn more, Grow more~"
                                                        </p>
                                                    </div><hr />
                                                    <div className="container text-center">
                                                        <div className="row">
                                                            <div className="col-md-3 col-md-offset-1">
                                                            <button type="submit" className="btn btn-primary btn-sm">invoice</button>
                                                            </div>
                                                            <div className="col-md-4">
                                                            <button type="submit" className="btn btn-warning btn-sm">Home</button>
                                                            </div>
                                                            <div className="col-md-3">
                                                            <button type="submit" className="btn btn-success btn-sm">feature</button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                {/* <div className="card">
                                                    <div className="header">
                                                        <h4 className="title">Team Members</h4>
                                                    </div>
                                                    <div className="content">
                                                        <ul className="list-unstyled team-members">
                                                            <li><div className="container">
                                                                <div className="row">
                                                                    <div className="col-xs-3">
                                                                        <div className="avatar">
                                                                            <img src="/icon/cilinder_icon.jpg" alt="Circle Image" className="rounded-circle pull-center" style={{width:"100px",height:"100px"}}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">Aski<br />
                                                                        <span className="text-danger"><small>Offline</small></span>
                                                                    </div>
                                                                    <div className="col-xs-3 text-right">
                                                                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope" /></btn>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </li>
                                                            <li><div className="container">
                                                                <div className="row">
                                                                    <div className="col-xs-3">
                                                                        <div className="avatar">
                                                                            <img src="/icon/cilinder_icon.jpg" alt="Circle Image" className="rounded-circle pull-center" style={{width:"100px",height:"100px"}}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">Deby<br />
                                                                        <span className="text-info"><small>Available</small></span>
                                                                    </div>
                                                                    <div className="col-xs-3 text-right">
                                                                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope" /></btn>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </li>
                                                            <li>
                                                            <div className="container">
                                                                <div className="row">
                                                                    <div className="col-xs-3">
                                                                        <div className="avatar">
                                                                            <img src="/icon/cilinder_icon.jpg" alt="Circle Image" className="rounded-circle pull-center" style={{width:"100px",height:"100px"}}/>
                                                                        </div>
                                                                    </div>
                                                                    <div className="col-xs-6">Patra<br />
                                                                        <span className="text-success"><small>Online</small></span>
                                                                    </div>
                                                                    <div className="col-xs-3 text-right">
                                                                        <btn className="btn btn-sm btn-success btn-icon"><i className="fa fa-envelope" /></btn>
                                                                    </div>
                                                                </div>
                                                                </div>
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div> */}
                                            </div>
                                            <div className="col-lg-8 col-md-7">
                                                <div className="card">
                                                    <div className="header">
                                                        <h4 className="title">Edit Profile</h4>
                                                    </div>
                                                    <div className="content">
                                                        <form>
                                                            <div className="row">
                                                                <div className="col-md-5">
                                                                    <div className="form-group">
                                                                        <label>Perusahaan</label>
                                                                        <input type="text" className="form-control border-input" disabled placeholder="Company" defaultValue="rustymoto.com" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-3">
                                                                    <div className="form-group">
                                                                        <label>Username</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Username" defaultValue="rathon1967" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label htmlFor="exampleInputEmail1">Alamat Email</label>
                                                                        <input type="email" className="form-control border-input" placeholder="Email" defaultValue="rathonvespa@gmail.com" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Nama Depan</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Company" defaultValue="Udine" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-6">
                                                                    <div className="form-group">
                                                                        <label>Nama Belakang</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Last Name" defaultValue="Mantap" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Alamat</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Home Address" defaultValue="Tebet Barat, Jakarta" />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Kota</label>
                                                                        <input type="text" className="form-control border-input" placeholder="City" defaultValue="Jakarta" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Negara</label>
                                                                        <input type="text" className="form-control border-input" placeholder="Country" defaultValue="Indonesia" />
                                                                    </div>
                                                                </div>
                                                                <div className="col-md-4">
                                                                    <div className="form-group">
                                                                        <label>Kode Pos</label>
                                                                        <input type="number" className="form-control border-input" placeholder="ZIP Code" defaultValue={10510} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="row">
                                                                <div className="col-md-12">
                                                                    <div className="form-group">
                                                                        <label>Tentang Saya</label>
                                                                        <textarea rows={5} className="form-control border-input" placeholder="Here can be your description"  defaultValue={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."} />
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="text-center">
                                                                <button type="submit" className="btn btn-info btn-fill btn-wd">Update Profile</button>
                                                            </div>
                                                            <div className="clearfix" />
                                                        </form>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
            <br /><br />
          </div>


        )
    );
}
}
export default Profile;