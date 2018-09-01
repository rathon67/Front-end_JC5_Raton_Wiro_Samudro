import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies()

    class Header extends Component 
    {      
      state ={
        data1:[],
        status:false
                     
      
      }

      componentDidMount() {
        if(cookies.get('userID') !== undefined){
        var cookiees= cookies.get('userID')
        axios.post(`http://localhost:8002/cookiesid`,{
          iduser:cookiees
        })
        .then((ambilData) =>{
          this.setState({
            data1:ambilData.data[0],
            status:true                    
          })
          
        })
       }
      }
      
    render() 
    {   
      
        const data = this.state.data1.map((pecahan) =>{
          var id=pecahan.id_user;
          var namadep=pecahan.nama_depan;
          var namabelakang=pecahan.nama_belakang;
        
          return      
                         
                      <nav className="navbar navbar-expand-lg navbar-dark sticky-top " style={{backgroundColor: 'black'}}>
                      <img className="navbar-brand" src="./Icon/raton_Motor_spion.png" id="logo_custom" width="12%" alt="logo" />
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon" />
                        </button>
                            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul className="navbar-nav mr-auto">
                                    <li className="nav-item ">
                                    <Link to="/konten" className="nav-link " img src="" style={{fontFamily: 'fantasy'}}><h5>Home</h5></Link>
                                    </li>
                                    <li className="nav-item">
                                    <Link to ="listproduct" className="nav-link" style={{fontFamily: 'fantasy'}}><h5>Feature &amp; Model</h5></Link>
                                    </li>
                                    <li className="nav-item dropdown">
                                      <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{fontFamily: 'fantasy'}}>
                                        Belanja
                                      </a>
                                      <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                          <Link to="/logout" className="dropdown-item " >Logout</Link>
                                          <Link to="/profile"className="dropdown-item" >Profile</Link>
                                          <Link to="/profile"className="dropdown-item" >Welcome</Link>
                                        <div className="dropdown-divider" />
                                          <Link to="/cart" className="dropdown-item">Cart</Link>
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
          }
        )
      
      
      
     
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
                    <Link to="/login" className="dropdown-item " >Login</Link>
                    <Link to="/register"className="dropdown-item" >Register</Link>
                      <div className="dropdown-divider" />
                      <Link to="/listproduct" className="dropdown-item">Lihat Penawaran</Link>
                    </div>
                  </li>
                  {/* <li className="nav-item">
                    <a className="nav-link disabled" href=""style={{fontFamily: 'fantasy'}}>Newest</a>
                  </li> */}
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Temukan pencarian" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cari..</button>
            </form>
          </div>
    </nav>
        </div>     
    );
  }
}
export default Header;