import React, {Component} from 'react';
import {Link,Redirect} from 'react-router-dom';
import axios from'axios';
import Cookies from 'universal-cookie';

const cookies = new Cookies()

class Register extends Component
{
  tambahData = (e) => {
    var input1=e.namadepan.value;
    var input2=e.namabel.value;
    var input3=e.email.value;
    var input4=e.address.value;
    var input5=e.state.value;
    var input6=e.pos.value;
    var input7=e.password.value;
    var input8=e.phone.value;
    var input9=e.ttl.value;

    axios.post(`http://localhost:8000/register`,{
      input1:input1,
      input2:input2,
      input3:input3,
      input4:input4,
      input5:input5,
      input6:input6,
      input7:input7,
      input8:input8,
      input9:input9,
      
    }).then((response) => {
      var status = response.data
      if (status === 1)
      {
          this.setState({
              redirect: true
          })
      }
  })
  }
    render()
{ 
  if (cookies.get('userID') !== undefined)
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
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer01">First name</label>
              <input type="text" className="form-control is-valid" ref='namadepan' id="validationServer01" placeholder="First name" defaultValue="Udin" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer02">Last name</label>
              <input type="text" className="form-control is-valid" ref='namabel' id="validationServer02" placeholder="Last name" defaultValue="Mantap" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServerUsername">Email</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">@</span>
                </div>
                <input type="text" ref='email' className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03">Address</label>
              <input type="text" ref='address' className="form-control is-invalid" id="validationServer03" placeholder="City" required />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer04">State</label>
              <input type="text" ref='state' className="form-control is-invalid" id="validationServer04" placeholder="State" required />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer05">Zip</label>
              <input type="number" ref='pos' className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer03">Password</label>
              <input type="password" ref='password' className="form-control is-invalid" id="validationServer06" placeholder="Password" required />
              <div className="invalid-feedback">
                Please Enter new Password.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer04">Nomer Telepon</label>
              <input type="text" ref='phone' className="form-control is-invalid" id="validationServer07" placeholder="Number" required />
              <div className="invalid-feedback">
                Please provide a valid Phone Number.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer05">Tanggal lahir</label>
              <input type="text" ref='ttl' className="form-control is-invalid" id="validationServer08" placeholder="Birthday" required />
              <div className="invalid-feedback">
                Please provide a valid birth day with yyyy-mm-dd
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
            <Link to="/" className=" btn btn-ligth"> Go and log in </Link>
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