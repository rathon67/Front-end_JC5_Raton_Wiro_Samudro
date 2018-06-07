import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Register extends Component
{
    render()
{
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
              <input type="text" className="form-control is-valid" id="validationServer01" placeholder="First name" defaultValue="Udin" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer02">Last name</label>
              <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Last name" defaultValue="Mantap" required />
              <div className="valid-feedback">
                Looks good!
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServerUsername">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text" id="inputGroupPrepend3">@</span>
                </div>
                <input type="text" className="form-control is-invalid" id="validationServerUsername" placeholder="Username" aria-describedby="inputGroupPrepend3" required />
                <div className="invalid-feedback">
                  Please choose a username.
                </div>
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-6 mb-3">
              <label htmlFor="validationServer03">Address</label>
              <input type="text" className="form-control is-invalid" id="validationServer03" placeholder="City" required />
              <div className="invalid-feedback">
                Please provide a valid address.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer04">State</label>
              <input type="text" className="form-control is-invalid" id="validationServer04" placeholder="State" required />
              <div className="invalid-feedback">
                Please provide a valid state.
              </div>
            </div>
            <div className="col-md-3 mb-3">
              <label htmlFor="validationServer05">Zip</label>
              <input type="number" className="form-control is-invalid" id="validationServer05" placeholder="Zip" required />
              <div className="invalid-feedback">
                Please provide a valid zip.
              </div>
            </div>
          </div>
          <div className="form-row">
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer03">Password</label>
              <input type="password" className="form-control is-invalid" id="validationServer06" placeholder="Password" required />
              <div className="invalid-feedback">
                Please Enter new Password.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer04">Nomer Telepon</label>
              <input type="number" className="form-control is-invalid" id="validationServer07" placeholder="Number" required />
              <div className="invalid-feedback">
                Please provide a valid Phone Number.
              </div>
            </div>
            <div className="col-md-4 mb-3">
              <label htmlFor="validationServer05">Tanggal lahir</label>
              <input type="date" className="form-control is-invalid" id="validationServer08" placeholder="Birthday" required />
              <div className="invalid-feedback">
                Please provide a valid birth day with dd/mm/yyyy
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
          <button className="btn btn-outline-success" type="submit">Submit form</button>
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