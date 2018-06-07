import React, { Component } from 'react';
import { Link } from 'react-router-dom';





class Konten extends Component {
    render() 
    {
    return (
        <div>
         {/* CAROUSEL UTAMA   */}
        <div id="carouselExampleFade" classNameName="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">
              <div className="carousel-item active">
                <img className="d-block w-100" src='./Image/Royalenfieldcarousel.jpeg' alt="First slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Nikmati berkendara sesuai Gayamu</h1>
                    <h3>THE ALL NEW BONNEVILLE SPEEDMASTER brings a new dimension to the Bonneville line-up. With much more classNameic British custom laid-back attitude, forward footpegs, swept-back beach bars and comfortable pillion capability, the new Speedmaster delivers a distinctive cruiser riding style. High specification rider-focused-technology combines with elegant engineering to provide a superior level of handling, comfort and control.</h3>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src='./Image/vespasip5.jpg'  alt="Second slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Disini Pilih Selera Lo</h1>
                    <h3>The critically acclaimed high-torque engine, with its powerful hot rod ride and raw sound, has a reassuringly high first major service interval of 10,000 mile / 16,000km.</h3>
                  </div>
              </div>
              <div className="carousel-item">
                <img className="d-block w-100" src='./Image/Motor_bobber.jpg' alt="Third slide"/>
                <div className="carousel-caption d-none d-md-block">
                    <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Tunjukan Siapa kamu dengan kuda besimu</h1>
                    <h3>Perfect for riders looking for greater touring capability and a more laid-back cruiser style than the Bonneville T120, the new Speedmaster's comfortable yet versatile twin seat set-up offers increased practicality together with all the Bonneville Bobber's attitude.</h3>
                  </div>
              </div>
            
            <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
              <span  className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
            <ol className="carousel-indicators">
              <li data-target="carousel"
              data-slide-to="0" className="active"></li>
              <li data-target="carousel-control-next"
              data-slide-to="1"></li>
              <li data-target="carousel-control-next"
              data-slide-to="2"></li>
              </ol>
          </div>
        </div>
        <br></br>
        <br></br>
            {/* Text Judul DI tengah */}
            <div className="container">
              <div className="row justify-content-md-center">
                <div className="col col-lg-2"></div>
                <div className="col-md-auto">
                  <h1 style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold'}}>Feature Motorycles or Scooters</h1>
                </div>
                <div className="col col-lg-2"></div>
              </div>
              
            </div>
            <br></br>
            <br></br>

            {/* Ini bagian Card display item (reordering class) */}
  <div className="container">
      <div className="row">
        <div className="col">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src='./Image/BSA4.jpg'  style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                <div className="card-body" >
                  <h5 className="card-title bg-light" style={{fontFamily:'serif',fontWeight: 'bold'}} >New But classNamesic, Felt the touch</h5>
                  <p className="card-text"> Open now: a priceless collection of motorcycle memorabilia, themed café, on-site store, and fully-guided pre-bookable factory tour.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">BSA 1948 Build Up Restoration</li>
                  <li className="list-group-item">Rp 57.000.000</li>
                  <li className="list-group-item">Motorst Garage</li>
                </ul>
                <div className="card-body">
                  <Link to="/cetail" className="card-link">Lihat Detail</Link>
                  <Link to="/cart" className="card-link"><i className="fa fa-shopping-cart" aria-hidden="true"></i>Tambahkan ke Daftar belanja</Link>
                  
                </div>
              </div>
        </div>
        <div className="col order-12">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src='./Image/lambretta-scooter-125dl-1969-going-underground-250cc-[5]-2269-p.jpg' style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title bg-light" style={{fontFamily:'serif',fontWeight: 'bold'}}>Best Offer For you!</h5>
                  <p className="card-text">New Model with great color and artistic paint</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Lambretta Li 150 1967</li>
                  <li className="list-group-item">Rp 44.000.000</li>
                  <li className="list-group-item"> Motorst Garage</li>
                </ul>
                <div className="card-body">
                  <Link to="/cetail" className="card-link">Lihat Detail</Link>
                  <Link to="/cart" className="card-link">Tambahkan ke Daftar belanja<i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                </div>
              </div>
        </div>
        <div className="col order-1">
            <div className="card" style={{width: '18rem'}}>
                <img className="card-img-top" src='./Image/custom-honda-cbr-cafe-racer-cbr250rr-sport-bike-motorcycle-250-2.jpg' style={{width: 'auto', height: '200px'}} alt="Card image cap"/>
                <div className="card-body">
                  <h5 className="card-title bg-light" style={{fontFamily:'serif',fontWeight: 'bold'}}>Cafe racer!</h5>
                  <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                </div>
                <ul className="list-group list-group-flush">
                  <li className="list-group-item">Caferacer Honda Rebuild</li>
                  <li className="list-group-item">Rp. 88.0000.0000</li>
                  <li className="list-group-item">MH Garage</li>
                </ul>
                <div className="card-body">
                  <Link to="/cetail" className="card-link">Lihat Detail</Link>
                  <Link to="/cart" className="card-link">Tambahkan ke Daftar belanja<i className="fa fa-shopping-cart" aria-hidden="true"></i></Link>
                </div>
              </div>
        </div>
    
        </div>
    </div>
    <br></br>
    <br></br>
    {/* Image Cap */}
    <div className="card">
      <div className="card-body" style={{backgroundColor:'black'}}>
        <h2 className="card-title " style={{color: 'crimson',fontFamily: 'fantasy',fontWeight: 'bold', marginTop: '15px'}}>New But classNamesic, Felt the touch</h2>
        <p className="card-text" style={{color: 'azure'}}>Open now: a priceless collection of motorcycle memorabilia, themed café, on-site store, and fully-guided pre-bookable factory tour.</p>
        <p className="card-text" style={{color: 'azure'}}><small className="text-muted">Last updated 3 weeks ago</small></p>
      </div>
      <img className="card-img-bottom" src='./Image/main-banner.jpg' alt="Card image cap"/>
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
              <img src="./Image/sipclassName.jpg" className="figure-img img-fluid rounded"  alt="A generic square placeholder image with rounded corners in a figure."/>
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