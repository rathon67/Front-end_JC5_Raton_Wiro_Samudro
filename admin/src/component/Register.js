import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component
{
    render()
{
    return(
        (
          <div className="page login-page">
          <div className="container">
            <div className="form-outer text-center d-flex align-items-center">
              <div className="form-inner">
                <div className="logo text-uppercase"><span>moTo</span><strong className="text-primary">Admin</strong></div>
                <p>Register form Admin!
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero impedit molestias, inventore cumque reprehenderit eius, repellendus quo hic facilis laborum eaque vel quisquam ad, ipsum pariatur ex magnam neque obcaecati.
                </p>
                <form className="text-left form-validate">
                  <div className="form-group-material">
                    <input id="register-username" type="text" name="registerUsername" required data-msg="Please enter your username" className="input-material" />
                    <label htmlFor="register-username" className="label-material">Username</label>
                  </div>
                  <div className="form-group-material">
                    <input id="register-email" type="email" name="registerEmail" required data-msg="Please enter a valid email address" className="input-material" />
                    <label htmlFor="register-email" className="label-material">Email Address    </label>
                  </div>
                  <div className="form-group-material">
                    <input id="register-password" type="password" name="registerPassword" required data-msg="Please enter your password" className="input-material" />
                    <label htmlFor="register-password" className="label-material">Password      </label>
                  </div>
                  <div className="form-group terms-conditions text-center">
                    <input id="register-agree" name="registerAgree" type="checkbox" required defaultValue={1} data-msg="Your agreement is required" className="form-control-custom" />
                    <label htmlFor="register-agree">I agree with the terms and policy</label>
                  </div>
                  <div className="form-group text-center">
                    <input id="register" type="submit" defaultValue="Register" className="btn btn-primary" />
                  </div>
                </form><small>Already have an account? </small><a href="login.html" className="signup">Login</a>
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
export default Register;