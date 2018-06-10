import React, { Component } from 'react';
import { Link } from 'react-router-dom';

    class Header extends Component 
    {
    render() 
    {
    return (
    <div>
      <div className="page">
        {/* navbar*/}
        <header className="header">
          <nav className="navbar">
            <div className="container-fluid">
              <div className="navbar-holder d-flex align-items-center justify-content-between">
                <div className="navbar-header"><a id="toggle-btn" href="#" className="menu-btn"><i className="icon-bars"> </i></a><a href="index.html" className="navbar-brand">
                    <div className="brand-text d-none d-md-inline-block"><span>RustymoTo</span><strong className="text-primary">Dashboard</strong></div></a></div>
                <ul className="nav-menu list-unstyled d-flex flex-md-row align-items-md-center">
                  {/* Notifications dropdown*/}
                  <li className="nav-item dropdown"> <a id="notifications" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-bell" /><span className="badge badge-warning">12</span></a>
                    <ul aria-labelledby="notifications" className="dropdown-menu">
                      <li><a rel="nofollow" href="#" className="dropdown-item"> 
                          <div className="notification d-flex justify-content-between">
                            <div className="notification-content"><i className="fa fa-envelope" />You have 6 new messages </div>
                            <div className="notification-time"><small>4 minutes ago</small></div>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item"> 
                          <div className="notification d-flex justify-content-between">
                            <div className="notification-content"><i className="fa fa-twitter" />You have 2 followers</div>
                            <div className="notification-time"><small>4 minutes ago</small></div>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item"> 
                          <div className="notification d-flex justify-content-between">
                            <div className="notification-content"><i className="fa fa-upload" />Server Rebooted</div>
                            <div className="notification-time"><small>4 minutes ago</small></div>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item"> 
                          <div className="notification d-flex justify-content-between">
                            <div className="notification-content"><i className="fa fa-twitter" />You have 2 followers</div>
                            <div className="notification-time"><small>10 minutes ago</small></div>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-bell" />view all notifications                                          </strong></a></li>
                    </ul>
                  </li>
                  {/* Messages dropdown*/}
                  <li className="nav-item dropdown"> <a id="messages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link"><i className="fa fa-envelope" /><span className="badge badge-info">10</span></a>
                    <ul aria-labelledby="notifications" className="dropdown-menu">
                      <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                          <div className="msg-profile"> <img src="img/avatar-1.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                          <div className="msg-body">
                            <h3 className="h5">Jason Doe</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                          <div className="msg-profile"> <img src="img/avatar-2.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                          <div className="msg-body">
                            <h3 className="h5">Frank Williams</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item d-flex"> 
                          <div className="msg-profile"> <img src="img/avatar-3.jpg" alt="..." className="img-fluid rounded-circle" /></div>
                          <div className="msg-body">
                            <h3 className="h5">Ashley Wood</h3><span>sent you a direct message</span><small>3 days ago at 7:58 pm - 10.06.2014</small>
                          </div></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item all-notifications text-center"> <strong> <i className="fa fa-envelope" />Read all messages  </strong></a></li>
                    </ul>
                  </li>
                  {/* Languages dropdown    */}
                  <li className="nav-item dropdown"><a id="languages" rel="nofollow" data-target="#" href="#" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" className="nav-link language dropdown-toggle"><img src="img/flags/16/GB.png" alt="English" /><span className="d-none d-sm-inline-block">English</span></a>
                    <ul aria-labelledby="languages" className="dropdown-menu">
                      <li><a rel="nofollow" href="#" className="dropdown-item"> <img src="img/flags/16/ID.png" alt="English" className="mr-2" /><span>Indonesia</span></a></li>
                      <li><a rel="nofollow" href="#" className="dropdown-item"> <img src="img/flags/16/_british-antarctic-territory.png" alt="English" className="mr-2" /><span>English-British Teritory                                                      </span></a></li>
                    </ul>
                  </li>
                  {/* Log out*/}
                  <li className="nav-item"><a href="login.html" className="nav-link logout"> <span className="d-none d-sm-inline-block">Logout</span><i className="fa fa-sign-out" /></a></li>
                </ul>
              </div>
            </div>
          </nav>
        </header>
      </div>
    
    </div> 
    );
    }
    } export default Header;