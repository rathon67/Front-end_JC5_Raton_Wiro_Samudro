import React, { Component } from 'react';
import { Link } from 'react-router-dom';

    class Header extends Component 
    {
    render() 
    {
    return (
      <div>
      <nav className="navbar navbar-expand-lg navbar-dark " style={{backgroundColor: 'black'}}>
        <Link to="/index" className="navbar-brand" >RustymoTo</Link>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item ">
            <Link to="/index" className="nav-link " img src="" >Home</Link>
            </li>
            <li className="nav-item">
              <Link to ="listproduct" className="nav-link" >Feature &amp; Model</Link>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Belanja
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
              <Link to="/login" className="dropdown-item " >Login</Link>
              <Link to="/register"className="dropdown-item" >Register</Link>
                <div className="dropdown-divider" />
                <Link to="/listproduct" className="dropdown-item">Lihat Penawaran</Link>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link disabled" href="">Newest</a>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input className="form-control mr-sm-2" type="search" placeholder="Temukan pencarian" aria-label="Search" />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Cari..</button>
          </form>
        </div>
      </nav>
      <br />
      <br />
    </div>
    
              
              
              
              
              
        
             
             
              
             
             
             
                
           












          
                
       
    );
    }
    } export default Header;