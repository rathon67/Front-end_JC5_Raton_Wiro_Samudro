import React, { Component } from 'react';
import {Link, Route} from 'react-router-dom';

class Footer extends Component 
{
    render() 
    {
        return (              
                    <div>
                        <footer className="footer">
                            <div className="container-fluid">
                                <nav className="pull-left">
                                    <ul>
                                        <li>
                                        <Link to="http://instagram.com/kebisuanlaut"><i className="fa fa-instagram"></i>@kebisuanlaut</Link>
                                        </li>
                                        <li>
                                        <Link to="http://blog.creative-tim.com"><i className="fa fa-linkedin"></i>rathonsamudra</Link>
                                        </li>
                                        <li>
                                        <Link to="http://www.facebook.com/rathon"><i className="fa fa-facebook"></i>RathonWs</Link>
                                        </li>
                                    </ul>
                                </nav>
                                <div className="copyright pull-right"> rustymoTo © 2018 , Made with 
                                    <i className="fa fa-fire " /> by &nbsp; 
                                    <Link to="http://www.creative-tim.com">rathonsamudra</Link>
                                </div>
                            </div>
                        </footer>
                    </div>
                );
    }
}
export default Footer;