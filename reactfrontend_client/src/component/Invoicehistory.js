import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();
class Invoicehistory extends Component
{
  state={
    dataInvoice:[]
  }

  componentDidMount(){
    var idUser=cookies.get('userID')
    console.log(idUser)
    axios.post('http://localhost:8002/getInvoiceHistory',{
      idUser:idUser
    })
    .then((ambildata)=>{
      console.log(ambildata)
      this.setState({
        dataInvoice:ambildata.data
      })
    })
  }
    render()
{
   //Cookies login
   if (cookies.get('userID') === undefined)
   {
       return <Redirect to='/login'/>
   }
   //akhir cookies login

   const historyInvoice=this.state.dataInvoice.map((isidata,index)=>{
      var urutan =index+1;
      var namaProduct=isidata.nama_product;
      var namaCos=isidata.nama;
      var email=isidata.email;
      var tgl_invoice=isidata.tgl_buat;
      var harga=isidata.harga;
      var status=isidata.status;
      if(status==9){
        status='Lunas'
      }
      var kdInvoice=isidata.kode_invoice;
      // console.log(idInvoice)
      return <tr>
              <th scope="row">{urutan}</th>
              <td>{namaProduct}</td>
              <td>{namaCos}</td>
              <td>{email}</td>
              <td>{tgl_invoice}</td>
              <td>Rp. {harga}</td>
              <td>{status}</td>
              <td><Link to={{pathname:"/Invoice", state:{kdInvoice:kdInvoice}}}>Lihat</Link></td>
              
            </tr>
     
   })

    return(
        (
            <div>
                <div className="row justify-content-md-center bg-default">
                  <div className="col col-md-1">
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
                  <div className="col-md-11 text-center pull-left">
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
                                <th scope="col">Harga**</th>
                                <th scope="col">Status</th>
                                <th scope="col">View</th>
                              </tr>
                            </thead>
                            <tbody>
                              {historyInvoice}
                            </tbody>
                          </table>                      
                          <br />                           
                        </div>
                        
                      </div>
                      <br /><br />
                    </div>
                  </div>
                  
                </div>
                <br /><br />
</div>

        )
    );
}
}
export default Invoicehistory;