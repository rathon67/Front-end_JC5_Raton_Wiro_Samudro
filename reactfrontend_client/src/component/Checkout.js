import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';
import img from './img/logo_mandiri.jpg'
import img2 from './img/logo_BNI.jpg'
import img3 from './img/logo_bri.jpg'


const cookies = new Cookies()

class Checkout extends Component
{
  state={
    hargaTotal:0,
    hargaTax:'',
    hargaSum:'',
    idCart:'',
    gambarStruk:'',
    deskPembayaran:''
  }

  componentWillMount(){
    axios.get('http://localhost:8002/jumlahsubHarga')
        .then((hasilSum)=>{
            // console.log(typeof(hasilSum.data[0].sum))
            axios.get('http://localhost:8002/taxTotal')
        .then((taxItem)=>{
            // console.log(typeof(taxItem.data))
            this.setState({
                hargaTax:taxItem.data,
                hargaSum:hasilSum.data[0].sum,
          
            })
            var tax=this.state.hargaTax
            var sum=this.state.hargaSum
            this.setState({
                hargaTotal:tax+sum
            })
            // console.log(this.state.hargaTax)
            // console.log(this.state.hargaSum)
        })

            this.setState({
                // hargaSum:hasilSum.data[0].sum
                })
            }
        )
    }
  
  componentDidMount(){
    this.setState({
        hargaTotal:this.state.hargaTax + this.state.hargaSum
    })
    axios.get('http://localhost:8002/idcarttoChecout')
    .then((produk)=>{
      
      this.setState({
        idCart:produk.data
      })
    })
  }

  simpanData = (e)=>{
    var idCart =this.state.idCart
    axios.post(`http://localhost:8002/tambahdataCheckout`, {
      idCart:idCart,
      email: e.email.value,
      nama:e.name.value,
      alamat:e.address.value,
      kota:e.city.value,
      pos:e.poscode.value,
      phone:e.phone.value
    })
    window.location.reload()
  }

  /** upload bukti tf ke backend admin */
  onchange=(e)=>{
    switch(e.target.name){
      case'gambarstruk':
      this.setState({
        gambarStruk:e.target.files[0]
      });
      break;
    }
  }

  value =(e)=>{
    this.setState({
      deskPembayaran:e.pembayaran.value,
    })
  }
  tambahData=(e)=>{
    e.preventDefault();
    let formData = new FormData();    
    var idUser= cookies.get('userID')
    formData.append('file',this.state.gambarStruk);
    formData.append('deskPembayaran', this.state.deskPembayaran);
    formData.append('idUser', idUser)
    // console.log(this.state.gambarStruk)
    // console.log(this.state.deskPembayaran)
    // console.log(idUser)
    axios.post(`http://localhost:8000/kirimbuktiPembayaran/`, formData);
  }
  /** akhir dari upload bukti tf ke admin */
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
            <br/>
            <br/>
            <br/>
            
                <div className="container">
  <div className="row" style={{paddingTop: 25, paddingBottom: 25}}>
    <div className="col-md-12">
      <div id="mainContentWrapper">
        <div className="col-md-8 col-md-offset-2">
          <h2 style={{textAlign: 'center'}}>
            Lihat Orderan Kamu &amp; Lengkapi Checkout
          </h2>
          <hr />
          <a href="" className="btn btn-info" style={{width: '100%'}}>Tambah Motor &amp; Services</a>
          <hr />
          <div className="shopping_cart">
            <form className="form-horizontal" role="form" action method="post" id="payment-form">
              <div className="panel-group" id="accordion">
                <div className="panel panel-default">
                  <div className="panel-heading">
                    <h4 className="panel-title">
                      <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Lihat Orderanmu</a>
                    </h4>
                  </div>
                  <div id="collapseOne" className="panel-collapse collapse in">
                    <div className="panel-body">
                      <div className="items">
                        <div className="col-md-9">
                          <table className="table table-striped">
                            <tbody><tr>
                                <td colSpan={2}>
                                  <Link to="/cart" className="btn btn-warning btn-sm pull-right"  title="Remove Item">X</Link>
                                  <b>
                                    Check Kembali</b></td>
                              </tr>
                              <tr>
                                <td>
                                  <ul>
                                    <li>Harga Sub Total</li>
                                    <li>Distribusi</li>
                                    <li>Tax</li>
                                  </ul>
                                </td>
                                <td>
                                  <b>Rp. {this.state.hargaSum}</b><br/>
                                  <b>Rp. </b><br/>
                                    <b>Rp. {this.state.hargaTax}</b>
                                                                    
                                </td>
                                
                              </tr>
                            </tbody></table>
                        </div>
                        <div className="col-md-3">
                          <div style={{textAlign: 'center'}}>
                            <h3>Order Total</h3>
                            <h3><span style={{color: 'green'}}>Rp. {this.state.hargaTotal}</span></h3>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <div style={{textAlign: 'center', width: '100%'}}><a style={{width: '100%'}} data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" className=" btn btn-success" onclick="$(this).fadeOut(); $('#payInfo').fadeIn();">Lanjut
                        ke Informasi Pembayaran»</a></div>
                  </h4>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo">Kontak
                      dan Informasi Pembayaran</a>
                  </h4>
                </div>
                <div id="collapseTwo" className="panel-collapse collapse">
                  <div className="panel-body">
                    <b>Help us keep your account safe and secure, please verify your billing
                      information.</b>
                    <br /><br />
                    <table className="table table-striped" style={{fontWeight: 'bold'}}>
                      <tbody><tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_email">Best Email:</label></td>
                          <td>
                            <input className="form-control" id="id_email" required="required" type="text" ref="email" />
                          </td>
                        </tr>
                        <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_first_name">Nama Lengkap</label></td>
                          <td>
                            <input className="form-control" id="id_first_name" required="required" type="text" ref="name" />
                          </td>
                        </tr>
                        {/* <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_last_name">Last name:</label></td>
                          <td>
                            <input className="form-control" id="id_last_name"  required="required" type="text" />
                          </td>
                        </tr> */}
                        <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_address_line_1">Alamat Lengkap:</label></td>
                          <td>
                            <input className="form-control" id="id_address_line_1"  required="required" type="text" ref="address" />
                          </td>
                        </tr>
                        {/* <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_address_line_2">Unit / Suite #:</label></td>
                          <td>
                            <input className="form-control" id="id_address_line_2"  type="text" />
                          </td>
                        </tr> */}
                        <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_city">City:</label></td>
                          <td>
                            <input className="form-control" id="id_city"  required="required" type="text" ref="city" />
                          </td>
                        </tr>
                        {/* <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_state">State:</label></td>
                          <td>
                            <select className="form-control" id="id_state" >
                              <option value="AK">Kota Ambon</option>
                              <option value="AL">Kota Balik Papan</option>
                              <option value="AZ">Kota Banda Aceh</option>
                              <option value="AR">Kota Bandar Lampung</option>
                              <option value="CA">Kota Bandung</option>
                              <option value="CO">Kota Banjar</option>
                              <option value="CT">Kota Banjar Baru</option>
                              <option value="DE">Delaware</option>
                              <option value="FL">Florida</option>
                              <option value="GA">Georgia</option>
                              <option value="HI">Hawaii</option>
                              <option value="ID">Idaho</option>
                              <option value="IL">Illinois</option>
                              <option value="IN">Indiana</option>
                              <option value="IA">Iowa</option>
                              <option value="KS">Kansas</option>
                              <option value="KY">Kentucky</option>
                              <option value="LA">Louisiana</option>
                              <option value="ME">Maine</option>
                              <option value="MD">Maryland</option>
                              <option value="MA">Massachusetts</option>
                              <option value="MI">Michigan</option>
                              <option value="MN">Minnesota</option>
                              <option value="MS">Mississippi</option>
                              <option value="MO">Missouri</option>
                              <option value="MT">Montana</option>
                              <option value="NE">Nebraska</option>
                              <option value="NV">Nevada</option>
                              <option value="NH">New Hampshire</option>
                              <option value="NJ">New Jersey</option>
                              <option value="NM">New Mexico</option>
                              <option value="NY">New York</option>
                              <option value="NC">North Carolina</option>
                              <option value="ND">North Dakota</option>
                              <option value="OH">Ohio</option>
                              <option value="OK">Oklahoma</option>
                              <option value="OR">Oregon</option>
                              <option value="PA">Pennsylvania</option>
                              <option value="RI">Rhode Island</option>
                              <option value="SC">South Carolina</option>
                              <option value="SD">South Dakota</option>
                              <option value="TN">Tennessee</option>
                              <option value="TX">Texas</option>
                              <option value="UT">Utah</option>
                              <option value="VT">Vermont</option>
                              <option value="VA">Virginia</option>
                              <option value="WA">Washington</option>
                              <option value="DC">Washington D.C.</option>
                              <option value="WV">West Virginia</option>
                              <option value="WI">Wisconsin</option>
                              <option value="WY">Wyoming</option>
                            </select>
                          </td>
                        </tr> */}
                        <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_postalcode">Kode Pos:</label></td>
                          <td>
                            <input className="form-control" id="id_postalcode"  required="required" type="text" ref ="poscode" />
                          </td>
                        </tr>
                        <tr>
                          <td style={{width: 175}}>
                            <label htmlFor="id_phone">Kontak Nomer:</label></td>
                          <td>
                            <input className="form-control" id="id_phone" type="text" ref="phone" />
                          </td>
                        </tr>
                        
                        
                      </tbody></table>
                      <div>
                        {/* Button trigger modal */}
                        <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                          Simpan Informasi
                        </button>
                        {/* Modal */}
                        <div className="modal fade" id="exampleModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Apakah Data anda Sudah Benar?</h5>
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                  <span aria-hidden="true">×</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                Data akan di simpan sebagai informasi pengiriman Motor.
                              </div>
                              <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Check Kembali</button>
                                <button type="submit" onClick={()=>this.simpanData(this.refs)} className="btn btn-primary " data-dismiss="modal"><b>Simpan Informasi</b></button><br/><br/>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <br/>

                      
                  </div>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <div style={{textAlign: 'center'}}><a data-toggle="collapse" data-parent="#accordion" href="#collapseThree" className=" btn   btn-success" id="payInfo" style={{width: '100%', display: 'none'}} onclick="$(this).fadeOut();  
                             document.getElementById('collapseThree').scrollIntoView()">Enter Payment Information »</a>
                    </div>
                  </h4>
                </div>
              </div>
              <div className="panel panel-default">
                <div className="panel-heading">
                  <h4 className="panel-title">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapseThree">
                      <b>Informasi Pembayaran</b>
                    </a>
                  </h4>
                </div>
                <div id="collapseThree" className="panel-collapse collapse">
                  <div className="panel-body">
                    <span className="payment-errors" />
                    <fieldset>
                      <legend>Pembayaran Tersedia Melalui Rekening Transfer yang tersedia di bawah!</legend>
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="card-holder-name"><img src={img2}/></label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" stripe-data="name" id="name-on-card" placeholder="0261805576 A/N PT RUSTYMOTO" disabled/>
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="col-sm-3 control-label" htmlFor="card-number"><img src={img}/></label>
                        <div className="col-sm-9">
                          <input type="text" className="form-control" stripe-data="number" id="card-number" placeholder="0918273322328 A/N PT RUSTYMOTO" disabled/>
                          <br />
                          </div>
                          <div className="form-group">
                            <label className="col-sm-3 control-label" htmlFor="card-holder-name"><img src={img3}/></label>
                            <div className="col-sm-9">
                              <input type="text" className="form-control" stripe-data="name" id="name-on-card" placeholder="091232222322322232 A/N PT RUSTYMOTO" disabled/>
                            </div>
                          </div>
                        
                        
                        <div className="form-group">
                          <div className="col-sm-offset-3 col-sm-9">
                          </div>
                        </div>
                      </div></fieldset>
                    <button type="button" className="btn btn-success btn-lg" data-toggle="modal" data-target="#exampleModalCenter" style={{width: '100%'}}>Bayar Sekarang! dan Upload Bukti Pembayaran!
                    </button>
                    <div className="modal fade" id="exampleModalCenter" tabIndex={-1} role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                      <div className="modal-content">
                        <div className="modal-header">
                          <h5 className="modal-title" id="exampleModalCenterTitle">Upload Bukti Transfer Anda</h5>
                          <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">×</span>
                          </button>
                        </div>
                        <div className="modal-body" >
                          <form onSubmit={this.tambahData} encType="multipart/form-data">
                            <div className="form-group">
                                <label className="control-label">Form Upload Bukti Transfer</label>
                                <div>
                                  <input name="gambarstruk" onChange={this.onchange} type="file" className="form-control" id="inputGambar" placeholder="input gambar lampu"/>
                                </div>
                            </div>
                            <div className="form-group">
                                <label className="control-label">Deskripsi</label>
                                <div>
                                  <input ref="pembayaran" type="text" className="form-control" id="inputGambar" placeholder=""/>
                                </div>
                            </div>
                            <div className="modal-footer">
                          <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                          <button type="submit" onClick={() => this.value(this.refs)} className="btn btn-primary">Save changes</button>
                        </div>
                        </form>
                        </div>
                        
                      </div>
                    </div>
                  </div>
   
                    
                    
                    <br />
                    <div style={{textAlign: 'left'}}><br />
                      By submiting this order you are agreeing to our <a href="/legal/billing/">universal
                        billing agreement</a>, and <a href="/legal/terms/">terms of service</a>.
                      If you have any questions about our products or services please contact us
                      before placing this order.
                    </div>
                  </div>
                </div>
              </div>
            </form></div>
        </div>
      </div>
    </div>
  </div>
</div>
<br/>
<br/>
<br/>
<br/>

        </div>
        )
    );
}
}
export default Checkout;