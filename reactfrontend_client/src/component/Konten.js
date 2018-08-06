import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';


class Konten extends Component {
  state={
    product :[]
  }

  componentDidMount() {
    var self =this;
    axios.get('http://localhost:8002/productall')
    .then((ambilData)=>{
      self.setState({product:ambilData.data,})
      console.log(this.state.product)
    })
  }
    render() 
    {
      // data product untuk di olah
      const data =this.state.product.map((item, index)=>{
        var urut =index+1;
        var id=item.id_motor;
        var jenis=item.id_jenis;
        var gambar=item.gambar;
        var namamotor=item.namamotor;
        var descmotor=item.desc_product;
        var harga= item.harga;
        var pembuat= item.pembuat;
        var status =item.status;
        var posted = item.posted;
        return (
        <div key={urut} className="col">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${gambar}`}  style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                <div className="card-body" >
                  <h5 className="card-title bg-light" style={{fontFamily:'serif',fontWeight: 'bold'}} >{namamotor}</h5>
                  <p className="card-text"> {descmotor}</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">{status}</li>
                  <li className="list-group-item">Rp {harga}</li>
                  <li className="list-group-item">{pembuat}</li>
                </ul>
                <div className="card-body">
                  <Link to="/cetail" className="card-link">Lihat Detail</Link>
                  <Link to="/cart" className="card-link"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Tambahkan ke Daftar belanja</Link>
                  
                </div>
              </div>
        </div>
        )
      }
    );
    return (
        <div>
         {/* CAROUSEL UTAMA   */}
         <div id="carousel2_indicator" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src="Image/Royalenfieldcarousel.jpeg" alt="First slide" />
                <article className="carousel-caption d-none d-md-block">
                <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Nikmati berkendara sesuai Gayamu</h1>
                <h3 style={{color: 'Black'}}>THE ALL NEW BONNEVILLE SPEEDMASTER brings a new dimension to the Bonneville line-up. With much more classic British custom laid-back attitude, forward footpegs, swept-back beach bars and comfortable pillion capability, the new Speedmaster delivers a distinctive cruiser riding style. High specification rider-focused-technology combines with elegant engineering to provide a superior level of handling, comfort and control.</h3>
                </article> {/* carousel-caption .// */}
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="Image/vespasip5.jpg" alt="Second slide" />
                <article className="carousel-caption d-none d-md-block">
                <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Disini Pilih Selera Lo</h1>
                <h3 style={{color: 'Black'}}>The critically acclaimed high-torque engine, with its powerful hot rod ride and raw sound, has a reassuringly high first major service interval of 10,000 mile / 16,000km.</h3>
                            
                </article> {/* carousel-caption .// */}
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src="Image/building-a-cafe-racer-triumph.jpg" alt="Third slide" />
                <article className="carousel-caption d-none d-md-block">
                <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Tunjukan Siapa kamu dengan kuda besimu</h1>
                <h3 style={{color: 'Black'}}>Perfect for riders looking for greater touring capability and a more laid-back cruiser style than the Bonneville T120, the new Speedmaster's comfortable yet versatile twin seat set-up offers increased practicality together with all the Bonneville Bobber's attitude.</h3>
                            
                </article> {/* carousel-caption .// */}
              </div>
            </div>
            <Link to="#carousel2_indicator" className="carousel-control-prev"  role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true" />
              <span className="sr-only">Previous</span>
            </Link>
            <Link to="#carousel2_indicator" className="carousel-control-next"  role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true" />
              <span className="sr-only">Next</span>
            </Link>
          </div>

        <br></br>
        <br></br>
            {/* Text Judul DI tengah */}
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col col-lg-2"></div>
                <div className="col-md-auto">
                  <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Newest Feature Motorycles or Scooters</h1>
                </div>
                <div className="col col-lg-2"></div>
              </div>
              
            </div>
            <br></br>
            <br></br>

            {/* Ini bagian Card display item (reordering class) */}
  <div className="container">
      <div className="row">
      {/* Data product dari Database */}
        {data}
      {/*Akhir*/}
      </div>
  </div>
    <br></br>
    <br></br>
    {/* Image Cap */}
    <div className="card">
      <div className="card-body" style={{backgroundColor:'black'}}>
        <h2 className="card-title " style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold', marginTop: '15px'}}>New But classic, Felt the touch</h2>
        <p className="card-text" style={{color: 'azure'}}>Open now: a priceless collection of motorcycle memorabilia, themed café, on-site store, and fully-guided pre-bookable factory tour.</p>
        <p className="card-text" style={{color: 'azure'}}><small className="text-muted">Last updated 3 weeks ago</small></p>
      </div>
      <img className="card-img-bottom" src='./Image/Triumph-CS.jpg' alt="Card image cap"/>
    </div>

<br></br>
<br></br>

{/* Embed Youtbe */}
<div className="container-fluid" style={{backgroundColor:'black'}} >
      <div className="row">
        <div className="col-sm-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe width="560" height="315" src="https://www.youtube.com/embed/YpVpjzyGJPU" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            </div>
        </div>
        <div className="col-sm-4" style={{color: 'antiquewhite', marginTop: '50px'}}>
          <h3 style={{color: 'crimson'}}>Nikmati Setiap Perjalanan dengan Kendaraan khusus untuk anda!</h3>
          THE ALL NEW BONNEVILLE SPEEDMASTER brings a new dimension to the Bonneville line-up. With much 
          more classNameic British custom laid-back attitude, forward footpegs, swept-back beach bars and 
          comfortable pillion capability, the new Speedmaster delivers a distinctive cruiser riding style. 
          High specification rider-focused-technology combines with elegant engineering to provide a 
          superior level of handling, comfort and control.
        </div>
    </div>
    </div>
   <br></br>
   <br></br>
    <div className="container-fluid " style={{backgroundColor:'black'}} >
      <div className="row">
        <div className="col-sm-4" style={{color: 'antiquewhite', marginTop: '50px'}}>
          <h3 style={{color: 'crimson'}}>Teman itu bisa di ajak bareng kemana pun! Pilih teman Mesinmu!</h3>
          Perfect for riders looking for greater touring capability and a more laid-back cruiser style than 
          the Bonneville T120, the new Speedmaster's comfortable yet versatile twin seat set-up offers increased 
          practicality together with all the Bonneville Bobber's attitude. The critically acclaimed high-torque 
          engine, with its powerful hot rod ride and raw sound, has a reassuringly high first major service 
          interval of 10,000 mile / 16,000km.
        </div>
        <div className="col-sm-8">
          <div className="embed-responsive embed-responsive-16by9">
            <iframe className="embed-responsive-item" src="https://www.youtube.com/embed/Qj3TcKZUaxU" allowfullscreen></iframe>
          </div>
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
{/* Figure Bawah */}
    <div className="card-body">
    
    <div className="row">
      <div className="col col-sm-4" style={{backgroundColor: 'black'}}>
          <figure className="figure" style={{marginTop: '40px'}} >
              <img src="./Image/1200px-BSA_riders_at_2007_Ace_Cafe_reunion.jpg" className="figure-img img-fluid rounded" style={{width: 'auto', height: '400px'}} alt="A generic square placeholder image with rounded corners in a figure."/>
              <figcaption className="figure-caption" style={{color: 'crimson'}}><h3>Berkumpul di acara yang seru dengan gaya gue!</h3></figcaption>
            </figure>
      </div>
      <div className="col col-sm-4" style={{backgroundColor: 'black'}}>
          <figure className="figure"style={{marginTop: '40px'}}>
              <img src="./Image/custom-triumph.jpg" className="figure-img img-fluid rounded"  alt="A generic square placeholder image with rounded corners in a figure."/>
              <figcaption className="figure-caption" style={{color: 'crimson'}}><h3>Perjalanan Indah dengan Kendaraan yang tepat!</h3></figcaption>
            </figure>
      </div>
      <div className="col col-sm-4" style={{backgroundColor: 'black'}}>
          <figure className="figure"style={{marginTop: '40px'}}>
              <img src='./Image/TRACKER-ABOVE-250-3.jpg' className="figure-img img-fluid rounded" style={{width: 'auto', height: '400px'}}  alt="A generic square placeholder image with rounded corners in a figure."/>
              <figcaption className="figure-caption" style={{color: 'crimson'}}><h3>Beruntung punya Motor ini!</h3></figcaption>
            </figure>
      </div>
    </div>      
  
  </div>
  <br></br>
  <br></br>
  <br></br>
  <br></br>
  {/* Badge Sebelum Footer */}
  <div className="container-fluid bg-secondary">
      <div className="row align-items-center">
        <div className="col col-sm-4">
            <Link to="" className="badge badge-secondary"><h1> More Information</h1></Link>
        </div>
        <div className="col col-sm-4">
            < Link to="" className="badge badge-secondary"><h1>Find Dealer near City</h1></Link>
        </div>
        <div className="col col-sm-4">
            < Link to="" className="badge badge-secondary"><h1>Download Brochure</h1></Link>
        </div>
      </div>
    </div>
    <br></br>
    {/* Footer Article */}
    <div className="row" style={{backgrounColor: 'white'}} >   
      <div className="col col-sm-4">
        <ul style={{listStyle: 'none' }}>
          <li><p>
            <h2>All moTos</h2>
              <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Adventure
              </a>
            </p></li>
          <li> 
              <p>
                <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  classNameics
                </a>
              </p>
          </li>
          <li>
              <p>
                  <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Roadsters
                  </a>
                </p>
          </li>
          <li><p>
              <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                Modist
              </a>
            </p></li>
          
        </ul>
        
      </div>
      <div className="col col-sm-4">
          <ul style={{listStyle: 'none'}}>
            <li><p>
              <h2>Inside us</h2>
                <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Visitor experience
                </a>
              </p></li>
            <li> 
                <p>
                  <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    The Distinguished gentleman Ride
                  </a>
                </p>
            </li>
            <li>
                <p>
                    <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                      News and Event
                    </a>
                  </p>
            </li>
            <li><p>
                <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                  Career
                </a>
              </p></li>
            
          </ul>
          
        </div>
        <div className="col col-sm-4">
            <ul style={{listStyle: 'none', alignContent: 'center'}}>
              <li><p>
                <h2>Service & Support </h2>
                  <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Genuine Part
                  </a>
                </p></li>
              <li> 
                  <p>
                    <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                     Rider Advice
                    </a>
                  </p>
              </li>
              <li>
                  <p>
                      <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                        Download Brochure
                      </a>
                    </p>
              </li>
              <li><p>
                  <a className="btn btn-danger" data-toggle="collapse" href="#collapseExample" role="button" aria-expanded="false" aria-controls="collapseExample">
                    Find a Dealer
                  </a>
                </p></li>              
            </ul>            
          </div>
    </div>
<hr/>
</div>
   
    );
}
} 
export default Konten;