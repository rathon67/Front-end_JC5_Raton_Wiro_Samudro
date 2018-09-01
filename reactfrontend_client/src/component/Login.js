import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import axios from 'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Login extends Component
{
    state = {
      statusRedirect: false
    }
    
    fungsiLogin = (event) =>{
      var email = event.email.value;
      var password= event.password.value;
      axios.post('http://localhost:8002/userlogin', {
        email:email,
        password:password
      })
      .then((response) =>{
        var userID =response.data;
        //console.log(response.data);
        cookies.set('userID', userID, {path: '/'});
        this.setState({
          statusRedirect: true
        });
      });

    }
    render()
{
    if (this.state.statusRedirect) return <Redirect to="/konten"/>

    return(
        (
            <div>
              <br />
              <br />
              {/* Login FOrm */}
              <br />
              <br />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-sm-4">
                  </div>
                  <div className="col-sm-4">
                    <form>
                      <div className="form-group">
                        <label htmlFor="exampleInputEmail1">Email address</label>
                        <input type="email" ref="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                        <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                      </div>
                      <div className="form-group">
                        <label htmlFor="exampleInputPassword1">Password</label>
                        <input type="password" ref='password' className="form-control" id="exampleInputPassword1" placeholder="Password" />
                      </div>
                      <div className="form-group form-check">
                        <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                        <label className="form-check-label" htmlFor="exampleCheck1" required>Check me out</label>
                      </div>
                      <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn-md btn-success"  role="button" aria-disabled="true">Masuk</button>&nbsp;
                      <i className="fas fa-arrow-right" ><Link to="/register" style={{textDecoration:'none',color:"black"}}>&nbsp;Daftar Disini!</Link></i>
                    </form>
                  </div>
                </div>
              </div>
              <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            <br/>
            </div>


        )
    );
}
}
export default Login;