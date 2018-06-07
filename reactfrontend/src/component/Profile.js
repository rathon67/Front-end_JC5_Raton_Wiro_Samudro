import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Profile extends Component
{
    render()
{
    return(
        (
<div>
  <br/>
  <div className="container">
    <h2 style={{textAlign: 'center'}}>Welcome Riders! Costume your Profile Here!</h2><br /><hr />
    <div className="row bg-default">
      <div className="col-sm-4 items-center">
        <div className="card " style={{width: '15rem'}}>
          <img className="card-img-top " src="icon/helmet_icon.jpg" alt="Card image cap" />
          <div className="card-body">
            <h5 className="card-title">Udin Mantap</h5>
            <p className="card-text">Seorang yang stylish dan penuh kebanggaan</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Penyuka Music dan trip on</li>
            <li className="list-group-item">Tour Bali 2019!</li>
            <li className="list-group-item"> <Link to="/invoicehistory"> Invoice History</Link></li>
          </ul>                                   
        </div>
      </div>
      <div className="col-lg-8 text-left" style={{marginTop: 50}}>
        <dl className="row">
          <dt className="col-sm-3 bg-light">Nama Awal</dt>
          <dd className="col-sm-9">Udin</dd>
          <dt className="col-sm-3 bg-light">Nama Akhir</dt>
          <dd className="col-sm-9">Mantap</dd>                                
          <dt className="col-sm-3 bg-light">Username @email</dt>
          <dd className="col-sm-9">dinmantap@gmail.com</dd>                                
          <dt className="col-sm-3 bg-light">Alamat Kota</dt>
          <dd className="col-sm-9">Jakarta Selatan</dd>
          <dt className="col-sm-3 bg-light">Negara</dt>
          <dd className="col-sm-9">Indonesia</dd>       
          <dt className="col-sm-3 bg-light">Zip Kode</dt>
          <dd className="col-sm-9">708211</dd>       
          <dt className="col-sm-3 bg-light">Password</dt>
          <dd className="col-sm-9">*******</dd>       
          <dt className="col-sm-3 bg-light">Nomer Phone</dt>
          <dd className="col-sm-9">0815 3322 0674</dd>       
          <dt className="col-sm-3 bg-light">Tanggal Lahir</dt>
          <dd className="col-sm-9">11/04/1994</dd>     
        </dl>                              
        <br />
      </div>                    
    </div><hr />
    <a href="/editprofile" className="btn btn-success pull-right" tabIndex={-1} role="button" aria-disabled="true">Edit</a>
  </div>
  <br /><br />
</div>


        )
    );
}
}
export default Profile;