import React, { Component } from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies();



class Login extends Component {
        state = {
            statusRedirect: false
           
        }
        
        fungsiLogin = (e) => {         
          var email = e.email.value;
          var password = e.password.value;
          axios.post('http://localhost:8000/adminlogin', {
            email: email,
            password: password
        }).then((response)=> {
              var adminID = response.data;
              // console.log(response.data);
              cookies.set('adminID', adminID, {path: '/'});
              this.setState({
                  statusRedirect: true
              });
            });   
        
        }
     
    render() 
    {
      if (this.state.statusRedirect) return <Redirect to="/dashboard"/>

        return (
                <div>
                  <br/><br/><br/><br/>
                  <br/><br/><br/><br/>
                  <div className="container">
                    <div className="row">
                      <div className="col-md-4 col-md-offset-4">
                        <div className="panel panel-default">
                          <center>
                            <div className="panel-heading">
                              <h3 className="panel-title">Login as Admin User</h3>
                            </div>
                          </center>
                          <div className="panel-body">
                            <form role="form">
                              <fieldset>
                                <div className="form-group">
                                  <input className="form-control" placeholder="Enter Your Email" ref="email" type="email"  />
                                </div>
                                <div className="form-group">
                                  <input className="form-control" placeholder="Enter Your Password" ref="password" type="password"  />
                                </div>
                                <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-success btn-block">Login</button>
                                <p>New Member? <Link to="./Register" className="">Sign up</Link></p>
                              </fieldset>
                            </form>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                );
    }
}
export default Login;