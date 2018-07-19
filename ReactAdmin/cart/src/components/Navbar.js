import React, { Component } from 'react'
import {Link} from 'react-router-dom'
class Navbar extends Component {
  render() {
    return (
      <div>
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                  <div className="navbar-header">
                    <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                      <span className="icon-bar" />
                    </button>
                    <Link className="navbar-brand" to="/">RustymoTo</Link>
                  </div>
                  <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                    <ul className="nav navbar-nav">
                      <li><Link to="/listproduct">List Category</Link> </li>
                      <li><Link to="/listproduct">List Product</Link></li>
                      <li><Link to="/listproduct">List Invoice</Link></li>
                      <li><Link to="/listproduct">List Member</Link></li>
                      <li className="dropdown">
                        <a href="#" className="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false">Menu <span className="caret" /></a>
                        <ul className="dropdown-menu" role="menu">
                          <li><Link to="/tambahcategory">Tambah data Category</Link></li>
                          <li><Link to="/tambahproduk">Tambah data Product</Link></li>
                          <li><Link to="/tambahcategory">Tambah data User</Link></li>
                          
                          {/* <li><a href="#">Another action</a></li>
                          <li><a href="#">Something else here</a></li>
                          <li className="divider" />
                          <li><a href="#">Separated link</a></li>
                          <li className="divider" />
                          <li><a href="#">One more separated link</a></li> */}
                        </ul>
                      </li>
                    </ul>
                    <form className="navbar-form navbar-left" role="search">
                      <div className="form-group">
                        <input type="text" className="form-control" placeholder="Search" />
                      </div>
                      <button type="submit" className="btn btn-default">Search</button>
                    </form>
                    <ul className="nav navbar-nav navbar-right">
                      <li><Link to="/">Log Out</Link></li>
                    </ul>
                  </div>
                </div>
              </nav>        
      </div>
    )
  }
}
export default Navbar;