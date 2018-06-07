import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Login extends Component
{
    render()
{
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
            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password" />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="exampleCheck1" />
            <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
          </div>
          <Link to="/profile" className="btn-lg btn-outline-success" tabIndex={-1} role="button" aria-disabled="true">Masuk</Link>
          <Link to="/register" className="btn-lg btn-primary" tabIndex={-1} role="button" aria-disabled="true">Daftar Disini!</Link>
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