import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import Cookies from 'universal-cookie';
import axios from 'axios';

const cookies = new Cookies();

class Cart extends Component
{
    state ={
        dataIDCart:'',        
        namaproduk:'',
        hargaproduk:'',

    }
    componentDidMount(){
        var id =this.props.location.state.dataID;
        axios.get('http://localhost:8002/getCartID/'+id)
        .then(
            (hasilAmbil)=>{
                console.log(hasilAmbil);
                this.setState({
                    dataIDCart:hasilAmbil.data[0].id_motor,
                    // jenis :hasilAmbil.data[0].id_jenis,
                    // gambarproduk :hasilAmbil.data[0].gambar,
                    namaproduk :hasilAmbil.data[0].nama_motor,
                    // descproduk:hasilAmbil.data[0].desc_product,
                    hargaproduk :hasilAmbil.data[0].harga,
                    // namapembuat :hasilAmbil.data[0].pembuat,
                    // status :hasilAmbil.data[0].status,
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
                        <td>Vespa 1962 <a href="">X</a></td>
                        <td>Rp. 11.500.000</td>
                        <td>Rp. 11.500.000</td>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Sub Total</span></th>
                        <th>Rp. 11.500.000</th>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Pajak 20%</span></th>
                        <th>Rp. 500.000</th>
                    </tr>
                    <tr>
                        <th colSpan={3}><span className="pull-right">Total</span></th>
                        <th>Rp. 12.000.000</th>
                    </tr>
                    <tr>
                        <td>
                            <a href="" className="btn btn-primary">Lanjut Bayar</a>&nbsp;
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