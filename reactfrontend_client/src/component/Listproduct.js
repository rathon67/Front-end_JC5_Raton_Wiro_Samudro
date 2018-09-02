import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {Pager} from 'react-bootstrap';
import axios from 'axios';

class Listproduct extends Component
{
  state={
    listProductClassic:[],
    listMotorBobber:[],
    listProductChopper:[],
    listProductCaferacer:[],
    listProductTracker:[],
  } 

  componentDidMount(){
    axios.get('http://localhost:8002/getListMotorClassic')
    .then((ambilData)=>{
      console.log(ambilData)
      this.setState({
        listProductClassic:ambilData.data
      })
    })

    axios.get('http://localhost:8002/getListMotorBobber')
    .then((ambilData)=>{
      // console.log(ambilData)
      this.setState({
        listMotorBobber:ambilData.data
      })
    })

    axios.get('http://localhost:8002/getListMotorChopper')
    .then((ambilData)=>{
      // console.log(ambilData)
      this.setState({
        listProductChopper:ambilData.data
      })
    })

    axios.get('http://localhost:8002/getListMotorCaferacer')
    .then((ambilData)=>{
      // console.log(ambilData)
      this.setState({
        listProductCaferacer:ambilData.data
      })
    })

    axios.get('http://localhost:8002/getListMotorTracker')
    .then((ambilData)=>{
      // console.log(ambilData)
      this.setState({
        listProductTracker:ambilData.data
      })
    })
  }

    render()
{
  const dataListMotorClassic=this.state.listProductClassic.map((isidata, index)=>{
    var urutan = index+1;
    var idMotor =isidata.id_motor
    console.log(idMotor)
    var namaMotor=isidata.nama_motor;
    var gambarMotor=isidata.gambar;
    var status=isidata.status;    
    return (
            <div className="card-group">
                <div className="card" style={{width: '186px',}}>
                  <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${gambarMotor}`} alt="Card image cap" style={{height:"150px", width:"184px"}} />
                  <div className="card-body">
                    <h5 className="card-title">{namaMotor}</h5>
                    <p className="card-text"><b>{status}</b></p>
                    <Link to={{pathname:"/detail", state:{id_motor:idMotor}}} className="card-link" className="btn btn-info pull-bottom">Lihat Detail</Link>
                  </div>
                </div>&nbsp;&nbsp;                          
              </div>
    )
  })
  const dataMotorChopper=this.state.listProductChopper.map((isidata, index)=>{
      var urutan = index+1;
      var idMotor =isidata.id_motor
      var namaMotor=isidata.nama_motor;
      var gambarMotor=isidata.gambar;
      var status=isidata.status;
      return (
              <div className="card-group">
                  <div className="card" style={{width: '186px',}}>
                    <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${gambarMotor}`} alt="Card image cap" style={{height:"150px", width:"184px"}} />
                    <div className="card-body">
                      <h5 className="card-title">{namaMotor}</h5>
                      <p className="card-text"><b>{status}</b></p>
                      <Link to={{pathname:"/detail", state:{id_motor:idMotor}}} className="card-link" className="btn btn-info pull-bottom">Lihat Detail</Link>
                    </div>
                  </div>&nbsp;&nbsp;                          
                </div>
      ) 
  })

  const dataMotorBobber=this.state.listMotorBobber.map((isidata, index)=>{
    var urutan = index+1;
    var idMotor =isidata.id_motor
    var namaMotor=isidata.nama_motor;
    var gambarMotor=isidata.gambar;
    var status=isidata.status;
    return (
            <div className="card-group">
                <div className="card" style={{width: '186px',}}>
                  <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${gambarMotor}`} alt="Card image cap" style={{height:"150px", width:"184px"}} />
                  <div className="card-body">
                    <h5 className="card-title">{namaMotor}</h5>
                    <p className="card-text"><b>{status}</b></p>
                    <Link to={{pathname:"/detail", state:{id_motor:idMotor}}} className="card-link" className="btn btn-info pull-bottom">Lihat Detail</Link>
                  </div>
                </div>&nbsp;&nbsp;                          
              </div>
    ) 
}) 

  const dataMotorCaferacer=this.state.listProductCaferacer.map((isidata, index)=>{
    var urutan = index+1;
    var idMotor =isidata.id_motor
    var namaMotor=isidata.nama_motor;
    var gambarMotor=isidata.gambar;
    var status=isidata.status;
    return (
            <div className="card-group">
                <div className="card" style={{width: '186px',}}>
                  <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${gambarMotor}`} alt="Card image cap" style={{height:"150px", width:"184px"}} />
                  <div className="card-body">
                    <h5 className="card-title">{namaMotor}</h5>
                    <p className="card-text"><b>{status}</b></p>
                    <Link to={{pathname:"/detail", state:{id_motor:idMotor}}} className="card-link" className="btn btn-info pull-bottom">Lihat Detail</Link>
                  </div>
                </div>&nbsp;&nbsp;                          
              </div>
    ) 
  })

  const dataMotorTracker=this.state.listProductTracker.map((isidata, index)=>{
    var urutan = index+1;
    var idMotor =isidata.id_motor
    var namaMotor=isidata.nama_motor;
    var gambarMotor=isidata.gambar;
    var status=isidata.status;
    return (
            <div className="card-group">
                <div className="card" style={{width: '186px',}}>
                  <img className="card-img-top" src={'http://localhost:8002/'+ `tampunganFile/${gambarMotor}`} alt="Card image cap" style={{height:"150px", width:"184px"}} />
                  <div className="card-body">
                    <h5 className="card-title">{namaMotor}</h5>
                    <p className="card-text"><b>{status}</b></p>
                    <Link to={{pathname:"/detail", state:{id_motor:idMotor}}} className="card-link" className="btn btn-info pull-bottom">Lihat Detail</Link>
                  </div>
                </div>&nbsp;&nbsp;                          
              </div>
    ) 
  })
  
  
    return(
        (
            <div>
  {/* breadcrumb */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-xs-3">
        <nav aria-label="breadcrumb">
          <ol className="breadcrumb">
            <li className="breadcrumb-item"><Link to="/konten">Home</Link></li>
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
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-1">Original Classic</a>
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-2">Costume Bobber</a>
            </nav>
            <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-3">Costume Chopper</a>
            
            <nav className="nav nav-pills flex-column">
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-4">Costume Caferacer</a>
              <a className="nav-link ml-3 my-1 bg-light" style={{color: 'black'}} href="#item-5">Costume Tracker</a>
            </nav>
          </nav>
        </nav>
      </div>
      <div className="col-lg-9">
        <div data-spy="scroll" data-target="#navbar-example3" data-offset={0}>
          <h4 id="item-1">
            All Classic Motorcyle And Scooter
          </h4>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>
          <div className="card-group">
            {dataListMotorClassic}
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>                      
          <div className="col-lg-11">
            <Pager>
              <Pager.Item previous onClick={()=>this.previosClassic()} className="pull-left">
                &larr; Previous
              </Pager.Item>
              <Pager.Item next href="#" className="pull-right"> 
                Next &rarr;
              </Pager.Item>
            </Pager>;
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <h4 id="item-2">
            Bobber Style
          </h4>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="card-group">
            {dataMotorBobber}
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="col-lg-11">
            <Pager>
              <Pager.Item previous href="#" className="pull-left">
                &larr; Previous
              </Pager.Item>
              <Pager.Item next href="#" className="pull-right"> 
                Next &rarr;
              </Pager.Item>
            </Pager>;
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <h4 id="item-3">
            CHOPPER
          </h4>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="card-group">
          {dataMotorChopper}
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="col-lg-11">
            <Pager>
              <Pager.Item previous href="#" className="pull-left">
                &larr; Previous
              </Pager.Item>
              <Pager.Item next href="#" className="pull-right"> 
                Next &rarr;
              </Pager.Item>
            </Pager>;
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <h4 id="item-4">
            Caferacer
          </h4>          
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="card-group">
            {dataMotorCaferacer}
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="col-lg-11">
            <Pager>
              <Pager.Item previous href="#" className="pull-left">
                &larr; Previous
              </Pager.Item>
              <Pager.Item next href="#" className="pull-right"> 
                Next &rarr;
              </Pager.Item>
            </Pager>;
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>            
          <h4 id="item-5">
            Adventure Tracker
          </h4>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="card-group">
          {dataMotorTracker}
          </div>
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>  
          <div className="col-lg-11">
            <Pager>
              <Pager.Item previous href="#" className="pull-left">
                &larr; Previous
              </Pager.Item>
              <Pager.Item next href="#" className="pull-right"> 
                Next &rarr;
              </Pager.Item>
            </Pager>;
          </div>          
          <div className="col-lg-11"><hr style={{height:"20px"}}/></div>           
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