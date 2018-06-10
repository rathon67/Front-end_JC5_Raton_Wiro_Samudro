import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Listproduct extends Component
{
    render()
{
    return(
        (
            <div>
  {/* breadcrumb */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/index">Home</Link></li>
            <li className="breadcrumb-item active"><Link to="/listproduct">List Motor</Link></li>
          </ol>
        </nav>
      </div>
    </div>
  </div> 
  {/* List Motor */}
  <div className="container" />
  <div className="container-fluid">
    <div className="row">
      <div className="col-md-3">
        <nav id="navbar-example3" className="navbar navbar-light sticky-top ">
          <a className="navbar-brand" href="">All-moTos</a>
          <nav className="nav nav-pills flex-column">
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-1-1">Original Classic</a>
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-1-2">Costume Bobber</a>
            </nav>
            <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-2">Costume Chopper</a>
            <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-3">Costume Bratstyle</a>
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-3-1">Costume Caferacer</a>
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-3-2">Costume Tracker</a>
            </nav>
          </nav>
        </nav>
      </div>
      <div className="col-lg-9">
        <div data-spy="scroll" data-target="#navbar-example3" data-offset={0}>
          <h4 id="item-1">
            Original Classic
          </h4>
          <hr />
          <div className="card-group">
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/lambretta scooter.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '12rem'}}>
              <img className="card-img-top" src="Image/Old_military_BSA_motorcycle,_C5554828,_pic1.JPG" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/MemorableMotorcycleBSAM2011.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>
          </div>
          <h4 id="item-1-1">
            Bobber Style
          </h4>
          <hr />
          <div className="card-group">
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/Royal-Enfield-by-Bulleteer-5.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/Modified-Royal-Enfield-Thunderbird-350-Spartan-Images-1.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '12rem'}}>
              <img className="card-img-top" src="Image/MY18-Bobber-road-sideview-LB.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/royalenfeld2.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>
          </div>
          <h4 id="item-1-2">
            CHOPPER
          </h4>
          <div className="card-group">
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/main-banner.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/BSA-1960-brochure.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '12rem'}}>
              <img className="card-img-top" src="Image/main-banner.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>
          </div>
          <h4 id="item-2">
            Brats style
          </h4>
          <hr />
          <div className="card-group">
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '12rem'}}>
              <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/motorbike113103.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>
          </div>
          <h4 id="item-3">
            Cafe Racer Moto
          </h4>
          <hr />
          <div className="card-group">
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/MotoB-Side-copy.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/motoguzzi-850t-caferacer-4.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '12rem'}}>
              <img className="card-img-top" src="Image/custom-triumph.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/building-a-cafe-racer-triumph.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>
          </div>
          <h4 id="item-3-1">
            Adventure Tracker
          </h4>
          <hr />
          <div className="card-group">
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/indian_scout_ftr1200_street_tracker_01.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/05-honda-africa-twin-2017.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '12rem'}}>
              <img className="card-img-top" src="Image/Snow-Male.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>&nbsp;
            <div className="card" style={{width: '10rem'}}>
              <img className="card-img-top" src="Image/trackerHD.jpg" alt="Card image cap" />
              <div className="card-body">
                <h5 className="card-title">Card title</h5>
                <p className="card-text">Some quick example .</p>
                <a href="" className="btn btn-outline-success">View Detail</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div><br /><br /><br /><br />
</div>


        )
    );
}
}
export default Listproduct;