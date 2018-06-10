import React, { Component } from 'react';

class Footer extends Component {
    render() 
    {
    return (
        <div>
           <footer className="main-footer">
                <div className="container-fluid">
                    <div className="row">
                    <div className="col-sm-6 text-center">
                        <p>RustymoTo © 2018 All Right Reserved</p>
                    </div>
                    <div className="col-sm-6 text-right">
                        <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
                        {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions and it helps me to run Bootstrapious. Thank you for understanding :)*/}
                    </div>
                    </div>
                </div>
            </footer>
        </div>
    );
    }
    } export default Footer;