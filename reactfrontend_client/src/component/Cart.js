import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Cart extends Component
{
    state ={
        dataIDCart:'',        
        namaMotor:'',
        harga:'',
        
        

    }
    componentDidMount(){
        var idUser= cookies.get('userID')
        axios.post('http://localhost:8002/getCartID/', {
            idUser:idUser
        })
        .then(
            (hasilAmbil)=>{
                console.log(hasilAmbil);
                this.setState({
                    dataIDCart:hasilAmbil.data[0].id_cart,
                    dataIDUser:hasilAmbil.data[0].id_user,                   
                    idproduct :hasilAmbil.data[0].id_product,                   
                    namaMotor :hasilAmbil.data[0].nama_item,
                    harga:hasilAmbil.data[0].harga_item,                   
                                                      
                })
            }
        )
    }

      

    render()
{
    //Cookies login
    if (cookies.get('userID') === undefined)
    {
        return <Redirect to='/'/>
    }
    //akhir cookies login
    
    // const CartID= this.state.location.map((data)=>{
    //     var id =data.id_cart;
    //     var idUser=data.id_user;
    //     var idProduct=data.id_product;
    //     var namaMotor=data.nama_item;
    //     var tglCart=data.cart_time;
    // })
  
    return(
        (
        <div>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className="container">
                <h1>Shopping Cart</h1><hr/>
                <table className="table table-striped table-hover table-bordered">
                    <tbody>
                    <tr>
                        <th>Number</th>
                        <th>Unit Name</th>
                        <th>Unit Price</th>
                        <th>Total Price</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>{this.state.namaMotor}<a href="">X</a></td>
                        <td>Rp. {this.state.harga}</td>
                        <td>Rp. {this.state.harga}</td>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Sub Total</span></th>
                        <th>Rp. {this.state.harga}</th>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Tax 10% </span></th>
                        <th>Rp. {this.state.harga}</th>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Total</span></th>
                        <th>Rp. {this.state.hargaPotong }</th>
                    </tr>
                    <tr>
                        <td>
                            <button onClick={() =>this.simpanData()} className="btn btn-danger">Tambah Motor</button>&nbsp;
                            <a href="" className="btn btn-primary">Jadwalkan Test ride</a>
                        </td>
                        <td colSpan={3}><Link to="/checkout" className="pull-right btn btn-success">Checkout</Link></td>
                    </tr>
                    </tbody>
                </table>
                </div>
                
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
export default Cart;