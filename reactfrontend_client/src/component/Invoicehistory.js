import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Invoicehistory extends Component
{
    render()
{
    return(
        (
            <div>
  <div className="row justify-content-md-center bg-default">
    <div className="col col-md-2">
      <div className="card" style={{width: '14rem'}}>
        <img className="card-img-top " src="icon/helmet_icon.jpg" alt="Card image cap" />
        <div className="card-body">
          <h5 className="card-title">Udin Mantap</h5>
          <p className="card-text">Seorang yang stylish dan penuh kebanggaan</p>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Penyuka Music dan trip on</li>
          <li className="list-group-item">Tour Bali 2019!</li>
          <li className="list-group-item"> <a href="#"> Invoice History</a></li>
        </ul>
      </div>
    </div>
    <div className="col-md-8 text-center">
      <div className="container-fluid ">
        <div className="row bg-default">
          <div className="col-md-2">
          </div>
          <div className="col-md-8">
            <div className="row" style={{marginTop: 25}} />
            <h2>History Invoice</h2><br />
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">Invoice Number</th>
                  <th scope="col">Product</th>
                  <th scope="col">Costumer</th>
                  <th scope="col">Email</th>
                  <th scope="col">Tanggal</th>
                  <th scope="col">Harga</th>
                  <th scope="col">Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Vespa 1962</td>
                  <td>Udin</td>
                  <td>udinmantap@gmail.com</td>
                  <td>27/05/2018</td>
                  <td>Rp. 5.600.000</td>
                  <td>Lunas</td>
                  <td />
                </tr>
              </tbody>
            </table>                      
            <br />                           
          </div>
          <div className="col-md-2" />
        </div>
        <br /><br />
      </div>
    </div>
    <div className="col col-sm-2" />
  </div>
  <br /><br />
</div>

        )
    );
}
}
export default Invoicehistory;