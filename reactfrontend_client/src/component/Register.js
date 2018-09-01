import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Register extends Component
{
  state={
    styleForm:''
  }
  tambahData = (e) => {
    var username=e.namadepan.value; 
    var password=e.password.value;
    var email=e.email.value;

    var pass1=e.password.value;
    var pass2=e.confirmPass.value;

    if(pass1 != pass2){
      this.setState({
      styleForm:'is-invalid'
      })
      alert('Please Insert Same Password')
    }else{
      this.setState({
        styleForm:'is-valid'
      })
      axios.post(`http://localhost:8000/register`,{
        username:username,
        password:password,
        email:email,
              })
      .then((response) => {
        var status = response.data
        if (status == 1)
        {
            this.setState({
                redirect: true
          })
      }
  })
    }
    

    
  }
    render()
{ 
  if (this.state.redirect === true)
     {
         return <Redirect to='/login'/>
     }

    return(
        (
            <div>
  <br />
  <br />
  <br />
  <br />
  {/* FORM REGISTER */}
  <div className="container-fluid">
    <div className="row">
      <div className="col-sm-3">
      </div>
      <div className="col-sm-6">
        <form>
          <div className="form-group">
            <div className="col-md-12">
              <label htmlFor="validationServer01">Username</label>
              <input type="text" className="form-control is-valid" ref='namadepan' id="validationServer01" placeholder="First name" defaultValue="Udin" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-12">
              <label htmlFor="validationServerUsername">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">@</span>
                </div>
                <input type="text" ref='email' className="form-control is-valid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          
          <div className="form-group">
            <div className="col-md-12">
              <label htmlFor="validationServer03">Password</label>
              <input type="password" ref='password' className="form-control is-valid" id="validationServer06" placeholder="Password" required />
              <div className="invalid-feedback">
                Please Enter new Password.
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="col-md-12">
              <label htmlFor="validationServer03">Password Confirmation</label>
              <input type="password" ref='confirmPass' className="form-control `${this.state.styleForm}`" id="validationServer06" placeholder="Confirm Password" required />
              <div className="invalid-feedback">
                Please Enter new Password.
              </div>
            </div>
          </div>
          <div className="form-group">
            <div className="form-check">
              <input className="form-check-input is-invalid" type="checkbox" defaultValue id="invalidCheck3" required />
              <label className="form-check-label" htmlFor="invalidCheck3">
                Agree to terms and conditions
              </label>
              <div className="invalid-feedback">
                You must agree before submitting.
              </div>
            </div>
          </div>
          <button className="btn btn-outline-success" onClick={() =>this.tambahData(this.refs)} type="submit">Submit form</button>
          <p className="change_link">  
            Already a member ?
            <Link to="/login" className=" btn btn-ligth"> Go and log in </Link>
          </p>
        </form>
      </div>
    </div>
  </div>
  <br /><br />
</div>

        )
    );
}
}
export default Register;