import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component
{
    render()
{
    return(
        (
          <div className="page login-page">
          <div className="container">
            <div className="form-outer text-center d-flex align-items-center">
              <div className="form-inner">
                <div className="logo text-uppercase"><span>RustymoTo</span><strong className="text-primary">Admin</strong></div>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quae molestiae consequature.</p>
                <form method="get" className="text-left form-validate">
                  <div className="form-group-material">
                    <input id="login-username" type="text" name="loginUsername" required data-msg="Please enter your username" className="input-material" />
                    <label htmlFor="login-username" className="label-material">Username</label>
                  </div>
                  <div className="form-group-material">
                    <input id="login-password" type="password" name="loginPassword" required data-msg="Please enter your password" className="input-material" />
                    <label htmlFor="login-password" className="label-material">Password</label>
                  </div>
                  <div className="form-group text-center"><Link to="/index" id="login"  className="btn btn-primary">Login</Link>
                    {/* This should be submit button but I replaced it with <a> for demo purposes*/}
                  </div>
                </form><Link to="" className="forgot-pass">Forgot Password?</Link><small>Do not have an account? </small><Link to="/register" className="signup">Signup</Link>
              </div>
              <div className="copyrights text-center">
                <p>Design by <a href="https://bootstrapious.com" className="external">Bootstrapious</a></p>
                {/* Please do not remove the backlink to us unless you support further theme's development at https://bootstrapious.com/donate. It is part of the license conditions. Thank you for understanding :)*/}
              </div>
            </div>
          </div>
        </div>
        

        )
    );
}
}
export default Login;