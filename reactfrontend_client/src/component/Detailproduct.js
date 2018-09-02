import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()
class Detailproduct extends Component {
    state={
        idM:'',
        redirect: false,

        bahanbakar:'',
        battery:'',
        beratisi:'',
        desc_brakes:'',
        desc_gearbox:'',
        desc_light:'',
        desc_product:'',
        desc_sadle:'',
        desc_shocks:'',
        diamater_mesin:'',
        gambar:'',
        gambar_brakes:'',
        gambar_gearbox:'',
        gambar_light:'',
        gambar_sadle:'',
        gambar_shocks:'',
        gambar_wheels:'',
        harga:'',
        jarak_sumbu:'',
        jarak_terendah_ketanah:'',
        kapasitas_oli:'',
        kapasitas_tangki:'',
        nama_motor:'',
        pjg_lbr_ttg:'',
        rem_belakang:'',
        rem_depan:'',
        sistem_pengapian:'',
        suspensi_belakang:'',
        suspensi_depan:'',
        system_pelumasan:'',
        system_starter:'',
        tinggi_tempat_duduk:'',
        type_busy:'',
        type_kopling:'',
        type_mesin:'',
        type_rangka:'',
        type_transmisi:'',
        volume_cilinder:''
    }
    
    componentDidMount(){
        var id_motor= this.props.location.state.id_motor;
        axios.get('http://localhost:8002/getDetailMotor/'+id_motor)
        .then((GetDataDetailMotor)=>{
            console.log(GetDataDetailMotor)
            this.setState({
                bahanbakar:GetDataDetailMotor.data[0].bahan_bakar,
                battery:GetDataDetailMotor.data[0].battery,
                beratisi:GetDataDetailMotor.data[0].berat_isi,
                desc_brakes:GetDataDetailMotor.data[0].desc_brakes,
                desc_gearbox:GetDataDetailMotor.data[0].desc_gearbox,
                desc_light:GetDataDetailMotor.data[0].desc_light,
                desc_product:GetDataDetailMotor.data[0].desc_product,
                desc_sadle:GetDataDetailMotor.data[0].desc_sadle,
                desc_shocks:GetDataDetailMotor.data[0].desc_shocks,
                desc_wheels:GetDataDetailMotor.data[0].desc_wheels,
                diamater_mesin:GetDataDetailMotor.data[0].diameter_mesin,
                gambar:GetDataDetailMotor.data[0].gambar,
                gambar_brakes:GetDataDetailMotor.data[0].gambar_brakes,
                gambar_gearbox:GetDataDetailMotor.data[0].gambar_gearbox,
                gambar_light:GetDataDetailMotor.data[0].gambar_light,
                gambar_sadle:GetDataDetailMotor.data[0].gambar_sadle,
                gambar_shocks:GetDataDetailMotor.data[0].gambar_shocks,
                gambar_wheels:GetDataDetailMotor.data[0].gambar_wheels,
                harga:GetDataDetailMotor.data[0].harga,
                jarak_sumbu:GetDataDetailMotor.data[0].jarak_sumbu_roda,
                jarak_terendah_ketanah:GetDataDetailMotor.data[0].jarak_terendah_ketanah,
                kapasitas_oli:GetDataDetailMotor.data[0].kapasitas_oli,
                kapasitas_tangki:GetDataDetailMotor.data[0].kapasitas_tangki,
                nama_motor:GetDataDetailMotor.data[0].nama_motor,
                pjg_lbr_ttg:GetDataDetailMotor.data[0].pjg_lbr_ttg,
                rem_belakang:GetDataDetailMotor.data[0].rem_belakang,
                rem_depan:GetDataDetailMotor.data[0].rem_depan,
                sistem_pengapian:GetDataDetailMotor.data[0].sistem_pengapian,
                suspensi_belakang:GetDataDetailMotor.data[0].suspensi_belakang,
                suspensi_depan:GetDataDetailMotor.data[0].suspensi_depan,
                system_pelumasan:GetDataDetailMotor.data[0].system_pelumasan,
                system_starter:GetDataDetailMotor.data[0].system_starter,
                tinggi_tempat_duduk :GetDataDetailMotor.data[0].tinggi_tempat_duduk,
                type_busy:GetDataDetailMotor.data[0].type_busy,
                type_kopling:GetDataDetailMotor.data[0].type_kopling,
                type_mesin:GetDataDetailMotor.data[0].type_mesin,
                type_rangka:GetDataDetailMotor.data[0].type_rangka,
                type_transmisi:GetDataDetailMotor.data[0].type_transmisi,
                volume_cilinder:GetDataDetailMotor.data[0].volume_cilinder
            })
            this.setState({
                id:id_motor
            })
        })
    }

    addtoCart = (event) => {
        if(cookies.get('userID') !== undefined){
          var idUser= cookies.get('userID')
          axios.post('http://localhost:8002/addtoCart',{
                    e:event,
                    idUser:idUser})
                    .then((Response) =>{
                    var block = Response.data
                    if(block == -1){
                      alert('This item has Carting')
                      console.log("gagal menambah cari, motor sudah dipilih sebelumnya")
                    }                
                    })
                    this.setState({
                      redirect :true
                    })
        }else{    
        this.setState({
          // notifelogin:true
          LoginDulu :true,
        
          })    
        }
         window.location.reload();
      }
  render() {
    if(this.state.redirect === true ) return <Redirect to='/cart'/>
    if(this.state.LoginDulu === true) return <Redirect to='/login'/>
    if(this.state.doubleItem === true) return <Redirect to='/konten'/>
    return (
            <div>
                        

                    {/* Halaman awal detail item   */}
                        
                        <div className="row">
                        <div className="container-fluid" >
                            <div className="row">
                                <div className="col-xs-3">
                                
                                    <nav aria-label="breadcrumb">
                                        <ol className="breadcrumb" style={{backgroundColor:"white"}}>
                                        <li className="breadcrumb-item"><Link to="/konten" style={{color:"black"}}>Home</Link></li>
                                        <li className="breadcrumb-item"><Link to="/listproduct" style={{color:"black"}}>List Motor</Link></li>
                                        <li className="breadcrumb-item active" aria-current="page">Detail Motor </li>
                                        </ol>
                                    </nav>
                                </div>
                            </div>
                        </div>
                            <div className="col-sm-9">
                            <img src={'http://localhost:8002/'+ `tampunganFile/${this.state.gambar}`} className="img-fluid" alt="Responsive image"/>
                            </div>
                            <div className="col-sm-3">
                                <p><h2>Lihat Detail Motor yang kamu Pilih!</h2></p>
                                
                                <button type="button" className="btn btn-light btn-lg" href="">Hubungin Dealer</button><br/><br/>
                                <button type="button" onClick ={()=>this.addtoCart(this.state.id)} className="card-link" className="btn nav-link btn-light btn-lg"> <i className="fa fa-shopping-cart"></i>&nbsp;Beli Sekarang!</button>
                                <p><br/>
                                    <a className="btn btn-light btn-lg" data-toggle="collapse" href="#collapseExample1" role="button" aria-expanded="false" aria-controls="collapseExample">
                                    Informasi Harga
                                    </a><br/><br/>
                                    <button className="btn btn-light btn-lg" type="button" data-toggle="collapse" data-target="#collapseExample2" aria-expanded="false" aria-controls="collapseExample">
                                    Informasi Motor
                                    </button><br/>
                                </p>
                                <div className="collapse" id="collapseExample1">
                                    <div className="card card-body">
                                    {this.state.desc_product}
                                    
                                    </div>
                                </div>
                                <div className="collapse" id="collapseExample2">
                                    <div className="card card-body">
                                    
                                    Rp.{this.state.harga}
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
                                    <a className="nav-link active" style={{color: 'antiquewhite',fontFamily: 'fantasy'}} href="#featuredetail">Feature Detail</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{color: 'antiquewhite',fontFamily: 'fantasy'}} href="#partdetail">Part Detail</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{color: 'antiquewhite',fontFamily: 'fantasy'}} href="#desdetail">Detailing</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" style={{color: 'antiquewhite',fontFamily: 'fantasy'}} href="#penawaran">Penawaran</a>
                                </li>
                            </ul><br/> 

                            {/* <!-- Spesifikasi dengan gambar dan deskripsi -->  */}
                            <div className="container-fluid" id="partdetail">
                                <div className="row">
                                    <div className="col-sm-2"></div>
                                        <div className="col-sm-4">
                                            <img src={'http://localhost:8002/'+ `filedetailLight/${this.state.gambar_light}`} style={{width: '27rem',height:'17rem'}} alt=""/>
                                        </div>
                                    <div className="col-sm-4">{this.state.desc_light}</div>
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                            <br/>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-2"></div>
                                        <div className="col-sm-4">
                                            {this.state.desc_sadle}
                                        </div>
                                    <div className="col-sm-4">
                                        <img src={'http://localhost:8002/'+ `filedetailSadle/${this.state.gambar_sadle}`} style={{width: '27rem',height:'17rem'}} alt=""/>
                                    </div>
                                    <div className="col-sm-2"></div>
                                </div>
                            </div>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    <img src={'http://localhost:8002/'+ `filedetailGearbox/${this.state.gambar_gearbox}`} style={{width: '27rem',height:'17rem'}} alt=""/>
                                    </div>
                                    <div className="col-sm-4">{this.state.desc_gearbox}</div>
                                </div>
                                <div className="col-sm-2"></div>
                            </div>
                        <br/>
                            <div className="container-fluid">
                                <div className="row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                    {this.state.desc_brakes}
                                    </div>
                                    <div className="col-sm-4">
                                        <img src={'http://localhost:8002/'+ `filedetailBrakes/${this.state.gambar_brakes}`} style={{width: '27rem',height:'17rem'}} alt=""/>
                                    </div>
                                    <div className="col-sm-2"></div>
                                </div>
                            </div>

                            <div className="container-fluid">
                                    <div className="row">
                                    <div className="col-sm-2"></div>
                                    <div className="col-sm-4">
                                        <img src={'http://localhost:8002/'+ `filedetailShocks/${this.state.gambar_shocks}`} style={{width: '27rem',height:'17rem'}} alt=""/>
                                    </div>
                                    <div className="col-sm-4">{this.state.desc_shocks}</div>
                                    </div>
                                    <div className="col-sm-2"></div>
                            </div>
                        <br/>
                            <div className="container-fluid">
                                    <div className="row">
                                        <div className="col-sm-2"></div>
                                        <div className="col-sm-4">
                                        {this.state.desc_wheels}
                                    </div>
                                    <div className="col-sm-4">
                                        <img src={'http://localhost:8002/'+ `filedetailWheels/${this.state.gambar_wheels}`} style={{width: '27rem'}} alt=""/>
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
                                                <dd className="col-sm-9">{this.state.type_mesin}</dd>                                   
                                                                              
                                                <dt className="col-sm-3 bg-secondary">Diameter x Langkah</dt>
                                                <dd className="col-sm-9">{this.state.diamater_mesin}</dd>                                
                                                <dt className="col-sm-3 bg-secondary">Volume Cilinder</dt>
                                                <dd className="col-sm-9">{this.state.volume_cilinder}</dd>
                                                <dt className="col-sm-3 bg-secondary">Sistem Starter</dt>
                                                <dd className="col-sm-9">{this.state.system_starter}</dd>       
                                                <dt className="col-sm-3 bg-secondary">Sistem Pelumasan</dt>
                                                <dd className="col-sm-9">{this.state.system_pelumasan}</dd>       
                                                <dt className="col-sm-3 bg-secondary">Kapasitas Oli Mesin</dt>
                                                <dd className="col-sm-9">{this.state.kapasitas_oli}</dd>       
                                                <dt className="col-sm-3 bg-secondary">Sistem Bahan Bakar</dt>
                                                <dd className="col-sm-9">{this.state.bahanbakar}</dd>       
                                                <dt className="col-sm-3 bg-secondary">Tipe Kopling</dt>
                                                <dd className="col-sm-9">{this.state.type_kopling}</dd>       
                                                <dt className="col-sm-3 bg-secondary">Tipe Transmisi</dt>
                                                <dd className="col-sm-9">{this.state.type_transmisi}</dd>                                      
                                        </dl>                               
                                            
                                            <br/>
                                            <h3>Dimensi</h3><br/>
                                            <dl className="row">
                                                
                                                <dt className="col-sm-3 bg-secondary">P X L X T (Length x Width x Height)</dt>
                                                <dd className="col-sm-9">{this.state.pjg_lbr_ttg}</dd>
                                                <dt className="col-sm-3 bg-secondary">Jarak Sumbu</dt>
                                                <dd className="col-sm-9">{this.state.jarak_sumbu}</dd>
                                                <dt className="col-sm-3 bg-secondary">Jarak Terendah ke Tanah</dt>
                                                <dd className="col-sm-9">{this.state.jarak_terendah_ketanah}</dd>
                                                <dt className="col-sm-3 bg-secondary">Tinggi Tempat Duduk</dt>
                                                <dd className="col-sm-9">{this.state.tinggi_tempat_duduk}</dd>
                                                <dt className="col-sm-3 bg-secondary">BERAT ISI</dt>
                                                <dd className="col-sm-9">{this.state.beratisi}</dd>
                                                <dt className="col-sm-3 bg-secondary">KAPASITAS TANGKI BENSIN</dt>
                                                <dd className="col-sm-9">{this.state.kapasitas_tangki}</dd>
                                            
                                            </dl>
                                                
                                            <br/>
                                            <h3>Rangka</h3><br/>
                                            <dl className="row">
                                                
                                                <dt className="col-sm-3 bg-secondary">Type Rangka</dt>
                                                <dd className="col-sm-9">{this.state.type_rangka}</dd>
                                                <dt className="col-sm-3 bg-secondary">Suspensi Depan</dt>
                                                <dd className="col-sm-9">{this.state.suspensi_depan}</dd>
                                                <dt className="col-sm-3 bg-secondary">Suspensi Belakang</dt>
                                                <dd className="col-sm-9">{this.state.suspensi_belakang}</dd>
                                                
                                                <dt className="col-sm-3 bg-secondary">Rem Depan</dt>
                                                <dd className="col-sm-9">{this.state.rem_depan}</dd>
                                                <dt className="col-sm-3 bg-secondary">Rem belakang</dt>
                                                <dd className="col-sm-9">{this.state.rem_belakang}</dd>
                                                </dl>
                                            
                                                <br/>
                                                <h3>Kelistrikan</h3><br/>
                                            <dl className="row">
                                                    
                                                    <dt className="col-sm-3 bg-secondary">Sistem Pengapian</dt>
                                                    <dd className="col-sm-9">{this.state.sistem_pengapian}</dd>
                                                    <dt className="col-sm-3 bg-secondary">Tipe Batery</dt>
                                                    <dd className="col-sm-9">{this.state.battery}</dd>
                                                    <dt className="col-sm-3 bg-secondary">Tipe Busi</dt>
                                                    <dd className="col-sm-9">{this.state.type_busy}</dd> 
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

export default Detailproduct;
