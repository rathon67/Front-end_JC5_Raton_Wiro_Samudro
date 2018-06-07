import React, { Component } from 'react';
// import { Link } from 'react-router-dom'

class Cetailproduct extends Component {
  render() {
    return (
<div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-xs-3">
                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                            <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                            <li className="breadcrumb-item"><a href="listproduk.html">List Motor</a></li>
                            <li className="breadcrumb-item active" aria-current="page">Detail Motor </li>
                            </ol>
                        </nav>
                    </div>
                </div>
           </div>

           {/* Halaman awal detail item   */}
              
            <div className="row">
                <div className="col-sm-9">
                  <img src='./Image/RE-classNameic-500-Brown.jpg' className="img-fluid" alt="Responsive image"/>
                </div>
                <div className="col-sm-3">
                    <p><h2>Lihat Detail Motor yang kamu Pilih!</h2></p>
                    <button type="button" className="btn btn-light btn-lg" href="#featuredetail">Lihat Detail</button><br/><br/>
                    <button type="button" className="btn btn-light btn-lg" href="#">Hubungin Dealer</button><br/><br/>
                    <button type="button" className="btn btn-light btn-lg" href="cart.html">Booking</button><br/><br/>
                    <p>
                        <a className="btn btn-light btn-lg" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        HARGA Link with href
                        </a><br/><br/>
                        <button className="btn btn-light btn-lg" type="button" data-toggle="collapse" data-target="#collapseExample" aria-expanded="false" aria-controls="collapseExample">
                        Informasi with data-target
                        </button><br/>
                    </p>
                    <div className="collapse" id="collapseExample">
                        <div className="card card-body">
                        Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident.
                        </div>
                    </div>
                </div>
            </div>

            {/* Detail Motor display  */}
                <div className="container-fluid" id="featuredetail">
                    <div className="row" style={{backgroundColor: 'black'}}>
                        <div className="col-sm-1">                    
                        </div>
                    <div className="col-sm-3">
                            <blockquote className="blockquote">
                            <p className="mb-0" style={{color: 'antiquewhite', marginTop: '50px'}} >Geser untuk melihat gambar lain nya yang tersedia</p>
                            </blockquote>
                        <p>
                            <h2 style={{color: 'crimson'}}>KECOCOKAN ADALAH PRIORITAS UTAMA KAMI!</h2>
                        </p>                    
                    </div>
                    <div className="col-sm-6">
                        <div id="carouselExampleFade" className="carousel slide carousel-fade" style={{marginTop: '25px',marginBottom: '25px'}} data-ride="carousel"/>
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <img className="d-block w-100" src="./Image/BSA-1960-brochure.jpg" style={{width: 'auto', height: '500px'}} alt="First slide" />
                                
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./Image/BSA3.jpg" style={{width: 'auto', height: '500px'}} alt="Second slide" style={{width: '27rem'}}/>
                                
                                </div>
                                <div className="carousel-item">
                                    <img className="d-block w-100" src="./Image/BSA4.jpg" style={{width: 'auto', height: '500px'}} alt="Third slide" style={{width: '27rem'}}/>
                                
                                </div>
                            </div>
                                    <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                            </div>
                            <div className="col-sm-2">                    
                        </div>
                    </div>
                </div>

                {/*  <!--Navbar sticky  --> */ }
                <ul className="nav justify-content-center  sticky-top" style={{backgroundColor: 'black'}}>
                    <li className="nav-item" >
                        <a className="nav-link active" style={{color: 'antiquewhite'}} href="#featuredetail">Feature Detail</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color: 'antiquewhite'}} href="#partdetail">Part Detail</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color: 'antiquewhite'}} href="#desdetail">Detailing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{color: 'antiquewhite'}} href="#penawaran">Penawaran</a>
                    </li>
                </ul><br/> 

                {/* <!-- Spesifikasi dengan gambar dan deskripsi -->  */}
                <div className="container-fluid" id="partdetail">
                    <div className="row">
                        <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                                <img src="./Image/motobene cafe racer rocketgarage-001.JPG" style={{width: '27rem'}} alt=""/>
                            </div>
                        <div className="col-sm-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, sunt ducimus ab voluptatem porro animi tempore repellat perferendis eaque placeat laudantium! Optio, voluptates quis voluptate quaerat ipsam in tenetur animi!</div>
                    </div>
                    <div className="col-sm-2"></div>
                </div>
                <br/>
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut aperiam iusto illo aliquid consectetur unde, expedita ab illum similique nulla maiores repellendus voluptates obcaecati! Iusto atque perferendis enim eligendi.
                            </div>
                        <div className="col-sm-4">
                            <img src="./Image/motobene cafe racer rocketgarage-001.JPG" style={{width: '27rem'}} alt=""/>
                        </div>
                        <div className="col-sm-2"></div>
                    </div>
                </div>
                <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                          <img src="./Image/motobene cafe racer rocketgarage-001.JPG" style={{width: '27rem'}} alt=""/>
                        </div>
                        <div className="col-sm-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, sunt ducimus ab voluptatem porro animi tempore repellat perferendis eaque placeat laudantium! Optio, voluptates quis voluptate quaerat ipsam in tenetur animi!</div>
                      </div>
                      <div className="col-sm-2"></div>
                </div>
            <br/>
                <div className="container-fluid">
                      <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-4">
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut aperiam iusto illo aliquid consectetur unde, expedita ab illum similique nulla maiores repellendus voluptates obcaecati! Iusto atque perferendis enim eligendi.
                        </div>
                        <div className="col-sm-4">
                            <img src="./Image/motobene cafe racer rocketgarage-001.JPG" style={{width: '27rem'}} alt=""/>
                          </div>
                          <div className="col-sm-2"></div>
                      </div>
                </div>

                <div className="container-fluid">
                        <div className="row">
                          <div className="col-sm-2"></div>
                          <div className="col-sm-4">
                            <img src="./Image/motobene cafe racer rocketgarage-001.JPG" style={{width: '27rem'}} alt=""/>
                          </div>
                          <div className="col-sm-4">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cupiditate, sunt ducimus ab voluptatem porro animi tempore repellat perferendis eaque placeat laudantium! Optio, voluptates quis voluptate quaerat ipsam in tenetur animi!</div>
                        </div>
                        <div className="col-sm-2"></div>
                </div>
            <br/>
                <div className="container-fluid">
                        <div className="row">
                            <div className="col-sm-2"></div>
                            <div className="col-sm-4">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima ut aperiam iusto illo aliquid consectetur unde, expedita ab illum similique nulla maiores repellendus voluptates obcaecati! Iusto atque perferendis enim eligendi.
                          </div>
                          <div className="col-sm-4">
                              <img src="./Image/motobene cafe racer rocketgarage-001.JPG" style={{width: '27rem'}} alt=""/>
                          </div>
                            <div className="col-sm-2"></div>
                        </div>
                </div>
                <br/><br/>
                {/* <!--Progress bar  --> */}
                <div className="container">
                <div className="container-fluid">
                      <div className="progress">
                        Body
                        <div className="progress-bar bg-success" role="progressbar" style={{width: '88%'}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <div className="progress">
                        Cat
                        <div className="progress-bar bg-info" role="progressbar" style={{width: '90%'}} aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <div className="progress">
                        Mesin
                        <div className="progress-bar bg-warning" role="progressbar" style={{width: '99%'}} aria-valuenow="75" aria-valuemin="0" aria-valuemax="100"></div>
                        </div><br/>
                        <div className="progress">
                        Kaki
                          <div className="progress-bar bg-danger" role="progressbar" style={{width: '95%'}} aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                        </div>
                </div>
                </div>
            <br/>
            <br/>
                {/* <!-- Spesifikasi detail -->  */}
               
                <div className="container-fluid" id="desdetail">
                <div className="row">
                        <div className="col-sm-2"></div>
                        <div className="col-sm-8">
                            <h3>Mesin</h3><br/>
                            <dl className="row">
                                  
                                    <dt className="col-sm-3 bg-secondary">Type Mesin</dt>
                                    <dd className="col-sm-9">2 Langkah</dd>                                    
                                    <dt className="col-sm-3 bg-secondary">Susunan Silinder</dt>
                                    <dd className="col-sm-9">Cylinder tunggal</dd>                                
                                    <dt className="col-sm-3 bg-secondary">Diameter x Langkah</dt>
                                    <dd className="col-sm-9">10r : 1</dd>                                
                                    <dt className="col-sm-3 bg-secondary">Volume Cilinder</dt>
                                    <dd className="col-sm-9">150 CC</dd>
                                    <dt className="col-sm-3 bg-secondary">Sistem Starter</dt>
                                    <dd className="col-sm-9">Kick Starter</dd>       
                                    <dt className="col-sm-3 bg-secondary">Sistem Pelumasan</dt>
                                    <dd className="col-sm-9">Wet sum</dd>       
                                    <dt className="col-sm-3 bg-secondary">Kapasitas Oli Mesin</dt>
                                    <dd className="col-sm-9">Total : 0,84 L ; Berkala : 0,80 L ; Ganti Filter Oli : 0,80 L</dd>       
                                    <dt className="col-sm-3 bg-secondary">Sistem Bahan Bakar</dt>
                                    <dd className="col-sm-9">Carburator</dd>       
                                    <dt className="col-sm-3 bg-secondary">Tipe Kopling</dt>
                                    <dd className="col-sm-9">Dry Centrifugal Clucth</dd>       
                                    <dt className="col-sm-3 bg-secondary">Tipe Transmisi</dt>
                                    <dd className="col-sm-9">Manual Transmision</dd>                                      
                            </dl>                               
                                
                                <br/>
                                <h3>Dimensi</h3><br/>
                                <dl className="row">
                                    
                                    <dt className="col-sm-3 bg-secondary">P X L X T (Length x Width x Height)</dt>
                                    <dd className="col-sm-9">1860 x 740 x 1070 mm</dd>
                                    <dt className="col-sm-3 bg-secondary">JARAK SUMBU RODA</dt>
                                    <dd className="col-sm-9">1260 mm</dd>
                                    <dt className="col-sm-3 bg-secondary">JARAK TERENDAH KE TANAH</dt>
                                    <dd className="col-sm-9">135mm.</dd>
                                    <dt className="col-sm-3 bg-secondary">TINGGI TEMPAT DUDUK</dt>
                                    <dd className="col-sm-9">760 mm.</dd>
                                    <dt className="col-sm-3 bg-secondary">BERAT ISI</dt>
                                    <dd className="col-sm-9">100 Kg</dd>
                                    <dt className="col-sm-3 bg-secondary">KAPASITAS TANGKI BENSIN</dt>
                                    <dd className="col-sm-9">7.7 Liter</dd>
                                  
                                </dl>
                                    
                                  <br/>
                                  <h3>Rangka</h3><br/>
                                <dl className="row">
                                      
                                    <dt className="col-sm-3 bg-secondary">Type Rangka</dt>
                                    <dd className="col-sm-9">Type Rangka</dd>
                                    <dt className="col-sm-3 bg-secondary">Suspensi Depan</dt>
                                    <dd className="col-sm-9">Merk dan type</dd>
                                    <dt className="col-sm-3 bg-secondary">Suspensi Belakang</dt>
                                    <dd className="col-sm-9">Merk dan type</dd>
                                    <dt className="col-sm-3 bg-secondary">Ban Depan</dt>
                                    <dd className="col-sm-9">Type Ban dan Ukuran.</dd>
                                    <dt className="col-sm-3 bg-secondary">Ban Belakang</dt>
                                    <dd className="col-sm-9">Type Ban dan Ukuran</dd>
                                    <dt className="col-sm-3 bg-secondary">Rem Depan</dt>
                                    <dd className="col-sm-9">Disk</dd>
                                    <dt className="col-sm-3 bg-secondary">Rem belakang</dt>
                                    <dd className="col-sm-9">Drum</dd>
                                    </dl>
                                   
                                    <br/>
                                    <h3>Kelistrikan</h3><br/>
                                <dl className="row">
                                        
                                        <dt className="col-sm-3 bg-secondary">Sistem Pengapian</dt>
                                        <dd className="col-sm-9">CDI</dd>
                                        <dt className="col-sm-3 bg-secondary">Tipe Batery</dt>
                                        <dd className="col-sm-9">Aki kering</dd>
                                        <dt className="col-sm-3 bg-secondary">Tipe Busi</dt>
                                        <dd className="col-sm-9">NGK 3053</dd> 
                                </dl>
                                        
                                
                        <div className="col-sm-2"></div>
                        </div>
                </div>
                </div>
            <hr></hr><hr></hr>
             <br/>
             <br/>
        {/* //  <!-- Text related product --> */}
                     <div className="container " id="penawaran">
                        <div className="row justify-content-md-center">
                            <div className="col col-lg-2"></div>
                                <div className="col-md-auto">
                                    <h1 style={{color: 'crimson', fontFamily: 'fantasy'}} >Feature Related Product</h1>
                                </div>
                            <div className="col col-lg-2"></div>
                        </div>                      
                    </div>
            <br/>
        {/* //  <!-- Related product --> */}
          <div className="container-fluid">
          <div className="row" style={{backgroundColor: 'black'}} >
          <div className="col-sm-2"></div>
          <div className="col-sm-8">
                <div className="card-group" style={{marginTop: '25px',marginBottom: '25px'}}>
                    <div className="card">
                        <img className="card-img-top" src="./Image/vespa62.jpg" style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                  
                    <div className="card">
                        <img className="card-img-top" src="./Image/vespasip.jpg" style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                  
                    <div className="card">
                        <img className="card-img-top" src="./Image/vespasip5.jpg" style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                        <div className="card-body">
                        <h5 className="card-title">Card title</h5>
                        <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
                        <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                        </div>
                    </div>
                </div>
          </div>
                <div className="col-sm-2"></div>
          </div>
          </div>
          <hr/><hr/>  


</div>
    );
  }
}

export default Cetailproduct;
