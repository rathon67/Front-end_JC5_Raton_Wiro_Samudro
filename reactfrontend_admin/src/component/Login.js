import React, { Component } from 'react';
import {Link, Route, Redirect} from 'react-router-dom';
import axios from 'axios';

function mapStateToProps(state){
          return {
          hasilkirim: state.hasil_login
          };
}
class Login extends Component {
        state = {
            statusRedirect: false,
            statusLogin: '',
            hasil_kepastian:''
        }
        
        fungsiLogin = (e) => {
          var self = this
          axios.post(`http://localhost:8000/login`, {
              username: e.email.value,
              password: e.password.value
          }).then((kepastian) =>{
              //bikin jadi varibale yang hasil kepastian
              var hasil_kepastian= kepastian.data
              self.props.dispatch({type:'Login', kirim: hasil_kepastian })
              self.setState({
                          statusRedirect: true
                      });
              // if(kepastian.data === 'oke'){
              //     self.setState({
              //         statusRedirect: true
              //     });
              // } else {
              //     self.setState({
              //         statusLogin: 'Login gagal, username atau password salah'
              //     })
              // }
              //sekarang berganti ke sini        
        
          });   
          
          
          {/*{
              if(kepastian.data === 'oke'){
                  this.setState({
                      statusRedirect: true
                  });
              } else {
                  this.setState({
                      statusLogin: 'Login gagal, username atau password salah'
                  })
              }
          })*/}
        }
        fungsiRedirect = () => {
          if(this.state.statusRedirect){
              return <Redirect to="/"/>
            }  
        }
    render() 
    {
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
                                <button type="button" type="submit" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-danger btn-block">Login</button>
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