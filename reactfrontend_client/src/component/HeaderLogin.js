import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

class HeaderLogin extends Component {
    state = {
        namadep :'',
        namabelakang:'',
        status:false
    }

    pindah = () =>{
        this.setState({
            state: true
        })
        this.location.reload();
    }

    componentDidMount(){
        let mycookie =cookies.get('userID');
        axios.post(`http://localhost:8002/profileuser`,{
            idUser:mycookie
        }).then((response) =>{
            var data=response.data[0];
            this.setState({
                namadep:data.nama_depan,
                namabel:data.nama_belakang
            })
        })
    }
  render() {
      if(this.state.status){
          <Redirect to='/logout'/>
      }
    return (
      <div>
                      
                      <nav className="navbar navbar-expand-lg navbar-dark sticky-top " style={{backgroundColor: 'black'}}>
                      <img className="navbar-brand" src="./Icon/raton_Motor_spion.png" id="logo_custom" width="12%" alt="logo" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                    <Link to="/konten" className="nav-link " img src="" style={{fontFamily: 'fantasy', color:"#FDFEFE"}}><h5>Home</h5></Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to ="listproduct" className="nav-link" style={{fontFamily: 'fantasy', color:"#FDFEFE"}}><h5>Feature &amp; Model</h5></Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontFamily: 'fantasy', color:"#FDFEFE"}}>
                                        Belanja
                                      </a>
                                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <Link to="/cart" className="dropdown-item" style={{color: '#B20000',fontFamily: 'fantasy'}}><i className="fas fa-cart-plus"></i>&nbsp;Cart</Link>                                          
                                            <Link to="/invoicehistory" className="dropdown-item" style={{color: '#B20000',fontFamily: 'fantasy'}}><i className="fas fa-receipt"></i>&nbsp;Invoice</Link>                                          
                                            <Link to="/profile"className="dropdown-item" style={{color: '#B20000',fontFamily: 'fantasy'}}><i className="far fa-user-circle"></i>&nbsp;{this.state.namadep} &nbsp;{this.state.namabel}</Link>                                          
                                        <div className="dropdown-divider" />
                                        <Link to="/logout" className="dropdown-item " style={{color: '#B20000',fontFamily: 'fantasy'}}><i class="fas fa-sign-out-alt"></i>&nbsp;Logout</Link> 
                                      </div>
                                    </li>
                                    {/* <li className="nav-item">
                                      <a className="nav-link disabled" href=""style={{fontFamily: 'fantasy'}}>Newest</a>
                                    </li> */}
                              </ul>
                              <form className="form-inline my-2 my-lg-0">
                                <input className="form-control mr-sm-2" type="search" placeholder="Temukan pencarian" aria-label="Search" />
                                <button className="btn btn-outline-danger my-2 my-sm-0" type="submit">Cari..</button>
                              </form>
                            </div>
                       </nav>
        
      </div>
    )
  }
}

export default HeaderLogin;