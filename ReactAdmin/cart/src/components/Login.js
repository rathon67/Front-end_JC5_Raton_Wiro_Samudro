import React, { Component } from 'react'
import axios from 'axios'
import {Redirect} from 'react-router-dom'
import {connect} from 'react-redux'

function mapStateToProps(state){
    return {
        login:state.hasil_login
    };
}

class Login extends Component {
    state ={
        statusRedirect: false,
        statusLogin: <br/>
    }
    fungsiLogin = (e) => {
        var self= this
        axios.post('http://localhost:8000/',{
            username:e.username.value,
            password:e.password.value
        }).then((kepastian) => {
            // var hasilkepastian = kepastian.data
            self.setState({hasil_kepastian:kepastian.data})
            if(kepastian.data ==='OKE'){
                self.setState({
                    statusRedirect: true
                });
            }else {
                self.setState({
                    statusLogin: 'Login gagal, Username atau Password salah'
                })
            }
            
        });
        {/*Fungsingnya adalah untuk mengirim tipe kasus di redux*/}
        self.props.dispatch({type:'Login', kirim:this.state.hasil_kepastian.data})
    }
    /* untuk logic redirect*/
    fungsiRedirect = () => {
        if(this.state.statusRedirect){
            return <Redirect to="/listproduct"/>
        }
    }
  render() {
    return (
        <div className="container">
        {this.fungsiRedirect()}
                <form className="form-horizontal" >
                    <fieldset>
                        <legend>Login</legend>
                        
                        <div className="form-group">
                            <label className="col-lg-2 control-label">Username:</label>
                            <div className="col-lg-10">
                                <input ref="username" type="text" className="form-control" placeholder="Nama produk ..." />
                            </div>
                        </div>

                        <div className="form-group">
                            <label className="col-lg-2 control-label">Password</label>
                            <div className="col-lg-10">
                                <input ref="password" type="password" className="form-control"  placeholder="Harga produk ..." />
                            </div>
                            {this.state.statusLogin}
                        </div>
                        
                        <div className="form-group">
                            <div className="col-lg-10 col-lg-offset-2">
                                <button type="button" onClick={() => this.fungsiLogin(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button>
                                {/* <button type="button" onClick={() => this.updateData(this.refs)} className="btn btn-primary"><i className="fa fa-paper-plane"></i> Submit</button> */}
                            </div>
                        </div>
                        <p.{this.props.login}

                    </fieldset>
                </form>
            </div>
    )
  }
}
export default connect(mapStateToProps)(Login);